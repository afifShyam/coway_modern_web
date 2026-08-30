'use client';

import { useEffect, useRef, type RefObject } from 'react';

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

// Module-level stack of open dialogs (in open order). Lets nested/stacked
// dialogs (e.g. ImageLightboxModal opened on top of ProductDetailModal)
// share one body-scroll-lock without corrupting each other's saved styles,
// and lets only the topmost dialog react to Escape / trap Tab focus.
const dialogStack: symbol[] = [];
let savedRootOverflow = '';
let savedBodyCssText = '';
let savedScrollY = 0;

function getFocusableElements(container: HTMLElement): HTMLElement[] {
  return Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
    (el) => el.offsetParent !== null
  );
}

export function useDialog(isOpen: boolean, onClose: () => void): RefObject<HTMLDivElement> {
  const containerRef = useRef<HTMLDivElement>(null!);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    if (!isOpen) return;

    const token = Symbol('dialog');
    const previouslyFocused = document.activeElement as HTMLElement | null;

    if (dialogStack.length === 0) {
      // `overflow: hidden` alone does not stop wheel/touch scroll chaining out of
      // the fixed overlay, so pin the body instead and restore the offset on close.
      savedScrollY = window.scrollY;
      savedRootOverflow = document.documentElement.style.overflow;
      savedBodyCssText = document.body.style.cssText;
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `${-savedScrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    dialogStack.push(token);

    containerRef.current.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (dialogStack[dialogStack.length - 1] !== token) return;

      if (e.key === 'Escape') {
        onCloseRef.current();
        return;
      }

      if (e.key === 'Tab') {
        const container = containerRef.current;
        if (!container) return;
        const focusable = getFocusableElements(container);
        if (focusable.length === 0) {
          e.preventDefault();
          return;
        }
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const active = document.activeElement;
        if (e.shiftKey) {
          if (active === first || !container.contains(active)) {
            e.preventDefault();
            last.focus();
          }
        } else if (active === last || !container.contains(active)) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown, true);

    return () => {
      document.removeEventListener('keydown', handleKeyDown, true);

      const idx = dialogStack.indexOf(token);
      if (idx !== -1) dialogStack.splice(idx, 1);

      if (dialogStack.length === 0) {
        document.documentElement.style.overflow = savedRootOverflow;
        document.body.style.cssText = savedBodyCssText;
        // `html` carries `scroll-smooth`, so an animated restore would be visible.
        window.scrollTo({ top: savedScrollY, behavior: 'instant' as ScrollBehavior });
      }

      if (previouslyFocused && document.contains(previouslyFocused)) {
        previouslyFocused.focus();
      }
    };
  }, [isOpen]);

  return containerRef;
}

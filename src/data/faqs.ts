export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export const FAQS: FAQItem[] = [
  {
    question: 'Berapakah kos bayaran pendahuluan (deposit) semasa mendaftar?',
    answer: 'RM0. Pendaftaran adalah 100% percuma tanpa sebarang bayaran pendahuluan atau yuran pemprosesan tersembunyi. Pemasangan dan penghantaran ke rumah anda di seluruh Malaysia juga adalah percuma.'
  },
  {
    question: 'Bagaimanakah promosi RM20 sebulan ini berfungsi sebenarnya?',
    answer: 'Promosi RM20 adalah kadar sewaan khas diskaun untuk beberapa bulan terawal mengikut tempoh kontrak yang anda pilih (contohnya, untuk pakej kontrak 7 tahun, bayaran bulan 1 hingga 7 hanyalah RM20/bulan). Selepas tamat bulan ke-7, bayaran bulanan akan kembali kepada kadar normal biasa (contohnya RM74/bulan untuk Villaem III).'
  },
  {
    question: 'Apakah dokumen yang diperlukan untuk pendaftaran Sewa Beli Coway?',
    answer: 'Proses permohonan sangat mudah tanpa perlu slip gaji atau penyata bank yang rumit. Anda hanya perlukan salinan kad pengenalan (IC) depan & belakang, serta nombor akaun bank / kad debit untuk kemudahan potongan bulanan automatik.'
  },
  {
    question: 'Berapa kerapkah servis Cody dan penukaran penapis akan dijalankan?',
    answer: 'Juruteknik Coway (Cody) akan hadir ke kediaman anda setiap 2 hingga 4 bulan sekali untuk melakukan servis sanitasi wap panas, pemeriksaan fungsi, dan penukaran penapis air / udara berjadual secara percuma sepanjang tempoh kontrak sewaan anda.'
  },
  {
    question: 'Bolehkah saya pindahkan penapis Coway jika berpindah rumah?',
    answer: 'Boleh! Coway menyediakan perkhidmatan relokasi (pemindahan alamat) ke lokasi kediaman baru anda di seluruh Malaysia secara percuma sekali setahun (tertakluk kepada syarat kontrak semasa).'
  },
  {
    question: 'Adakah produk Coway mempunyai sijil Halal JAKIM rasmi?',
    answer: 'Ya, 100%. Coway merupakan perintis sistem penapisan air pertama di Malaysia yang mendapat pengiktirafan sijil Halal rasmi daripada JAKIM, di samping piawaian kualiti antarabangsa Water Quality Association (WQA) dan SIRIM QAS International.'
  }
];

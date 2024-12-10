document.addEventListener("DOMContentLoaded", function () {
    const words = ["Freelancer", "Designer", "Web Developer", "Problem Solver"]; // Kata yang akan ditampilkan
    const typingSpeed = 100; // Kecepatan mengetik setiap huruf
    const deletingSpeed = 50; // Kecepatan menghapus setiap huruf
    const delayBetweenWords = 2000; // Delay antar pergantian kata
    let indexWord = 0; // Indeks kata saat ini
    let indexChar = 0; // Indeks karakter dalam kata
    let isDeleting = false; // Status untuk memeriksa apakah sedang menghapus atau mengetik
    const element = document.getElementById("typewriter");

    function typeEffect() {
        const currentWord = words[indexWord];

        if (isDeleting) {
            // Menghapus karakter
            element.innerText = currentWord.substring(0, indexChar - 1);
            indexChar -= 1;
        } else {
            // Menulis karakter
            element.innerText = currentWord.substring(0, indexChar + 1);
            indexChar += 1;
        }

        // Jika semua huruf selesai diketik, tunggu sebelum mulai menghapus
        if (!isDeleting && indexChar === currentWord.length) {
            setTimeout(() => {
                isDeleting = true; // Mulai menghapus
                typeEffect();
            }, delayBetweenWords);
        } else if (isDeleting && indexChar === 0) {
            // Jika selesai menghapus, pindah ke kata berikutnya
            isDeleting = false; // Berhenti menghapus
            indexWord = (indexWord + 1) % words.length; // Pergi ke kata berikutnya
            setTimeout(() => typeEffect(), typingSpeed);
        } else {
            // Tetap lanjutkan proses dengan kecepatan yang sesuai
            setTimeout(() => typeEffect(), isDeleting ? deletingSpeed : typingSpeed);
        }
    }

    // Jalankan fungsi ketik
    typeEffect();
});

const hamburgerIcon = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

// Toggle menu (open/close)
function toggleMobileMenu() {
    if (mobileMenu.classList.contains("-translate-x-full")) {
        mobileMenu.classList.remove("-translate-x-full");
        mobileMenu.classList.add("translate-x-0");
    } else {
        mobileMenu.classList.remove("translate-x-0");
        mobileMenu.classList.add("-translate-x-full");
    }
}

// Aktifkan hamburger menu saat diklik
hamburgerIcon.addEventListener("click", toggleMobileMenu);

// Aktifkan tombol close (X) untuk menutup menu
closeMenu.addEventListener("click", toggleMobileMenu);
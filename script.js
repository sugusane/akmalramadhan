document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    const introOverlay = document.getElementById('intro-overlay');
    const homeContent = document.getElementById('home-content');
    const navButton = document.querySelector('.nav-button');
    const navMenu = document.querySelector('.nav-menu');
    const closeMenuButton = document.getElementById('closeMenu');
    const body = document.body;

    // Fungsi untuk mendapatkan nilai parameter dari URL
    function getQueryParam(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    // Periksa apakah parameter skipIntro ada di URL
    const skipIntro = getQueryParam('skipIntro');

    // Intro animation logic (dimodifikasi untuk memeriksa skipIntro)
    if (!skipIntro) {
        body.classList.add('overflow-hidden');
        homeContent.style.display = 'none';
        setTimeout(() => {
            introOverlay.classList.add('fade-out');
            homeContent.style.display = 'block';
            body.classList.remove('overflow-hidden');
        }, 3000);
    } else {
        introOverlay.style.display = 'none'; // Sembunyikan intro overlay jika skipIntro ada
        homeContent.style.display = 'block'; // Tampilkan konten utama
        body.classList.remove('overflow-hidden'); // Pastikan overflow tidak tersembunyi
    }

    // Typing Effect
    const roles = ["Web Developer", "Fullstack Developer", "Cyber Security", "Streamer"];
    let roleIndex = 0;
    let charIndex = 0;
    const roleElement = document.getElementById('roleText');
    let isTypingActive = true; // Tambahkan flag untuk mengontrol typing

    function typeRole() {
        if (!isTypingActive) return; // Hentikan jika flag false
        if (charIndex < roles[roleIndex].length) {
            roleElement.textContent += roles[roleIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeRole, 100);
        } else {
            setTimeout(eraseRole, 2000);
        }
    }

    function eraseRole() {
        if (!isTypingActive) return; // Hentikan jika flag false
        if (charIndex > 0) {
            roleElement.textContent = roleElement.textContent.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseRole, 50);
        } else {
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(typeRole, 500);
        }
    }

    // Panggil typeRole hanya sekali saat halaman dimuat
    typeRole();


    // Navigation functionality
    navItems.forEach(item => {
        item.addEventListener('click', function(event) {
            const section = this.getAttribute('data-section');
            if (section === 'home') {
                event.preventDefault();
                window.location.href = 'index.html?skipIntro=true';
            } else {
                console.log(`Navigating to section: ${section}`);
            }
            navMenu.classList.remove('active');
            navButton.classList.remove('active');
        });
    });

    // Toggle untuk navigasi mobile
    if (navButton) {
        navButton.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navButton.classList.toggle('active');
        });
    }

    // Tombol close untuk navigasi mobile
    if (closeMenuButton) {
        closeMenuButton.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navButton.classList.remove('active');
        });
    }
    // Initialize strips
    document.querySelectorAll('.strip-content').forEach(strip => {
        let originalContent = strip.innerHTML;
        let repeatedContent = originalContent;
        const numberOfRepetitions = 50; // Anda bisa mengubah angka ini sesuai keinginan

        for (let i = 1; i < numberOfRepetitions; i++) {
            repeatedContent += originalContent;
        }
        strip.innerHTML = repeatedContent;
    });

    // Contact Me button functionality
    const contactMeButton = document.querySelector('.hero .buttons .btn:last-child');

    if (contactMeButton) {
        contactMeButton.addEventListener('click', (event) => {
            event.preventDefault();
            body.classList.add('page-transition-out'); // Tambahkan kelas untuk animasi keluar
            setTimeout(() => {
                window.location.href = 'contact.html';
            }, 500); // Sesuaikan waktu timeout dengan durasi transisi CSS
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const downloadCvButton = document.querySelector('.hero .buttons .btn:first-child'); // Selector untuk tombol Download CV
    const cvPopup = document.getElementById('cvPopup');
    const closeCvPopupButton = document.getElementById('closeCvPopup');

    if (downloadCvButton) {
        downloadCvButton.addEventListener('click', (event) => {
            event.preventDefault(); // Mencegah perilaku default link (jika ada)
            cvPopup.classList.add('show');
        });
    }

    if (closeCvPopupButton) {
        closeCvPopupButton.addEventListener('click', () => {
            cvPopup.classList.remove('show');
        });
    }
});

// Update script.js
if (!skipIntro) {
    body.classList.add('overflow-hidden');
    homeContent.style.display = 'none';
    
    // Animasi intro
    setTimeout(() => {
        introOverlay.classList.add('fade-out');
        
        // Hapus intro setelah animasi
        setTimeout(() => {
            introOverlay.remove();
            homeContent.style.display = 'block';
            body.classList.remove('overflow-hidden');
        }, 1200);
        
    }, 3000); // Total durasi intro: 4.2 detik
}
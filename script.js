// Navigation
const navButton = document.getElementById('navButton');
const navMenu = document.getElementById('navMenu');
let timeoutId;
let isNavActive = false;

function handleNavButton() {
    navButton.classList.toggle('active');
    navMenu.classList.toggle('active');
    isNavActive = !isNavActive;
    clearTimeout(timeoutId);
    navButton.classList.remove('sticking'); // Hapus class sticking saat tombol diklik

    if (!isNavActive) {
        // Set timeout untuk menambahkan class sticking setelah 10 detik jika menu tertutup
        timeoutId = setTimeout(() => {
            navButton.classList.add('sticking');
        }, 10000);
    }
}

navButton.addEventListener('click', handleNavButton);

document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
        navButton.classList.remove('active');
        navMenu.classList.remove('active');
        isNavActive = false;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            navButton.classList.add('sticking');
        }, 10000);
    });
});

// Typing Effect
const roles = ["Web Developer", "Fullstack Developer", "Cyber Security", "Streamer"];
let roleIndex = 0;
let charIndex = 0;
const roleElement = document.getElementById('roleText');

function typeRole() {
    if (charIndex < roles[roleIndex].length) {
        roleElement.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeRole, 100);
    } else {
        setTimeout(eraseRole, 2000);
    }
}

function eraseRole() {
    if (charIndex > 0) {
        roleElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseRole, 50);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeRole, 500);
    }
}
typeRole();

// Initialize strips
document.querySelectorAll('.strip-content').forEach(strip => {
    strip.innerHTML = strip.innerHTML + strip.innerHTML + strip.innerHTML;
});

// Initialize stars
function createStars() {
    const starsContainer = document.getElementById('stars');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.width = `${Math.random() * 3}px`;
        star.style.height = star.style.width;
        star.style.setProperty('--duration', `${Math.random() * 3 + 1}s`);
        starsContainer.appendChild(star);
    }
}
createStars();

// Set initial timeout untuk menambahkan class sticking setelah 10 detik saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    timeoutId = setTimeout(() => {
        navButton.classList.add('sticking');
    }, 10000);
});
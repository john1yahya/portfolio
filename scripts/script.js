// ── Theme toggle ───────────────────────────────────────────────
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

// Load saved theme or use system preference
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = savedTheme ?? (prefersDark ? 'dark' : 'light');
root.setAttribute('data-theme', initialTheme);

themeToggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);zzzz
    localStorage.setItem('theme', next);
});

// ── Mobile navigation ──────────────────────────────────────────
const menuBtn = document.querySelector('.menu');
const mobileNav = document.querySelector('.mobile-nav');
const overlay = document.getElementById('nav-overlay');
const menuX = document.getElementById('menu-x');

function openNav() {
    mobileNav.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeNav() {
    mobileNav.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

menuBtn.addEventListener('click', openNav);
menuX.addEventListener('click', closeNav);
overlay.addEventListener('click', closeNav);

document.querySelectorAll('.menu-element').forEach(el => {
    el.addEventListener('click', closeNav);
});

// ── Scroll-reveal animation ────────────────────────────────────
const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                // Stagger cards in the same parent
                const siblings = entry.target.parentElement.querySelectorAll('.reveal');
                let delay = 0;
                siblings.forEach((sib, idx) => {
                    if (sib === entry.target) delay = idx * 80;
                });
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
});

// ── Sticky nav background on scroll ───────────────────────────
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        nav.style.background = 'rgba(6, 13, 23, 0.95)';
    } else {
        nav.style.background = 'rgba(6, 13, 23, 0.75)';
    }
});

/**
 * ContinuousReader — Promotional Site
 * Navigation, scroll animations, language switching, mobile menu.
 * No dependencies. Expects i18n.js globals: translations, t(), setLanguage(), getCurrentLanguage(), applyLanguage().
 */

(function () {
    'use strict';

    // --- Navigation scroll behavior ---

    const nav = document.querySelector('nav');
    const SCROLL_THRESHOLD = 50;

    const updateNavScroll = () => {
        if (!nav) return;
        nav.classList.toggle('scrolled', window.scrollY > SCROLL_THRESHOLD);
    };

    // --- Scroll reveal animations (IntersectionObserver) ---

    const initScrollReveal = () => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const revealElements = document.querySelectorAll('.reveal');
        if (!revealElements.length) return;

        if (prefersReducedMotion) {
            revealElements.forEach(el => el.classList.add('revealed'));
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        revealElements.forEach(el => observer.observe(el));
    };

    // --- Language switching ---

    const initLanguagePicker = () => {
        const picker = document.querySelector('.language-picker select');
        if (!picker) return;

        const savedLang = typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : 'en';
        picker.value = savedLang;

        picker.addEventListener('change', (e) => {
            const lang = e.target.value;
            if (typeof setLanguage === 'function') setLanguage(lang);
            document.documentElement.lang = lang;
            translatePage(lang);
        });
    };

    const translatePage = (lang) => {
        if (typeof translations === 'undefined') return;

        const dict = translations[lang] ?? translations['en'] ?? {};

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key] != null) {
                el.textContent = dict[key];
            }
        });
    };

    // --- Mobile menu toggle ---

    const initMobileMenu = () => {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        if (!hamburger || !navLinks) return;

        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('open');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => navLinks.classList.remove('open'));
        });

        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
                navLinks.classList.remove('open');
            }
        });
    };

    // --- Active nav link highlighting ---

    const setActiveNavLink = () => {
        const currentPage = location.pathname.split('/').pop() || 'index.html';

        document.querySelectorAll('.nav-links a').forEach(link => {
            const href = link.getAttribute('href');
            if (!href) return;
            const linkPage = href.split('/').pop();
            link.classList.toggle('active', linkPage === currentPage);
        });
    };

    // --- Smooth scroll for anchor links ---

    const initSmoothScroll = () => {
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href^="#"]');
            if (!link) return;

            const targetId = link.getAttribute('href').slice(1);
            const target = document.getElementById(targetId);
            if (!target) return;

            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        });
    };

    // --- Page initialization ---

    document.addEventListener('DOMContentLoaded', () => {
        // Apply detected/saved language
        const lang = typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : 'en';
        document.documentElement.lang = lang;
        translatePage(lang);

        // Init all modules
        updateNavScroll();
        initScrollReveal();
        initLanguagePicker();
        initMobileMenu();
        setActiveNavLink();
        initSmoothScroll();
    });

    // Scroll listener (passive for performance)
    window.addEventListener('scroll', updateNavScroll, { passive: true });
})();

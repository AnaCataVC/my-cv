import { cvData } from './data.js';

function initTheme() {
  const themeToggleDesktop = document.getElementById('theme-toggle-desktop');
  const lightIconDesktop = document.getElementById('theme-toggle-light-icon-desktop');
  const darkIconDesktop = document.getElementById('theme-toggle-dark-icon-desktop');

  const themeToggleMobile = document.getElementById('theme-toggle-mobile');
  const lightIconMobile = document.getElementById('theme-toggle-light-icon-mobile');
  const darkIconMobile = document.getElementById('theme-toggle-dark-icon-mobile');

  // Aplicar modo forzado o toggle según config
  const mode = cvData.config.themeMode;
  
  if (mode === 'light') {
    document.documentElement.classList.remove('dark');
    if (themeToggleDesktop) themeToggleDesktop.style.display = 'none';
    if (themeToggleMobile) themeToggleMobile.style.display = 'none';
  } else if (mode === 'dark') {
    document.documentElement.classList.add('dark');
    if (themeToggleDesktop) themeToggleDesktop.style.display = 'none';
    if (themeToggleMobile) themeToggleMobile.style.display = 'none';
  } else {
    // "toggle" mode
    if (themeToggleDesktop) themeToggleDesktop.style.display = 'block';
    if (themeToggleMobile) themeToggleMobile.style.display = 'block';
    
    // Validar localstorage o preferencia
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    function updateThemeIcons() {
      const isDark = document.documentElement.classList.contains('dark');
      if (isDark) {
        if (lightIconDesktop) lightIconDesktop.classList.remove('hidden');
        if (darkIconDesktop) darkIconDesktop.classList.add('hidden');
        if (lightIconMobile) lightIconMobile.classList.remove('hidden');
        if (darkIconMobile) darkIconMobile.classList.add('hidden');
      } else {
        if (lightIconDesktop) lightIconDesktop.classList.add('hidden');
        if (darkIconDesktop) darkIconDesktop.classList.remove('hidden');
        if (lightIconMobile) lightIconMobile.classList.add('hidden');
        if (darkIconMobile) darkIconMobile.classList.remove('hidden');
      }
    }

    function toggleTheme() {
      const isDark = document.documentElement.classList.contains('dark');
      if (isDark) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
      updateThemeIcons();
    }

    if (themeToggleDesktop) themeToggleDesktop.addEventListener('click', toggleTheme);
    if (themeToggleMobile) themeToggleMobile.addEventListener('click', toggleTheme);
    updateThemeIcons();
  }
}

function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (!btn || !menu) return;

  function toggleMenu() {
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', !isExpanded);
    menu.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  }

  btn.addEventListener('click', toggleMenu);

  links.forEach(link => {
    link.addEventListener('click', () => {
      if (!menu.classList.contains('hidden')) toggleMenu();
    });
  });
}

function initScrollProgress() {
  const progressBar = document.getElementById('scroll-progress');
  const backToTopBtn = document.getElementById('back-to-top');

  function updateScroll() {
    const scrollPx = document.documentElement.scrollTop || document.body.scrollTop;
    
    if (progressBar) {
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = `${(scrollPx / winHeightPx) * 100}%`;
      progressBar.style.width = scrolled;
    }

    if (backToTopBtn) {
      if (scrollPx > 300) {
        backToTopBtn.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
        backToTopBtn.classList.add('opacity-100', 'translate-y-0');
      } else {
        backToTopBtn.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
        backToTopBtn.classList.remove('opacity-100', 'translate-y-0');
      }
    }
  }

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  window.addEventListener('scroll', updateScroll);
  updateScroll();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initMobileMenu();
    initScrollProgress();
  });
} else {
  initTheme();
  initMobileMenu();
  initScrollProgress();
}

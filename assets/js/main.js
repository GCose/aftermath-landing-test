/**=============================================
 * Function that handles header scroll effects
 ==============================================*/
function handleHeaderScroll() {
    const header = document.querySelector('.header');
    const scrollThreshold = 50;

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

/**=========================================
 * Function that handles mobile menu toggle
 ==========================================*/
function handleMobileMenu() {
    const menuToggle = document.querySelector('.header__menu-toggle');
    const nav = document.querySelector('.header__nav');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.header__nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
        });
    });
}

/**============================================
 * Function that handles dark mode toggle
 =============================================*/
function handleDarkMode() {
    const themeToggle = document.getElementById('theme-toggle');
    const icon = document.getElementById("icon");
    icon.style.cursor = "pointer";

    const savedTheme = localStorage.getItem('theme');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
        document.body.classList.add('dark-mode');
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            icon.className = "fa-solid fa-sun";
        } else {
            icon.className = "fa-solid fa-moon";
            localStorage.setItem('theme', 'light');
        }
    });
}

/**=============================================
 * Function that handles active navigation links
 ==============================================*/
function handleNavHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.header__nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.scrollY + 80;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

/**==========================================
 * Function that handles testimonial slider
 ===========================================*/
function handleTestimonialSlider() {
    const slides = document.querySelectorAll('.testimonial__slide');
    const dots = document.querySelectorAll('.testimonial__dot');
    const nextBtn = document.querySelector('.testimonial__arrow-next');
    const prevBtn = document.querySelector('.testimonial__arrow-prev');

    if (!slides.length) return;

    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        slides[index].classList.add('active');
        dots[index].classList.add('active');

        currentSlide = index;
    }

    function nextSlide() {
        const newIndex = (currentSlide + 1) % slides.length;
        showSlide(newIndex);
    }

    function prevSlide() {
        const newIndex = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(newIndex);
    }

    // Auto slide functionality
    let slideInterval = setInterval(nextSlide, 5000);

    // Reset interval on manual navigation
    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    }

    // Event listeners
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetInterval();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetInterval();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            resetInterval();
        });
    });

    // Initialize
    showSlide(0);
}

/**===================================================
 *  Function that initializes ScrollReveal animations
 ====================================================*/
function initScrollReveal() {
    // Common reveal configuration
    const defaultRevealConfig = {
        origin: 'bottom',
        distance: '30px',
        duration: 1000,
        delay: 0,
        easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
        reset: false,
        mobile: true,
        desktop: true
    };

    // Initialize ScrollReveal
    const sr = ScrollReveal(defaultRevealConfig);

    // Hero section animations
    sr.reveal('.hero__badge', {
        origin: 'top',
        delay: 100
    });

    sr.reveal('.hero__title', {
        origin: 'left',
        delay: 200,
        distance: '40px'
    });

    sr.reveal('.hero__text', {
        origin: 'left',
        delay: 300,
        distance: '40px'
    });

    sr.reveal('.hero__actions', {
        origin: 'left',
        delay: 400,
        distance: '40px'
    });

    sr.reveal('.hero__visual', {
        origin: 'right',
        delay: 300,
        distance: '40px'
    });

    sr.reveal('.hero__visual-stats', {
        delay: 600,
        distance: '0px',
        scale: 0.8,
        opacity: 0
    });

    sr.reveal('.hero__visual-badge', {
        delay: 800,
        distance: '0px',
        scale: 0.8,
        opacity: 0
    });

    // Problem section animations
    sr.reveal('.problem__divider', {
        delay: 100
    });

    sr.reveal('.problem__title', {
        delay: 200
    });

    sr.reveal('.problem__subtitle', {
        delay: 300
    });

    sr.reveal('.problem__item', {
        interval: 150,
        delay: 400
    });

    sr.reveal('.problem__highlight', {
        delay: 600,
        distance: '0px',
        scale: 0.9
    });

    sr.reveal('.problem__visual', {
        delay: 800
    });

    // Solution section animations
    sr.reveal('.solution__label', {
        delay: 100
    });

    sr.reveal('.solution__title', {
        delay: 200
    });

    sr.reveal('.solution__subtitle', {
        delay: 300
    });

    sr.reveal('.solution__timeline', {
        origin: 'top',
        delay: 400,
        distance: '100%'
    });

    sr.reveal('.solution__agent', {
        origin: 'left',
        interval: 150,
        delay: 400
    });

    // Benefits section animations
    sr.reveal('.benefits__visual', {
        origin: 'left',
        delay: 200
    });

    sr.reveal('.benefits__visual-callout', {
        delay: 600,
        distance: '0px',
        scale: 0.8,
        opacity: 0
    });

    sr.reveal('.benefits__label', {
        origin: 'right',
        delay: 300
    });

    sr.reveal('.benefits__title', {
        origin: 'right',
        delay: 400
    });

    sr.reveal('.benefits__value', {
        origin: 'right',
        delay: 500
    });

    sr.reveal('.benefits__bonuses', {
        origin: 'right',
        delay: 600
    });

    sr.reveal('.benefits__total', {
        origin: 'right',
        delay: 700
    });

    sr.reveal('.benefits__cta', {
        origin: 'right',
        delay: 800
    });

    // Guaranttee animations
    sr.reveal('.guarantee__badge', {
        origin: 'left',
        delay: 100,
        distance: '30px'
    });

    sr.reveal('.guarantee__title', {
        origin: 'left',
        delay: 200,
        distance: '40px'
    });

    sr.reveal('.guarantee__text', {
        origin: 'left',
        delay: 300,
        distance: '40px'
    });

    sr.reveal('.guarantee__target', {
        origin: 'left',
        delay: 400,
        distance: '40px'
    });

    sr.reveal('.guarantee__cta', {
        origin: 'left',
        delay: 500,
        distance: '40px'
    });

    sr.reveal('.guarantee__visual', {
        origin: 'right',
        delay: 300,
        distance: '40px'
    });

    sr.reveal('.guarantee__visual-seal', {
        delay: 600,
        distance: '0px',
        scale: 0.8,
        opacity: 0
    });

    sr.reveal('.guarantee__visual-stat', {
        delay: 800,
        distance: '0px',
        scale: 0.8,
        opacity: 0
    });

    // Roles section animations
    sr.reveal('.roles__title', {
        delay: 100
    });

    sr.reveal('.roles__person', {
        interval: 100,
        delay: 300,
        distance: '0px',
        scale: 0.9,
        opacity: 0
    });

    sr.reveal('.roles__savings', {
        delay: 600
    });

    // Testimonial section animations
    sr.reveal('.testimonial__title', {
        delay: 100
    });

    sr.reveal('.testimonial__slide.active', {
        delay: 300
    });

    sr.reveal('.testimonial__controls', {
        delay: 500
    });

    // Contact section animations
    sr.reveal('.contact__title', {
        origin: 'left',
        delay: 100
    });

    sr.reveal('.contact__subtitle', {
        origin: 'left',
        delay: 200
    });

    sr.reveal('.contact__process', {
        origin: 'left',
        delay: 300
    });

    sr.reveal('.contact__features', {
        origin: 'left',
        delay: 400
    });

    sr.reveal('.contact__form-wrapper', {
        origin: 'right',
        delay: 300
    });

    // Footer animations
    sr.reveal('.footer__logo', {
        delay: 100
    });

    sr.reveal('.footer__nav-column', {
        interval: 100,
        delay: 200
    });

    sr.reveal('.footer__bottom', {
        delay: 300
    });
}

/**=======================================
 * Function that initializes the website
 ========================================*/
function initWebsite() {
    handleHeaderScroll();
    handleMobileMenu();
    handleDarkMode();
    handleNavHighlight();
    handleTestimonialSlider();

    // Initialize ScrollReveal if the library is loaded
    if (typeof initScrollReveal === 'function') {
        initScrollReveal();
    } else {
        console.warn('ScrollReveal library is not loaded. Animations will not work.');
    }

    document.body.classList.add('loaded');
}

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', initWebsite);
document.addEventListener('DOMContentLoaded', function() {
    if (typeof gsap === 'undefined') {
        console.warn('GSAP not loaded');
        return;
    }
    
    if (typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }
    
    const loader = document.querySelector('.loader');
    
    window.addEventListener('load', function() {
        setTimeout(function() {
            gsap.to('.loader-logo', {
                y: -50,
                opacity: 0,
                duration: 0.5,
                ease: 'power3.in'
            });
            
            gsap.to('.loader-line', {
                scaleX: 0,
                duration: 0.5,
                ease: 'power3.in',
                delay: 0.1
            });
            
            gsap.to('.loader-text', {
                y: 50,
                opacity: 0,
                duration: 0.5,
                ease: 'power3.in',
                delay: 0.2
            });
            
            gsap.to('.loader', {
                yPercent: -100,
                duration: 0.8,
                ease: 'power3.inOut',
                delay: 0.5,
                onComplete: function() {
                    loader.style.display = 'none';
                    initHeroAnimations();
                }
            });
        }, 1200);
    });
    
    function initHeroAnimations() {
        const heroElements = document.querySelectorAll('.hero .reveal-element');
        
        gsap.fromTo('.hero-label', 
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', delay: 0.1 }
        );
        
        gsap.fromTo('.hero-title',
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2 }
        );
        
        gsap.fromTo('.hero-subtitles',
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.4 }
        );
        
        gsap.fromTo('.hero-buttons',
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.5 }
        );
        
        gsap.fromTo('.hero-stats',
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.6 }
        );
        
        gsap.fromTo('.iphone-mockup',
            { opacity: 0, scale: 0.8, y: 50 },
            { opacity: 1, scale: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.3 }
        );
        
        gsap.fromTo('.card-1',
            { opacity: 0, x: 50, y: 20 },
            { opacity: 1, x: 0, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.5 }
        );
        
        gsap.fromTo('.card-2',
            { opacity: 0, x: -50, y: 20 },
            { opacity: 1, x: 0, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.6 }
        );
        
        gsap.fromTo('.card-3',
            { opacity: 0, x: 50, y: 20 },
            { opacity: 1, x: 0, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.7 }
        );
    }
    
    if (typeof ScrollTrigger !== 'undefined') {
        gsap.utils.toArray('.about-left .reveal-element').forEach((el, i) => {
            gsap.fromTo(el,
                { opacity: 0, x: -50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    delay: i * 0.1,
                    scrollTrigger: {
                        trigger: '.about',
                        start: 'top 70%',
                    }
                }
            );
        });
        
        gsap.utils.toArray('.about-right .reveal-element').forEach((el, i) => {
            gsap.fromTo(el,
                { opacity: 0, x: 50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    delay: i * 0.15,
                    scrollTrigger: {
                        trigger: '.about',
                        start: 'top 70%',
                    }
                }
            );
        });
        
        gsap.fromTo('.about-accent-box',
            { opacity: 0, scale: 0.8 },
            {
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.about',
                    start: 'top 75%',
                }
            }
        );
        
        gsap.utils.toArray('.services-grid .service-card').forEach((card, i) => {
            gsap.fromTo(card,
                { opacity: 0, y: 60 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    delay: i * 0.1,
                    scrollTrigger: {
                        trigger: '.services',
                        start: 'top 75%',
                    }
                }
            );
        });
        
        gsap.utils.toArray('.why-item').forEach((item, i) => {
            gsap.fromTo(item,
                { opacity: 0, x: 50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    delay: i * 0.15,
                    scrollTrigger: {
                        trigger: '.why-choose',
                        start: 'top 70%',
                    }
                }
            );
        });
        
        gsap.utils.toArray('.process-step').forEach((step, i) => {
            gsap.fromTo(step,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    ease: 'power3.out',
                    delay: i * 0.12,
                    scrollTrigger: {
                        trigger: '.process',
                        start: 'top 70%',
                    }
                }
            );
        });
        
        gsap.utils.toArray('.portfolio-item').forEach((item, i) => {
            gsap.fromTo(item,
                { opacity: 0, y: 50, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    ease: 'power3.out',
                    delay: i * 0.08,
                    scrollTrigger: {
                        trigger: '.portfolio',
                        start: 'top 75%',
                    }
                }
            );
        });
        
        gsap.utils.toArray('.tools-grid .tool-card').forEach((card, i) => {
            gsap.fromTo(card,
                { opacity: 0, y: 30, scale: 0.9 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.5,
                    ease: 'back.out(1.7)',
                    delay: i * 0.05,
                    scrollTrigger: {
                        trigger: '.tools',
                        start: 'top 75%',
                    }
                }
            );
        });
        
        gsap.utils.toArray('.faq-item').forEach((item, i) => {
            gsap.fromTo(item,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: 'power3.out',
                    delay: i * 0.1,
                    scrollTrigger: {
                        trigger: '.faq',
                        start: 'top 75%',
                    }
                }
            );
        });
        
        gsap.utils.toArray('.contact-left .reveal-element').forEach((el, i) => {
            gsap.fromTo(el,
                { opacity: 0, x: -40 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.7,
                    ease: 'power3.out',
                    delay: i * 0.12,
                    scrollTrigger: {
                        trigger: '.contact',
                        start: 'top 70%',
                    }
                }
            );
        });
        
        gsap.fromTo('.contact-right',
            { opacity: 0, x: 50 },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.contact',
                    start: 'top 70%',
                }
            }
        );
        
        gsap.utils.toArray('.footer-content > div').forEach((el, i) => {
            gsap.fromTo(el,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    ease: 'power3.out',
                    delay: i * 0.15,
                    scrollTrigger: {
                        trigger: '.footer',
                        start: 'top 85%',
                    }
                }
            );
        });
        
        gsap.to('.shape-1', {
            y: 30,
            x: 20,
            duration: 8,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1
        });
        
        gsap.to('.shape-2', {
            y: -25,
            x: -15,
            duration: 10,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1
        });
        
        gsap.to('.shape-3', {
            y: 20,
            x: 10,
            duration: 6,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1
        });
        
        gsap.utils.toArray('.brands-marquee').forEach(marquee => {
            const track = marquee.querySelector('.brands-track');
            
            gsap.to(track, {
                xPercent: -50,
                ease: 'none',
                duration: 30,
                repeat: -1
            });
        });
        
        gsap.to('.scroll-line', {
            height: '80px',
            duration: 1.5,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1
        });
        
        gsap.fromTo('.navbar',
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 1.5 }
        );
    }
    
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .whatsapp-btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            gsap.to(this, {
                y: -3,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        button.addEventListener('mouseleave', function() {
            gsap.to(this, {
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
    
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        const image = item.querySelector('.image-placeholder');
        
        item.addEventListener('mouseenter', function() {
            gsap.to(image, {
                scale: 1.1,
                duration: 0.6,
                ease: 'power3.out'
            });
        });
        
        item.addEventListener('mouseleave', function() {
            gsap.to(image, {
                scale: 1,
                duration: 0.6,
                ease: 'power3.out'
            });
        });
    });
    
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        const icon = card.querySelector('.service-icon');
        
        card.addEventListener('mouseenter', function() {
            gsap.to(icon, {
                rotate: 360,
                scale: 1.1,
                duration: 0.6,
                ease: 'back.out(1.7)'
            });
        });
        
        card.addEventListener('mouseleave', function() {
            gsap.to(icon, {
                rotate: 0,
                scale: 1,
                duration: 0.6,
                ease: 'power3.out'
            });
        });
    });
    
    const toolCards = document.querySelectorAll('.tool-card');
    
    toolCards.forEach(card => {
        const icon = card.querySelector('.tool-icon');
        
        card.addEventListener('mouseenter', function() {
            gsap.to(icon, {
                y: -5,
                scale: 1.1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        card.addEventListener('mouseleave', function() {
            gsap.to(icon, {
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
    
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            gsap.to(this, {
                y: -5,
                rotate: 10,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        link.addEventListener('mouseleave', function() {
            gsap.to(this, {
                y: 0,
                rotate: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
    
    gsap.fromTo('.stat-number',
        {
            textContent: 0,
        },
        {
            textContent: (i, el) => el.getAttribute('data-count'),
            duration: 2,
            ease: 'power2.out',
            snap: { textContent: 1 },
            scrollTrigger: {
                trigger: '.hero-stats',
                start: 'top 80%',
            },
            onUpdate: function() {
                this.targets().forEach(el => {
                    const count = Math.ceil(parseFloat(el.textContent));
                    const suffix = count === 8 ? '' : '+';
                    el.textContent = count + suffix;
                });
            }
        }
    );
    
    const sections = document.querySelectorAll('section:not(.hero)');
    
    sections.forEach(section => {
        gsap.fromTo(section.querySelector('.section-label'),
            { opacity: 0, x: -30 },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 75%',
                }
            }
        );
        
        const title = section.querySelector('.section-title');
        if (title) {
            gsap.fromTo(title,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    delay: 0.1,
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 75%',
                    }
                }
            );
        }
    });
    
    if (typeof SmoothScroll !== 'undefined') {
        new SmoothScroll({
            duration: 1.2,
            easing: (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
        });
    }
    
    console.log('%c🎬 GSAP animations loaded!', 'color: #D4AF37; font-size: 14px; font-weight: bold;');
});

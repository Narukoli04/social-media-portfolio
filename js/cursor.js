document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.querySelector('.custom-cursor');
    const cursorOuter = document.querySelector('.cursor-outer');
    const cursorDot = document.querySelector('.cursor-dot');
    const mouseGlow = document.querySelector('.mouse-glow');
    
    if (!cursor || !cursorOuter || !cursorDot || !mouseGlow) return;
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let dotX = 0;
    let dotY = 0;
    let glowX = 0;
    let glowY = 0;
    
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateCursor() {
        const ease = 0.15;
        const dotEase = 0.25;
        const glowEase = 0.08;
        
        cursorX += (mouseX - cursorX) * ease;
        cursorY += (mouseY - cursorY) * ease;
        
        dotX += (mouseX - dotX) * dotEase;
        dotY += (mouseY - dotY) * dotEase;
        
        glowX += (mouseX - glowX) * glowEase;
        glowY += (mouseY - glowY) * glowEase;
        
        cursorOuter.style.transform = `translate(${cursorX - 20}px, ${cursorY - 20}px)`;
        cursorDot.style.transform = `translate(${dotX - 3}px, ${dotY - 3}px)`;
        mouseGlow.style.transform = `translate(${glowX - 200}px, ${glowY - 200}px)`;
        
        requestAnimationFrame(animateCursor);
    }
    
    animateCursor();
    
    const hoverElements = document.querySelectorAll('a, button, .service-card, .portfolio-item, .tool-card, .faq-question, .social-link, .whatsapp-btn');
    
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', function() {
            cursorOuter.classList.add('hover');
        });
        
        el.addEventListener('mouseleave', function() {
            cursorOuter.classList.remove('hover');
        });
    });
    
    const magneticElements = document.querySelectorAll('.btn-primary, .btn-secondary, .whatsapp-btn');
    
    magneticElements.forEach(el => {
        el.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            this.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });
        
        el.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
    
    document.addEventListener('mousedown', function() {
        cursorOuter.style.transform = `translate(${cursorX - 20}px, ${cursorY - 20}px) scale(0.9)`;
        cursorDot.style.transform = `translate(${dotX - 3}px, ${dotY - 3}px) scale(1.5)`;
    });
    
    document.addEventListener('mouseup', function() {
        cursorOuter.style.transform = `translate(${cursorX - 20}px, ${cursorY - 20}px)`;
        cursorDot.style.transform = `translate(${dotX - 3}px, ${dotY - 3}px)`;
    });
    
    document.addEventListener('mouseleave', function() {
        cursor.style.opacity = '0';
        mouseGlow.style.opacity = '0';
    });
    
    document.addEventListener('mouseenter', function() {
        cursor.style.opacity = '1';
        mouseGlow.style.opacity = '1';
    });
    
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        cursor.style.display = 'none';
        mouseGlow.style.display = 'none';
    }
});

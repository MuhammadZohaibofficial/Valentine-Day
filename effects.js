/* 
====================================================================
   ZOHAIB KI DUNIYA - VISUAL EFFECTS ENGINE (THE MAGIC)
   Handles Typewriter, Particles, Confetti, and Scroll Reveals.
====================================================================
*/

const Effects = {

    // ============================================================
    // 1. CINEMATIC TYPEWRITER (Character by Character)
    // ============================================================
    typewriterSequence: function(lines, containerId, onComplete) {
        const container = document.getElementById(containerId);
        container.innerHTML = ''; // Clear first
        
        let lineIndex = 0;

        function typeLine() {
            if (lineIndex >= lines.length) {
                if (onComplete) onComplete();
                return;
            }

            // Create line element
            const p = document.createElement('p');
            p.className = 'typewriter-line';
            p.style.opacity = 1;
            p.style.marginBottom = '1.5rem';
            p.style.color = 'var(--text-main)';
            container.appendChild(p);

            const text = lines[lineIndex];
            let charIndex = 0;

            // Typing Interval
            const typeInterval = setInterval(() => {
                p.textContent += text.charAt(charIndex);
                charIndex++;

                // Sound effect hint (optional, kept silent for now)
                
                if (charIndex >= text.length) {
                    clearInterval(typeInterval);
                    lineIndex++;
                    // Pause before next line (Reading time)
                    setTimeout(typeLine, CONFIG.timing.lineDelay);
                }
            }, CONFIG.timing.typewriterSpeed); // Speed from Config
        }

        // Start typing
        typeLine();
    },

    // ============================================================
    // 2. STARRY NIGHT (Opening Scene)
    // ============================================================
    createStars: function(count = 50) {
        const container = document.getElementById('opening-scene'); // Or specific container
        if (!container) return;

        for (let i = 0; i < count; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            
            // Random Position
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            
            // Random Size
            const size = Math.random() * 2 + 1; // 1px to 3px
            
            // Random Delay for Twinkle
            const delay = Math.random() * 5;

            // Styles
            star.style.cssText = `
                position: absolute;
                left: ${x}%;
                top: ${y}%;
                width: ${size}px;
                height: ${size}px;
                background: white;
                border-radius: 50%;
                opacity: 0;
                box-shadow: 0 0 ${size * 2}px white;
                animation: twinkle 3s infinite ${delay}s ease-in-out;
            `;

            container.appendChild(star);
        }
    },

    // ============================================================
    // 3. TEXT REVEAL (Fade Up - Welcome Scene)
    // ============================================================
    revealText: function(lines, containerId, onComplete) {
        const container = document.getElementById(containerId);
        container.innerHTML = '';

        lines.forEach((line, index) => {
            const p = document.createElement('h2');
            p.innerText = line;
            p.style.opacity = 0;
            p.style.transform = 'translateY(20px)';
            p.style.transition = 'all 1s ease-out';
            p.style.fontSize = index === 2 ? '3rem' : '1.5rem'; // Index 2 is "Iqra" usually
            p.style.color = index === 2 ? 'var(--gold-bright)' : 'var(--text-main)';
            
            container.appendChild(p);

            // Staggered Appear
            setTimeout(() => {
                p.style.opacity = 1;
                p.style.transform = 'translateY(0)';
            }, index * 2000); // 2 seconds apart
        });

        // Callback after all lines
        setTimeout(() => {
            if (onComplete) onComplete();
        }, lines.length * 2000 + 1000);
    },

    // ============================================================
    // 4. SPARKLES (Interaction Feedback)
    // ============================================================
    createSparkles: function(x, y) {
        const count = 15;
        for (let i = 0; i < count; i++) {
            const part = document.createElement('div');
            part.style.position = 'fixed';
            part.style.left = x + 'px';
            part.style.top = y + 'px';
            part.style.width = '4px';
            part.style.height = '4px';
            part.style.background = 'var(--gold-bright)';
            part.style.borderRadius = '50%';
            part.style.pointerEvents = 'none';
            part.style.zIndex = 9999;
            document.body.appendChild(part);

            // Animate
            const angle = Math.random() * Math.PI * 2;
            const velocity = Math.random() * 60 + 20;
            const tx = Math.cos(angle) * velocity;
            const ty = Math.sin(angle) * velocity;

            part.animate([
                { transform: 'translate(0,0) scale(1)', opacity: 1 },
                { transform: `translate(${tx}px, ${ty}px) scale(0)`, opacity: 0 }
            ], {
                duration: 800,
                easing: 'cubic-bezier(0, .9, .57, 1)'
            }).onfinish = () => part.remove();
        }
    },

    // ============================================================
    // 5. CONFETTI & HEARTS (Grand Finale)
    // ============================================================
    createConfetti: function() {
        const colors = ['#FFD700', '#FF4444', '#FFFFFF', '#FF69B4'];
        const container = document.body;

        for (let i = 0; i < 100; i++) {
            const conf = document.createElement('div');
            const isHeart = Math.random() > 0.5;
            
            conf.innerHTML = isHeart ? '&#10084;' : ''; // Heart HTML entity
            conf.className = 'floating-particle';
            
            // Random properties
            const left = Math.random() * 100;
            const animDuration = Math.random() * 3 + 4 + 's'; // 4-7s
            const size = Math.random() * 15 + 10 + 'px';
            
            conf.style.left = left + 'vw';
            conf.style.fontSize = size;
            conf.style.color = colors[Math.floor(Math.random() * colors.length)];
            conf.style.position = 'fixed';
            conf.style.top = '110vh'; // Start below screen
            conf.style.zIndex = 999;
            
            // Custom Animation
            conf.style.animation = `floatUpConfetti ${animDuration} linear forwards`;
            
            container.appendChild(conf);

            // Remove after animation
            setTimeout(() => conf.remove(), 7000);
        }
    },

    // ============================================================
    // 6. SCROLL OBSERVER (Auto Fade-in Elements)
    // ============================================================
    initScrollObserver: function() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, { threshold: 0.1 });

        // Observe all prose, poetry, and headers inside content sections
        setTimeout(() => {
            const elements = document.querySelectorAll('.prose, .poetry, h2, h3');
            elements.forEach(el => {
                el.style.opacity = 0;
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
                observer.observe(el);
            });
        }, 1000); // Wait for content to inject
    }
};

// --- CSS Keyframes for Effects (Injected here to keep it self-contained) ---
const styleSheet = document.createElement("style");
styleSheet.innerText = `
    @keyframes twinkle {
        0%, 100% { opacity: 0.2; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.2); }
    }
    @keyframes floatUpConfetti {
        0% { transform: translateY(0) rotate(0deg); opacity: 1; }
        100% { transform: translateY(-120vh) rotate(720deg); opacity: 0; }
    }
`;
document.head.appendChild(styleSheet);

// Initialize Stars on Load
window.addEventListener('load', () => {
    Effects.createStars(60);
});

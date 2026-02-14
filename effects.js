/* ══════════════════════════════════════════════
   IQRA KI DUNIYA — VISUAL EFFECTS ENGINE
   Valentine's Day Web App
   ══════════════════════════════════════════════ */

const Effects = (() => {

    /* ═══════════════════════════════════════
       SECTION 1: PERFORMANCE DETECTION
       ═══════════════════════════════════════ */

    const PERF = {
        isLow: false,
        maxParticles: 30,
        maxConfetti: 150,
        maxHearts: 20,
        maxPetals: 12,
        maxRainDrops: 40,
        maxStars: 40,
        maxBurst: 80,
        frameSkip: false,
    };

    function detectPerformance() {
        // Check device memory (if available)
        const mem = navigator.deviceMemory || 4;
        const cores = navigator.hardwareConcurrency || 4;

        if (mem <= 2 || cores <= 2) {
            PERF.isLow = true;
            PERF.maxParticles = 15;
            PERF.maxConfetti = 60;
            PERF.maxHearts = 10;
            PERF.maxPetals = 6;
            PERF.maxRainDrops = 20;
            PERF.maxStars = 20;
            PERF.maxBurst = 40;
            PERF.frameSkip = true;
        }

        // Check if prefers-reduced-motion
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            PERF.isLow = true;
            PERF.maxParticles = 5;
            PERF.maxConfetti = 20;
            PERF.maxHearts = 5;
            PERF.maxPetals = 3;
            PERF.maxRainDrops = 10;
            PERF.maxStars = 10;
            PERF.maxBurst = 15;
        }
    }


    /* ═══════════════════════════════════════
       SECTION 2: UTILITY HELPERS
       ═══════════════════════════════════════ */

    function rand(min, max) {
        return Math.random() * (max - min) + min;
    }

    function randInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function randItem(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    function removeAfter(el, ms) {
        setTimeout(() => {
            if (el && el.parentNode) {
                el.parentNode.removeChild(el);
            }
        }, ms);
    }

    function clearContainer(container) {
        if (typeof container === 'string') container = document.querySelector(container);
        if (container) container.innerHTML = '';
    }


    /* ═══════════════════════════════════════
       SECTION 3: PARTICLE SYSTEM (Gold Dust)
       ═══════════════════════════════════════ */

    let particleInterval = null;
    let particleCount = 0;

    function startParticles() {
        if (particleInterval) return;

        const container = document.querySelector('#particle-container');
        if (!container) return;

        particleInterval = setInterval(() => {
            if (particleCount >= PERF.maxParticles) return;

            const p = document.createElement('div');
            p.className = 'particle particle-gold';

            const size = rand(1.5, 4);
            const x = rand(0, 100);
            const duration = rand(6, 14);
            const delay = rand(0, 2);
            const opacity = rand(0.08, 0.35);
            const drift = rand(-30, 30);

            p.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                left: ${x}%;
                bottom: -10px;
                opacity: 0;
                animation: floatParticleUp ${duration}s ease-in ${delay}s forwards;
                --drift: ${drift}px;
                --opa: ${opacity};
            `;

            container.appendChild(p);
            particleCount++;

            removeAfter(p, (duration + delay) * 1000);
            setTimeout(() => { particleCount--; }, (duration + delay) * 1000);

        }, PERF.isLow ? 1200 : 600);
    }

    function stopParticles() {
        if (particleInterval) {
            clearInterval(particleInterval);
            particleInterval = null;
        }
    }


    /* ═══════════════════════════════════════
       SECTION 4: STARS (Opening Scene)
       ═══════════════════════════════════════ */

    function createStars(container, count) {
        if (!container) return;
        if (typeof container === 'string') container = document.querySelector(container);

        container.innerHTML = '';
        const total = Math.min(count || 40, PERF.maxStars);

        for (let i = 0; i < total; i++) {
            const star = document.createElement('div');
            star.className = 'star' + (Math.random() > 0.85 ? ' big' : '');

            const x = rand(2, 98);
            const y = rand(2, 98);
            const duration = rand(2, 5);
            const delay = rand(0, 6);

            star.style.cssText = `
                left: ${x}%;
                top: ${y}%;
                --duration: ${duration}s;
                --delay: ${delay}s;
                animation-delay: ${delay}s;
            `;

            container.appendChild(star);
        }
    }


    /* ═══════════════════════════════════════
       SECTION 5: FLOATING HEARTS
       ═══════════════════════════════════════ */

    let heartsInterval = null;

    function startFloatingHearts() {
        if (heartsInterval) return;

        const container = document.querySelector('#floating-hearts-container');
        if (!container) return;

        function spawnHeart() {
            const existing = container.querySelectorAll('.float-heart').length;
            if (existing >= PERF.maxHearts) return;

            const heart = document.createElement('div');
            heart.className = 'float-heart';

            const x = rand(5, 95);
            const size = rand(10, 22);
            const dur = rand(7, 14);
            const delay = rand(0, 3);
            const opacity = rand(0.12, 0.35);
            const drift = rand(-40, 40);

            heart.textContent = randItem(['♥', '❤', '💕', '♡']);

            heart.style.cssText = `
                left: ${x}%;
                --size: ${size}px;
                font-size: ${size}px;
                --dur: ${dur}s;
                --delay: ${delay}s;
                --opa: ${opacity};
                --drift: ${drift}px;
                animation-delay: ${delay}s;
            `;

            container.appendChild(heart);
            removeAfter(heart, (dur + delay) * 1000);
        }

        // Initial batch
        for (let i = 0; i < 5; i++) {
            setTimeout(spawnHeart, i * 500);
        }

        heartsInterval = setInterval(spawnHeart, PERF.isLow ? 3000 : 1800);
    }

    function stopFloatingHearts() {
        if (heartsInterval) {
            clearInterval(heartsInterval);
            heartsInterval = null;
        }
    }


    /* ═══════════════════════════════════════
       SECTION 6: FLOATING PETALS (Romance)
       ═══════════════════════════════════════ */

    let petalsInterval = null;

    function createFloatingPetals() {
        if (petalsInterval) return;

        const container = document.querySelector('#floating-petals-container');
        if (!container) return;

        function spawnPetal() {
            const existing = container.querySelectorAll('.float-petal').length;
            if (existing >= PERF.maxPetals) return;

            const petal = document.createElement('div');
            petal.className = 'float-petal';

            const x = rand(0, 100);
            const size = rand(5, 12);
            const dur = rand(8, 16);
            const delay = rand(0, 4);
            const opacity = rand(0.08, 0.22);
            const drift = rand(-50, 50);
            const rotation = rand(0, 360);

            const colors = ['#8B0000', '#A0001C', '#C41E3A', '#6B0000', '#9B1B30'];
            const color = randItem(colors);

            petal.style.cssText = `
                left: ${x}%;
                --size: ${size}px;
                width: ${size}px;
                height: ${size}px;
                --dur: ${dur}s;
                --delay: ${delay}s;
                --opa: ${opacity};
                --drift: ${drift}px;
                --rot: ${rotation}deg;
                background: ${color};
                animation-delay: ${delay}s;
            `;

            container.appendChild(petal);
            removeAfter(petal, (dur + delay) * 1000);
        }

        // Initial batch
        for (let i = 0; i < 4; i++) {
            setTimeout(spawnPetal, i * 600);
        }

        petalsInterval = setInterval(spawnPetal, PERF.isLow ? 3500 : 2000);
    }

    function stopFloatingPetals() {
        if (petalsInterval) {
            clearInterval(petalsInterval);
            petalsInterval = null;
        }
        clearContainer('#floating-petals-container');
    }


    /* ═══════════════════════════════════════
       SECTION 7: RAIN EFFECT (Separation Era)
       ═══════════════════════════════════════ */

    let rainInterval = null;

    function createRain() {
        if (rainInterval) return;

        const container = document.querySelector('#particle-container');
        if (!container) return;

        function spawnDrop() {
            const existing = container.querySelectorAll('.rain-drop').length;
            if (existing >= PERF.maxRainDrops) return;

            const drop = document.createElement('div');
            drop.className = 'rain-drop';

            const x = rand(0, 100);
            const h = rand(10, 25);
            const dur = rand(0.8, 1.6);
            const delay = rand(0, 2);

            drop.style.cssText = `
                left: ${x}%;
                top: -10px;
                --h: ${h}px;
                height: ${h}px;
                --dur: ${dur}s;
                --delay: ${delay}s;
                animation-delay: ${delay}s;
            `;

            container.appendChild(drop);
            removeAfter(drop, (dur + delay + 1) * 1000);
        }

        // Initial batch
        for (let i = 0; i < 15; i++) {
            setTimeout(spawnDrop, i * 100);
        }

        rainInterval = setInterval(spawnDrop, PERF.isLow ? 200 : 80);
    }

    function stopRain() {
        if (rainInterval) {
            clearInterval(rainInterval);
            rainInterval = null;
        }
        // Remove rain drops
        const drops = document.querySelectorAll('.rain-drop');
        drops.forEach(d => {
            d.style.opacity = '0';
            removeAfter(d, 500);
        });
    }


    /* ═══════════════════════════════════════
       SECTION 8: CONFETTI SYSTEM
       ═══════════════════════════════════════ */

    function createConfetti(container, count) {
        if (!container) return;
        if (typeof container === 'string') container = document.querySelector(container);
        if (!container) return;

        const total = Math.min(count || 100, PERF.maxConfetti);

        const colors = ['#FFD700', '#FF4444', '#FF69B4', '#FFFFFF', '#FF8888',
                        '#FFE44D', '#E84040', '#DDA0DD', '#FFA500', '#FF6B6B'];

        const shapes = ['circle', 'square', 'rect', 'heart'];

        for (let i = 0; i < total; i++) {
            const piece = document.createElement('div');
            piece.className = 'confetti-piece';

            const color = randItem(colors);
            const shape = randItem(shapes);
            const x = rand(5, 95);
            const dur = rand(2.5, 5.5);
            const delay = rand(0, 1.5);
            const spin = rand(360, 1080) * (Math.random() > 0.5 ? 1 : -1);
            const drift = rand(-80, 80);

            let width, height, borderRadius;

            switch (shape) {
                case 'circle':
                    width = rand(4, 8);
                    height = width;
                    borderRadius = '50%';
                    break;
                case 'square':
                    width = rand(5, 9);
                    height = width;
                    borderRadius = '1px';
                    break;
                case 'rect':
                    width = rand(3, 5);
                    height = rand(8, 14);
                    borderRadius = '1px';
                    break;
                case 'heart':
                    width = rand(6, 10);
                    height = width;
                    borderRadius = '50% 50% 0 50%';
                    break;
            }

            piece.style.cssText = `
                left: ${x}%;
                width: ${width}px;
                height: ${height}px;
                background: ${color};
                border-radius: ${borderRadius};
                --dur: ${dur}s;
                --delay: ${delay}s;
                --spin: ${spin}deg;
                --drift: ${drift}px;
                animation-delay: ${delay}s;
                transform: rotate(${rand(0, 360)}deg);
            `;

            container.appendChild(piece);
            removeAfter(piece, (dur + delay) * 1000 + 500);
        }
    }


    /* ═══════════════════════════════════════
       SECTION 9: SMALL CONFETTI (Quiz Correct)
       ═══════════════════════════════════════ */

    function createSmallConfetti() {
        const container = document.querySelector('#quiz-scene');
        if (!container) return;

        const total = PERF.isLow ? 8 : 15;
        const colors = ['#2ECC71', '#FFD700', '#27AE60', '#F1C40F', '#FFFFFF'];

        for (let i = 0; i < total; i++) {
            const piece = document.createElement('div');
            piece.className = 'confetti-piece';
            piece.style.position = 'fixed';

            const color = randItem(colors);
            const centerX = 50 + rand(-20, 20);
            const centerY = 40;
            const size = rand(3, 6);
            const dur = rand(1.5, 3);
            const delay = rand(0, 0.3);
            const spin = rand(180, 720);
            const drift = rand(-60, 60);

            piece.style.cssText = `
                position: fixed;
                left: ${centerX}%;
                top: ${centerY}%;
                width: ${size}px;
                height: ${size}px;
                background: ${color};
                border-radius: 50%;
                --dur: ${dur}s;
                --delay: ${delay}s;
                --spin: ${spin}deg;
                --drift: ${drift}px;
                animation-delay: ${delay}s;
                z-index: 100;
                pointer-events: none;
            `;

            document.body.appendChild(piece);
            removeAfter(piece, (dur + delay) * 1000 + 300);
        }
    }


    /* ═══════════════════════════════════════
       SECTION 10: BURST PARTICLES (Door Opening)
       ═══════════════════════════════════════ */

    function createBurstParticles(container, count) {
        if (!container) return;
        if (typeof container === 'string') container = document.querySelector(container);
        if (!container) return;

        const total = Math.min(count || 80, PERF.maxBurst);

        for (let i = 0; i < total; i++) {
            const p = document.createElement('div');
            p.className = 'burst-particle';

            const size = rand(1.5, 5);
            const angle = rand(0, 360);
            const distance = rand(60, 250);
            const bx = Math.cos(angle * Math.PI / 180) * distance;
            const by = Math.sin(angle * Math.PI / 180) * distance;
            const dur = rand(1, 2.5);
            const delay = rand(0, 0.8);

            p.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                --bx: ${bx}px;
                --by: ${by}px;
                animation: burstOut ${dur}s ease-out ${delay}s forwards;
                opacity: 0.8;
            `;

            container.appendChild(p);
            removeAfter(p, (dur + delay) * 1000 + 200);
        }
    }


    /* ═══════════════════════════════════════
       SECTION 11: PULSE WAVE (Door Unlock)
       ═══════════════════════════════════════ */

    function createPulseWave() {
        const doorScene = document.querySelector('#door-scene');
        if (!doorScene) return;

        const wave = document.createElement('div');
        wave.style.cssText = `
            position: absolute;
            top: 45%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border: 2px solid rgba(255, 215, 0, 0.5);
            box-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
            animation: pulseWaveExpand 1.2s ease-out forwards;
            pointer-events: none;
            z-index: 20;
        `;

        doorScene.appendChild(wave);

        // Add keyframe dynamically if not exists
        if (!document.querySelector('#pulse-wave-style')) {
            const style = document.createElement('style');
            style.id = 'pulse-wave-style';
            style.textContent = `
                @keyframes pulseWaveExpand {
                    0% { 
                        width: 20px; height: 20px; 
                        opacity: 0.8;
                        border-width: 3px;
                    }
                    100% { 
                        width: 600px; height: 600px; 
                        opacity: 0;
                        border-width: 1px;
                    }
                }
                @keyframes floatParticleUp {
                    0% { 
                        opacity: 0;
                        transform: translateY(0) translateX(0) scale(0.5);
                    }
                    10% { 
                        opacity: var(--opa, 0.2);
                    }
                    90% { 
                        opacity: var(--opa, 0.2);
                    }
                    100% { 
                        opacity: 0;
                        transform: translateY(-100vh) translateX(var(--drift, 20px)) scale(1);
                    }
                }
            `;
            document.head.appendChild(style);
        }

        removeAfter(wave, 1500);
    }


    /* ═══════════════════════════════════════
       SECTION 12: DECLARATION PARTICLES (Finale Phase 5)
       ═══════════════════════════════════════ */

    function createDeclarationParticles(container) {
        if (!container) return;
        if (typeof container === 'string') container = document.querySelector(container);
        if (!container) return;

        container.innerHTML = '';

        const total = PERF.isLow ? 20 : 50;

        // Create particles that gather toward center
        for (let i = 0; i < total; i++) {
            const p = document.createElement('div');

            const size = rand(2, 5);
            const startX = rand(0, 100);
            const startY = rand(0, 100);
            const dur = rand(2, 4);
            const delay = rand(0, 2);

            p.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: #FFD700;
                border-radius: 50%;
                box-shadow: 0 0 ${size * 2}px rgba(255, 215, 0, 0.4);
                left: ${startX}%;
                top: ${startY}%;
                opacity: 0;
                pointer-events: none;
                animation: declParticleGather ${dur}s ease-in-out ${delay}s forwards;
            `;

            container.appendChild(p);
            removeAfter(p, (dur + delay) * 1000 + 500);
        }

        // Add gather animation
        if (!document.querySelector('#decl-particle-style')) {
            const style = document.createElement('style');
            style.id = 'decl-particle-style';
            style.textContent = `
                @keyframes declParticleGather {
                    0% { 
                        opacity: 0;
                        transform: scale(0.3);
                    }
                    30% {
                        opacity: 0.8;
                        transform: scale(1);
                    }
                    70% {
                        opacity: 0.6;
                    }
                    100% { 
                        opacity: 0;
                        left: 50%;
                        top: 50%;
                        transform: scale(0.5);
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }


    /* ═══════════════════════════════════════
       SECTION 13: CELEBRATION HEARTS (Finale Phase 6)
       ═══════════════════════════════════════ */

    function createCelebrationHearts(container, count) {
        if (!container) return;
        if (typeof container === 'string') container = document.querySelector(container);
        if (!container) return;

        const total = Math.min(count || 25, PERF.maxHearts + 10);

        for (let i = 0; i < total; i++) {
            const heart = document.createElement('div');
            heart.className = 'float-heart';

            const x = rand(5, 95);
            const size = rand(12, 28);
            const dur = rand(5, 12);
            const delay = rand(0, 5);
            const opacity = rand(0.15, 0.5);
            const drift = rand(-40, 40);

            heart.textContent = randItem(['♥', '❤', '💕', '💖', '💗', '♡']);

            heart.style.cssText = `
                left: ${x}%;
                --size: ${size}px;
                font-size: ${size}px;
                --dur: ${dur}s;
                --delay: ${delay}s;
                --opa: ${opacity};
                --drift: ${drift}px;
                animation-delay: ${delay}s;
                color: ${randItem(['#FF4444', '#FF69B4', '#FFD700', '#FF6B6B', '#E84040'])};
            `;

            container.appendChild(heart);
            removeAfter(heart, (dur + delay) * 1000);
        }
    }


    /* ═══════════════════════════════════════
       SECTION 14: DOOR AMBIENT EFFECTS
       ═══════════════════════════════════════ */

    let doorAmbientInterval = null;

    function startDoorAmbient() {
        if (doorAmbientInterval) return;

        const container = document.querySelector('#particle-container');
        if (!container) return;

        doorAmbientInterval = setInterval(() => {
            const existing = container.querySelectorAll('.particle-gold').length;
            if (existing >= (PERF.isLow ? 8 : 18)) return;

            const p = document.createElement('div');
            p.className = 'particle particle-gold';

            const size = rand(1.5, 3.5);
            const x = rand(20, 80);
            const dur = rand(5, 10);
            const opacity = rand(0.08, 0.3);
            const drift = rand(-15, 15);

            p.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                left: ${x}%;
                bottom: 10%;
                opacity: 0;
                animation: floatParticleUp ${dur}s ease-in forwards;
                --drift: ${drift}px;
                --opa: ${opacity};
            `;

            container.appendChild(p);
            removeAfter(p, dur * 1000);

        }, PERF.isLow ? 1500 : 700);
    }

    function stopDoorAmbient() {
        if (doorAmbientInterval) {
            clearInterval(doorAmbientInterval);
            doorAmbientInterval = null;
        }
    }


    /* ═══════════════════════════════════════
       SECTION 15: SMALL BURST (Portal Unlock)
       ═══════════════════════════════════════ */

    function createSmallBurst(targetEl) {
        if (!targetEl) return;

        const rect = targetEl.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const total = PERF.isLow ? 8 : 16;
        const colors = ['#FFD700', '#FFE44D', '#FFFFFF', '#FFA500'];

        for (let i = 0; i < total; i++) {
            const p = document.createElement('div');

            const size = rand(2, 5);
            const angle = (360 / total) * i + rand(-10, 10);
            const distance = rand(30, 80);
            const bx = Math.cos(angle * Math.PI / 180) * distance;
            const by = Math.sin(angle * Math.PI / 180) * distance;
            const dur = rand(0.6, 1.2);

            p.style.cssText = `
                position: fixed;
                width: ${size}px;
                height: ${size}px;
                background: ${randItem(colors)};
                border-radius: 50%;
                box-shadow: 0 0 ${size * 2}px rgba(255, 215, 0, 0.4);
                left: ${centerX}px;
                top: ${centerY}px;
                pointer-events: none;
                z-index: 100;
                opacity: 0.9;
                animation: burstOut ${dur}s ease-out forwards;
                --bx: ${bx}px;
                --by: ${by}px;
            `;

            document.body.appendChild(p);
            removeAfter(p, dur * 1000 + 200);
        }
    }


    /* ═══════════════════════════════════════
       SECTION 16: EMBER PARTICLES (Romance)
       ═══════════════════════════════════════ */

    let embersInterval = null;

    function startEmbers() {
        if (embersInterval) return;

        const container = document.querySelector('#particle-container');
        if (!container) return;

        embersInterval = setInterval(() => {
            const existing = container.querySelectorAll('.ember').length;
            if (existing >= (PERF.isLow ? 5 : 10)) return;

            const ember = document.createElement('div');
            ember.className = 'particle ember';

            const size = rand(1.5, 3);
            const x = rand(10, 90);
            const dur = rand(4, 9);
            const opacity = rand(0.1, 0.35);
            const drift = rand(-20, 20);

            const colors = ['#FF6B00', '#FF4500', '#FF8C00', '#E84040'];

            ember.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                background: ${randItem(colors)};
                box-shadow: 0 0 ${size * 2}px ${randItem(colors)};
                border-radius: 50%;
                left: ${x}%;
                bottom: -5px;
                opacity: 0;
                animation: floatParticleUp ${dur}s ease-in forwards;
                --drift: ${drift}px;
                --opa: ${opacity};
            `;

            container.appendChild(ember);
            removeAfter(ember, dur * 1000);

        }, PERF.isLow ? 2000 : 900);
    }

    function stopEmbers() {
        if (embersInterval) {
            clearInterval(embersInterval);
            embersInterval = null;
        }
    }


    /* ═══════════════════════════════════════
       SECTION 17: SHOOTING STAR (Occasional)
       ═══════════════════════════════════════ */

    let shootingStarInterval = null;

    function startShootingStars() {
        if (shootingStarInterval) return;
        if (PERF.isLow) return; // Skip on low-end

        shootingStarInterval = setInterval(() => {
            if (Math.random() > 0.4) return; // 40% chance each interval

            const container = document.querySelector('#particle-container');
            if (!container) return;

            const star = document.createElement('div');

            const startX = rand(10, 70);
            const startY = rand(5, 40);
            const length = rand(60, 120);
            const angle = rand(20, 50);
            const dur = rand(0.6, 1.2);

            star.style.cssText = `
                position: absolute;
                left: ${startX}%;
                top: ${startY}%;
                width: ${length}px;
                height: 1.5px;
                background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
                border-radius: 2px;
                transform: rotate(${angle}deg);
                opacity: 0;
                pointer-events: none;
                animation: shootingStar ${dur}s ease-out forwards;
            `;

            container.appendChild(star);
            removeAfter(star, dur * 1000 + 200);

        }, 6000); // Check every 6 seconds

        // Add shooting star keyframe
        if (!document.querySelector('#shooting-star-style')) {
            const style = document.createElement('style');
            style.id = 'shooting-star-style';
            style.textContent = `
                @keyframes shootingStar {
                    0% { 
                        opacity: 0;
                        transform: rotate(var(--angle, 30deg)) translateX(0);
                    }
                    20% {
                        opacity: 0.8;
                    }
                    100% { 
                        opacity: 0;
                        transform: rotate(var(--angle, 30deg)) translateX(200px);
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }

    function stopShootingStars() {
        if (shootingStarInterval) {
            clearInterval(shootingStarInterval);
            shootingStarInterval = null;
        }
    }


    /* ═══════════════════════════════════════
       SECTION 18: AMBIENT GRADIENT CONTROL
       ═══════════════════════════════════════ */

    function setAmbientColors(section) {
        // Ambient blobs are controlled via CSS body classes
        // This function triggers the body class change
        // CSS handles the actual color transition

        const body = document.body;

        // Remove all section classes
        body.classList.remove(
            'sec-kahani', 'sec-romance', 'sec-mohabbat',
            'sec-quiz', 'sec-mustaqbil', 'sec-finale'
        );

        if (section) {
            body.classList.add(`sec-${section}`);
        }
    }

    function activateAmbientBlobs() {
        const blobs = document.querySelectorAll('.ambient-blob');
        blobs.forEach(blob => {
            blob.style.opacity = blob.classList.contains('blob-1') ? '0.04' :
                                  blob.classList.contains('blob-2') ? '0.03' : '0.02';
        });
    }


    /* ═══════════════════════════════════════
       SECTION 19: SECTION EFFECTS MANAGER
       ═══════════════════════════════════════ */

    function startSectionEffects(section) {
        // Stop all existing section-specific effects first
        stopSectionEffects();

        switch (section) {
            case 'romance':
                createFloatingPetals();
                startEmbers();
                startFloatingHearts();
                break;

            case 'mohabbat':
                startFloatingHearts();
                break;

            case 'quiz':
                // Neural dots handled by CSS
                break;

            case 'mustaqbil':
                startFloatingHearts();
                break;

            case 'kahani':
                // Era-specific effects handled by era change
                break;

            case 'finale':
                // Phase-specific effects handled by phase functions
                break;

            case 'door':
                startDoorAmbient();
                break;

            case 'opening':
                startShootingStars();
                break;
        }
    }

    function stopSectionEffects() {
        stopFloatingHearts();
        stopFloatingPetals();
        stopRain();
        stopEmbers();
        stopDoorAmbient();
        stopShootingStars();
    }

    // Era-specific effect changes
    function setEraEffects(eraNum) {
        stopRain();
        stopFloatingHearts();

        switch (eraNum) {
            case 1: // Pehli Mulaqat — warm sparkles
                startFloatingHearts();
                break;
            case 2: // Dosti se Mohabbat — pink hearts
                startFloatingHearts();
                break;
            case 3: // Judai — RAIN
                createRain();
                break;
            case 4: // Wapsi — transition warm
                startFloatingHearts();
                break;
            case 5: // Aaj Tak — vibrant
                startFloatingHearts();
                break;
        }
    }


    /* ═══════════════════════════════════════
       SECTION 20: CLEANUP
       ═══════════════════════════════════════ */

    function cleanupAll() {
        stopParticles();
        stopFloatingHearts();
        stopFloatingPetals();
        stopRain();
        stopEmbers();
        stopDoorAmbient();
        stopShootingStars();

        clearContainer('#particle-container');
        clearContainer('#floating-hearts-container');
        clearContainer('#floating-petals-container');
        clearContainer('#ripple-container');
    }


    /* ═══════════════════════════════════════
       SECTION 21: INITIALIZATION
       ═══════════════════════════════════════ */

    function init() {
        detectPerformance();
        activateAmbientBlobs();
        startParticles();

        // Log performance mode
        if (PERF.isLow) {
            console.log('Effects: Low performance mode active');
        } else {
            console.log('Effects: High performance mode active');
        }
    }


    /* ═══════════════════════════════════════
       PUBLIC API
       ═══════════════════════════════════════ */

    return {
        init,
        cleanupAll,

        // Particles
        startParticles,
        stopParticles,

        // Stars
        createStars,

        // Hearts
        startFloatingHearts,
        stopFloatingHearts,

        // Petals
        createFloatingPetals,
        stopFloatingPetals,

        // Rain
        createRain,
        stopRain,

        // Confetti
        createConfetti,
        createSmallConfetti,

        // Burst / Pulse
        createBurstParticles,
        createPulseWave,
        createSmallBurst,

        // Declaration
        createDeclarationParticles,

        // Celebration
        createCelebrationHearts,

        // Door
        startDoorAmbient,
        stopDoorAmbient,

        // Embers
        startEmbers,
        stopEmbers,

        // Shooting Stars
        startShootingStars,
        stopShootingStars,

        // Ambient
        setAmbientColors,
        activateAmbientBlobs,

        // Section Manager
        startSectionEffects,
        stopSectionEffects,
        setEraEffects,

        // Performance info
        getPerf: () => PERF,
    };

})();

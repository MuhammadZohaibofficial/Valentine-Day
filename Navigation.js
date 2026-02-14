/* 
====================================================================
   ZOHAIB KI DUNIYA - NAVIGATION & LOGIC ENGINE
   Handles flow, password, quiz scoring, and finale unlocking.
====================================================================
*/

// --- STATE MANAGEMENT ---
const STATE = {
    currentScreen: 'preloader',
    isDoorUnlocked: localStorage.getItem('isDoorUnlocked') === 'true',
    visitedSections: JSON.parse(localStorage.getItem('visitedSections')) || [],
    quizScore: 0,
    musicPlaying: false,
    canUnlockFinale: false
};

// --- DOM ELEMENTS (Cached for Performance) ---
const DOM = {
    screens: document.querySelectorAll('.screen'),
    preloader: document.getElementById('preloader'),
    doorScene: document.getElementById('door-scene'),
    passwordInput: document.getElementById('password-input'),
    mainMenu: document.getElementById('main-menu'),
    backBtn: document.getElementById('back-btn'),
    music: document.getElementById('bg-music'),
    finaleCard: document.getElementById('finale-card'),
    progressBar: document.getElementById('reading-progress')
};

// ============================================================
// 1. INITIALIZATION & LOADING (15s Sequence)
// ============================================================

window.onload = () => {
    // If already unlocked, skip to menu (optional, currently disabled for experience)
    // if (STATE.isDoorUnlocked) { showScreen('main-menu'); return; }

    startPreloaderSequence();
};

function startPreloaderSequence() {
    const totalTime = CONFIG.timing.preloaderDuration; // 15000ms
    const bar = document.getElementById('loading-fill');
    const textEl = document.getElementById('loading-text');
    const percentEl = document.getElementById('loading-percent');
    
    let startTime = Date.now();
    let msgIndex = 0;

    // A. Animate Loading Bar
    bar.style.transition = `width ${totalTime}ms linear`;
    setTimeout(() => { bar.style.width = '100%'; }, 100);

    // B. Loop Messages & Percent
    const interval = setInterval(() => {
        let elapsed = Date.now() - startTime;
        let progress = Math.min((elapsed / totalTime) * 100, 100);
        
        percentEl.innerText = Math.round(progress) + "%";

        // Change text every ~2.5s
        let currentMsgIndex = Math.floor((progress / 100) * CONTENT.loadingMessages.length);
        if (currentMsgIndex !== msgIndex && currentMsgIndex < CONTENT.loadingMessages.length) {
            msgIndex = currentMsgIndex;
            // Fade out, change, fade in
            textEl.style.opacity = 0;
            setTimeout(() => {
                textEl.innerText = CONTENT.loadingMessages[msgIndex];
                textEl.style.opacity = 1;
            }, 300);
        }

        if (progress >= 100) {
            clearInterval(interval);
            finishLoading();
        }
    }, 100);
}

function finishLoading() {
    // Attempt to play music (browser might block)
    playMusic();
    
    // Transition to Opening Sequence (Stars)
    showScreen('opening-scene');
    
    // Start Typewriter Effect for Opening Text
    setTimeout(() => {
        Effects.typewriterSequence(
            ["Ek kahani...", "Jo shuru hui thi...", "Ek like se...", "Aur aaj..."],
            'opening-text-container',
            () => {
                // After text done, show Door
                setTimeout(() => showScreen('door-scene'), 2000);
            }
        );
    }, 1000);
}

// ============================================================
// 2. DOOR LOGIC (PASSWORD & UNLOCKING)
// ============================================================

// Listen for Enter key
DOM.passwordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkPassword();
});

// Also trigger on door tap (if locked)
document.getElementById('main-door').addEventListener('click', (e) => {
    if (!STATE.isDoorUnlocked && e.target.closest('.lock-mechanism')) {
        // Shake animation
        const door = document.getElementById('main-door');
        door.style.animation = 'shakeDoor 0.5s';
        setTimeout(() => door.style.animation = '', 500);
        
        // Show "Locked" message
        showHint("Pehle naam toh likho...");
    }
});

function checkPassword() {
    const input = DOM.passwordInput.value.toLowerCase().trim();
    const correct = CONFIG.password;

    if (input === correct) {
        // SUCCESS
        unlockDoorSequence();
    } else {
        // FAILURE
        wrongPasswordEffect();
    }
}

function wrongPasswordEffect() {
    const inputArea = document.getElementById('password-area');
    const door = document.getElementById('main-door');
    
    // 1. Shake Input
    inputArea.classList.add('shake-error');
    
    // 2. Red Flash
    document.body.style.backgroundColor = '#3d0000'; // Brief red flash
    setTimeout(() => document.body.style.backgroundColor = '', 200);

    // 3. Show Hint
    let hintText = CONTENT.door.hints[Math.floor(Math.random() * CONTENT.door.hints.length)];
    showHint(hintText);
    
    // 4. Clear Input
    DOM.passwordInput.value = '';
    setTimeout(() => inputArea.classList.remove('shake-error'), 500);
}

function showHint(msg) {
    const el = document.getElementById('hint-msg');
    el.innerText = msg;
    el.style.opacity = 1;
    setTimeout(() => el.style.opacity = 0, 4000);
}

function unlockDoorSequence() {
    STATE.isDoorUnlocked = true;
    localStorage.setItem('isDoorUnlocked', 'true');
    
    // 1. Hide Input
    document.getElementById('password-area').style.opacity = 0;
    
    // 2. Play Unlock Sound (Visual)
    Effects.createSparkles(window.innerWidth/2, window.innerHeight/2);
    
    // 3. Open Door Animation (CSS Class)
    const doorScene = document.getElementById('door-scene');
    doorScene.classList.add('door-open'); // Triggers CSS transform
    
    // 4. Light Flood (Wait for door to open a bit)
    setTimeout(() => {
        document.getElementById('light-flood').style.opacity = 1;
    }, 1000);

    // 5. Show Welcome Text inside Light
    setTimeout(() => {
        showScreen('welcome-scene');
        Effects.revealText(CONTENT.door.welcomeSequence, 'welcome-text-container', () => {
            setTimeout(() => showScreen('main-menu'), 2000);
        });
    }, 4000); // Wait for door opening
}

// ============================================================
// 3. NAVIGATION & SECTIONS
// ============================================================

function showScreen(screenId) {
    // Hide all
    DOM.screens.forEach(s => s.classList.remove('active'));
    
    // Show target
    const target = document.getElementById(screenId);
    if (target) {
        target.classList.add('active');
        STATE.currentScreen = screenId;
    }
}

// Global Back Button Logic
DOM.backBtn.addEventListener('click', () => {
    // Close any open content section
    document.querySelectorAll('.content-section').forEach(el => el.classList.remove('open'));
    DOM.backBtn.style.display = 'none';
    
    // Show Menu
    showScreen('main-menu');
    
    // Check for Finale Unlock
    checkFinaleStatus();
});

function navigateTo(section) {
    // Mark as visited
    if (!STATE.visitedSections.includes(section)) {
        STATE.visitedSections.push(section);
        localStorage.setItem('visitedSections', JSON.stringify(STATE.visitedSections));
    }

    // Open Section Container
    const secEl = document.getElementById(`section-${section}`);
    secEl.classList.add('open');
    DOM.backBtn.style.display = 'flex';

    // Load Content dynamically based on section
    if (section === 'kahani') loadKahani();
    if (section === 'romance') loadRomance();
    if (section === 'quiz') loadQuiz();
    if (section === 'future') loadFuture();
}

// ============================================================
// 4. CONTENT LOADERS (Inject HTML)
// ============================================================

function loadKahani() {
    const container = document.getElementById('kahani-content');
    container.innerHTML = ''; // Clear previous

    CONTENT.story.forEach((era, index) => {
        // Create Era Block
        let html = `
            <div class="era-block" style="opacity: 0; animation: fadeInUp 1s forwards ${index * 0.5}s;">
                <h2 style="font-size: 2rem; color: var(--gold-bright); margin-top: 40px;">${era.year}</h2>
                <h3 style="color: var(--text-dim); margin-bottom: 20px;">${era.title}</h3>
                
                <div class="prose">
                    ${era.text.map(p => `<p>${p}</p>`).join('')}
                </div>

                <div class="poetry">
                    ${era.poetry.map(line => `<div>${line}</div>`).join('')}
                </div>
                
                <div style="width: 50px; height: 2px; background: var(--gold-dim); margin: 40px auto;"></div>
            </div>
        `;
        container.innerHTML += html;
    });
    
    // Add bottom padding
    container.innerHTML += `<div style="text-align:center; padding: 20px; color: var(--text-dim);">Safar jaari hai...</div>`;
}

function loadRomance() {
    const container = document.getElementById('romance-content');
    container.innerHTML = `<h1 style="text-align:center; margin-top: 20px;">Romance Ka Darbar</h1>`;

    CONTENT.romance.forEach((chamber, index) => {
        let html = `
            <div class="chamber-block" style="background: rgba(61, 0, 0, 0.2); padding: 20px; border-radius: 10px; margin-bottom: 30px; border-left: 2px solid var(--red-deep);">
                <h3 style="color: var(--red-bright);">${chamber.title}</h3>
                <p class="prose">${chamber.text}</p>
                <div class="poetry" style="color: #ffcccc;">
                    ${chamber.poetry.split('\n').join('<br>')}
                </div>
            </div>
        `;
        container.innerHTML += html;
    });
}

// ============================================================
// 5. QUIZ LOGIC
// ============================================================
let currentQuestionIndex = 0;
let quizScore = 0;

function loadQuiz() {
    currentQuestionIndex = 0;
    quizScore = 0;
    showQuestion(0);
}

function showQuestion(index) {
    const container = document.getElementById('quiz-container');
    const qData = CONTENT.quiz[index];

    if (!qData) {
        showQuizResult();
        return;
    }

    let html = `
        <div class="quiz-card" style="text-align: center; animation: slideInRight 0.5s;">
            <div style="font-size: 0.9rem; color: var(--text-dim); margin-bottom: 10px;">
                Sawaal ${index + 1} / ${CONTENT.quiz.length}
            </div>
            
            <h3 style="margin-bottom: 30px;">${qData.q}</h3>
            
            <div class="options-grid">
                ${qData.options.map((opt, i) => `
                    <button class="quiz-opt-btn" onclick="handleAnswer(${index}, ${i})">${opt}</button>
                `).join('')}
            </div>
        </div>
    `;
    container.innerHTML = html;
}

window.handleAnswer = (qIndex, pickedIndex) => {
    const qData = CONTENT.quiz[qIndex];
    const isCorrect = pickedIndex === qData.correct;
    
    if (isCorrect) quizScore++;

    // Show Feedback (Simple Alert replacement with custom UI later if needed)
    // For now, we move to next immediately or show small feedback
    
    // Next Question
    setTimeout(() => {
        showQuestion(qIndex + 1);
    }, 500);
};

function showQuizResult() {
    const container = document.getElementById('quiz-container');
    let msg = "";
    if (quizScore > 15) msg = "TUJHE MUJHSE ZYADA MERI KHABAR HAI 😭♥";
    else if (quizScore > 10) msg = "Bohot kuch jaanti ho... ALMOST perfect 😏";
    else msg = "Lagta hai aur date pe jaana padega 😂";

    container.innerHTML = `
        <div style="text-align: center; margin-top: 50px;">
            <h1>Nateeja</h1>
            <h2 style="font-size: 4rem; color: var(--gold-bright);">${quizScore} / 20</h2>
            <p class="prose">${msg}</p>
            <button onclick="DOM.backBtn.click()" style="padding: 10px 20px; background: var(--gold-dim); border: none; color: #000; font-weight: bold; margin-top: 20px;">Wapas Chalo</button>
        </div>
    `;
    
    // Mark section as visited for Finale
    if (!STATE.visitedSections.includes('quiz')) {
        STATE.visitedSections.push('quiz');
        localStorage.setItem('visitedSections', JSON.stringify(STATE.visitedSections));
    }
}

// ============================================================
// 6. FUTURE & FINALE LOGIC
// ============================================================

function loadFuture() {
    const container = document.getElementById('future-content');
    container.innerHTML = '';
    
    CONTENT.future.forEach(page => {
        container.innerHTML += `
            <div style="margin-bottom: 60px;">
                <h2 style="color: #ff7f50;">${page.title}</h2>
                <p class="prose">${page.text}</p>
                <div class="poetry">${page.poetry.split('\n').join('<br>')}</div>
            </div>
        `;
    });
}

function checkFinaleStatus() {
    // Check if Kahani, Romance, Quiz, Future are visited
    const required = ['kahani', 'romance', 'quiz', 'future'];
    const completed = required.every(r => STATE.visitedSections.includes(r));
    
    if (completed) {
        DOM.finaleCard.classList.add('unlocked');
        document.getElementById('finale-icon').className = 'fas fa-unlock';
        document.getElementById('finale-subtitle').innerText = "Tayyar ho? Andar aao...";
        STATE.canUnlockFinale = true;
    }
}

window.attemptFinale = () => {
    if (!STATE.canUnlockFinale) {
        // Shake if locked
        DOM.finaleCard.style.animation = 'shakeDoor 0.4s';
        setTimeout(() => DOM.finaleCard.style.animation = '', 400);
        return;
    }
    
    navigateTo('finale');
    playFinaleSequence();
};

function playFinaleSequence() {
    const container = document.getElementById('finale-content');
    
    // Phase 1: Darkness & Truth
    container.innerHTML = `<h1 style="font-size: 3rem;">Iqra...</h1>`;
    
    // ... Complex sequence logic would go here (using setTimeout chain)
    // Simplified for this file:
    setTimeout(() => {
        container.innerHTML = `<div class="prose" style="white-space: pre-wrap;">${CONTENT.finale.letter}</div>`;
    }, 4000);
    
    setTimeout(() => {
        container.innerHTML += `
            <h1 style="font-size: 4rem; color: var(--gold-bright); margin-top: 50px; animation: pulseGlow 2s infinite;">${CONTENT.finale.declaration}</h1>
            <p>${CONTENT.finale.subDeclaration}</p>
            <div style="margin-top: 50px; font-size: 0.8rem; opacity: 0.5;">(Tap 7 times on Heart for a secret)</div>
        `;
        Effects.createConfetti(); // Celebration!
    }, 10000);
}


// --- UTILITIES ---
function playMusic() {
    if (!STATE.musicPlaying) {
        DOM.music.volume = CONFIG.musicVolume;
        DOM.music.play().then(() => {
            STATE.musicPlaying = true;
        }).catch(e => console.log("Audio blocked until interaction"));
    }
}

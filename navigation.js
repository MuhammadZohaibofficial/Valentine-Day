/* ══════════════════════════════════════════════
   IQRA KI DUNIYA — NAVIGATION & LOGIC
   Valentine's Day Web App
   ══════════════════════════════════════════════ */


/* ═══════════════════════════════════════
   SECTION 1: TIMING CONFIG
   ═══════════════════════════════════════ */

const TIMING = {
    // Preloader
    preloaderDuration: 5000,
    preloaderMsgInterval: 1200,

    // Opening
    openingLineDelay: 2500,
    openingCharSpeed: 40,
    openingToDoortransition: 2000,

    // Door
    doorOpenDuration: 10000,
    doorShakeDuration: 500,
    wrongMsgDuration: 2500,
    hintShowDelay: 500,

    // Welcome
    welcomeLineDelay: 1500,
    welcomeNamePause: 2500,
    welcomeToMenu: 2000,

    // Menu
    portalStagger: 300,

    // Content Reveal
    paraRevealDelay: 1500,
    poetryRevealDelay: 1800,
    ghazalRevealDelay: 3000,
    dividerDrawDelay: 800,

    // Section Intro
    sectionIntroDisplay: 2500,

    // Era / Page
    eraTransition: 500,

    // Quiz
    quizOptionStagger: 250,
    quizFeedbackDelay: 400,
    quizNextDelay: 1500,
    quizCategoryDisplay: 2000,
    quizBetweenQ: 400,
    quizScoreCountSpeed: 80,

    // Mustaqbil
    mqTransition: 800,

    // Finale
    fp1BeatInterval: 1800,
    fp1BeatFastInterval: 700,
    fp1Duration: 10000,
    fp2FlashDuration: 1500,
    fp2SpeedUp: true,
    fp3LineDelay: 2500,
    fp4LineDelay: 2500,
    fp5BuildDuration: 3000,
    fp5TextDelay: 1000,
    fp5SubLineDelay: 1500,
    fp6ConfettiDuration: 8000,

    // General
    sceneTransition: 1200,
    backButtonDelay: 500,
    rippleDuration: 600,
    scrollPromptDelay: 3000,
    swipeThreshold: 50,
};


/* ═══════════════════════════════════════
   SECTION 2: APP STATE
   ═══════════════════════════════════════ */

const STATE = {
    currentScene: 'preloader-scene',
    previousScene: null,
    sceneHistory: [],

    // Door
    doorUnlocked: false,
    wrongAttempts: 0,
    hintIndex: 0,
    doorOpening: false,

    // Sections visited
    visited: {
        kahani: false,
        romance: false,
        mohabbat: false,
        quiz: false,
        mustaqbil: false,
        finale: false
    },

    // Era tracking
    currentEra: 1,
    erasVisited: new Set(),

    // Romance tracking
    romanceVisited: new Set(),

    // Mohabbat tracking
    mohabbatVisited: new Set(),

    // Quiz
    quizStarted: false,
    quizCurrentQ: 0,
    quizScore: 0,
    quizAnswered: false,
    quizCompleted: false,

    // Mustaqbil
    currentMqPage: 1,
    mqPagesVisited: new Set(),

    // Finale
    finaleUnlocked: false,
    currentFinalePhase: 1,
    finaleCompleted: false,

    // Easter egg
    monogramTaps: 0,
    easterEggSeen: false,

    // UI
    swipeHintShown: false,
    scrollPromptShown: false,

    // Content reveal
    revealTimers: [],

    // Intervals
    activeIntervals: [],
    activeTimeouts: [],
};


/* ═══════════════════════════════════════
   SECTION 3: UTILITY FUNCTIONS
   ═══════════════════════════════════════ */

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function clearAllTimers() {
    STATE.activeTimeouts.forEach(t => clearTimeout(t));
    STATE.activeIntervals.forEach(i => clearInterval(i));
    STATE.activeTimeouts = [];
    STATE.activeIntervals = [];
    STATE.revealTimers.forEach(t => clearTimeout(t));
    STATE.revealTimers = [];
}

function addTimeout(fn, delay) {
    const t = setTimeout(fn, delay);
    STATE.activeTimeouts.push(t);
    return t;
}

function addInterval(fn, delay) {
    const i = setInterval(fn, delay);
    STATE.activeIntervals.push(i);
    return i;
}

function createRipple(e, container) {
    const rippleEl = document.createElement('div');
    rippleEl.className = 'ripple';
    const rect = container ? container.getBoundingClientRect() : { left: 0, top: 0 };
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
    rippleEl.style.left = x + 'px';
    rippleEl.style.top = y + 'px';
    rippleEl.style.width = '60px';
    rippleEl.style.height = '60px';
    rippleEl.style.marginLeft = '-30px';
    rippleEl.style.marginTop = '-30px';
    const rippleContainer = $('#ripple-container');
    rippleContainer.appendChild(rippleEl);
    setTimeout(() => rippleEl.remove(), TIMING.rippleDuration);
}

function setBodyClass(cls) {
    document.body.className = '';
    if (cls) document.body.classList.add(cls);
}

function showElement(el) {
    if (typeof el === 'string') el = $(el);
    if (el) el.classList.remove('hidden');
}

function hideElement(el) {
    if (typeof el === 'string') el = $(el);
    if (el) el.classList.add('hidden');
}

function checkAllSectionsComplete() {
    const allDone =
        STATE.visited.kahani &&
        STATE.visited.romance &&
        STATE.visited.mohabbat &&
        STATE.visited.quiz &&
        STATE.visited.mustaqbil;
    return allDone;
}


/* ═══════════════════════════════════════
   SECTION 4: SCENE MANAGER
   ═══════════════════════════════════════ */

function switchScene(newSceneId, pushHistory = true) {
    const currentScene = $(`.scene.active`);
    const newScene = $(`#${newSceneId}`);

    if (!newScene) return;
    if (currentScene && currentScene.id === newSceneId) return;

    if (pushHistory && STATE.currentScene) {
        STATE.sceneHistory.push(STATE.currentScene);
    }

    STATE.previousScene = STATE.currentScene;
    STATE.currentScene = newSceneId;

    // Fade out current
    if (currentScene) {
        currentScene.classList.remove('active');
    }

    // Fade in new
    setTimeout(() => {
        newScene.classList.add('active');
    }, 50);

    // Back button visibility
    const noBackScenes = ['preloader-scene', 'opening-scene', 'door-scene', 'welcome-scene'];
    if (noBackScenes.includes(newSceneId)) {
        hideElement('#back-button');
    } else {
        showElement('#back-button');
    }

    // Monogram visibility
    const monoScenes = ['menu-scene', 'kahani-scene', 'era-content-scene', 'romance-scene',
        'romance-content-scene', 'mohabbat-scene', 'mohabbat-content-scene',
        'quiz-intro-scene', 'quiz-scene', 'quiz-score-scene',
        'mustaqbil-scene', 'finale-scene'];
    if (monoScenes.includes(newSceneId)) {
        showElement('#monogram');
    } else {
        hideElement('#monogram');
    }

    // Reading progress bar
    updateReadingProgress(0);

    // Save progress
    saveProgress();
}

function goBack() {
    if (STATE.sceneHistory.length === 0) return;

    // Special back logic
    const current = STATE.currentScene;

    // From content scenes → go to their list scene
    if (current === 'era-content-scene') {
        switchScene('kahani-scene', false);
        STATE.sceneHistory.pop();
        return;
    }
    if (current === 'romance-content-scene') {
        switchScene('romance-scene', false);
        STATE.sceneHistory.pop();
        return;
    }
    if (current === 'mohabbat-content-scene') {
        switchScene('mohabbat-scene', false);
        STATE.sceneHistory.pop();
        return;
    }

    // From list/quiz/mustaqbil scenes → menu
    const toMenuScenes = ['kahani-scene', 'romance-scene', 'mohabbat-scene',
        'quiz-intro-scene', 'quiz-scene', 'quiz-score-scene', 'mustaqbil-scene', 'finale-scene'];
    if (toMenuScenes.includes(current)) {
        setBodyClass('');
        switchScene('menu-scene', false);
        STATE.sceneHistory = ['menu-scene'];
        updateMenuState();
        return;
    }

    // Default: go to last in history
    const prev = STATE.sceneHistory.pop();
    switchScene(prev, false);
}


/* ═══════════════════════════════════════
   SECTION 5: PRELOADER
   ═══════════════════════════════════════ */

function startPreloader() {
    const barFill = $('#bar-fill');
    const percentEl = $('#preloader-percent');
    const msgEl = $('#preloader-msg');

    const messages = CONTENT.preloaderMessages || [
        'Kuch khaas ban raha hai...',
        'Tumhare liye...',
        'Bas ek lamha aur...',
        'Tayyar ho jao...'
    ];

    let progress = 0;
    let msgIndex = 0;

    // Message rotation
    const msgInterval = addInterval(() => {
        msgIndex = (msgIndex + 1) % messages.length;
        msgEl.style.opacity = '0';
        msgEl.style.transform = 'translateY(5px)';
        setTimeout(() => {
            msgEl.textContent = messages[msgIndex];
            msgEl.style.opacity = '1';
            msgEl.style.transform = 'translateY(0)';
        }, 300);
    }, TIMING.preloaderMsgInterval);

    // Progress bar fill
    const progressInterval = addInterval(() => {
        progress += 1;
        if (progress > 100) progress = 100;
        barFill.style.width = progress + '%';
        percentEl.textContent = progress + '%';

        if (progress >= 100) {
            clearInterval(progressInterval);
            clearInterval(msgInterval);

            // Exit preloader
            addTimeout(() => {
                const preloader = $('#preloader-scene');
                preloader.classList.add('exiting');

                addTimeout(() => {
                    preloader.classList.remove('active');
                    preloader.classList.remove('exiting');
                    startOpeningCinematic();
                }, 800);
            }, 500);
        }
    }, TIMING.preloaderDuration / 100);
}


/* ═══════════════════════════════════════
   SECTION 6: OPENING CINEMATIC
   ═══════════════════════════════════════ */

function startOpeningCinematic() {
    switchScene('opening-scene', false);

    // Create stars
    if (typeof Effects !== 'undefined' && Effects.createStars) {
        Effects.createStars($('#stars-container'), 40);
    }

    const lines = CONTENT.opening || [
        { text: 'Kuch alfaaz hain jo maine kabhi keh nahi paaya...', cls: '' },
        { text: 'Kuch jazbaat hain jo lafzon mein nahi samatte...', cls: '' },
        { text: 'Aaj raat... main woh sab keh dunga.', cls: '' },
        { text: 'Yeh sirf ek website nahi...', cls: 'big' },
        { text: 'Yeh meri duniya hai.', cls: 'big' },
        { text: 'Aur iss duniya ka darwaza... sirf TERE naam se khulta hai.', cls: 'biggest' }
    ];

    const container = $('#opening-lines');
    container.innerHTML = '';

    let totalDelay = 1000; // initial pause

    lines.forEach((line, i) => {
        const lineEl = document.createElement('div');
        lineEl.className = `o-line ${line.cls || ''}`.trim();
        lineEl.textContent = line.text;
        container.appendChild(lineEl);

        // Show this line
        addTimeout(() => {
            lineEl.classList.add('visible');

            // Dim previous lines
            if (i > 0) {
                const prevLines = container.querySelectorAll('.o-line');
                prevLines.forEach((pl, pi) => {
                    if (pi < i) pl.classList.add('dim');
                });
            }
        }, totalDelay);

        totalDelay += TIMING.openingLineDelay;
    });

    // After all lines → transition to door
    addTimeout(() => {
        // Fade all lines
        container.querySelectorAll('.o-line').forEach(l => {
            l.style.opacity = '0';
            l.style.transition = 'opacity 1s ease';
        });

        addTimeout(() => {
            startDoorScene();
        }, TIMING.openingToDoortransition);
    }, totalDelay + 1000);
}


/* ═══════════════════════════════════════
   SECTION 7: DOOR SYSTEM
   ═══════════════════════════════════════ */

function startDoorScene() {
    switchScene('door-scene', false);

    // Start candle particles if effects available
    if (typeof Effects !== 'undefined' && Effects.startDoorAmbient) {
        Effects.startDoorAmbient();
    }
}

// Door tap (on door frame, not input)
function handleDoorTap(e) {
    if (STATE.doorOpening) return;
    if (STATE.doorUnlocked) return;

    const doorFrame = $('#door-frame');
    const lock = $('#door-lock');
    const tapMsg = $('#door-tap-msg');

    // Shake door
    doorFrame.classList.remove('shake');
    void doorFrame.offsetWidth; // reflow
    doorFrame.classList.add('shake');

    // Rattle lock
    lock.classList.remove('rattle');
    void lock.offsetWidth;
    lock.classList.add('rattle');

    // Show tap message
    tapMsg.classList.remove('hidden', 'show');
    void tapMsg.offsetWidth;
    tapMsg.classList.add('show');

    addTimeout(() => {
        doorFrame.classList.remove('shake');
        lock.classList.remove('rattle');
    }, TIMING.doorShakeDuration);

    addTimeout(() => {
        tapMsg.classList.remove('show');
        tapMsg.classList.add('hidden');
    }, 3000);
}

// Submit password
function handlePasswordSubmit() {
    if (STATE.doorOpening) return;
    if (STATE.doorUnlocked) return;

    const input = $('#password-input');
    const value = input.value.trim().toLowerCase();
    const password = (CONTENT.password || 'zubi').toLowerCase();

    if (!value) {
        input.classList.add('shake');
        addTimeout(() => input.classList.remove('shake'), 500);
        return;
    }

    if (value === password) {
        // CORRECT
        STATE.doorUnlocked = true;
        input.classList.add('correct');
        startDoorOpeningSequence();
    } else {
        // WRONG
        STATE.wrongAttempts++;
        wrongPassword();
    }
}

function wrongPassword() {
    const input = $('#password-input');
    const doorFrame = $('#door-frame');
    const lock = $('#door-lock');
    const wrongMsg = $('#wrong-msg');
    const hintBtn = $('#hint-btn');

    // Strong shake
    doorFrame.classList.remove('shake-strong');
    void doorFrame.offsetWidth;
    doorFrame.classList.add('shake-strong');

    // Input wrong animation
    input.classList.add('wrong');

    // Lock red flash handled by CSS

    // Show wrong message
    const messages = CONTENT.wrongMessages || [
        'Yeh naam nahi... sochein phir se.',
        'Itna bhi mushkil nahi... hint lein?',
        'Dil se socho...'
    ];

    const msgIndex = Math.min(STATE.wrongAttempts - 1, messages.length - 1);
    wrongMsg.textContent = messages[msgIndex];
    wrongMsg.classList.remove('hidden');
    wrongMsg.style.opacity = '0';
    wrongMsg.style.transform = 'translateY(10px)';

    requestAnimationFrame(() => {
        wrongMsg.style.opacity = '1';
        wrongMsg.style.transform = 'translateY(0)';
        wrongMsg.style.transition = 'all 0.4s ease';
    });

        // Show hint button after first wrong
    if (STATE.wrongAttempts >= 1) {
        hintBtn.classList.remove('hidden');
        hintBtn.style.opacity = '1';
        hintBtn.textContent = 'Hint?';
}

    // Clear
    addTimeout(() => {
        input.value = '';
        input.classList.remove('wrong');
        doorFrame.classList.remove('shake-strong');
    }, 600);

    addTimeout(() => {
        wrongMsg.style.opacity = '0';
        addTimeout(() => wrongMsg.classList.add('hidden'), 300);
    }, TIMING.wrongMsgDuration);
}

function showHint() {
    const hints = CONTENT.hints || [
        'Woh 4 huroof ka pyaara sa naam...',
        'Z se shuru... I pe khatam.',
        'Z + U + B + I = ?'
    ];

    const hintBox = $('#hint-box');
    const index = Math.min(STATE.hintIndex, hints.length - 1);

    hintBox.innerHTML = hints[index];
    hintBox.classList.remove('hidden');

    // Reset animation
    hintBox.style.opacity = '0';
    hintBox.style.transform = 'translateY(10px)';
    requestAnimationFrame(() => {
        hintBox.style.opacity = '1';
        hintBox.style.transform = 'translateY(0)';
        hintBox.style.transition = 'all 0.5s ease';
    });

    if (STATE.hintIndex < hints.length - 1) {
        STATE.hintIndex++;
    }
}

// ── 10-Second Door Opening Sequence ──

function startDoorOpeningSequence() {
    STATE.doorOpening = true;
    const lock = $('#door-lock');
    const chainL = $('#chain-left');
    const chainR = $('#chain-right');
    const panelL = $('#panel-left');
    const panelR = $('#panel-right');
    const doorFrame = $('#door-frame');
    const seam = $('.door-seam');
    const rays = $('#door-rays');
    const bgLight = $('.door-bg-light');
    const flameL = $('.candle-left .candle-flame-wrap');
    const flameR = $('.candle-right .candle-flame-wrap');
    const inputArea = $('#door-input-area');
    const fog = $('.door-fog');
    const doorWelcome = $('#door-welcome');
    const doorScene = $('#door-scene');

    // SECOND 0-1: Confirmation
    addTimeout(() => {
        lock.classList.add('glow-intense');
        inputArea.style.opacity = '0.3';
        inputArea.style.transition = 'opacity 1s ease';
    }, 500);

    // SECOND 1-3: Lock Breaking
    addTimeout(() => {
        // Chains dissolve
        chainL.classList.add('dissolving');
        chainR.classList.add('dissolving');
    }, 1000);

    addTimeout(() => {
        // Lock overloads then falls
        lock.classList.add('falling');

        // Screen mini shake
        doorFrame.style.transform = 'translateY(2px)';
        addTimeout(() => {
            doorFrame.style.transform = 'translateY(-1px)';
            addTimeout(() => {
                doorFrame.style.transform = 'translateY(0)';
            }, 100);
        }, 100);

        // Pulse wave
        if (typeof Effects !== 'undefined' && Effects.createPulseWave) {
            Effects.createPulseWave();
        }
    }, 2000);

    // SECOND 3-5: Door Preparing
    addTimeout(() => {
        // Seam blazing
        seam.classList.add('blazing');

        // Rays appear
        rays.classList.add('active');

        // Door panels vibrate slightly (CSS handles via class)
        panelL.style.animation = 'none';
        panelR.style.animation = 'none';

        // Fog clears
        fog.style.opacity = '0';
        fog.style.transition = 'opacity 1.5s ease';

        // Candle flames lean away
        flameL.classList.add('wind');
        flameR.classList.add('wind');

        // Input area hide
        inputArea.style.opacity = '0';
        inputArea.style.pointerEvents = 'none';

        // Background light starts
        bgLight.classList.add('flooding');
    }, 3000);

    // SECOND 5-8: Door Opens
    addTimeout(() => {
        // Panels swing open
        panelL.classList.add('opening');
        panelR.classList.add('opening');

        // Burst particles
        if (typeof Effects !== 'undefined' && Effects.createBurstParticles) {
            Effects.createBurstParticles($('#door-burst-particles'), 80);
        }

        // Full screen warm overlay
        addTimeout(() => {
            doorScene.classList.add('light-flood');
        }, 1500);
    }, 5000);

    // SECOND 8-10: Welcome text + transition
    addTimeout(() => {
        // Show door welcome text
        doorWelcome.classList.remove('hidden');

        // Transition to welcome sequence
        addTimeout(() => {
            startWelcomeSequence();
        }, 2500);
    }, 8000);
}


/* ═══════════════════════════════════════
   SECTION 8: WELCOME SEQUENCE
   ═══════════════════════════════════════ */

function startWelcomeSequence() {
    switchScene('welcome-scene', false);

    const lines = CONTENT.welcome || [
        { text: 'Iqra...', cls: 'name-line' },
        { text: 'Tumne darwaza khol diya...', cls: '' },
        { text: 'Iska matlab tum jaanti ho...', cls: '' },
        { text: 'Ki yeh jagah sirf TUMHARI hai.', cls: '' },
        { text: '', cls: 'spacer' }, // pause
        { text: 'Yahan har lafz tumhare liye hai.', cls: '' },
        { text: 'Har rang tumhare naam ka hai.', cls: '' },
        { text: 'Har dhadkan tumhari awaaz hai.', cls: '' },
        { text: '', cls: 'spacer' }, // pause
        { text: 'Chalo... andar chalo.', cls: 'final-line' }
    ];

    const container = $('#welcome-lines');
    container.innerHTML = '';

    let totalDelay = 800;

    lines.forEach((line, i) => {
        if (line.cls === 'spacer') {
            totalDelay += 1500; // extra pause
            return;
        }

        const lineEl = document.createElement('div');
        lineEl.className = `w-line ${line.cls || ''}`.trim();
        lineEl.textContent = line.text;
        container.appendChild(lineEl);

        addTimeout(() => {
            lineEl.classList.add('visible');
        }, totalDelay);

        // Name line gets longer pause
        if (line.cls === 'name-line') {
            totalDelay += TIMING.welcomeNamePause;
        } else {
            totalDelay += TIMING.welcomeLineDelay;
        }
    });

    // After all lines → go to menu
    addTimeout(() => {
        startMenu();
    }, totalDelay + TIMING.welcomeToMenu);
}


/* ═══════════════════════════════════════
   SECTION 9: MENU SYSTEM
   ═══════════════════════════════════════ */

function startMenu() {
    setBodyClass('');
    switchScene('menu-scene', false);
    STATE.sceneHistory = [];

    // Staggered portal card animation
    const cards = $$('.portal-card');
    cards.forEach((card, i) => {
        card.classList.remove('visible', 'floating');
        addTimeout(() => {
            card.classList.add('visible');
            addTimeout(() => {
                card.classList.add('floating');
            }, 600);
        }, TIMING.portalStagger * i + 300);
    });

    updateMenuState();
}

function updateMenuState() {
    // Update checkmarks
    Object.keys(STATE.visited).forEach(section => {
        if (STATE.visited[section]) {
            const card = $(`.portal-card[data-section="${section}"]`);
            if (card) {
                const check = card.querySelector('.p-check');
                if (check) {
                    check.classList.remove('hidden');
                    check.classList.add('visible');
                }
            }
        }
    });

    // Check finale unlock
    if (checkAllSectionsComplete() && !STATE.finaleUnlocked) {
        unlockFinale();
    }
}

function unlockFinale() {
    STATE.finaleUnlocked = true;
    const finalePortal = $('#finale-portal');

    finalePortal.classList.remove('portal-locked');
    finalePortal.classList.add('portal-unlocking');

    // Update text
    const lockMsg = finalePortal.querySelector('.finale-lock-msg');
    if (lockMsg) lockMsg.textContent = 'Tayyar ho? Andar aao...';

    // Remove lock badge
    const lockBadge = finalePortal.querySelector('.p-lock-badge');
    if (lockBadge) lockBadge.style.display = 'none';

    // Burst effect
    if (typeof Effects !== 'undefined' && Effects.createSmallBurst) {
        Effects.createSmallBurst(finalePortal);
    }

    saveProgress();
}

function handlePortalTap(section, e) {
    // Ripple
    createRipple(e, e.currentTarget);

    // Locked finale check
    if (section === 'finale' && !STATE.finaleUnlocked) {
        const card = e.currentTarget;
        card.style.animation = 'none';
        void card.offsetWidth;
        card.style.animation = 'doorShake 0.5s ease';
        return;
    }

    // Show section intro then navigate
    showSectionIntro(section, () => {
        navigateToSection(section);
    });
}

function showSectionIntro(section, callback) {
    const introData = {
        kahani: { num: 'SECTION 1', title: '🕰️ Hamari Kahani', tag: 'Waqt ke safar mein kho jao...' },
        romance: { num: 'SECTION 2', title: '🌹 Romance Ka Darbar', tag: 'Dil ki gehraaiyon mein...' },
        mohabbat: { num: 'SECTION 3', title: '❤️ Mohabbat Ka Darbar', tag: 'Dil ke kamron mein...' },
        quiz: { num: 'SECTION 4', title: '🧠 Kya Tum Mujhe Jaanti Ho?', tag: '20 sawaal... dekhte hain' },
        mustaqbil: { num: 'SECTION 5', title: '🌅 Mustaqbil Ka Sapna', tag: 'Aane wala kal...' },
        finale: { num: 'GRAND', title: '🎆 Finale', tag: 'Sab kuch yahan milta hai...' }
    };

    const data = introData[section];
    if (!data) {
        if (callback) callback();
        return;
    }

    const intro = $('#section-intro');
    intro.querySelector('.intro-number').textContent = data.num;
    intro.querySelector('.intro-title').textContent = data.title;
    intro.querySelector('.intro-tagline').textContent = data.tag;

    intro.classList.remove('hidden');
    intro.style.opacity = '0';
    requestAnimationFrame(() => {
        intro.style.opacity = '1';
        intro.style.transition = 'opacity 0.6s ease';
    });

    addTimeout(() => {
        intro.style.opacity = '0';
        addTimeout(() => {
            intro.classList.add('hidden');
            if (callback) callback();
        }, 600);
    }, TIMING.sectionIntroDisplay);
}

function navigateToSection(section) {
    switch (section) {
        case 'kahani':
            setBodyClass('sec-kahani');
            switchScene('kahani-scene');
            initEraList();
            break;
        case 'romance':
            setBodyClass('sec-romance');
            switchScene('romance-scene');
            initChamberList('.romance-chambers .chamber-card');
            break;
        case 'mohabbat':
            setBodyClass('sec-mohabbat');
            switchScene('mohabbat-scene');
            initChamberList('.mohabbat-chambers .chamber-card');
            break;
        case 'quiz':
            setBodyClass('sec-quiz');
            switchScene('quiz-intro-scene');
            break;
        case 'mustaqbil':
            setBodyClass('sec-mustaqbil');
            STATE.currentMqPage = 1;
            switchScene('mustaqbil-scene');
            loadMustaqbilPage(1);
            break;
        case 'finale':
            setBodyClass('sec-finale');
            switchScene('finale-scene');
            startFinale();
            break;
    }
}

// Show section complete overlay
function showSectionComplete(section) {
    STATE.visited[section] = true;

    const overlay = $('#section-complete');
    overlay.classList.remove('hidden');

    addTimeout(() => {
        overlay.classList.add('hidden');
        updateMenuState();
    }, 1500);
}


/* ═══════════════════════════════════════
   SECTION 10: CONTENT RENDERER
   ═══════════════════════════════════════ */

function renderContent(container, contentArray, callback) {
    if (typeof container === 'string') container = $(container);
    container.innerHTML = '';

    // Clear previous timers
    STATE.revealTimers.forEach(t => clearTimeout(t));
    STATE.revealTimers = [];

    if (!contentArray || contentArray.length === 0) return;

    let totalDelay = 600; // initial delay

    contentArray.forEach((item, index) => {
        let el;

        switch (item.type) {
            case 'para':
                el = document.createElement('div');
                el.className = 'content-para';
                el.innerHTML = item.text;
                container.appendChild(el);

                STATE.revealTimers.push(addTimeout(() => {
                    el.classList.add('visible');
                }, totalDelay));

                totalDelay += TIMING.paraRevealDelay;
                break;

            case 'poetry':
                el = document.createElement('div');
                el.className = 'content-poetry';
                el.innerHTML = item.lines.map(l => `<div class="sher">${l}</div>`).join('');
                container.appendChild(el);

                STATE.revealTimers.push(addTimeout(() => {
                    el.classList.add('visible');
                }, totalDelay));

                totalDelay += TIMING.poetryRevealDelay;
                break;

            case 'ghazal':
                // Golden divider first
                const divider = document.createElement('div');
                divider.className = 'golden-divider';
                container.appendChild(divider);

                STATE.revealTimers.push(addTimeout(() => {
                    divider.classList.add('visible');
                }, totalDelay));

                totalDelay += TIMING.dividerDrawDelay;

                el = document.createElement('div');
                el.className = 'content-ghazal';
                el.innerHTML = item.lines.map(l => `<div class="sher">${l}</div>`).join('');
                container.appendChild(el);

                STATE.revealTimers.push(addTimeout(() => {
                    el.classList.add('visible');
                }, totalDelay));

                totalDelay += TIMING.ghazalRevealDelay;
                break;

            case 'divider':
                el = document.createElement('div');
                el.className = 'golden-divider';
                container.appendChild(el);

                STATE.revealTimers.push(addTimeout(() => {
                    el.classList.add('visible');
                }, totalDelay));

                totalDelay += TIMING.dividerDrawDelay;
                break;
        }
    });

    // Show scroll prompt if content is long
    STATE.revealTimers.push(addTimeout(() => {
        showScrollPrompt(container);
        if (callback) callback();
    }, totalDelay));
}

function showScrollPrompt(container) {
    if (!container) return;
    const scrollHeight = container.scrollHeight;
    const clientHeight = container.closest('.scene')?.clientHeight || window.innerHeight;

    if (scrollHeight > clientHeight * 0.8) {
        showElement('#scroll-prompt');
        addTimeout(() => {
            hideElement('#scroll-prompt');
        }, 4000);
    }
}

function updateReadingProgress(percent) {
    const fill = $('#reading-progress-fill');
    if (fill) fill.style.width = percent + '%';
}

// Handle scroll for reading progress
function handleContentScroll(sceneEl) {
    if (!sceneEl) return;

    const scrollTop = sceneEl.scrollTop;
    const scrollHeight = sceneEl.scrollHeight - sceneEl.clientHeight;

    if (scrollHeight > 0) {
        const percent = Math.min((scrollTop / scrollHeight) * 100, 100);
        updateReadingProgress(percent);
    }

    // Hide scroll prompt on scroll
    if (scrollTop > 50) {
        hideElement('#scroll-prompt');
    }
}


/* ═══════════════════════════════════════
   SECTION 11: ERA NAVIGATION
   ═══════════════════════════════════════ */

function initEraList() {
    const cards = $$('.era-list .era-card');
    cards.forEach((card, i) => {
        card.classList.remove('visible');
        addTimeout(() => {
            card.classList.add('visible');
        }, 200 + i * 150);
    });
}

function openEra(eraNum) {
    STATE.currentEra = eraNum;
    STATE.erasVisited.add(eraNum);

    switchScene('era-content-scene');

    const eraData = CONTENT.eras ? CONTENT.eras[eraNum - 1] : null;

    if (!eraData) return;

    // Set header
    $('#era-head-num').textContent = `ERA ${eraNum}`;
    $('#era-head-title').textContent = eraData.title;

    // Set era background class
    document.body.classList.remove('era-1', 'era-2', 'era-3', 'era-4', 'era-5');
    document.body.classList.add(`era-${eraNum}`);

    // Rain effect for separation era
    if (eraNum === 3 && typeof Effects !== 'undefined' && Effects.createRain) {
        Effects.createRain();
    } else if (typeof Effects !== 'undefined' && Effects.stopRain) {
        Effects.stopRain();
    }

    // Render content
    renderContent('#era-body', eraData.content);

    // Update dots
    updateEraDots();

    // Update nav buttons
    updateEraNavButtons();

    // Show swipe hint first time
    if (!STATE.swipeHintShown) {
        STATE.swipeHintShown = true;
        showElement('#swipe-hint');
        addTimeout(() => hideElement('#swipe-hint'), 3000);
    }

    // Check if all eras visited
    if (STATE.erasVisited.size >= 5) {
        STATE.visited.kahani = true;
    }

    // Scroll to top
    const scene = $('#era-content-scene');
    if (scene) scene.scrollTop = 0;
}

function updateEraDots() {
    const dots = $$('#era-dots .dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', (i + 1) === STATE.currentEra);
    });
}

function updateEraNavButtons() {
    const prevBtn = $('#era-prev');
    const nextBtn = $('#era-next');

    prevBtn.disabled = STATE.currentEra <= 1;
    nextBtn.disabled = STATE.currentEra >= 5;

    // Change last era's next button
    if (STATE.currentEra >= 5) {
        nextBtn.textContent = 'Mukammal ✓';
        nextBtn.disabled = false;
    } else {
        nextBtn.textContent = 'Agla →';
    }
}

function nextEra() {
    if (STATE.currentEra >= 5) {
        // All eras done
        STATE.visited.kahani = true;
        showSectionComplete('kahani');
        addTimeout(() => {
            setBodyClass('');
            switchScene('menu-scene', false);
            updateMenuState();
        }, 1800);
        return;
    }
    openEra(STATE.currentEra + 1);
}

function prevEra() {
    if (STATE.currentEra <= 1) return;
    openEra(STATE.currentEra - 1);
}


/* ═══════════════════════════════════════
   SECTION 12: ROMANCE NAVIGATION
   ═══════════════════════════════════════ */

function initChamberList(selector) {
    const cards = $$(selector);
    cards.forEach((card, i) => {
        card.classList.remove('visible');
        addTimeout(() => {
            card.classList.add('visible');
        }, 200 + i * 150);
    });
}

function openRomanceChamber(chamberId) {
    STATE.romanceVisited.add(chamberId);

    switchScene('romance-content-scene');

    const chambers = CONTENT.romanceChambers || [];
    const chamber = chambers.find(c => c.id === chamberId);

    if (!chamber) return;

    // Set header
    $('#rom-head-icon').textContent = chamber.icon;
    $('#rom-head-title').textContent = chamber.title;

    // Render content
    renderContent('#rom-body', chamber.content);

    // Floating petals for romance
    if (typeof Effects !== 'undefined' && Effects.createFloatingPetals) {
        Effects.createFloatingPetals();
    }

    // Check completion
    const totalChambers = CONTENT.romanceChambers ? CONTENT.romanceChambers.length : 6;
    if (STATE.romanceVisited.size >= totalChambers) {
        STATE.visited.romance = true;
    }

    // Scroll to top
    const scene = $('#romance-content-scene');
    if (scene) scene.scrollTop = 0;
}


/* ═══════════════════════════════════════
   SECTION 13: MOHABBAT NAVIGATION
   ═══════════════════════════════════════ */

function openMohabbatChamber(chamberId) {
    STATE.mohabbatVisited.add(chamberId);

    switchScene('mohabbat-content-scene');

    const chambers = CONTENT.mohabbatChambers || [];
    const chamber = chambers.find(c => c.id === chamberId);

    if (!chamber) return;

    // Set header
    $('#moh-head-icon').textContent = chamber.icon;
    $('#moh-head-title').textContent = chamber.title;

    // Render content
    renderContent('#moh-body', chamber.content);

    // Check completion
    const totalChambers = CONTENT.mohabbatChambers ? CONTENT.mohabbatChambers.length : 4;
    if (STATE.mohabbatVisited.size >= totalChambers) {
        STATE.visited.mohabbat = true;
    }

    // Scroll to top
    const scene = $('#mohabbat-content-scene');
    if (scene) scene.scrollTop = 0;
}


/* ═══════════════════════════════════════
   SECTION 14: QUIZ ENGINE
   ═══════════════════════════════════════ */

function startQuiz() {
    STATE.quizStarted = true;
    STATE.quizCurrentQ = 0;
    STATE.quizScore = 0;
    STATE.quizAnswered = false;
    STATE.quizCompleted = false;

    switchScene('quiz-scene');
    loadQuestion(0);
}

function loadQuestion(index) {
    const questions = CONTENT.quiz ? CONTENT.quiz.questions : [];
    if (index >= questions.length) {
        showQuizScore();
        return;
    }

    STATE.quizCurrentQ = index;
    STATE.quizAnswered = false;

    const q = questions[index];
    const totalQs = questions.length;

    // Category change check (every 4 questions)
    const categories = CONTENT.quiz ? CONTENT.quiz.categories : [];
    const catIndex = Math.floor(index / 4);
    const isNewCategory = index % 4 === 0 && index > 0;

    if (isNewCategory && categories[catIndex]) {
        showCategoryChange(categories[catIndex], () => {
            renderQuestion(q, index, totalQs, categories[catIndex]);
        });
        return;
    }

    // First question — also show category
    if (index === 0 && categories[0]) {
        renderQuestion(q, index, totalQs, categories[0]);
    } else {
        renderQuestion(q, index, totalQs, categories[catIndex]);
    }
}

function showCategoryChange(category, callback) {
    const overlay = $('#quiz-cat-overlay');
    const icon = $('#qco-icon');
    const title = $('#qco-title');
    const sub = $('#qco-sub');

    icon.textContent = category.icon || '🎯';
    title.textContent = category.name || 'Next Round';
    sub.textContent = category.sub || '';

    overlay.classList.remove('hidden');

    addTimeout(() => {
        overlay.classList.add('hidden');
        if (callback) callback();
    }, TIMING.quizCategoryDisplay);
}

function renderQuestion(q, index, total, category) {
    const counter = $('#quiz-counter');
    const catLabel = $('#quiz-cat-label');
    const questionEl = $('#quiz-q');
    const optionsContainer = $('#quiz-options');
    const feedback = $('#quiz-feedback');
    const nextBtn = $('#quiz-next');
    const barFill = $('#quiz-bar-fill');
    const card = $('.quiz-card');

    // Update counter + progress
    counter.textContent = `${index + 1}/${total}`;
    barFill.style.width = `${((index) / total) * 100}%`;
    catLabel.textContent = category ? category.name : '';

    // Card entrance animation
    card.classList.remove('entering');
    void card.offsetWidth;
    card.classList.add('entering');

    // Set question
    questionEl.textContent = q.q;

    // Hide feedback + next
    feedback.classList.add('hidden');
    nextBtn.classList.add('hidden');

    // Render options with stagger
    optionsContainer.innerHTML = '';
    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-opt';
        btn.textContent = opt;
        btn.dataset.index = i;
        optionsContainer.appendChild(btn);

        addTimeout(() => {
            btn.classList.add('visible');
        }, TIMING.quizOptionStagger * (i + 1));

        btn.addEventListener('click', () => handleQuizAnswer(i, q, btn));
    });
}

function handleQuizAnswer(selectedIndex, question, selectedBtn) {
    if (STATE.quizAnswered) return;
    STATE.quizAnswered = true;

    const isCorrect = selectedIndex === question.correct;
    const allOpts = $$('.quiz-opt');
    const feedback = $('#quiz-feedback');
    const resultEl = $('#qf-result');
    const funnyEl = $('#qf-funny');
    const explainEl = $('#qf-explain');
    const nextBtn = $('#quiz-next');

    // Disable all options
    allOpts.forEach(opt => opt.classList.add('disabled'));

    if (isCorrect) {
        STATE.quizScore++;
        selectedBtn.classList.add('correct');
        resultEl.textContent = '✅ Sahi Jawaab!';
        resultEl.className = 'qf-result correct-text';
        funnyEl.textContent = question.funny || '';

        // Small confetti burst
        if (typeof Effects !== 'undefined' && Effects.createSmallConfetti) {
            Effects.createSmallConfetti();
        }
    } else {
        selectedBtn.classList.add('wrong');
        resultEl.textContent = '❌ Ghalat!';
        resultEl.className = 'qf-result wrong-text';
        funnyEl.textContent = question.funny || '';

        // Show correct answer
        allOpts.forEach((opt, i) => {
            if (i === question.correct) {
                opt.classList.add('reveal-correct');
            }
        });
    }

    explainEl.textContent = question.explain || '';

    // Show feedback
    addTimeout(() => {
        feedback.classList.remove('hidden');
    }, TIMING.quizFeedbackDelay);

    // Show next button
    addTimeout(() => {
        nextBtn.classList.remove('hidden');

        // If last question, change button text
        const total = CONTENT.quiz ? CONTENT.quiz.questions.length : 20;
        if (STATE.quizCurrentQ >= total - 1) {
            nextBtn.textContent = 'Score Dekhein →';
        } else {
            nextBtn.textContent = 'Agla Sawaal →';
        }
    }, TIMING.quizNextDelay);
}

function nextQuestion() {
    const total = CONTENT.quiz ? CONTENT.quiz.questions.length : 20;

    if (STATE.quizCurrentQ >= total - 1) {
        showQuizScore();
    } else {
        addTimeout(() => {
            loadQuestion(STATE.quizCurrentQ + 1);
        }, TIMING.quizBetweenQ);
    }
}

function showQuizScore() {
    STATE.quizCompleted = true;
    STATE.visited.quiz = true;

    switchScene('quiz-score-scene');

    const scoreNum = $('#qs-num');
    const scoreTitle = $('#qs-title');
    const scoreMsg = $('#qs-msg');

    // Animated count up
    let count = 0;
    const target = STATE.quizScore;

    const countInterval = addInterval(() => {
        count++;
        scoreNum.textContent = count;

        if (count >= target) {
            clearInterval(countInterval);
            showScoreResult();
        }
    }, TIMING.quizScoreCountSpeed);

    function showScoreResult() {
        // Score messages
        const msgs = CONTENT.scoreMessages || {
            perfect: { title: 'TUJHE MUJHSE ZYADA MERI KHABAR HAI! 😭♥', msg: 'Har sawal sahi... tum sach mein mujhe jaanti ho.' },
            great: { title: 'Bohot kuch jaanti ho... ALMOST perfect 😏', msg: 'Bas thoda aur seekh lo... date pe chalte hain.' },
            good: { title: 'Theek hai... par seekhna baaki hai 🤔', msg: 'Koi nahi, waqt ke saath sab pata chal jayega.' },
            ok: { title: 'Hmm... lagta hai date pe aur jaana padega 😂', msg: 'Koi baat nahi, iske liye hi toh saath hain!' },
            low: { title: 'Yeh toh STRANGER wali performance hai 💀', msg: 'Kya tum sach mein mujhe jaanti ho? 😂' }
        };

        let result;
        if (target >= 18) result = msgs.perfect;
        else if (target >= 14) result = msgs.great;
        else if (target >= 10) result = msgs.good;
        else if (target >= 6) result = msgs.ok;
        else result = msgs.low;

        scoreTitle.textContent = result.title;
        scoreMsg.textContent = result.msg;

        // Confetti if high score
        if (target >= 14 && typeof Effects !== 'undefined' && Effects.createConfetti) {
            Effects.createConfetti($('#quiz-confetti'), 80);
        }
    }

    // Update progress bar to 100%
    $('#quiz-bar-fill').style.width = '100%';

    saveProgress();
}


/* ═══════════════════════════════════════
   SECTION 15: MUSTAQBIL NAVIGATION
   ═══════════════════════════════════════ */

function loadMustaqbilPage(pageNum) {
    STATE.currentMqPage = pageNum;
    STATE.mqPagesVisited.add(pageNum);

    const pages = CONTENT.mustaqbil ? CONTENT.mustaqbil.pages : [];
    const page = pages[pageNum - 1];

    if (!page) return;

    // Set mustaqbil page background class
    document.body.classList.remove('mq-page-1', 'mq-page-2', 'mq-page-3', 'mq-page-4', 'mq-page-5');
    document.body.classList.add(`mq-page-${pageNum}`);

    // Set header
    $('#mq-page-num').textContent = page.num || `PAGE ${pageNum}`;
    $('#mq-page-title').textContent = page.title;
    $('#mq-page-tag').textContent = page.tag || '';

    // Render content
    renderContent('#mq-body', page.content);

    // Update dots
    updateMqDots();

    // Update nav buttons
    updateMqNavButtons();

    // Check completion
    if (STATE.mqPagesVisited.size >= 5) {
        STATE.visited.mustaqbil = true;
    }

    // Scroll to top
    const scene = $('#mustaqbil-scene');
    if (scene) scene.scrollTop = 0;
}

function updateMqDots() {
    const dots = $$('#mq-dots .dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', (i + 1) === STATE.currentMqPage);
    });
}

function updateMqNavButtons() {
    const prevBtn = $('#mq-prev');
    const nextBtn = $('#mq-next');

    prevBtn.disabled = STATE.currentMqPage <= 1;

    if (STATE.currentMqPage >= 5) {
        nextBtn.textContent = 'Mukammal ✓';
        nextBtn.disabled = false;
    } else {
        nextBtn.textContent = 'Agla →';
        nextBtn.disabled = false;
    }
}

function nextMqPage() {
    if (STATE.currentMqPage >= 5) {
        STATE.visited.mustaqbil = true;
        showSectionComplete('mustaqbil');
        addTimeout(() => {
            setBodyClass('');
            switchScene('menu-scene', false);
            updateMenuState();
        }, 1800);
        return;
    }
    loadMustaqbilPage(STATE.currentMqPage + 1);
}

function prevMqPage() {
    if (STATE.currentMqPage <= 1) return;
    loadMustaqbilPage(STATE.currentMqPage - 1);
}


/* ═══════════════════════════════════════
   SECTION 16: GRAND FINALE
   ═══════════════════════════════════════ */

function startFinale() {
    STATE.currentFinalePhase = 1;
    activatePhase(1);
    runPhase1();
}

function activatePhase(num) {
    $$('.finale-phase').forEach(p => p.classList.remove('active'));
    const phase = $(`#fp-${num}`);
    if (phase) {
        phase.classList.add('active');
    }
}

// ── Phase 1: Darkness + Heartbeat ──

function runPhase1() {
    const textContainer = $('#fp1-text');
    textContainer.innerHTML = '';

    const lines = CONTENT.finale ? CONTENT.finale.phase1Lines : [
        'Iqra...',
        'Sab parh liya?',
        'Sab dekh liya?',
        'Ab ASLI baat sun...'
    ];

    let lineIndex = 0;
    let beatInterval = TIMING.fp1BeatInterval;

    function showNextLine() {
        if (lineIndex >= lines.length) {
            // Speed up heartbeat
            const fp1 = $('#fp-1');
            fp1.classList.add('fast');

            addTimeout(() => {
                // Move to phase 2
                activatePhase(2);
                runPhase2();
            }, 2000);
            return;
        }

        const line = document.createElement('p');
        line.className = 'fp1-line';
        line.textContent = lines[lineIndex];
        textContainer.appendChild(line);

        requestAnimationFrame(() => {
            line.classList.add('visible');
        });

        lineIndex++;

        // Gradually speed up
        beatInterval = Math.max(beatInterval - 200, TIMING.fp1BeatFastInterval);

        addTimeout(showNextLine, beatInterval);
    }

    addTimeout(showNextLine, 1500);
}

// ── Phase 2: Rewind Montage ──

function runPhase2() {
    const frame = $('#rewind-frame');
    const text = $('#rewind-text');

    const memories = CONTENT.finale ? CONTENT.finale.rewindMemories : [
        { text: 'Facebook pe ek post...', bg: 'rgba(59,89,152,0.1)' },
        { text: 'Pehli react... pehli baat...', bg: 'rgba(255,215,0,0.05)' },
        { text: 'Sparrow Fly... Hurt Bird... group masti...', bg: 'rgba(255,150,50,0.05)' },
        { text: 'Instagram pe shift... aur qareeb...', bg: 'rgba(200,50,100,0.05)' },
        { text: 'WhatsApp pe aana... number drama...', bg: 'rgba(37,211,102,0.05)' },
        { text: 'Phir achanak... sab khatam.', bg: 'rgba(50,50,80,0.1)' },
        { text: '3 saal... khamoshi... dard...', bg: 'rgba(20,20,50,0.15)' },
        { text: 'Ek larki aayi... UNZA naam se...', bg: 'rgba(255,215,0,0.08)' },
        { text: 'Propose kar diya... bina jaane...', bg: 'rgba(255,100,100,0.08)' },
        { text: '"Main Unza nahi... IQRA hoon."', bg: 'rgba(255,215,0,0.15)' },
        { text: 'Aur aaj... hum SAATH hain.', bg: 'rgba(255,200,50,0.1)' }
    ];

    let memIndex = 0;
    let flashDuration = TIMING.fp2FlashDuration;

    function showNextMemory() {
        if (memIndex >= memories.length) {
            // Silence pause
            text.textContent = '';
            frame.style.background = 'transparent';

            // "Aur aaj..." stays
            addTimeout(() => {
                text.textContent = 'Aur aaj...';
                text.classList.add('flash');
                text.style.color = '#FFD700';
            }, 500);

            addTimeout(() => {
                activatePhase(3);
                runPhase3();
            }, 3500);
            return;
        }

        const mem = memories[memIndex];
        text.classList.remove('flash');
        void text.offsetWidth;

        text.textContent = mem.text;
        text.classList.add('flash');
        frame.style.background = mem.bg || 'transparent';

        memIndex++;

        // Speed up gradually
        if (TIMING.fp2SpeedUp && memIndex > memories.length / 2) {
            flashDuration = Math.max(flashDuration - 100, 800);
        }

        addTimeout(showNextMemory, flashDuration);
    }

    addTimeout(showNextMemory, 800);
}

// ── Phase 3: The Truth ──

function runPhase3() {
    const container = $('#truth-wrap');
    container.innerHTML = '';

    const lines = CONTENT.finale ? CONTENT.finale.truthLines : [
        'Iqra — main perfect nahi hoon.',
        'Maine galtiyan ki hain.',
        'Main chala gaya tha bina wajah.',
        '3 saal — maine tujhe miss kiya har ek din.',
        'Par khuda ne humein phir milaya.',
        'UNZA banke tu aayi —',
        'aur maine bina jaane TUJHE hi chun liya.',
        'Iska matlab samjhi?',
        { text: 'MERA DIL SIRF TUJHE JAANTA HAI.', glow: true }
    ];

    let lineIndex = 0;

    function showNextLine() {
        if (lineIndex >= lines.length) {
            addTimeout(() => {
                activatePhase(4);
                runPhase4();
            }, 3000);
            return;
        }

        const lineData = lines[lineIndex];
        const isObj = typeof lineData === 'object';
        const text = isObj ? lineData.text : lineData;
        const isGlow = isObj && lineData.glow;

        const line = document.createElement('p');
        line.className = 'truth-line';
        if (isGlow) line.classList.add('glow');
        line.textContent = text;
        container.appendChild(line);

        addTimeout(() => {
            line.classList.add('visible');
        }, 100);

        lineIndex++;
        addTimeout(showNextLine, TIMING.fp3LineDelay);
    }

    addTimeout(showNextLine, 1000);
}

// ── Phase 4: The Letter ──

function runPhase4() {
    const container = $('#letter-body');
    const sign = $('#letter-sign');
    container.innerHTML = '';
    sign.classList.add('hidden');

    const letterContent = CONTENT.finale ? CONTENT.finale.letterContent : [];

    // Use renderContent for the letter
    let totalDelay = 800;

    letterContent.forEach((item) => {
        let el;

        if (item.type === 'text') {
            el = document.createElement('div');
            el.className = 'letter-line';
            el.innerHTML = item.text;
            container.appendChild(el);

            addTimeout(() => {
                el.classList.add('visible');
            }, totalDelay);

            totalDelay += TIMING.fp4LineDelay;
        }

        if (item.type === 'poetry') {
            el = document.createElement('div');
            el.className = 'letter-line letter-poetry';
            el.innerHTML = item.lines.join('<br>');
            container.appendChild(el);

            addTimeout(() => {
                el.classList.add('visible');
            }, totalDelay);

            totalDelay += TIMING.fp4LineDelay + 500;
        }
    });

    // Show signature
    addTimeout(() => {
        sign.classList.remove('hidden');
    }, totalDelay);

    // Move to phase 5
    addTimeout(() => {
        activatePhase(5);
        runPhase5();
    }, totalDelay + 3000);
}

// ── Phase 5: Declaration ──

function runPhase5() {
    const mainText = $('#decl-main');
    const nameText = $('#decl-name');
    const subText = $('#decl-sub');

    // Build-up particles
    if (typeof Effects !== 'undefined' && Effects.createDeclarationParticles) {
        Effects.createDeclarationParticles($('#decl-particles'));
    }

    addTimeout(() => {
        mainText.classList.remove('hidden');
        mainText.classList.add('visible');
    }, TIMING.fp5BuildDuration);

    addTimeout(() => {
        nameText.classList.remove('hidden');
        nameText.classList.add('visible');
    }, TIMING.fp5BuildDuration + TIMING.fp5TextDelay);

    // Sub lines
    const subLines = CONTENT.finale ? CONTENT.finale.declSub : [
        'Yeh sirf ek din nahi...',
        'Yeh roz ka pyaar hai.',
        'Har din Valentine\'s Day hai jab TU meri hai.'
    ];

    addTimeout(() => {
        subText.classList.remove('hidden');
        subText.classList.add('visible');
        subText.innerHTML = '';

        subLines.forEach((line, i) => {
            const lineEl = document.createElement('div');
            lineEl.className = 'ds-line';
            lineEl.textContent = line;
            subText.appendChild(lineEl);

            addTimeout(() => {
                lineEl.classList.add('visible');
            }, TIMING.fp5SubLineDelay * (i + 1));
        });
    }, TIMING.fp5BuildDuration + TIMING.fp5TextDelay * 2);

    // Move to celebration
    const totalSubTime = TIMING.fp5SubLineDelay * (subLines.length + 1);
    addTimeout(() => {
        activatePhase(6);
        runPhase6();
    }, TIMING.fp5BuildDuration + TIMING.fp5TextDelay * 2 + totalSubTime + 2000);
}

// ── Phase 6: Celebration ──

function runPhase6() {
    STATE.finaleCompleted = true;
    STATE.visited.finale = true;

    // Confetti explosion
    if (typeof Effects !== 'undefined' && Effects.createConfetti) {
        Effects.createConfetti($('#confetti-box'), 150);

        addTimeout(() => {
            Effects.createConfetti($('#confetti-box'), 60);
        }, 2000);
    }

    // Floating hearts
    if (typeof Effects !== 'undefined' && Effects.createCelebrationHearts) {
        Effects.createCelebrationHearts($('#cele-hearts'), 25);
    }

    saveProgress();
}


/* ═══════════════════════════════════════
   SECTION 17: EASTER EGG
   ═══════════════════════════════════════ */

function handleMonogramTap() {
    STATE.monogramTaps++;

    if (STATE.monogramTaps >= 7 && !STATE.easterEggSeen) {
        showEasterEgg();
    }
}

function showEasterEgg() {
    STATE.easterEggSeen = true;

    const easter = $('#easter');
    const body = $('#easter-body');
    body.innerHTML = '';

    const lines = CONTENT.finale ? CONTENT.finale.easterLines : [
        'Pata hai ek baat?',
        'Jab tum UNZA banke aayi thi —',
        'maine tumhari PIC dekhi',
        'aur propose kar diya.',
        'Bina jaane ke tum IQRA ho.',
        '',
        'Ab bata —',
        'Agar yeh pyaar nahi hai',
        'toh kya hai? 😤♥',
        '',
        'P.S: Kabhi chhodna mat.',
        'Yeh order hai. 😠♥'
    ];

    easter.classList.remove('hidden');

    lines.forEach((line, i) => {
        if (line === '') return;

        const lineEl = document.createElement('div');
        lineEl.className = 'ee-line';
        lineEl.textContent = line;
        body.appendChild(lineEl);

        addTimeout(() => {
            lineEl.classList.add('visible');
        }, 1500 * (i + 1));
    });
}

function closeEasterEgg() {
    $('#easter').classList.add('hidden');
}


/* ═══════════════════════════════════════
   SECTION 18: LOCAL STORAGE
   ═══════════════════════════════════════ */

function saveProgress() {
    try {
        const data = {
            doorUnlocked: STATE.doorUnlocked,
            visited: STATE.visited,
            erasVisited: Array.from(STATE.erasVisited),
            romanceVisited: Array.from(STATE.romanceVisited),
            mohabbatVisited: Array.from(STATE.mohabbatVisited),
            quizCompleted: STATE.quizCompleted,
            quizScore: STATE.quizScore,
            mqPagesVisited: Array.from(STATE.mqPagesVisited),
            finaleUnlocked: STATE.finaleUnlocked,
            finaleCompleted: STATE.finaleCompleted,
            easterEggSeen: STATE.easterEggSeen,
            swipeHintShown: STATE.swipeHintShown,
            timestamp: Date.now()
        };
        localStorage.setItem('iqra_ki_duniya', JSON.stringify(data));
    } catch (e) {
        // localStorage not available
    }
}

function loadProgress() {
    try {
        const raw = localStorage.getItem('iqra_ki_duniya');
        if (!raw) return false;

        const data = JSON.parse(raw);

        // Check if data is recent (within 30 days)
        if (data.timestamp && Date.now() - data.timestamp > 30 * 24 * 60 * 60 * 1000) {
            localStorage.removeItem('iqra_ki_duniya');
            return false;
        }

        STATE.doorUnlocked = data.doorUnlocked || false;
        STATE.visited = data.visited || STATE.visited;
        STATE.erasVisited = new Set(data.erasVisited || []);
        STATE.romanceVisited = new Set(data.romanceVisited || []);
        STATE.mohabbatVisited = new Set(data.mohabbatVisited || []);
        STATE.quizCompleted = data.quizCompleted || false;
        STATE.quizScore = data.quizScore || 0;
        STATE.mqPagesVisited = new Set(data.mqPagesVisited || []);
        STATE.finaleUnlocked = data.finaleUnlocked || false;
        STATE.finaleCompleted = data.finaleCompleted || false;
        STATE.easterEggSeen = data.easterEggSeen || false;
        STATE.swipeHintShown = data.swipeHintShown || false;

        return STATE.doorUnlocked; // return true if should skip to menu
    } catch (e) {
        return false;
    }
}


/* ═══════════════════════════════════════
   SECTION 19: SWIPE HANDLER
   ═══════════════════════════════════════ */

let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

function handleTouchStart(e) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
}

function handleTouchEnd(e) {
    touchEndX = e.changedTouches[0].clientX;
    touchEndY = e.changedTouches[0].clientY;

    const diffX = touchEndX - touchStartX;
    const diffY = touchEndY - touchStartY;

    // Only horizontal swipe (ignore vertical scroll)
    if (Math.abs(diffX) < TIMING.swipeThreshold) return;
    if (Math.abs(diffY) > Math.abs(diffX)) return;

    const currentScene = STATE.currentScene;

    if (currentScene === 'era-content-scene') {
        if (diffX < 0) nextEra();     // swipe left → next
        else prevEra();                // swipe right → prev
    }

    if (currentScene === 'mustaqbil-scene') {
        if (diffX < 0) nextMqPage();   // swipe left → next
        else prevMqPage();             // swipe right → prev
    }
}


/* ═══════════════════════════════════════
   SECTION 20: EVENT LISTENERS
   ═══════════════════════════════════════ */

function setupEventListeners() {

    // ── Back Button ──
    $('#back-button')?.addEventListener('click', (e) => {
        createRipple(e, e.currentTarget);
        goBack();
    });

    // ── Monogram (Easter egg tap counter) ──
    $('#monogram')?.addEventListener('click', handleMonogramTap);

    // ── Door Scene ──

    // Tap on door frame
    $('#door-frame')?.addEventListener('click', (e) => {
        // Don't trigger if clicking lock area (near input)
        if (e.target.closest('.door-input-area')) return;
        handleDoorTap(e);
    });

    // Password submit button
    $('#submit-btn')?.addEventListener('click', handlePasswordSubmit);

    // Password enter key
    $('#password-input')?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handlePasswordSubmit();
    });

    // Hint button
    $('#hint-btn')?.addEventListener('click', showHint);

    // ── Portal Cards (Menu) ──
    $$('.portal-card').forEach(card => {
        card.addEventListener('click', (e) => {
            const section = card.dataset.section;
            if (section) handlePortalTap(section, e);
        });
    });

    // ── Era Cards ──
    $$('.era-card').forEach(card => {
        card.addEventListener('click', (e) => {
            createRipple(e, card);
            const eraNum = parseInt(card.dataset.era);
            if (eraNum) openEra(eraNum);
        });
    });

    // ── Era Navigation Buttons ──
    $('#era-prev')?.addEventListener('click', prevEra);
    $('#era-next')?.addEventListener('click', nextEra);

    // ── Romance Chamber Cards ──
    $$('.romance-chambers .chamber-card').forEach(card => {
        card.addEventListener('click', (e) => {
            createRipple(e, card);
            const chamberId = card.dataset.chamber;
            if (chamberId) openRomanceChamber(chamberId);
        });
    });

    // Romance back button
    $('#rom-back')?.addEventListener('click', () => {
        switchScene('romance-scene', false);
        if (STATE.romanceVisited.size >= (CONTENT.romanceChambers?.length || 6)) {
            STATE.visited.romance = true;
            showSectionComplete('romance');
        }
    });

    // ── Mohabbat Chamber Cards ──
    $$('.mohabbat-chambers .chamber-card').forEach(card => {
        card.addEventListener('click', (e) => {
            createRipple(e, card);
            const chamberId = card.dataset.chamber;
            if (chamberId) openMohabbatChamber(chamberId);
        });
    });

    // Mohabbat back button
    $('#moh-back')?.addEventListener('click', () => {
        switchScene('mohabbat-scene', false);
        if (STATE.mohabbatVisited.size >= (CONTENT.mohabbatChambers?.length || 4)) {
            STATE.visited.mohabbat = true;
            showSectionComplete('mohabbat');
        }
    });

    // ── Quiz ──
    $('#quiz-start')?.addEventListener('click', startQuiz);
    $('#quiz-next')?.addEventListener('click', nextQuestion);
    $('#qs-menu')?.addEventListener('click', () => {
        setBodyClass('');
        switchScene('menu-scene', false);
        STATE.sceneHistory = [];
        updateMenuState();
    });

    // ── Mustaqbil Navigation ──
    $('#mq-prev')?.addEventListener('click', prevMqPage);
    $('#mq-next')?.addEventListener('click', nextMqPage);

    // ── Finale / Celebration ──
    $('#cele-menu')?.addEventListener('click', () => {
        setBodyClass('');
        switchScene('menu-scene', false);
        STATE.sceneHistory = [];
        updateMenuState();
    });

    $('#cele-surprise')?.addEventListener('click', showEasterEgg);
    $('#easter-close')?.addEventListener('click', closeEasterEgg);

    // ── Swipe Gestures ──
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });

    // ── Scroll Tracking ──
    const scrollableScenes = [
        'era-content-scene', 'romance-content-scene', 'mohabbat-content-scene',
        'mustaqbil-scene'
    ];

    scrollableScenes.forEach(sceneId => {
        const scene = $(`#${sceneId}`);
        if (scene) {
            scene.addEventListener('scroll', () => handleContentScroll(scene), { passive: true });
        }
    });

    // Finale letter scroll
    const fp4 = $('#fp-4');
    if (fp4) {
        fp4.addEventListener('scroll', () => handleContentScroll(fp4), { passive: true });
    }

    // ── Global Ripple on tap ──
    document.addEventListener('click', (e) => {
        // Only create ripple on interactive elements
        if (e.target.closest('button') || e.target.closest('.portal-card') ||
            e.target.closest('.era-card') || e.target.closest('.chamber-card')) {
            createRipple(e, null);
        }
    });
}


/* ═══════════════════════════════════════
   SECTION 21: INITIALIZATION
   ═══════════════════════════════════════ */

function init() {
    // Check for saved progress
    const hasProgress = loadProgress();

    // Setup all event listeners
    setupEventListeners();

    // Start ambient effects
    if (typeof Effects !== 'undefined' && Effects.init) {
        Effects.init();
    }

    if (hasProgress) {
        // Skip to menu
        // Hide preloader directly
        const preloader = $('#preloader-scene');
        preloader.classList.remove('active');

        // Show menu
        switchScene('menu-scene', false);
        showElement('#monogram');
        updateMenuState();

        // If finale was unlocked, update that
        if (STATE.finaleUnlocked) {
            unlockFinale();
        }
    } else {
        // Start from beginning
        startPreloader();
    }
}

// ── Start the app when DOM is ready ──
document.addEventListener('DOMContentLoaded', init);

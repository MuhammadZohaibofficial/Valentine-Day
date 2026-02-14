/*
============================================================
   ZOHAIB KI DUNIYA — APP ENGINE (THE HEART)
   Controls everything: Loading, Door, Navigation,
   Quiz, Finale, Effects, Particles, Transitions.
   Level: PREMIUM CINEMATIC — Zero Compromise.
============================================================
*/

// ═══════════════════════════════════════
// 1. STATE MANAGEMENT
// ═══════════════════════════════════════

const APP = {
    state: {
        currentScreen: 'screen-loading',
        visited: JSON.parse(localStorage.getItem('zk_visited') || '[]'),
        doorUnlocked: localStorage.getItem('zk_door') === 'true',
        quizScore: 0,
        quizCurrent: 0,
        quizAnswered: false,
        wrongAttempts: 0,
        finaleUnlocked: false,
        easterEggTaps: 0,
        ambientVisible: false
    },

    // Cache DOM elements
    dom: {},

    // ═══════════════════════════════════════
    // 2. INITIALIZATION
    // ═══════════════════════════════════════

    init: function() {
        // Cache all DOM elements
        this.dom = {
            screens: document.querySelectorAll('.screen'),
            backBtn: document.getElementById('backBtn'),
            readingBar: document.getElementById('reading-bar'),
            rippleContainer: document.getElementById('ripple-container'),
            // Loading
            loaderFill: document.getElementById('loaderFill'),
            loaderGlow: document.getElementById('loaderGlow'),
            loaderMsg: document.getElementById('loaderMsg'),
            loaderPercent: document.getElementById('loaderPercent'),
            // Opening
            starsContainer: document.getElementById('starsContainer'),
            openingTextArea: document.getElementById('openingTextArea'),
            // Door
            doorWrapper: document.getElementById('doorWrapper'),
            passInput: document.getElementById('passInput'),
            passSubmit: document.getElementById('passSubmit'),
            passArea: document.getElementById('passArea'),
            hintText: document.getElementById('hintText'),
            lightFlood: document.getElementById('lightFlood'),
            lockBody: document.getElementById('lockBody'),
            chains: document.getElementById('chains'),
            // Welcome
            welcomeTextArea: document.getElementById('welcomeTextArea'),
            // Menu
            menuGrid: document.getElementById('menuGrid'),
            finaleCard: document.getElementById('finaleCard'),
            finaleSub: document.getElementById('finaleSub'),
            finaleIcon: document.getElementById('finaleIcon'),
            // Content
            contentInner: document.getElementById('contentInner'),
            // Finale
            finaleInner: document.getElementById('finaleInner')
        };

        // Setup event listeners
        this.setupEvents();

        // Setup global tap ripple
        this.setupRipple();

        // Show ambient blobs
        setTimeout(() => {
            document.querySelectorAll('.amb-blob').forEach(b => b.classList.add('visible'));
            this.state.ambientVisible = true;
        }, 500);

        // Start the journey
        this.startLoading();
    },

    // ═══════════════════════════════════════
    // 3. EVENT LISTENERS
    // ═══════════════════════════════════════

    setupEvents: function() {
        const self = this;

        // Back button
        this.dom.backBtn.addEventListener('click', function() {
            self.goHome();
        });

        // Password - Enter key
        this.dom.passInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') self.checkPassword();
        });

        // Password - Submit button
        this.dom.passSubmit.addEventListener('click', function() {
            self.checkPassword();
        });

        // Door tap (locked shake)
        this.dom.doorWrapper.addEventListener('click', function(e) {
            if (!self.state.doorUnlocked && !e.target.closest('.pass-area')) {
                self.shakeDoor();
            }
        });

        // Menu card clicks
        this.dom.menuGrid.addEventListener('click', function(e) {
            const card = e.target.closest('.portal-card');
            if (card) {
                const section = card.dataset.section;
                if (section) self.navigateTo(section);
            }
        });

        // Content scroll -> reading progress
        document.getElementById('screen-content').addEventListener('scroll', function() {
            const el = this;
            const scrolled = el.scrollTop;
            const total = el.scrollHeight - el.clientHeight;
            const pct = total > 0 ? (scrolled / total) * 100 : 0;
            self.dom.readingBar.style.width = pct + '%';
        });
    },

    // ═══════════════════════════════════════
    // 4. TAP RIPPLE EFFECT
    // ═══════════════════════════════════════

    setupRipple: function() {
        const container = this.dom.rippleContainer;
        document.addEventListener('click', function(e) {
            const ripple = document.createElement('div');
            ripple.className = 'tap-ripple';
            ripple.style.left = e.clientX + 'px';
            ripple.style.top = e.clientY + 'px';
            container.appendChild(ripple);
            setTimeout(() => ripple.remove(), 700);
        });
    },

    // ═══════════════════════════════════════
    // 5. SCREEN SWITCHING
    // ═══════════════════════════════════════

    switchScreen: function(targetId, delay) {
        const self = this;
        const d = delay || 0;

        setTimeout(function() {
            // Fade out current
            self.dom.screens.forEach(function(s) {
                s.classList.remove('active');
            });

            // Fade in target
            setTimeout(function() {
                const target = document.getElementById(targetId);
                if (target) {
                    target.classList.add('active');
                    self.state.currentScreen = targetId;
                }
            }, 200);
        }, d);
    },

    // ═══════════════════════════════════════
    // 6. PRELOADER (15 Second Journey)
    // ═══════════════════════════════════════

    startLoading: function() {
        const self = this;
        const totalDuration = CONFIG.loadingDuration;
        const startTime = Date.now();
        let lastMsgIndex = -1;

        const interval = setInterval(function() {
            const elapsed = Date.now() - startTime;
            const progress = Math.min((elapsed / totalDuration) * 100, 100);
            const percent = Math.round(progress);

            // Update bar
            self.dom.loaderFill.style.width = progress + '%';
            self.dom.loaderGlow.style.width = progress + '%';

            // Update percent
            self.dom.loaderPercent.textContent = percent + '%';

            // Update message
            const msgIndex = Math.min(
                Math.floor((progress / 100) * CONTENT.loadingMessages.length),
                CONTENT.loadingMessages.length - 1
            );

            if (msgIndex !== lastMsgIndex) {
                lastMsgIndex = msgIndex;
                self.dom.loaderMsg.style.opacity = '0';
                setTimeout(function() {
                    self.dom.loaderMsg.textContent = CONTENT.loadingMessages[msgIndex];
                    self.dom.loaderMsg.style.opacity = '1';
                }, 400);
            }

            // Done
            if (progress >= 100) {
                clearInterval(interval);
                setTimeout(function() {
                    self.startOpening();
                }, 800);
            }
        }, 50);
    },

    // ═══════════════════════════════════════
    // 7. OPENING CINEMATIC (Stars + Typewriter)
    // ═══════════════════════════════════════

    startOpening: function() {
        const self = this;

        // Switch to opening
        this.switchScreen('screen-opening');

        // Create stars
        setTimeout(function() {
            self.createStars();
        }, 300);

        // Start typewriter after stars appear
        setTimeout(function() {
            self.typewriterSequence(CONTENT.openingLines, self.dom.openingTextArea, function() {
                // After typewriter done -> go to door
                setTimeout(function() {
                    self.switchScreen('screen-door');
                    self.dom.passInput.focus();
                }, 2500);
            });
        }, 1500);
    },

    createStars: function() {
        const container = this.dom.starsContainer;
        if (!container) return;
        container.innerHTML = '';

        for (let i = 0; i < 80; i++) {
            const star = document.createElement('div');
            const size = Math.random();
            let cls = 'star star-sm';
            if (size > 0.85) cls = 'star star-lg';
            else if (size > 0.6) cls = 'star star-md';

            star.className = cls;
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = (Math.random() * 4) + 's';
            star.style.animationDuration = (Math.random() * 3 + 2) + 's';
            star.style.animation = 'twinkle ' + (Math.random() * 3 + 2) + 's ' + (Math.random() * 4) + 's infinite ease-in-out';
            container.appendChild(star);
        }
    },

    // ═══════════════════════════════════════
    // 8. TYPEWRITER ENGINE
    // ═══════════════════════════════════════

    typewriterSequence: function(lines, container, onComplete) {
        const self = this;
        container.innerHTML = '';
        let lineIndex = 0;

        function nextLine() {
            if (lineIndex >= lines.length) {
                // Remove last cursor
                const cursors = container.querySelectorAll('.type-cursor');
                cursors.forEach(function(c) { c.remove(); });
                if (onComplete) onComplete();
                return;
            }

            const lineData = lines[lineIndex];
            const text = lineData.text || lineData;
            const isGolden = lineData.golden || false;

            // Create line element
            const p = document.createElement('div');
            p.className = 'typewriter-line' + (isGolden ? ' golden' : '');
            container.appendChild(p);

            // Create cursor
            const cursor = document.createElement('span');
            cursor.className = 'type-cursor';
            p.appendChild(cursor);

            // Type characters
            let charIndex = 0;

            const typeInterval = setInterval(function() {
                if (charIndex < text.length) {
                    // Insert character before cursor
                    const charSpan = document.createTextNode(text.charAt(charIndex));
                    p.insertBefore(charSpan, cursor);
                    charIndex++;
                } else {
                    clearInterval(typeInterval);
                    lineIndex++;

                    // Wait then type next line
                    setTimeout(function() {
                        // Remove cursor from this line
                        if (cursor.parentNode) cursor.remove();
                        nextLine();
                    }, CONFIG.lineDelay);
                }
            }, CONFIG.typeSpeed);
        }

        nextLine();
    },

    // ═══════════════════════════════════════
    // 9. DOOR LOGIC
    // ═══════════════════════════════════════

    shakeDoor: function() {
        const wrapper = this.dom.doorWrapper;
        wrapper.style.animation = 'shake 0.5s';
        this.showHint('Pehle naam toh likho...');
        setTimeout(function() {
            wrapper.style.animation = '';
        }, 500);
    },

    checkPassword: function() {
        const input = this.dom.passInput;
        const value = input.value.toLowerCase().trim();

        if (value === CONFIG.password) {
            this.unlockDoor();
        } else {
            this.wrongPassword();
        }
    },

    wrongPassword: function() {
        const self = this;
        this.state.wrongAttempts++;

        // Shake input
        const area = this.dom.passArea;
        area.style.animation = 'shake 0.5s';
        setTimeout(function() { area.style.animation = ''; }, 500);

        // Flash input red
        this.dom.passInput.style.borderColor = '#c41e3a';
        setTimeout(function() {
            self.dom.passInput.style.borderColor = '';
        }, 600);

        // Show hint
        const hints = CONTENT.door.hints;
        const wrongMsgs = CONTENT.door.wrongMessages;
        const attempt = this.state.wrongAttempts;

        if (attempt <= 2) {
            this.showHint(wrongMsgs[attempt - 1] || wrongMsgs[0]);
        } else {
            this.showHint(hints[Math.min(attempt - 3, hints.length - 1)] || hints[hints.length - 1]);
        }

        // Clear input
        this.dom.passInput.value = '';

        // Sparkle on lock (red)
        this.createSparkles(
            this.dom.lockBody.getBoundingClientRect().left + 25,
            this.dom.lockBody.getBoundingClientRect().top + 32,
            '#c41e3a'
        );
    },

    showHint: function(msg) {
        const el = this.dom.hintText;
        el.textContent = msg;
        el.classList.add('show');
        setTimeout(function() {
            el.classList.remove('show');
        }, 4000);
    },

    unlockDoor: function() {
        const self = this;

        // Save state
        this.state.doorUnlocked = true;
        localStorage.setItem('zk_door', 'true');

        // Success sparkles (gold)
        this.createSparkles(
            this.dom.lockBody.getBoundingClientRect().left + 25,
            this.dom.lockBody.getBoundingClientRect().top + 32,
            '#ffd700'
        );

        // Show success text
        this.showHint(CONTENT.door.successText);

        // Phase 1: Lock glows (0-1s)
        this.dom.lockBody.style.boxShadow = '0 0 30px #ffd700, 0 0 60px rgba(255,215,0,0.4)';
        this.dom.lockBody.style.borderColor = '#ffd700';

        // Phase 2: Door opens (1s)
        setTimeout(function() {
            self.dom.doorWrapper.classList.add('door-opening');
        }, 1000);

        // Phase 3: Light floods (2.5s)
        setTimeout(function() {
            self.dom.lightFlood.style.opacity = '1';
            self.createSparkles(window.innerWidth / 2, window.innerHeight / 2, '#ffd700');
            self.createSparkles(window.innerWidth / 2, window.innerHeight / 2, '#fff');
        }, 2500);

        // Phase 4: Switch to welcome (4s)
        setTimeout(function() {
            self.startWelcome();
        }, CONFIG.doorOpenTime);
    },

    // ═══════════════════════════════════════
    // 10. WELCOME SEQUENCE
    // ═══════════════════════════════════════

    startWelcome: function() {
        const self = this;
        this.switchScreen('screen-welcome');

        const container = this.dom.welcomeTextArea;
        container.innerHTML = '';

        CONTENT.welcomeLines.forEach(function(line, index) {
            const el = document.createElement('div');
            el.className = 'welcome-line ' + (line.class || '');
            el.textContent = line.text;
            container.appendChild(el);

            // Stagger reveal
            setTimeout(function() {
                el.classList.add('visible');
            }, (index + 1) * CONFIG.welcomeLineDelay);
        });

        // After all lines -> go to menu
        const totalTime = CONTENT.welcomeLines.length * CONFIG.welcomeLineDelay + 2500;
        setTimeout(function() {
            self.showMenu();
        }, totalTime);
    },

    // ═══════════════════════════════════════
    // 11. MAIN MENU
    // ═══════════════════════════════════════

    showMenu: function() {
        const self = this;
        this.switchScreen('screen-menu');

        // Stagger card appearance
        setTimeout(function() {
            const cards = self.dom.menuGrid.querySelectorAll('.portal-card');
            cards.forEach(function(card, i) {
                setTimeout(function() {
                    card.classList.add('visible');
                }, i * 200);
            });
        }, 500);

        // Check finale status
        this.checkFinaleStatus();

        // Hide back button
        this.dom.backBtn.classList.remove('show');
        this.dom.readingBar.classList.remove('visible');
    },

    goHome: function() {
        this.switchScreen('screen-menu');

        // Close any open content section
        document.getElementById('screen-content').classList.remove('active');
        document.getElementById('screen-finale').classList.remove('active');

        // Show menu
        setTimeout(function() {
            document.getElementById('screen-menu').classList.add('active');
        }, 300);

        // Hide back button and progress bar
        this.dom.backBtn.classList.remove('show');
        this.dom.readingBar.classList.remove('visible');
        this.dom.readingBar.style.width = '0%';

        // Check finale
        this.checkFinaleStatus();
    },

    // ═══════════════════════════════════════
    // 12. NAVIGATION
    // ═══════════════════════════════════════

    navigateTo: function(section) {
        if (section === 'finale') {
            this.attemptFinale();
            return;
        }

        // Mark visited
        if (this.state.visited.indexOf(section) === -1) {
            this.state.visited.push(section);
            localStorage.setItem('zk_visited', JSON.stringify(this.state.visited));
        }

        // Load content
        if (section === 'kahani') this.loadKahani();
        else if (section === 'romance') this.loadRomance();
        else if (section === 'quiz') this.loadQuiz();
        else if (section === 'future') this.loadFuture();

        // Show content screen
        this.switchScreen('screen-content');

        // Show back button + reading bar
        this.dom.backBtn.classList.add('show');
        this.dom.readingBar.classList.add('visible');

        // Reset scroll
        document.getElementById('screen-content').scrollTop = 0;
        this.dom.readingBar.style.width = '0%';
    },

    // ═══════════════════════════════════════
    // 13. KAHANI LOADER
    // ═══════════════════════════════════════

    loadKahani: function() {
        const container = this.dom.contentInner;
        container.innerHTML = '';

        // Section header
        container.innerHTML += '<div class="title-xl" style="text-align:center; margin-bottom:10px;">Hamari Kahani</div>';
        container.innerHTML += '<div class="subtitle" style="text-align:center; margin-bottom:40px;">Woh safar jo ek React se shuru hua...</div>';
        container.innerHTML += '<div class="gold-divider visible" style="width:80px;"></div>';

        CONTENT.story.forEach(function(era, index) {
            let html = '<div class="era-block" style="animation-delay: ' + (index * 0.3) + 's;">';

            // Year tag
            html += '<div class="era-year">' + era.year + '</div>';

            // Title
            html += '<div class="title-lg">' + era.title + '</div>';

            // Paragraphs
            era.paragraphs.forEach(function(p) {
                html += '<div class="prose-text">' + p + '</div>';
            });

            // Poetry
            if (era.poetry && era.poetry.length > 0) {
                html += '<div class="poetry-text">';
                era.poetry.forEach(function(line) {
                    html += line + '<br>';
                });
                html += '</div>';
            }

            // Ghazal
            if (era.ghazal && era.ghazal.length > 0) {
                html += '<div class="ghazal-text">';
                era.ghazal.forEach(function(line) {
                    if (line === '') html += '<br>';
                    else html += line + '<br>';
                });
                html += '</div>';
            }

            // Divider
            html += '<div class="gold-divider"></div>';

            html += '</div>';
            container.innerHTML += html;
        });

        // Ending
        container.innerHTML += '<div style="text-align:center; padding:30px; color:var(--text-dim); font-style:italic;">Safar jaari hai... ♥</div>';

        // Trigger scroll reveal
        this.initScrollReveal();
    },

    // ═══════════════════════════════════════
    // 14. ROMANCE LOADER
    // ═══════════════════════════════════════

    loadRomance: function() {
        const container = this.dom.contentInner;
        container.innerHTML = '';

        container.innerHTML += '<div class="title-xl" style="text-align:center; margin-bottom:10px;">Romance Ka Darbar</div>';
        container.innerHTML += '<div class="subtitle" style="text-align:center; margin-bottom:40px;">Mohabbat ke gehre raaz...</div>';
        container.innerHTML += '<div class="gold-divider visible" style="width:80px;"></div>';

        CONTENT.romance.forEach(function(chamber) {
            let html = '<div class="chamber-block">';

            html += '<div class="title-md" style="color:var(--red-bright);">' + chamber.title + '</div>';
            html += '<div class="subtitle" style="margin-bottom:20px;">' + chamber.subtitle + '</div>';

            chamber.paragraphs.forEach(function(p) {
                html += '<div class="prose-text">' + p + '</div>';
            });

            if (chamber.poetry && chamber.poetry.length > 0) {
                html += '<div class="poetry-text" style="color:#ffcccc; text-shadow: 0 0 10px rgba(196,30,58,0.2);">';
                chamber.poetry.forEach(function(line) {
                    html += line + '<br>';
                });
                html += '</div>';
            }

            if (chamber.ghazal && chamber.ghazal.length > 0) {
                html += '<div class="ghazal-text" style="border-color: rgba(196,30,58,0.15); color: #e8a0a0;">';
                chamber.ghazal.forEach(function(line) {
                    if (line === '') html += '<br>';
                    else html += line + '<br>';
                });
                html += '</div>';
            }

            html += '</div>';
            container.innerHTML += html;
        });

        this.initScrollReveal();
    },

    // ═══════════════════════════════════════
    // 15. QUIZ ENGINE
    // ═══════════════════════════════════════

    loadQuiz: function() {
        this.state.quizScore = 0;
        this.state.quizCurrent = 0;
        this.state.quizAnswered = false;
        this.renderQuestion(0);
    },

    renderQuestion: function(index) {
        const self = this;
        const container = this.dom.contentInner;
        const q = CONTENT.quiz[index];

        if (!q) {
            this.showQuizResult();
            return;
        }

        const total = CONTENT.quiz.length;
        const progress = ((index) / total) * 100;
        const category = CONTENT.quizCategories[index] || '';

        let html = '<div class="quiz-card" style="animation: fadeInUp 0.6s ease-out;">';

        // Progress
        html += '<div class="quiz-progress"><div class="quiz-progress-fill" style="width:' + progress + '%"></div></div>';

        // Category + Number
        html += '<div style="font-size:0.8rem; color:var(--text-faint); margin-bottom:5px; letter-spacing:0.15em;">' + category + '</div>';
        html += '<div style="font-size:0.85rem; color:var(--text-dim); margin-bottom:20px;">Sawaal ' + (index + 1) + ' / ' + total + '</div>';

        // Question
        html += '<div class="quiz-q">' + q.q + '</div>';

        // Options
        html += '<div id="quizOptions">';
        q.options.forEach(function(opt, i) {
            html += '<button class="quiz-opt" data-index="' + i + '" style="animation: slideInUp 0.4s ease-out ' + (i * 0.1) + 's both;">' + opt + '</button>';
        });
        html += '</div>';

        // Feedback area
        html += '<div id="quizFeedback" class="quiz-feedback"></div>';

        // Next button (hidden initially)
        html += '<div id="quizNextWrap" style="margin-top:20px; display:none;">';
        html += '<button id="quizNextBtn" class="pass-submit" style="background:rgba(255,215,0,0.1);">Agla Sawaal →</button>';
        html += '</div>';

        html += '</div>';

        container.innerHTML = html;
        this.state.quizAnswered = false;

        // Attach option click events
        const options = document.querySelectorAll('.quiz-opt');
        options.forEach(function(btn) {
            btn.addEventListener('click', function() {
                if (self.state.quizAnswered) return;
                self.handleQuizAnswer(index, parseInt(btn.dataset.index));
            });
        });
    },

    handleQuizAnswer: function(qIndex, picked) {
        const self = this;
        this.state.quizAnswered = true;

        const q = CONTENT.quiz[qIndex];
        const isCorrect = picked === q.correct;
        const options = document.querySelectorAll('.quiz-opt');
        const feedback = document.getElementById('quizFeedback');
        const nextWrap = document.getElementById('quizNextWrap');

        // Highlight answers
        options.forEach(function(btn, i) {
            btn.style.pointerEvents = 'none';
            if (i === q.correct) {
                btn.classList.add('correct');
            }
            if (i === picked && !isCorrect) {
                btn.classList.add('wrong');
            }
        });

        // Update score
        if (isCorrect) {
            this.state.quizScore++;
            feedback.textContent = '✅ ' + q.correctMsg;
            feedback.style.color = '#2ecc71';
            this.createSparkles(window.innerWidth / 2, window.innerHeight / 2, '#2ecc71');
        } else {
            feedback.textContent = '❌ ' + q.wrongMsg;
            feedback.style.color = '#e8a0a0';
        }

        // Show next button
        nextWrap.style.display = 'block';

        // Next button event
        document.getElementById('quizNextBtn').addEventListener('click', function() {
            self.state.quizCurrent = qIndex + 1;
            self.renderQuestion(qIndex + 1);
        });
    },

    showQuizResult: function() {
        const container = this.dom.contentInner;
        const score = this.state.quizScore;
        const total = CONTENT.quiz.length;

        // Find result
        let result = CONTENT.quizResults[CONTENT.quizResults.length - 1];
        for (let i = 0; i < CONTENT.quizResults.length; i++) {
            if (score >= CONTENT.quizResults[i].min) {
                result = CONTENT.quizResults[i];
                break;
            }
        }

        let html = '<div class="quiz-result" style="animation: fadeInUp 0.8s ease-out;">';

        html += '<div style="font-size:0.9rem; color:var(--text-dim); margin-bottom:10px;">NATEEJA</div>';
        html += '<div class="quiz-score" id="scoreDisplay">0</div>';
        html += '<div style="font-size:1.2rem; color:var(--text-dim); margin-bottom:30px;">/ ' + total + '</div>';
        html += '<div class="title-lg" style="margin-bottom:15px;">' + result.title + '</div>';
        html += '<div class="prose-text visible" style="text-align:center;">' + result.msg + '</div>';
        html += '<button class="pass-submit" style="margin-top:30px;" onclick="APP.goHome()">Menu Par Wapas</button>';

        html += '</div>';

        container.innerHTML = html;

        // Animate score count up
        this.animateScore(score);

        // Confetti if high score
        if (score >= 14) {
            this.createConfetti();
        }
    },

    animateScore: function(target) {
        const display = document.getElementById('scoreDisplay');
        if (!display) return;
        let current = 0;
        const interval = setInterval(function() {
            current++;
            display.textContent = current;
            if (current >= target) {
                clearInterval(interval);
            }
        }, 100);
    },

    // ═══════════════════════════════════════
    // 16. FUTURE LOADER
    // ═══════════════════════════════════════

    loadFuture: function() {
        const container = this.dom.contentInner;
        container.innerHTML = '';

        container.innerHTML += '<div class="title-xl" style="text-align:center; margin-bottom:10px;">Mustaqbil Ka Sapna</div>';
        container.innerHTML += '<div class="subtitle" style="text-align:center; margin-bottom:40px;">Hamara aane wala kal...</div>';
        container.innerHTML += '<div class="gold-divider visible" style="width:80px;"></div>';

        CONTENT.future.forEach(function(page) {
            let html = '<div class="future-page">';

            html += '<div class="title-lg future-title">' + page.title + '</div>';
            html += '<div class="subtitle" style="margin-bottom:25px;">' + page.subtitle + '</div>';

            page.paragraphs.forEach(function(p) {
                html += '<div class="prose-text">' + p + '</div>';
            });

            if (page.poetry && page.poetry.length > 0) {
                html += '<div class="poetry-text" style="color: #ffcba4; text-shadow: 0 0 10px rgba(255,127,80,0.2);">';
                page.poetry.forEach(function(line) {
                    if (line === '') html += '<br>';
                    else html += line + '<br>';
                });
                html += '</div>';
            }

            html += '</div>';
            container.innerHTML += html;
        });

        this.initScrollReveal();
    },

    // ═══════════════════════════════════════
    // 17. SCROLL REVEAL SYSTEM
    // ═══════════════════════════════════════

    initScrollReveal: function() {
        const scrollContainer = document.getElementById('screen-content');

        // Small delay to let DOM render
        setTimeout(function() {
            const elements = scrollContainer.querySelectorAll('.prose-text, .poetry-text, .ghazal-text, .era-block, .gold-divider');

            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                root: scrollContainer,
                threshold: 0.15,
                rootMargin: '0px 0px -50px 0px'
            });

            elements.forEach(function(el) {
                observer.observe(el);
            });
        }, 300);
    },

    // ═══════════════════════════════════════
    // 18. FINALE SYSTEM
    // ═══════════════════════════════════════

    checkFinaleStatus: function() {
        const required = ['kahani', 'romance', 'quiz', 'future'];
        const visited = this.state.visited;

        const allDone = required.every(function(r) {
            return visited.indexOf(r) !== -1;
        });

        if (allDone) {
            this.state.finaleUnlocked = true;
            this.dom.finaleCard.classList.add('unlocked');
            this.dom.finaleSub.textContent = 'Tayyar ho? Andar aao...';
            this.dom.finaleIcon.textContent = '🔓';
        }
    },

    attemptFinale: function() {
        if (!this.state.finaleUnlocked) {
            // Shake the card
            this.dom.finaleCard.style.animation = 'shake 0.5s';
            const card = this.dom.finaleCard;
            setTimeout(function() { card.style.animation = ''; }, 500);
            return;
        }

        // Mark visited
        if (this.state.visited.indexOf('finale') === -1) {
            this.state.visited.push('finale');
            localStorage.setItem('zk_visited', JSON.stringify(this.state.visited));
        }

        this.switchScreen('screen-finale');
        this.dom.backBtn.classList.add('show');
        this.playFinale();
    },

    playFinale: function() {
        const self = this;
        const container = this.dom.finaleInner;
        container.innerHTML = '';

        // ─── PHASE 1: DARKNESS + HEARTBEAT ───
        this.finalePhase1(function() {
            // ─── PHASE 2: REWIND ───
            self.finalePhase2(function() {
                // ─── PHASE 3: TRUTH ───
                self.finalePhase3(function() {
                    // ─── PHASE 4: LETTER ───
                    self.finalePhase4(function() {
                        // ─── PHASE 5: DECLARATION ───
                        self.finalePhase5();
                    });
                });
            });
        });
    },

    finalePhase1: function(onComplete) {
        const container = this.dom.finaleInner;
        const lines = CONTENT.finale.phase1Lines;
        container.innerHTML = '<div class="finale-phase active-phase" id="fp1"></div>';
        const phase = document.getElementById('fp1');
        let i = 0;

        function nextBeat() {
            if (i >= lines.length) {
                setTimeout(function() {
                    phase.style.opacity = '0';
                    setTimeout(onComplete, 800);
                }, 1500);
                return;
            }

            const p = document.createElement('div');
            p.style.cssText = 'font-size:1.5rem; margin-bottom:1rem; opacity:0; transform:scale(0.9); transition: all 0.5s;';
            if (i === lines.length - 1) {
                p.style.color = '#ffd700';
                p.style.fontSize = '1.8rem';
            }
            p.textContent = lines[i];
            phase.appendChild(p);

            setTimeout(function() {
                p.style.opacity = '1';
                p.style.transform = 'scale(1)';
            }, 100);

            i++;
            setTimeout(nextBeat, 2000);
        }

        nextBeat();
    },

    finalePhase2: function(onComplete) {
        const container = this.dom.finaleInner;
        const memories = CONTENT.finale.rewindMemories;
        container.innerHTML = '<div class="finale-phase active-phase" id="fp2"></div>';
        const phase = document.getElementById('fp2');
        let i = 0;

        function nextMemory() {
            if (i >= memories.length) {
                setTimeout(function() {
                    phase.style.opacity = '0';
                    setTimeout(onComplete, 800);
                }, 2000);
                return;
            }

            phase.innerHTML = '<div style="font-size:1.4rem; animation: fadeIn 0.5s;">' + memories[i] + '</div>';
            i++;
            setTimeout(nextMemory, 1500);
        }

        nextMemory();
    },

    finalePhase3: function(onComplete) {
        const self = this;
        const container = this.dom.finaleInner;
        const lines = CONTENT.finale.truthLines;
        container.innerHTML = '<div class="finale-phase active-phase" id="fp3" style="overflow-y:auto; padding:20px;"></div>';
        const phase = document.getElementById('fp3');
        let i = 0;

        function nextTruth() {
            if (i >= lines.length) {
                setTimeout(function() {
                    phase.style.opacity = '0';
                    setTimeout(onComplete, 800);
                }, 3000);
                return;
            }

            const p = document.createElement('div');
            p.className = 'prose-text';
            p.style.textAlign = 'center';
            p.textContent = lines[i];
            phase.appendChild(p);

            setTimeout(function() {
                p.classList.add('visible');
            }, 100);

            i++;
            setTimeout(nextTruth, 2500);
        }

        nextTruth();
    },

    finalePhase4: function(onComplete) {
        const self = this;
        const container = this.dom.finaleInner;
        const letterLines = CONTENT.finale.letter;
        container.innerHTML = '<div class="finale-phase active-phase" id="fp4" style="overflow-y:auto; padding:20px; justify-content:flex-start; padding-top:60px;"></div>';
        const phase = document.getElementById('fp4');

        let i = 0;

        function nextLetterLine() {
            if (i >= letterLines.length) {
                setTimeout(function() {
                    phase.style.opacity = '0';
                    setTimeout(onComplete, 1000);
                }, 4000);
                return;
            }

            const line = letterLines[i];
            const p = document.createElement('div');

            if (line === '') {
                p.innerHTML = '<br>';
            } else if (line.indexOf('— Tumhara') !== -1) {
                p.className = 'finale-signature';
                p.textContent = line;
            } else if (i === 0) {
                p.className = 'title-md';
                p.style.textAlign = 'left';
                p.textContent = line;
            } else {
                p.className = 'finale-letter';
                p.style.opacity = '0';
                p.style.transform = 'translateY(15px)';
                p.style.transition = 'all 0.8s ease-out';
                p.textContent = line;
            }

            phase.appendChild(p);

            setTimeout(function() {
                p.style.opacity = '1';
                p.style.transform = 'translateY(0)';
            }, 100);

            i++;

            // Longer delay for emotional impact
            const delay = line === '' ? 500 : 2500;
            setTimeout(nextLetterLine, delay);
        }

        nextLetterLine();
    },

    finalePhase5: function() {
        const self = this;
        const container = this.dom.finaleInner;
        const finale = CONTENT.finale;

        container.innerHTML = '<div class="finale-phase active-phase" id="fp5"></div>';
        const phase = document.getElementById('fp5');

        // Declaration
        setTimeout(function() {
            phase.innerHTML = '<div class="finale-declaration" style="animation: fadeInUp 1s;">' + finale.declaration + '</div>';

            setTimeout(function() {
                const nameEl = document.createElement('div');
                nameEl.className = 'finale-declaration';
                nameEl.style.cssText = 'font-size:3.5rem; margin-top:10px; animation: fadeInUp 1s;';
                nameEl.textContent = finale.declarationName;
                phase.appendChild(nameEl);
            }, 1500);

            // Sub lines
            setTimeout(function() {
                finale.subLines.forEach(function(line, i) {
                    setTimeout(function() {
                        const p = document.createElement('div');
                        p.style.cssText = 'font-size:1.1rem; color:var(--text-main); margin-top:10px; opacity:0; transition: opacity 0.8s;';
                        p.textContent = line;
                        phase.appendChild(p);
                        setTimeout(function() { p.style.opacity = '1'; }, 100);
                    }, i * 1500);
                });
            }, 3500);

            // Confetti
            setTimeout(function() {
                self.createConfetti();
                self.createFloatingHearts();
            }, 2000);

            // Easter egg button
            setTimeout(function() {
                const wrap = document.createElement('div');
                wrap.style.cssText = 'margin-top:40px; opacity:0; transition: opacity 1s;';
                wrap.innerHTML = '<button class="pass-submit" onclick="APP.showEasterEgg()" style="font-size:0.85rem;">Ek Aur Surprise... 👀</button>';
                wrap.innerHTML += '<br><br><button class="pass-submit" onclick="APP.goHome()" style="font-size:0.85rem; opacity:0.5;">Menu Par Wapas</button>';
                phase.appendChild(wrap);
                setTimeout(function() { wrap.style.opacity = '1'; }, 100);
            }, 8000);

        }, 500);
    },

    showEasterEgg: function() {
        const self = this;
        const container = this.dom.finaleInner;
        const lines = CONTENT.finale.easterEgg;

        container.innerHTML = '<div class="finale-phase active-phase" id="fpEgg" style="overflow-y:auto; padding:20px;"></div>';
        const phase = document.getElementById('fpEgg');
        let i = 0;

        function nextLine() {
            if (i >= lines.length) {
                setTimeout(function() {
                    const btn = document.createElement('button');
                    btn.className = 'pass-submit';
                    btn.textContent = 'Wapas ♥';
                    btn.style.marginTop = '30px';
                    btn.addEventListener('click', function() { self.goHome(); });
                    phase.appendChild(btn);
                }, 2000);
                return;
            }

            const p = document.createElement('div');
            p.style.cssText = 'font-size:1.2rem; margin-bottom:0.8rem; opacity:0; transition: opacity 0.6s; text-align:center;';
            if (lines[i] === '') {
                p.innerHTML = '<br>';
                p.style.opacity = '1';
            } else {
                p.textContent = lines[i];
            }
            phase.appendChild(p);
            setTimeout(function() { p.style.opacity = '1'; }, 100);

            i++;
            setTimeout(nextLine, 1500);
        }

        nextLine();
        this.createSparkles(window.innerWidth / 2, window.innerHeight / 3, '#ffd700');
    },

    // ═══════════════════════════════════════
    // 19. VISUAL EFFECTS
    // ═══════════════════════════════════════

    createSparkles: function(x, y, color) {
        const c = color || '#ffd700';
        for (let i = 0; i < 20; i++) {
            const spark = document.createElement('div');
            spark.style.cssText = 'position:fixed; pointer-events:none; z-index:9999; border-radius:50; width:4px; height:4px; background:' + c + '; left:' + x + 'px; top:' + y + 'px; box-shadow: 0 0 6px ' + c + ';';

            document.body.appendChild(spark);

            const angle = Math.random() * Math.PI * 2;
            const velocity = Math.random() * 80 + 30;
            const tx = Math.cos(angle) * velocity;
            const ty = Math.sin(angle) * velocity;

            spark.animate([
                { transform: 'translate(0,0) scale(1)', opacity: 1 },
                { transform: 'translate(' + tx + 'px,' + ty + 'px) scale(0)', opacity: 0 }
            ], {
                duration: 800 + Math.random() * 400,
                easing: 'cubic-bezier(0, .9, .57, 1)'
            }).onfinish = function() { spark.remove(); };
        }
    },

    createConfetti: function() {
        const colors = ['#ffd700', '#ff4444', '#ff69b4', '#ffffff', '#c5a055', '#ff8888'];
        const shapes = ['❤', '★', '✦', '♦', '●'];

        for (let i = 0; i < 80; i++) {
            const piece = document.createElement('div');
            piece.className = 'confetti-piece';
            piece.textContent = shapes[Math.floor(Math.random() * shapes.length)];
            piece.style.cssText = 'left:' + (Math.random() * 100) + 'vw; top:-20px; font-size:' + (Math.random() * 16 + 8) + 'px; color:' + colors[Math.floor(Math.random() * colors.length)] + '; animation: confettiFall ' + (Math.random() * 3 + 3) + 's ' + (Math.random() * 2) + 's linear forwards;';

            document.body.appendChild(piece);

            setTimeout(function() {
                if (piece.parentNode) piece.remove();
            }, 8000);
        }
    },

    createFloatingHearts: function() {
        for (let i = 0; i < 25; i++) {
            const heart = document.createElement('div');
            heart.className = 'float-particle float-heart';
            heart.textContent = '♥';
            heart.style.cssText = 'position:fixed; left:' + (Math.random() * 100) + 'vw; bottom:-20px; font-size:' + (Math.random() * 20 + 10) + 'px; z-index:9990; color:' + (Math.random() > 0.5 ? '#ff4444' : '#ffd700') + '; animation: heartFloat ' + (Math.random() * 5 + 5) + 's ' + (Math.random() * 3) + 's linear forwards;';

            document.body.appendChild(heart);

            setTimeout(function() {
                if (heart.parentNode) heart.remove();
            }, 12000);
        }
    }
};

// ═══════════════════════════════════════
// 20. START THE APP
// ═══════════════════════════════════════

window.addEventListener('DOMContentLoaded', function() {
    APP.init();
});

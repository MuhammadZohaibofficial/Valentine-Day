<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Zohaib Ki Duniya | For Iqra</title>
    
    <!-- Premium Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
    
    <!-- Icons -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">

    <!-- Styles -->
    <link rel="stylesheet" href="style.css">

    <!-- Meta for Mobile (Prevent Zoom) -->
    <meta name="theme-color" content="#050205">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
</head>
<body>

    <!-- =========================================
       GLOBAL ATMOSPHERE (Always Visible)
       ========================================= -->
    
    <!-- 1. Film Grain Texture -->
    <div class="noise-overlay"></div>

    <!-- 2. Cinematic Vignette (Dark Edges) -->
    <div class="vignette-overlay"></div>

    <!-- 3. Ambient Moving Background -->
    <div class="ambient-background">
        <div class="ambient-blob" style="top: 20%; left: 30%; width: 300px; height: 300px; background: var(--gold-dim);"></div>
        <div class="ambient-blob" style="bottom: 10%; right: 20%; width: 400px; height: 400px; background: #2a1030;"></div>
    </div>

    <!-- 4. Audio (Hidden Player) -->
    <audio id="bg-music" loop>
        <source src="https://files.catbox.moe/example_romantic_piano.mp3" type="audio/mpeg"> <!-- Placeholder Link -->
        Your browser does not support the audio element.
    </audio>

    <!-- 5. Reading Progress Bar (Top) -->
    <div id="reading-progress" class="reading-progress"></div>

    <!-- 6. Back Button (Top Left) -->
    <div id="back-btn" class="back-btn" style="display: none;">
        <i class="fas fa-arrow-left"></i>
    </div>


    <!-- =========================================
       SCREEN 1: PRELOADER (15 Seconds)
       ========================================= -->
    <div id="preloader" class="screen active">
        <div class="loader-container">
            <div class="monogram-loader">Z &hearts; I</div>
            
            <div class="loading-bar-track">
                <div id="loading-fill" class="loading-bar-fill"></div>
            </div>
            
            <!-- Dynamic Text Changes via JS -->
            <div id="loading-text" class="loading-text">Kuch khaas ban raha hai...</div>
            <div id="loading-percent" style="margin-top: 5px; color: var(--gold-dim); font-size: 0.8rem;">0%</div>
        </div>
    </div>


    <!-- =========================================
       SCREEN 2: OPENING CINEMATIC (Stars)
       ========================================= -->
    <div id="opening-scene" class="screen">
        <div class="stars-container" id="stars-container"></div>
        <!-- Text injected by JS (Typewriter) -->
        <div id="opening-text-container" style="text-align: center; z-index: 10;"></div>
    </div>


    <!-- =========================================
       SCREEN 3: THE LOCKED DOOR
       ========================================= -->
    <div id="door-scene" class="screen">
        
        <!-- Light Flooding Effect (Hidden initially) -->
        <div id="light-flood" class="light-flood"></div>

        <!-- Candles (Left) -->
        <div class="candle-holder" style="position: absolute; left: 10%; bottom: 20%;">
            <div class="candle-flame"></div>
            <div class="candle-body"></div>
        </div>

        <!-- Candles (Right) -->
        <div class="candle-holder" style="position: absolute; right: 10%; bottom: 20%;">
            <div class="candle-flame"></div>
            <div class="candle-body"></div>
        </div>

        <!-- 3D Door Container -->
        <div class="door-container" id="main-door">
            
            <!-- Door Frame -->
            <div class="door-frame"></div>
            
            <!-- Left Panel -->
            <div class="door-panel door-left">
                <div class="chains" style="left: 10%;"></div>
            </div>
            
            <!-- Right Panel -->
            <div class="door-panel door-right">
                <div class="chains" style="right: 10%;"></div>
            </div>
            
            <!-- Lock Mechanism (Center) -->
            <div class="lock-mechanism" id="door-lock">
                <div class="keyhole"></div>
            </div>

            <!-- Password Input (Below Door) -->
            <div class="password-area" id="password-area">
                <input type="text" id="password-input" class="magic-input" placeholder="Naam likho..." autocomplete="off">
                <div id="hint-msg" style="color: var(--gold-dim); margin-top: 10px; font-size: 0.9rem; opacity: 0;"></div>
            </div>
        
        </div>
    </div>


    <!-- =========================================
       SCREEN 4: WELCOME SEQUENCE
       ========================================= -->
    <div id="welcome-scene" class="screen">
        <!-- Text injected by JS -->
        <div id="welcome-text-container" style="text-align: center;"></div>
    </div>


    <!-- =========================================
       SCREEN 5: MAIN MENU
       ========================================= -->
    <div id="main-menu" class="screen">
        
        <h1 style="text-align: center; margin-bottom: 5px;">Zohaib Ki Duniya</h1>
        <p style="text-align: center; color: var(--text-dim); margin-bottom: 30px;">Ek safar, sirf tumhare liye...</p>

        <div class="menu-grid">
            
            <!-- Card 1: Kahani -->
            <div class="menu-card card-kahani" onclick="navigateTo('kahani')">
                <div>
                    <h3 style="margin: 0; font-size: 1.2rem;">Hamari Kahani</h3>
                    <small style="color: var(--text-dim);">Woh safar jo dil se shuru hua...</small>
                </div>
                <i class="fas fa-book-open" style="color: var(--gold-base); font-size: 1.5rem;"></i>
            </div>

            <!-- Card 2: Romance Ka Darbar -->
            <div class="menu-card card-romance" onclick="navigateTo('romance')">
                <div>
                    <h3 style="margin: 0; font-size: 1.2rem;">Romance Ka Darbar</h3>
                    <small style="color: var(--text-dim);">Mohabbat ke gehre raaz...</small>
                </div>
                <i class="fas fa-heart" style="color: var(--red-bright); font-size: 1.5rem;"></i>
            </div>

            <!-- Card 3: Quiz -->
            <div class="menu-card card-quiz" onclick="navigateTo('quiz')">
                <div>
                    <h3 style="margin: 0; font-size: 1.2rem;">Kya Tum Jaanti Ho?</h3>
                    <small style="color: var(--text-dim);">Ek chota sa imtehaan...</small>
                </div>
                <i class="fas fa-puzzle-piece" style="color: var(--purple-accent); font-size: 1.5rem;"></i>
            </div>

            <!-- Card 4: Mustaqbil -->
            <div class="menu-card card-future" onclick="navigateTo('future')">
                <div>
                    <h3 style="margin: 0; font-size: 1.2rem;">Mustaqbil Ka Sapna</h3>
                    <small style="color: var(--text-dim);">Hamara aane wala kal...</small>
                </div>
                <i class="fas fa-hourglass-half" style="color: #ff7f50; font-size: 1.5rem;"></i>
            </div>

            <!-- Card 5: Grand Finale (LOCKED) -->
            <div id="finale-card" class="menu-card card-finale" onclick="attemptFinale()">
                <div>
                    <h3 style="margin: 0; font-size: 1.2rem;">Aakhri Manzil</h3>
                    <small id="finale-subtitle" style="color: var(--text-dim);">Pehle baaki safar mukammal karo...</small>
                </div>
                <i id="finale-icon" class="fas fa-lock" style="color: #fff; font-size: 1.5rem;"></i>
            </div>

        </div>
    </div>


    <!-- =========================================
       CONTENT SECTIONS (Hidden Initially)
       ========================================= -->

    <!-- SECTION: KAHANI -->
    <div id="section-kahani" class="content-section">
        <div id="kahani-content" style="padding-bottom: 50px;">
            <!-- Injected by JS -->
        </div>
    </div>

    <!-- SECTION: ROMANCE -->
    <div id="section-romance" class="content-section">
        <div id="romance-content" style="padding-bottom: 50px;">
            <!-- Injected by JS -->
        </div>
    </div>

    <!-- SECTION: QUIZ -->
    <div id="section-quiz" class="content-section">
        <div id="quiz-container" style="max-width: 500px; margin: 0 auto;">
            <!-- Injected by JS -->
        </div>
    </div>

    <!-- SECTION: FUTURE -->
    <div id="section-future" class="content-section">
        <div id="future-content" style="padding-bottom: 50px;">
            <!-- Injected by JS -->
        </div>
    </div>

    <!-- SECTION: GRAND FINALE -->
    <div id="section-finale" class="content-section" style="background: #000; display: flex; align-items: center; justify-content: center;">
        <div id="finale-content" style="text-align: center; width: 100%;">
            <!-- Injected by JS -->
        </div>
    </div>


    <!-- =========================================
       SCRIPTS
       ========================================= -->
    <script src="content.js"></script>    <!-- The Brain (Data) -->
    <script src="effects.js"></script>    <!-- The Visuals (Particles/Anim) -->
    <script src="navigation.js"></script> <!-- The Logic (Flow) -->

</body>
</html>

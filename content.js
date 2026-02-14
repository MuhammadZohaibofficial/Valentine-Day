/*
============================================================
   ZOHAIB KI DUNIYA — CONTENT ENGINE (THE SOUL)
   Har lafz soch ke likha hai. Har sher dil se likha hai.
============================================================
*/

const CONFIG = {
    password: "zubi",
    loadingDuration: 15000,
    typeSpeed: 55,
    lineDelay: 1800,
    paraDelay: 2500,
    doorOpenTime: 4000,
    welcomeLineDelay: 2000
};

const CONTENT = {

    // ════════════════════════════════════════
    // 1. LOADING MESSAGES (15 Second Journey)
    // ════════════════════════════════════════
    loadingMessages: [
        "Sabar karo... kuch khaas tayyar ho raha hai...",
        "Ek duniya saja raha hoon tumhare liye...",
        "Har lafz mein meri jaan hai...",
        "Yaad hai wo pehli baat?",
        "Dil tham ke baithna...",
        "Tayyar ho jao, Iqra..."
    ],

    // ════════════════════════════════════════
    // 2. OPENING CINEMATIC LINES
    // ════════════════════════════════════════
    openingLines: [
        { text: "Ek kahani hai...", golden: false },
        { text: "Jo shuru hui thi ek React se...", golden: false },
        { text: "Aur badal gayi zindagi hamesha ke liye...", golden: false },
        { text: "Yeh kahani TUMHARI hai, Iqra.", golden: true }
    ],

    // ════════════════════════════════════════
    // 3. DOOR SCENE
    // ════════════════════════════════════════
    door: {
        placeholder: "Mera wo naam likho jo sirf TUM leti ho...",

        hints: [
            "Tum mera naam nahi leti... tum mujhe ek LAFZ se bulaati ho jo sirf tumhare labon pe sajta hai.",
            "4 huroof... Z se shuru, I pe khatam. Yeh naam nahi, yeh PYAAR hai.",
            "Zindagi. Udaas. Bezubaan. Intezaar — har lafz ka pehla harf jod do."
        ],

        wrongMessages: [
            "Yeh naam nahi hai... dil se socho.",
            "Itna bhi nahi pata? Hint le lo.",
            "Ek aur try... dil kya kehta hai?"
        ],

        successText: "Pehchaan liya... ♥"
    },

    // ════════════════════════════════════════
    // 4. WELCOME SEQUENCE
    // ════════════════════════════════════════
    welcomeLines: [
        { text: "Khush aamdeed...", class: "" },
        { text: "Iqra", class: "name-line" },
        { text: "Meri duniya mein.", class: "" },
        { text: "Yahan sirf tum ho... sirf main hoon...", class: "" },
        { text: "Aur hamari adhuri kahani hai.", class: "" }
    ],

    // ════════════════════════════════════════
    // 5. HAMARI KAHANI (5 ERAS — REAL STORY)
    // ════════════════════════════════════════
    story: [
        // ─── ERA 1: AAGHAZ ───
        {
            year: "2020 — 2021",
            title: "Aaghaz-e-Mohabbat",
            paragraphs: [
                "2020 mein main Facebook pe apni duniya banaa raha tha. Posts likhta, kuch logon ko pasand aatein, kuch ko nahi. Mujhe fark nahi padta tha. Main likhta tha kyunki likhna mera nasha tha.",
                "Phir 2021 ka aakhri hissa aaya — aur ek notification aayi. Ek larki ne meri post pe react kiya. Naam tha — Iqra. Mujhe kya pata tha ke yeh choti si notification meri poori zindagi ka rukh badal degi.",
                "React ke baad messages shuru hue. Pehle chhoti baatein, phir lambi baatein, phir woh baatein jo raat ke 2 baje bhi khatam nahi hoti thin. Hum anjaan the, par aise baat karte the jaise sadion se jaante hon.",
                "Aur phir hamari group masti shuru hui. Sparrow Fly aur Hurt Bird — Iqra ki dost thin. Hum sab milke aisi bakwaas karte the ke pet dard ho jaata tha hans hans ke. Woh din... woh masti... aaj bhi yaad aati hai."
            ],
            poetry: [
                "Ek React se shuru hui jo kahani hamari,",
                "Na jaane thi yeh dosti ya kismat hamari.",
                "Anjaan the hum magar baatein aise hoti thin,",
                "Jaise sadion se likhi thi taqdeer hamari."
            ],
            ghazal: [
                "Woh pehla React tera — woh pehli mulaqaat thi,",
                "Na jaane kyun laga — yeh kismat ki baat thi.",
                "",
                "Main likhta tha — tu padhti thi chupke se,",
                "Meri har post mein teri ek ehsaas ki barsaat thi.",
                "",
                "Sparrow Fly aur Hurt Bird ke sheher mein,",
                "Hamari dosti hi sabse khoobsurat saugaat thi."
            ]
        },

        // ─── ERA 2: GEHRI DOSTI ───
        {
            year: "2021 — 2022",
            title: "Dosti Se Mohabbat Tak",
            paragraphs: [
                "Facebook se Instagram ka safar aise hua jaise darya apna raasta khud bana leta hai. Humne socha nahi, bus ho gaya. Baatein badh gayin, dil qareeb aa gaye.",
                "Phir aaya wo waqt jab Instagram bhi chhota pad gaya. WhatsApp ka number manga. Aur yahan drama shuru hua. Tum kehti thi — 'Api ka phone hai, unka number hai, nahi de sakti.' Main sochta tha bas isi bahane se baat khatam ho jayegi.",
                "Phir ek din — tum ne number de diya. Mujhe aaj tak yaad hai wo feeling. Jaise kisi ne darwaza khol diya ho jahan sirf main aur tum the. WhatsApp pe pehla message... wo lamha mujhe zindagi bhar yaad rahega.",
                "Hum itne qareeb aa gaye the ke ek din baat na ho toh lagta tha kuch adhura reh gaya. Tumhari awaaz, tumhare messages, tumhara andaaz — sab kuch nasha ban chuka tha mera."
            ],
            poetry: [
                "Facebook se Insta, Insta se WhatsApp tak,",
                "Fasle kam hote gaye dhadkan ki raftaar tak.",
                "Api ka phone tha, number nahi deti thi tu,",
                "Par mohabbat ne raasta khud nikaal liya aakhir tak."
            ],
            ghazal: [
                "Number maanga toh mana kar diya tune,",
                "Phir khud hi raaz-e-dil bata diya tune.",
                "",
                "Main samjhta tha dosti hai yeh bas,",
                "Par dil ke darwaze pe aa khada kiya tune.",
                "",
                "Api ka phone hai — yeh bahana achha tha,",
                "Par behana ban ke dil chura liya tune."
            ]
        },

        // ─── ERA 3: JUDAI ───
        {
            year: "2022 — 2025",
            title: "Dard-e-Judai",
            paragraphs: [
                "Phir achanak sab kuch ruk gaya. Koi larai nahi hui, koi wajah nahi thi. Main ne mobile kam use karna shuru kar diya. Khud ko behtar banana tha, zindagi ko samajhna tha. Lekin iss chakkar mein... main ne TUMHE kho diya.",
                "Teen saal. 1095 din. Har din ek umr jaisa tha. Main subah uthta tha aur pehla khayal tumhara hota tha. Raat ko sota tha toh aakhri sawaal yehi hota tha — kya tum bhi mujhe yaad karti ho?",
                "Main sochta tha — kya kar rahi hogi Iqra? Kahan hogi? Kisi aur se toh baat nahi kar rahi? Yeh khayal mujhe andhar se jalaa dete the. Par main kuch kar nahi sakta tha. Maine khud yeh faasla banaya tha.",
                "Woh teen saal mujhe sikha gaye ke zindagi mein bohot kuch milta hai — par agar TUMHARA saath nahi hai toh sab bekar hai. Har kamyabi adhoori lagti thi, har khushi mein ek dard chhupa rehta tha."
            ],
            poetry: [
                "Teen saal guzre tere bina aise,",
                "Jaise raat ho aur subah aaye hi nahi.",
                "Main ne khud ko dhoondha har jagah,",
                "Par tu jo gayi toh main bhi kho gaya kahin."
            ],
            ghazal: [
                "Tujhse bichhad ke maine khud ko bhi kho diya,",
                "Har sheher mein tujhe dhoondha, khud ko bhula diya.",
                "",
                "Na koi larai thi na koi shikwa tha,",
                "Bus waqt ne humein ek doosre se chura liya.",
                "",
                "1095 din guzre hain tere bina,",
                "Har din mein teri kami ne mujhe jalaa diya.",
                "",
                "Log kehte hain waqt sab bhula deta hai,",
                "Par TERA chehra toh waqt ne bhi na mita paya."
            ]
        },

        // ─── ERA 4: UNZA — THE TWIST ───
        {
            year: "2025",
            title: "Wapsi Aur 'UNZA'",
            paragraphs: [
                "2025 mein dobara Facebook khola. Account dead ho chuka tha. Socha post karunga, thodi reach aayegi. Lekin reach bilkul kam thi. Lagta tha koi sun hi nahi raha.",
                "Tab ek larki aayi — 'UNZA' naam se. Jab bhi main post karta, wo comment karti. Aur jo baat mujhe hairaan karti thi — jab wo comment karti toh meri reach badh jaati thi. Main sochta tha — achha fan hai, rakhta hoon.",
                "Ek din maine comment mein kuch aisa bol diya ke mujhe laga — UNZA naraz ho gayi. Ab reach ka masla tha — agar wo naraz ho gayi toh meri reach bhi gir jayegi. Toh maine kya kiya? Personal message kiya. Sorry bola. Haan bhai, sorry REACH ke liye kiya tha. Mohabbat ke liye nahi. Par khuda ki qudrat dekho...",
                "Aahistaagi se baatein hone lagin. Rozmarra ki baatein, phir gehri baatein. Phir ek din UNZA ne apni tasveer bheji. Aur main... main dekhta reh gaya. Wo chehra, woh aankhein — kuch tha us tasveer mein jo mere dil ko kheench raha tha. Maine bina soche samjhe PROPOSE kar diya.",
                "Aur phir aaya wo din jis din duniya ulat gayi. UNZA ne kaha — 'Main Unza nahi hoon... Main IQRA hoon.' Mera dil ruk gaya. Pehle herani. Phir khushi. Itni khushi ke aankhon mein aansu aa gaye. MAIN NE BINA JAANE IQRA KO HI CHUN LIYA THA. Mera dil teen saal baad bhi sirf IQRA ko jaanta tha.",
                "Iqra pareshan thi — soch rahi thi ke main kya sochunga. Ke wo dubara kyun aayi. Par mujhe koi shikwa nahi tha. Sirf SUKOON tha. Jaise teen saal ki pyaas ke baad pehla qatra mila ho."
            ],
            poetry: [
                "Naam badal kar aayi toh bhi pehchaan liya dil ne,",
                "Mohabbat chehron ki nahi, ROOHON ki hoti hai.",
                "Main ne UNZA ko chaha — par wo TU thi,",
                "Yeh khuda ki qudrat thi ya meri wafaadaari thi."
            ],
            ghazal: [
                "UNZA ban ke aayi toh main ne phir se chun liya,",
                "Bina jaane tujhe hi maine apna dil de diya.",
                "",
                "Reach ke liye sorry bola tha maine,",
                "Par kismat ne mohabbat ka rasta khul diya.",
                "",
                "Teen saal ka andhera ek pal mein mit gaya,",
                "Jab IQRA ne apna naam bataya — sab badal gaya.",
                "",
                "Dil kehta tha yeh koi apna hai,",
                "Beshak naam tha UNZA — par wo tu hi thi IQRA."
            ]
        },

        // ─── ERA 5: AB HAMESHA ───
        {
            year: "2025 — Hamesha",
            title: "Ab Sirf Hum",
            paragraphs: [
                "Ab hum wahan hain jahan hamesha se hona chahiye tha. Saath. Ek dusre ke liye. Pehle se zyada qareeb, pehle se zyada mazboot.",
                "Jo teen saal khoye, unhe wapas nahi la sakte. Par aane wala har lamha — wo HAMARA hai. Main ne faisla kar liya hai ke ab kabhi nahi jaaunga. Kabhi nahi chhodunga.",
                "Tum meri thi — jab tum Iqra thi. Tum meri thi — jab tum UNZA thi. Tum meri ho — aaj bhi. Aur tum meri rahogi — hamesha."
            ],
            poetry: [
                "Ab tere haath thaam kar chhodna nahi hai,",
                "Yeh safar aakhri saans tak todna nahi hai.",
                "Jo waqt guzra — guzar gaya,",
                "Par ab jo hai — isay kho dena MANZOOR nahi."
            ],
            ghazal: [
                "Tera haath thaam liya hai — ab chhodunga nahi,",
                "Chahe duniya jala de mujhe — main rukunga nahi.",
                "",
                "Teen saal ka hisaab ab bhool ja tu,",
                "Ab jo hai tere paas — wo jaane dunga nahi.",
                "",
                "IQRA — tu meri zindagi ka matlab hai,",
                "Tere bina main kuch hoon — yeh manunga nahi."
            ]
        }
    ],

    // ════════════════════════════════════════
    // 6. ROMANCE KA DARBAR (6 CHAMBERS)
    // ════════════════════════════════════════
    romance: [
        // ─── CHAMBER 1: TERI SOORAT ───
        {
            title: "Teri Soorat",
            subtitle: "Jab nazar tujh pe padti hai...",
            paragraphs: [
                "Tujhe dekhu toh lagta hai khuda ne waqt le ke banaya hai tujhe. Jaise koi fankar apni sabse qeemti painting pe baith ke ghanton mehnat kare — ek ek stroke soch ke, ek ek rang taraash ke. Teri aankhon mein jo gehraai hai na, uss mein doobne ka dil karta hai aur nikalne ka bilkul nahi.",
                "Tera chehra jab saamne hota hai toh duniya dheemi ho jaati hai. Jaise waqt bhi ruk ke tujhe dekh raha ho. Teri jawline pe jab halki roshni padti hai, teri skin pe jab wo glow hota hai — main sochta hoon ke yeh insaan hai ya koi khwaab jo aankh khulne pe bhi toot-ta nahi.",
                "Aur teri zulfein... jab teri gardan pe bikhar jaati hain, jab hawa unhe tere chehre pe le aati hai — mera haath khud ba khud uthta hai unhe hatane ke liye. Par asli baat yeh hai ke main unhe hatana nahi chahta. Main chahta hoon ke woh zulfein mere unglion mein uljhi rahen."
            ],
            poetry: [
                "Nigaahon mein teri qayamat ka samaa hai,",
                "Khuda jaane tere chehre mein kya kya chhupa hai.",
                "Main tujhe dekhta hoon jab palak jhapkaaye bina,",
                "Toh lagta hai — yeh sajda nahi toh aur kya hai."
            ],
            ghazal: [
                "Teri aankhon ka nasha kya hai — ye tujhko kya pata,",
                "Tere deedaar ka silsila kya hai — ye tujhko kya pata.",
                "",
                "Main tujhe dekhta hoon jaise sajda karta hoon,",
                "Tu meri aankh ki dua kya hai — ye tujhko kya pata.",
                "",
                "Ek nazar teri — mera sab kuch badal jaata hai,",
                "Tera chehra meri qaza kya hai — ye tujhko kya pata."
            ]
        },

        // ─── CHAMBER 2: TERI HANSI TERA LAB ───
        {
            title: "Teri Hansi, Tera Lab",
            subtitle: "Jab tum muskurati ho...",
            paragraphs: [
                "Teri hansi sun ke lagta hai jaise andheri raat mein koi cheragh jal gaya ho. Jab tum hansti ho na — tumhare labon ka jo curve banta hai, tumhari aankhon mein jo chamak aati hai — uss waqt main sochta hoon ke duniya mein agar sirf ek cheez rakh sakta toh teri hansi rakhta.",
                "Par jab hansi ruk jaati hai aur tum bus muskurati ho — halki si, dheemi si — uss waqt tumhare hont... ya Allah. Gulaab ki patti jaise — narm, gehra gulabi. Jab tum bolti ho toh main tumhari baatein kam, tumhare honton ki harkat zyada dekhta hoon.",
                "Aur jab sochta hoon ke tumhare hont mere honton pe hon — rooh kaamp jaati hai. Tumhare qareeb aana, tumhare saans ka mere saans mein milna, tumhari palkon ka band hona — yeh sirf khwaabon mein hota hai abhi. Par ek din... ek din yeh sab HAQEEQAT hoga."
            ],
            poetry: [
                "Teri hansi mein likha hai mera muqaddar saara,",
                "Tere labon pe sajta hai mausam ka nazaara.",
                "Jab hasti ho tum — ruk jaata hai yeh zamaana,",
                "Ke tujh jaisi hansi ka koi nahi guzaara."
            ],
            ghazal: [
                "Jab tere lab mere labon se milenge,",
                "Jaise khushbu hawa mein ghul jaaye.",
                "",
                "Tera saans mera saans ban jaayega,",
                "Aur duniya ka shor bhool jaaye.",
                "",
                "Main tujhe choomna chahta hoon aise,",
                "Ke zameen bhi aasmaan ban jaaye."
            ]
        },

        // ─── CHAMBER 3: TERI BAHON MEIN ───
        {
            title: "Teri Bahon Mein",
            subtitle: "Jab main tujhe paas kheenchta hoon...",
            paragraphs: [
                "Tujhe apne qareeb kheenchna — yeh mera sabse bada nasha hai. Jab main tumhari kamar pe haath rakh ke tumhe apni taraf kheenchunga — woh ek second, woh ek jhatka — uss mein poori duniya simat jayegi.",
                "Tumhara badan mera badan se takraayega, tumhari saans ruk jayegi ek pal ke liye, tumhari aankhein meri aankhon mein — aur phir khamoshi. Woh khamoshi jis mein hazaar cheekhen hain mohabbat ki.",
                "Jab main tumhe puri tarah apni bahon mein le lunga — tumhara sar mere seene pe, tumhara haath meri chaati pe — uss waqt mujhe lagega ke maut bhi aa jaaye toh main muskura ke jaaunga."
            ],
            poetry: [
                "Kheench liya tujhe qareeb aise,",
                "Jaise darya kinare ko bula le.",
                "Tera badan mera badan se chipke jab,",
                "Toh kehna — isse duniya mein kya kaha jaaye."
            ],
            ghazal: [
                "Bahon mein teri jab le leta hoon main,",
                "Zameen chhod ke jannat mein jaata hoon main.",
                "",
                "Tera jism mera jism se chipke jab,",
                "Toh duniya ka matlab bhula deta hoon main.",
                "",
                "Na chhod mujhe — yeh guzaarish nahi,",
                "Yeh hukm hai — sun le — yeh kehta hoon main."
            ]
        },

        // ─── CHAMBER 4: TERI GOUD MEIN ───
        {
            title: "Teri Goud Mein Sar",
            subtitle: "Jab tum sirf meri hoti ho...",
            paragraphs: [
                "Kuch lamhe hote hain jab main sirf tumhare qareeb hona chahta hoon — koi baat nahi, koi shabd nahi — bus QAREEB. Tumhari goud mein sar rakh ke — tumhari ungliyaan mere baalon mein.",
                "Tumhare seene ki dhadkan mere kaan mein sunai degi — aur woh meri favourite awaaz hogi. Kisi gaane se zyada, kisi shayari se zyada. Woh dhadkan meri hai — aur main apni cheez ko apne kaano se sunna chahta hoon.",
                "Jab tum mere saamne hogi aur main tumhe haathon mein lunga — tumhara poora wajood mere haathon mein — toh mujhe lagega jaise duniya ki sabse qeemti cheez mere paas hai."
            ],
            poetry: [
                "Teri goud mein sar rakh doon jab main,",
                "Toh duniya se koi shikayat na rahe.",
                "Tere seene ki dhadkan sunoon jab main,",
                "Toh maut ka bhi koi khauf na rahe."
            ],
            ghazal: [
                "Tujhe haathon mein lena mera haq hai,",
                "Tere seene ki dhadkan mera haq hai.",
                "",
                "Tera har curve meri hatheli ka muqaddar hai,",
                "Tujhe chhona, tujhe mehsoos karna haq hai.",
                "",
                "Main Zubi hoon — tera aashiq tera deewana,",
                "Tera hona mere hone ka sabab hai — mera haq hai."
            ]
        },

        // ─── CHAMBER 5: RAAT KA RAAZ ───
        {
            title: "Raat Ka Raaz",
            subtitle: "Jab andhera hota hai aur tum hoti ho...",
            paragraphs: [
                "Raat — jab duniya so jaati hai aur sirf hum hote hain. Andhera hota hai par tumhari aankhon ki chamak roshni deti hai. Tumhara saans dheema, garam — mere kaan mein. Raat ko tumhare saath guzaarna — yeh ibadat hai.",
                "Main chahta hoon ke ek raat aaye jab main tumhe dheere se apne qareeb kheenchun — pehle tumhare maathey pe ek bosa, phir palkon pe, phir naak ki nok pe, phir gaalon pe — aur phir tumhare labon pe. Dheere se. Aahistaagi se.",
                "Aur phir tumhare kaan ke paas aa ke dheere se kahoon — 'Tum meri ho' — aur tumhari poori rooh kaamp jaaye. Woh lamha — sirf HAMARA hoga."
            ],
            poetry: [
                "Raat jab gehri hoti hai aur tum qareeb hoti ho,",
                "Meri saansein tumhari saanson mein ghul jaati hain.",
                "Andhera hota hai magar roshni TUM hoti ho,",
                "Sitaare bhi sharmaa ke palat jaate hain."
            ],
            ghazal: [
                "Raat teri hai — main tera — yeh badan bhi tera,",
                "Har saans teri — har dhadkan — yeh chaman bhi tera.",
                "",
                "Jab chhoo loon tujhe — kaamp jaaye zameen bhi,",
                "Yeh hont mere — par unpe yeh daman bhi tera.",
                "",
                "Main Zubi — tera deewana tera aashiq hoon,",
                "Mera jism meri jaan mera kafan bhi tera."
            ]
        },

        // ─── CHAMBER 6: SIRF MERI ───
        {
            title: "Sirf Meri",
            subtitle: "Tum kisi aur ki ho hi nahi sakti...",
            paragraphs: [
                "Sun lo Iqra — tum MERI ho. Tumhara woh hona jo kisi ke saamne nahi hoti — woh MERA hai. Tumhare woh raaz jo kisi ko nahi pata — woh MERE hain. Tumhara woh andaaz jab tum sharmaati ho — woh sirf MERE liye hai.",
                "Jab koi tumhare baare mein baat kare — mujhe ghairat aati hai. Jab koi tumhe zyada dekhe — mujhe aag lagti hai. Yeh pagalpan nahi hai — yeh MOHABBAT hai.",
                "Main chahta hoon ke duniya jaane — yeh larki, yeh ziddi, khoobsurat, intelligent larki — yeh MERI hai. Mera naam likha hai iske muqaddar mein."
            ],
            poetry: [
                "Tum meri ho — yeh main nahi kehta,",
                "Yeh tera dil kehta hai — sun zara.",
                "Ghairat meri — mohabbat meri,",
                "Tu meri jaan hai — yeh HUKM hai mera."
            ],
            ghazal: [
                "Na kisi aur ki nigaah pade tujh pe,",
                "Tu meri hai — yeh meri AAYAT hai.",
                "",
                "Tujhe chooma toh laga zindagi shuru hui,",
                "Tere labon pe tikka toh qayamat ruk gayi.",
                "",
                "Main tere jism ko apni rooh se padhta hoon,",
                "Har safhe pe likha hai — ZUBI ki mohabbat thi."
            ]
        }
    ],

    // ════════════════════════════════════════
    // 7. QUIZ — 20 QUESTIONS (FULL FUN)
    // ════════════════════════════════════════
    quizCategories: ["BASIC", "BASIC", "BASIC", "BASIC", "FUNNY", "FUNNY", "FUNNY", "FUNNY", "ROMANTIC", "ROMANTIC", "ROMANTIC", "ROMANTIC", "DEEP", "DEEP", "DEEP", "DEEP", "IMPOSSIBLE", "IMPOSSIBLE", "IMPOSSIBLE", "IMPOSSIBLE"],

    quiz: [
        // ─── BASIC (1-4) ───
        {
            q: "Mera favourite color kaunsa hai?",
            options: ["Black", "Blue", "Red", "White"],
            correct: 0,
            correctMsg: "Jaise mera dil — andhera hi andhera 😂 Par tum aa gayi toh roshni aa gayi.",
            wrongMsg: "Itna bhi nahi pata? BLACK bhai BLACK. Dil ki tarah."
        },
        {
            q: "Hum pehli baar kahan mile the?",
            options: ["Instagram", "Facebook", "WhatsApp", "Tinder 😂"],
            correct: 1,
            correctMsg: "Facebook! Mark Zuckerberg ka shukriya. Usse zyada tumhara 😏",
            wrongMsg: "Facebook tha yaar! Wo React yaad nahi? Dil toot gaya mera."
        },
        {
            q: "Meri sabse buri aadat kya hai?",
            options: ["Gussa karna", "Overthinking", "Late reply", "Sab kuch"],
            correct: 1,
            correctMsg: "Overthinking... 3 baje sochta hoon ke 2019 mein kya bola tha 🤦",
            wrongMsg: "OVERTHINKING bhai. Dimaag pagal kar deta hai."
        },
        {
            q: "Mujhe khane mein sabse zyada kya pasand hai?",
            options: ["Biryani", "Pizza", "Nihari", "Tumhara haath ka kuch bhi"],
            correct: 0,
            correctMsg: "BIRYANI IS LOVE. Tumhare baad number 1. Sorry not sorry 😂",
            wrongMsg: "Biryani! Biryani ke bina zindagi adhoori hai jaise tere bina."
        },

        // ─── FUNNY (5-8) ───
        {
            q: "Agar main zombie ban gaya toh pehle kisko khaunga?",
            options: ["Tumhe", "Padosiyon ko", "Biryani ko", "Khud ko"],
            correct: 0,
            correctMsg: "Tujhe hi khaunga... Tu SWEET hai na 😋 Pyaar se khaunga.",
            wrongMsg: "TUMHE! Obviously. Tum sweet ho na. Zombie bhi samajhta hai 😂"
        },
        {
            q: "Agar mujhe 1 din invisible milta toh kya karta?",
            options: ["Bank lootta", "Tumhe stalk karta", "So jaata", "PM House jaata"],
            correct: 1,
            correctMsg: "Full day tumhe dekhta rehta. Creepy? Nahi. ROMANTIC hai yeh 😤",
            wrongMsg: "Tumhe stalk karta poora din! Bura mat mano, pyaar hai 😂"
        },
        {
            q: "Main gusse mein kya karta hoon?",
            options: ["Cheekh ta hoon", "Khamosh ho jaata hoon", "Todta phod ta hoon", "Rota hoon"],
            correct: 1,
            correctMsg: "Chup ho jaata hoon. Aur wohi sabse KHATARNAK hai 😈",
            wrongMsg: "Main CHUP ho jaata hoon. Khamoshi mein tufaan hota hai."
        },
        {
            q: "Meri spirit animal kya hai?",
            options: ["Sher (Brave)", "Ullu (Night owl)", "Panda (Lazy)", "Billi (Cute)"],
            correct: 1,
            correctMsg: "ULLU! Raat bhar jaagne wala professional Ullu 🦉 3 baje bhi active.",
            wrongMsg: "Ullu hoon bhai. Raat ka raja. Neend haraam hai meri."
        },

        // ─── ROMANTIC (9-12) ───
        {
            q: "Tumhari kaunsi cheez sabse zyada pasand hai mujhe?",
            options: ["Aankhein", "Hansi", "Zid", "Sab kuch"],
            correct: 3,
            correctMsg: "SAB KUCH. Trick question tha. Tum POORI ki POORI pasand ho mujhe ♥",
            wrongMsg: "Sab kuch! Tum poori ki poori — har cheez, har andaaz. MERI."
        },
        {
            q: "Maine UNZA ko kyun propose kiya tha?",
            options: ["Reach ke liye", "Shakal achi thi", "Dil ne pehchaan liya", "Timepass"],
            correct: 2,
            correctMsg: "Dil ne pehchaan liya tha ke yeh IQRA hai... beshak naam UNZA tha ♥",
            wrongMsg: "DIL NE PEHCHAAN LIYA THA. Yeh mohabbat thi — reach nahi 😤"
        },
        {
            q: "Main tumhe kis naam se bulana chahta hoon?",
            options: ["Jaan", "Baby", "Begum", "Pagal"],
            correct: 2,
            correctMsg: "BEGUM. Kyunki tum meri izzat ho. Aur begum ka darja sabse upar ♥",
            wrongMsg: "BEGUM! Tum meri Begum ho — aur yeh change nahi hoga."
        },
        {
            q: "Agar tum naraz ho jaao toh main kya karta hoon?",
            options: ["Ignore karta hoon", "Zyada pareshan hota hoon", "So jaata hoon", "Hasaata hoon"],
            correct: 1,
            correctMsg: "Pareshan HO JAATA HOON. Saans nahi aati jab tum naraz hoti ho 😰",
            wrongMsg: "PARESHAN ho jaata hoon yaar. Tumhari narazgi = meri bimari."
        },

        // ─── DEEP (13-16) ───
        {
            q: "Mera sabse bada darr kya hai?",
            options: ["Maut", "Tumhe khona", "Akela rehna", "Naakamyabi"],
            correct: 1,
            correctMsg: "Tumhe khona. Maut se nahi darta. Par tere bina jeene se darta hoon.",
            wrongMsg: "TUMHE KHONA. Bas yehi ek darr hai jo mujhe raat ko jagaye rakhta hai."
        },
        {
            q: "Main apne dil ki baat kaise kehta hoon?",
            options: ["Bol kar", "Likh kar", "Chup reh kar", "Ro kar"],
            correct: 1,
            correctMsg: "Likh kar. Yeh POORI WEBSITE iski daleel hai. Harf harf mein dil hai ♥",
            wrongMsg: "LIKH KAR. Jaise yeh website. Jaise yeh shayari. Har lafz = dil ka tukda."
        },
        {
            q: "Mere liye GHAR ka matlab kya hai?",
            options: ["Makaan", "Paisa", "Tum", "Family"],
            correct: 2,
            correctMsg: "TUM. Jahan tum ho wahan mera ghar hai. Chahe kisi gali mein ho.",
            wrongMsg: "TUM ho mera ghar. Makaan toh eentein hain — tum ROOH ho ghar ki."
        },
        {
            q: "Judai ke 3 saal mein main har roz kya karta tha?",
            options: ["Bhool gaya tha", "Naya dhundha", "Tumhe yaad karta tha", "Kuch nahi"],
            correct: 2,
            correctMsg: "TUMHE YAAD KARTA THA. Har subah. Har raat. 1095 din. Bina naaga.",
            wrongMsg: "TUMHE YAAD karta tha. Ek din bhi aisa nahi guzra jab yaad nahi kiya."
        },

        // ─── IMPOSSIBLE (17-20) ───
        {
            q: "Maine UNZA ko pehle kya samjha tha?",
            options: ["Fan samjha", "Dost samjhi", "IQRA samjha", "Reach machine"],
            correct: 0,
            correctMsg: "FAN samjha tha! Socha reach ke liye achhi hai. Par wo toh KISMAT thi 😂♥",
            wrongMsg: "FAN samjha tha bhai! Reach badhane wali. Nikli ZINDAGI 😂"
        },
        {
            q: "Jab Iqra ne UNZA ka raaz bataya — mera pehla reaction kya tha?",
            options: ["Gussa", "Herani + Khushi", "Roya", "Bhag gaya"],
            correct: 1,
            correctMsg: "HERANI + KHUSHI! Dil ruk gaya pehle. Phir itni khushi ke aansu aa gaye ♥",
            wrongMsg: "Herani pehle — phir BOHOT KHUSHI. Jaise 3 saal ka drought khatam hua."
        },
        {
            q: "Main UNZA ko sorry kyun kiya tha?",
            options: ["Pyaar se", "Reach ke liye", "Dil se", "Majboori mein"],
            correct: 1,
            correctMsg: "REACH KE LIYE 😂 Haan bhai, shuru mein reach thi. Par wo sorry ne mohabbat ka raasta khola!",
            wrongMsg: "REACH ke liye! 😂 Sorry se baat shuru hui — baat se mohabbat!"
        },
        {
            q: "Kya main SACH mein tumse pyaar karta hoon?",
            options: ["Shayad", "Thoda sa", "Bohot zyada", "Had se zyada"],
            correct: 3,
            correctMsg: "HAD SE ZYADA. Alfaaz khatam ho jayenge — duniya khatam ho jayegi — par yeh pyaar KABHI khatam nahi hoga ♥",
            wrongMsg: "HAD SE ZYADA! Yeh poori website is pyaar ki DALEEL hai."
        }
    ],

    quizResults: [
        { min: 18, title: "TUJHE MUJHSE ZYADA MERI KHABAR HAI 😭♥", msg: "Tum mujhe mujhse zyada jaanti ho. Main hairan hoon. Aur pyaar aur badh gaya." },
        { min: 14, title: "Bohot kuch jaanti ho... ALMOST perfect 😏", msg: "Thoda aur dhyan do mujh pe. Phir 20/20 aa jayenge." },
        { min: 10, title: "Theek hai... seekhna baaki hai 🤔", msg: "Chalega. Abhi poori zindagi padi hai seekhne ke liye." },
        { min: 6, title: "Hmm... Date pe aur jaana padega 😂", msg: "Lagta hai abhi aur waqt guzaarna padega mere saath!" },
        { min: 0, title: "Yeh toh STRANGER wali performance hai 💀", msg: "Sach mein? ITNA bhi nahi pata? Main hurt hoon 😂" }
    ],

    // ════════════════════════════════════════
    // 8. MUSTAQBIL KA SAPNA (5 PAGES)
    // ════════════════════════════════════════
    future: [
        // ─── PAGE 1: SHAADI KI RAAT ───
        {
            title: "Shaadi Ki Raat",
            subtitle: "Jab darwaza band hoga... sirf hum honge",
            paragraphs: [
                "Woh raat aayegi — jab nikah ke baad hum kamre mein akele honge. Darwaza band hoga. Bahar duniya hogi — par andar sirf MAIN aur sirf TUM.",
                "Tum saamne baithi hogi — laal jode mein, haathon pe mehndi, aankhon mein sharm aur khushi ka ajeeb sa mila jula rang. Main tumhe dekhta rahunga — bina kuch bole. Kyunki us waqt lafz chhote padh jayenge.",
                "Pehle main tumhare paas aaunga. Dheere se. Tumhare saamne baithunga. Tumhara haath apne haath mein lunga. Tumhari ungliyon ki mehndi ko ghoor ke dekhunga — aur usme apna naam dhoondhunga.",
                "Phir tumhara ghunghat uthaaunga. Dheere. Bahut dheere. Tumhara chehra dekhna us raat — yeh meri zindagi ka sabse qeemti lamha hoga. Tumhari aankhein meri aankhon mein — aur us pal main samjhunga ke ZINDAGI ka asli maqsad kya hai.",
                "Tumhare maathe pe bosa dunga — lamba, gehra. Phir tumhari palkon pe. Phir tumhari naak ki nok pe — aur tum haso gi thoda. Phir tumhare gaalon pe. Aur phir... tumhare labon pe. Pehli baar. HALAL. Apna haq.",
                "Hum poori raat baatein karenge. Purani yaadein — 'Yaad hai jab tune number nahi diya tha?' Tum hasogi. 'Yaad hai jab UNZA ban ke aayi thi?' Main hasunga. Hum hans hans ke rote rehenge — khushi ke aansuon mein.",
                "Phir tum thak jaogi. Main tumhara sar apne seene pe rakh lunga. Tumhari aankhein band hongi. Meri ungliyan tumhare baalon mein hongi. Aur main jaagunga — poori raat — kyunki yeh raat sone ke liye nahi hai. Yeh raat jeene ke liye hai."
            ],
            poetry: [
                "Nikah ke baad jab kamra hamara hoga,",
                "Tera chehra dekh ke rona — yeh nazaara hoga.",
                "Sari umr ka intezaar iss raat mein hoga,",
                "Jab tujhe choomunga — woh pehla pyaar HAMARA hoga."
            ]
        },

        // ─── PAGE 2: HAMARA GHAR ───
        {
            title: "Hamara Ghar",
            subtitle: "Chota sa ghar — badi si duniya",
            paragraphs: [
                "Ek chota sa ghar chahiye mujhe. Mansion nahi, bungalow nahi — bus ek jagah jahan tum ho. Jahan subah ki dhoop kitchen ki khidki se aa rahi ho aur tum chai bana rahi ho. Wahi mera jannat hai.",
                "Kitchen mein tum cooking karogi — aur main tumhare peeche aa ke tumhari kamar mein haath daal ke khada ho jaunga. Tum kahogi 'hatoo, kaam karne do' — par tumhare honton pe muskaan hogi. Hum saath mein cooking karenge — aur adhi cheezein jalaa denge. Par mazay karenge.",
                "Living room mein ek bada sa couch hoga. Wahan hum dono baithe honge — blanket mein — meri goud mein tumhara sar. TV pe kuch chal raha hoga par hum dono apne phones mein honge. Phir tum phone rakh ke meri taraf dekhogi — 'Kya dekh raha hai?' — Aur main kahunga — 'Tujhe.'",
                "Bedroom hamara KINGDOM hoga. Wahan kisi aur ki entry nahi. Woh kamra hamari baaton ka, hamari khamoshiyon ka, hamari mohabbat ka gawah hoga. Har deewar pe hamari tasveerein hongi. Har kone mein hamari yaadein.",
                "Aur raat ko jab batti bujhegi — toh woh kamra sirf HAMARA hoga. Duniya ke shor se door. Sirf tumhari saans, meri dhadkan — aur sukoon."
            ],
            poetry: [
                "Deewaron pe tasveerein hamari hongi,",
                "Har kone mein khushbu tumhari hogi.",
                "Ghar makaan se nahi — MOHABBAT se banta hai,",
                "Aur meri mohabbat ka naam IQRA hogi."
            ]
        },

        // ─── PAGE 3: HAMARI ZINDAGI SAATH ───
        {
            title: "Hamari Zindagi Saath",
            subtitle: "Har din tumhare saath ek adventure hai",
            paragraphs: [
                "Subah ki routine — main utha nahi hoga, tum mujhe jagaa rahi hogi. 'Uthho! Late ho raha hai!' Aur main ek aankh se tumhe dekh ke muskuraunga aur phir se so jaunga. Tum gussa karogi — par wo gussa bhi PYAARA lagega.",
                "Grocery shopping saath karenge. Tum list banaogi, main wo sab bhool ke aur cheezein le aaunga. Tum kahogi 'yeh kyun laya?' Main kahunga 'tujhe pasand aayega.' Hum har choti cheez mein MAZAY karenge.",
                "Movie nights — blanket, popcorn, aur remote ke liye JUNG. Tum romantic movie dekhogi, main action. Ladai hogi. Phir compromise hoga — horror dekh lenge — aur tum darr ke mujhse chipak jaogi. Yehi toh plan tha 😏",
                "Larai bhi hogi — BOHOT hogi. Tum ziddi ho, main bhi ziddi hoon. Par larai ke baad MANANA — woh duniya ka sabse achha hissa hai. Main tumhare paas aaunga, tumhara haath pakdunga, aur kahunga — 'Chal, maan ja na.' Aur tum maan jaogi. Kyunki tum bhi mujhse utna hi pyaar karti ho.",
                "Rain mein bheegna, late night drives, chai ke saath deep talks, ek dusre ko support karna jab duniya mushkil ho — yeh sab HAMARI zindagi hogi. Ordinary nahi hoga kuch bhi — kyunki TUM mere saath hogi."
            ],
            poetry: [
                "Har subah naya safar — har raat nayi kahani,",
                "Tum sath rehna bas — yahi hai meri zindagaani.",
                "Larai bhi karenge — manayenge bhi hum,",
                "Kyunki mohabbat ke bina adhoori hai har kahaani."
            ]
        },

        // ─── PAGE 4: NANHI SI JAAN ───
        {
            title: "Hamara Chota Sa Pal",
            subtitle: "Jab hum do se teen honge...",
            paragraphs: [
                "Ek din tum aao gi mere paas — thodi nervous, thodi khush — aur kahogi 'Kuch baat hai...' Aur jab tumhari aankhon mein wo chamak dekhunga — main samajh jaunga. Mujhe kuch kehna nahi padega. Main tumhe bus apne seene se lagaa lunga.",
                "Jab pehli baar usse god mein uthaunga — meri aankhein bhar aayengi. Itna chhota sa insaan — hamari mohabbat ki nishani. Main usse dekhunga aur tumhe dekhunga — aur sochta rahunga ke yeh khwaab hai ya haqeeqat.",
                "Main achha baap banunga. Promise. Raat ko uthhunga, thapki dunga, lori sunaunga (bekaar si, par sunaaunga). Aur jab wo bada hoga — use bataunga ke uski ammi duniya ki sabse khoobsurat aurat hai."
            ],
            poetry: [
                "Hamari mohabbat ka ek naya naam hoga,",
                "Woh chota sa chehra hamara jahaan hoga.",
                "Tujh jaisa dikhega ya mujh jaisa — pata nahi,",
                "Par is duniya mein sabse pyaara wo jaan hoga."
            ]
        },

        // ─── PAGE 5: BUDHAPE TAK ───
        {
            title: "Budhape Tak",
            subtitle: "Jab baal safed honge — dil phir bhi jawaan",
            paragraphs: [
                "Socho — 50 saal baad. Mere baal safed. Tumhare chehre pe jhurriyan. Par main tumhe waisa hi dekhunga jaise aaj dekhta hoon — duniya ki sabse khoobsurat aurat.",
                "Hum garden mein baithe honge — kursiyon pe. Chai haath mein. Tum kuch bol rahi hogi, main sun raha hounga — jaise hamesha se karta aaya hoon. Phir tum kahogi 'sun rahe ho?' Aur main kahunga 'haan' — jab ke bilkul nahi sun raha tha 😂",
                "Bachon ko bataunga — 'Tumhari Dadi ko Facebook pe pataya tha. Pehle React kiya, phir message kiya. Number nahi deti thi — kehti thi Api ka phone hai. Phir UNZA ban ke aayi — aur maine bina jaane propose kar diya.' Sab hasenge. Tum sharmaaogi.",
                "Phir 70 ke baad bhi — main tumse flirt karunga. Tumhara haath pakdunga market mein. Log dekhenge — 'Budhe miya biwi haath pakde hue.' Hum dono haseinge. Kyunki PYAAR ki koi umr nahi hoti.",
                "Aur agar ek din mujhe jaana pade is duniya se pehle — toh mera aakhri lafz TUMHARA naam hoga. Aur agar tumhe jaana pade — toh main har roz tumhare liye dua karunga jab tak meri saans chalegi.",
                "Par sach kahun? Main chahta hoon hum SAATH jayein. Ek hi din. Ek hi pal. Kyunki tere bina ek saans bhi nahi jeena."
            ],
            poetry: [
                "Baal safed honge par pyaar jawaan rahega,",
                "Chehre pe jhurriyan par husn wahi rahega.",
                "Jab tak yeh saans hai — TERA hi rahunga,",
                "Aur aakhri saans pe bhi tera naam hi hoga.",
                "",
                "Agla janam bhi ho agar — TUJHE chahunga,",
                "Har janam mein IQRA ko dhoondh ke laaunga."
            ]
        }
    ],

    // ════════════════════════════════════════
    // 9. GRAND FINALE
    // ════════════════════════════════════════
    finale: {
        // Phase 1: Darkness (Heartbeat lines)
        phase1Lines: [
            "Iqra...",
            "Sab parh liya?",
            "Sab dekh liya?",
            "Sab mehsoos kiya?",
            "Ab ASLI baat sun..."
        ],

        // Phase 2: Rewind Memories
        rewindMemories: [
            "2020... Facebook ki posts...",
            "Pehla React... pehli baat...",
            "Sparrow Fly... Hurt Bird... masti...",
            "Instagram... WhatsApp... number drama...",
            "Judai... 3 saal... andhera...",
            "UNZA... ek ajnabi... ya kismat?",
            "Propose... bina jaane...",
            "'Main IQRA hoon...'",
            "Aur aaj... hum SAATH hain."
        ],

        // Phase 3: The Truth
        truthLines: [
            "Iqra — main perfect nahi hoon.",
            "Maine galtiyan ki hain.",
            "Main chala gaya tha — bina wajah.",
            "3 saal... har din tujhe yaad kiya.",
            "Khud se ladta raha — par dil sirf TERA tha.",
            "Phir UNZA banke tu aayi...",
            "Aur maine bina jaane TUJHE hi chun liya.",
            "Iska matlab samjhi?",
            "Mera dil — sirf TUJHE jaanta hai.",
            "Hamesha se. Hamesha tak."
        ],

        // Phase 4: The Letter
        letter: [
            "Iqra,",
            "",
            "Tum kya ho mere liye — yeh shayad alfaaz kabhi poora bayaan na kar paayein. Par main koshish karta hoon.",
            "",
            "Tum wo sukoon ho jo sadiyon ki thakan ke baad milta hai. Tum wo dua ho jo main har namaz mein maangta hoon. Tum wo khwaab ho jo aankhein khulne ke baad bhi yaad rehta hai.",
            "",
            "Jab tum UNZA banke aayi — main ne tumhe pehchaana nahi. Par mere dil ne pehchaan liya. Maine propose kiya bina jaane ke tum IQRA ho. Yeh coincidence nahi tha — yeh MOHABBAT thi jo naam nahi, ROOH pehchanti hai.",
            "",
            "Yeh website — yeh coding — yeh shayari — yeh sab bus ek tareeka hai dikhane ka ke tum kitni KHAAS ho. Log kehte hain pyaar andha hota hai. Par mera pyaar toh IQRA hai — jo padha ja sakta hai, mehsoos kiya ja sakta hai.",
            "",
            "Main waada karta hoon — chahe halaat kaise bhi hon, main tumhara haath nahi chhodunga. Hum ladenge, royenge, naraz honge — par ant mein hum SAATH honge. Hamesha.",
            "",
            "Tum meri zindagi ho. Tum meri ibadat ho. Tum meri IQRA ho.",
            "",
            "— Tumhara Zubi ♥"
        ],

        // Phase 5: Declaration
        declaration: "HAPPY VALENTINE'S DAY",
        declarationName: "IQRA ♥",
        subLines: [
            "Yeh sirf ek din nahi...",
            "Yeh roz ka pyaar hai.",
            "Har din Valentine's Day hai — jab TU meri hai."
        ],

        // Easter Egg
        easterEgg: [
            "Pata hai ek baat?",
            "Jab tum UNZA banke aayi thi —",
            "maine tumhari PIC dekhi aur propose kar diya.",
            "Bina jaane ke tum IQRA ho.",
            "",
            "Ab bata —",
            "Agar yeh pyaar nahi hai toh kya hai? 😤♥",
            "",
            "P.S: Kabhi chhodna mat.",
            "Yeh order hai. 😠♥"
        ]
    }
};

/* ══════════════════════════════════════════════
   IQRA KI DUNIYA — ALL CONTENT DATA
   Valentine's Day Web App
   ══════════════════════════════════════════════ */

const CONTENT = {

    /* ═══════════════════════════════════════
       PASSWORD SYSTEM
       ═══════════════════════════════════════ */

    password: 'zubi',

    hints: [
        `Woh 4 huroof ka pyaara sa naam...\njo Iqra ke labon pe sajta hai.\nJo sirf USKI awaaz mein sunna achha lagta hai.`,

        `Z se shuru... I pe khatam.\nBeech mein U aur B chhupe hain.\nYeh mera naam nahi —\nyeh mera PYAAR ka naam hai.`,

        `Zindagi. Udaas. Bezubaan. Intezaar.\nChaar alfaaz... chaar PEHLE huroof...\nJod do — darwaza khul jayega.\n(Z + U + B + I = ?)`,
    ],

    wrongMessages: [
        'Yeh naam nahi... dil se socho.',
        'Phir se try karo... hint le lo shayad?',
        'Itna mushkil nahi hai... woh naam socho jo sirf WOH leti hai.',
    ],


    /* ═══════════════════════════════════════
       PRELOADER
       ═══════════════════════════════════════ */

    preloaderMessages: [
        'Kuch khaas tayyar ho raha hai...',
        'Tumhare liye...',
        'Har lafz soch ke likha hai...',
        'Bas ek lamha aur...',
        'Tayyar ho jao...',
    ],


    /* ═══════════════════════════════════════
       OPENING CINEMATIC
       ═══════════════════════════════════════ */

    opening: [
        { text: 'Kuch alfaaz hain jo maine kabhi keh nahi paaya...', cls: '' },
        { text: 'Kuch jazbaat hain jo lafzon mein nahi samatte...', cls: '' },
        { text: 'Lekin aaj... main woh sab keh dunga.', cls: '' },
        { text: 'Yeh sirf ek website nahi...', cls: 'big' },
        { text: 'Yeh meri duniya hai.', cls: 'big' },
        { text: 'Aur iss duniya ka darwaza... sirf uss NAAM se khulta hai jo TUM mujhe deti ho.', cls: 'biggest' },

 ],
    /* ═══════════════════════════════════════
       WELCOME SEQUENCE
       ═══════════════════════════════════════ */

    welcome: [
        { text: 'Iqra...', cls: 'name-line' },
        { text: 'Tumne darwaza khol diya...', cls: '' },
        { text: 'Iska matlab tum jaanti ho...', cls: '' },
        { text: 'Ki yeh jagah sirf TUMHARI hai.', cls: '' },
        { text: '', cls: 'spacer' },
        { text: 'Yahan har lafz tumhare liye likha gaya hai.', cls: '' },
        { text: 'Har rang tumhare naam se roshni leta hai.', cls: '' },
        { text: 'Har dhadkan tumhari awaaz mein dhadakti hai.', cls: '' },
        { text: '', cls: 'spacer' },
        { text: 'Chalo... andar chalo.', cls: 'final-line' },
    ],


    /* ═══════════════════════════════════════
       ERAS — HAMARI KAHANI (5 Eras)
       ═══════════════════════════════════════ */

    eras: [

        // ══════ ERA 1: PEHLI MULAQAT ══════
        {
            title: 'Pehli Mulaqat',
            content: [
                {
                    type: 'para',
                    text: `2020 ka saal tha. Facebook pe ek account tha — mera. Posts karta tha, random cheezein share karta tha, duniya ko dikhata tha ke main yahan hoon. Koi khaas purpose nahi tha — bus ek aadmi apni awaaz dhundh raha tha alfazon mein. Kabhi shayari, kabhi thoughts, kabhi bus zindagi ki baatein. Har post ke neeche do-teen likes, kabhi koi comment — aur main khush.`
                },
                {
                    type: 'para',
                    text: `Phir 2021 ka aakhri hissa aaya — aur kisi ne meri posts pe react karna shuru kiya. Pehle ek react, phir doosri post pe, phir teesri pe. Main ne notice kiya — ek naam baar baar aa raha tha. Ek chehra jo mujhe anjaan tha lekin jaise pehchaan raha tha. Mujhe nahi pata tha ke yeh reactions meri zindagi ka sabse bada chapter shuru kar rahe hain.`
                },
                {
                    type: 'poetry',
                    lines: [
                        `<em>Ek react se shuru hua silsila yeh,</em>`,
                        `<em>Kaun jaanta tha ke muqaddar badlega.</em>`,
                        `<em>Facebook ki ek notification ne keh diya —</em>`,
                        `<em>"Tere naseeb mein ab pyaar aane wala hai."</em>`,
                    ]
                },
                {
                    type: 'para',
                    text: `React se baatein shuru huin — pehle posts ke neeche, phir messages mein. Pehle formal, phir thodi personal, phir aisi baatein jo sirf dost karte hain. Mujhe nahi pata tha ke main dheere dheere kisi ke qareeb ho raha hoon — itna qareeb ke wapas jaana mumkin nahi hoga.`
                },
                {
                    type: 'para',
                    text: `Woh pehli baar jab tumne seedha msg kiya — mera phone baja aur maine screen pe tumhara naam dekha. Uss waqt mera dil thoda tez dhadka. Bus thoda sa. Main ne socha shayad normal hai. Lekin ab jaanta hoon — woh PEHLI dhadkan thi tumhare liye. Aur us din se aaj tak — ruki nahi.`
                },
                {
                    type: 'ghazal',
                    lines: [
                        `<em>Ek ajnabi thi tu — par jaani pehchani si,</em>`,
                        `<em>Teri pehli baat mein bhi apnaapan tha.</em>`,
                        ``,
                        `<em>Na jaane kyun tujhse baat karna achha lagta tha,</em>`,
                        `<em>Har msg ka intezaar — ek imtihaan tha.</em>`,
                        ``,
                        `<em>Main kehta hoon kismat ne milaya hum ko,</em>`,
                        `<em>Par shayad tu meri dua ka jawaab thi — armaan tha.</em>`,
                    ]
                },
            ]
        },

        // ══════ ERA 2: DOSTI SE MOHABBAT ══════
        {
            title: 'Dosti Se Mohabbat',
            content: [
                {
                    type: 'para',
                    text: `Dosti. Woh phase jab hum dono ne socha ke hum "bus dost hain." Sparrow Fly aur Hurt Bird — tumhari friends — unke saath group mein hum sab baat karte the. Masti, mazaak, bakwaas. Har din naye topics, har raat naye jokes. Woh group humari choti si duniya tha — aur uss duniya mein main tumhe dhundhta tha. Tumhara ek msg aata aur group mein meri jaan aa jaati.`
                },
                {
                    type: 'poetry',
                    lines: [
                        `<em>Group mein sab the — par main sirf TUJHE padhta tha,</em>`,
                        `<em>Sab haste the — par main sirf TERI hansi sunta tha.</em>`,
                    ]
                },
                {
                    type: 'para',
                    text: `Phir Facebook chota padne laga. Insta pe shift ho gaye — naye platform pe naye andaaz se baatein. Wahan photos thi, stories thi — aur tumhari ek ek story mujhe apni lagti thi. Main tumhari har story ka pehla viewer banna chahta tha. Har post pe comment karna chahta tha. Par ruk jaata tha — kyunki "bus dost hain na."...`
                },
                {
                    type: 'para',
                    text: `Phir WhatsApp ki baari aayi. Aur yahan ek drama hua. Tumne number nahi diya pehle — "Api ka phone hai, nahi de sakti." Main samajh gaya tha. Par andar se ek dard tha — chhota sa — ke kaash apna number hota tumhara. Phir ek din tumne diya. Uss din main ne phone ko aise pakda jaise kisi ne tuhfa diya ho. Tumhara number save kiya — aur naam ke saath ek dil lagaya. ♥`
                },
                {
                    type: 'poetry',
                    lines: [
                        `<em>Number maanga toh kaha "nahi de sakti",</em>`,
                        `<em>Dil toota thoda — par chup raha main.</em>`,
                        `<em>Phir jab de diya — toh aise khush hua,</em>`,
                        `<em>Jaise duniya ki sabse badi daulat mili ho mujhe.</em>`,
                    ]
                },
                {
                    type: 'para',
                    text: `WhatsApp pe aaye toh duniya badal gayi. Ab hum sirf dost nahi the — hum woh the jo raat ke 2 baje baat karte hain aur subah 6 baje "abhi soye nahi?" poochte hain. Woh the jo ek doosre ki awaaz sunna chahte hain — par "bus aise hi" kehte hain. Main jaanta tha ke yeh dosti nahi rahi. Yeh kuch aur ho gaya hai. Par keh nahi paaya. Kabhi nahi keh paaya. Jab tak bahut der nahi ho gayi.`
                },
                {
                    type: 'ghazal',
                    lines: [
                        `<em>Dosti thi — par dil mein aag thi,</em>`,
                        `<em>Har baat mein teri mohabbat ki bhaaap thi.</em>`,
                        ``,
                        `<em>Main kehta "dost hai" — par jaanta tha,</em>`,
                        `<em>Ke tere bina ek pal bhi mushkil tha.</em>`,
                        ``,
                        `<em>Facebook se shuru — WhatsApp tak pahuncha,</em>`,
                        `<em>Har platform pe bus TERA hi naam tha.</em>`,
                    ]
                },
            ]
        },

        // ══════ ERA 3: JUDAI KA DARD ══════
        {
            title: 'Judai Ka Dard',
            content: [
                {
                    type: 'para',
                    text: `2022. Woh saal jab sab kuch bikhar gaya — bina kisi wajah ke. Na ladai hui, na koi baat hui. Main ne bus... phone kam use karna shuru kar diya. Khud ko behtar karna tha. Apni zindagi banana thi. Yeh woh bahaane the jo main ne khud ko diye. Par asl mein? Main darta tha. Darta tha ke kahin pyaar maan liya toh toot jaaunga. Toh main ne woh kiya jo sabse bura tha — DOOR CHALA GAYA.`
                },
                {
                    type: 'poetry',
                    lines: [
                        `<em>Na koi wajah thi — na koi bahana tha,</em>`,
                        `<em>Main chala gaya — yeh mera sabse bada gunaah tha.</em>`,
                        `<em>Tujhe chhodna nahi chahta tha — par chhod diya,</em>`,
                        `<em>Kyunki main apne pyaar se khud hi darta tha.</em>`,
                    ]
                },
                {
                    type: 'para',
                    text: `Lekin judai — yaar, judai ne mujhe todh diya. Har subah uthta tha toh pehla khayaal TERA hota tha. "Kya kar rahi hogi? Kis se baat kar rahi hogi? Kya woh bhi mujhe yaad karti hogi?" Raat ko neend nahi aati thi — tumhari awaaz kaanon mein goonjti thi. Tumhare woh messages yaad aate the. Tumhara woh andaaz yaad aata tha. Aur main — akela — apne kamre mein — ceiling ko dekhta tha aur sochta tha ke kya main ne sahi kiya?`
                },
                {
                    type: 'para',
                    text: `3 saal. Poore 3 saal. 2022, 2023, 2024. Har din tumhare bina ek azaab tha. Log kehte hain waqt sab theek kar deta hai — JHOOTH. Waqt ne kuch theek nahi kiya. Waqt ne bus mujhe sikhaya ke tumhare bina main ADHOORA hoon. Ke jab tum thi toh main jeeta tha — ab bus SAANS leta hoon. Jeena aur saans lena mein fark hota hai — aur woh fark tumne mujhe sikhaya.`
                },
                {
                    type: 'poetry',
                    lines: [
                        `<em>3 saal guzre — par ek din bhi aisa nahi gaya,</em>`,
                        `<em>Jab tujhe yaad na kiya ho maine.</em>`,
                        `<em>Log kehte hain bhool jaata hai insaan —</em>`,
                        `<em>Par main toh har roz aur zyada yaad karta gaya.</em>`,
                    ]
                },
                {
                    type: 'para',
                    text: `Kabhi kabhi raat ko main apna phone uthata tha — tumhara number screen pe aata tha — aur main bus dekhta rehta tha. Call karne ka dil karta tha. "Bus ek baar awaaz sun loon." Par nahi karta tha. Kyunki kya kehta? "Sorry"? "I miss you"? Kaise kehta ke meri har subah tumhare bina adhoori hai? Ke meri har shaam tumhari yaad mein guzarti hai? Ke main har jagah tujhe dhundhta hoon — bheed mein, tanhai mein, khwaabon mein?`
                },
                {
                    type: 'ghazal',
                    lines: [
                        `<em>Teri yaad aati hai toh saans rukti hai,</em>`,
                        `<em>Har raat teri kami mein aankh bhar aati hai.</em>`,
                        ``,
                        `<em>Phone pe tera number dekh ke ruk jaata hoon,</em>`,
                        `<em>Call lagaoon ya na lagaoon — yeh kashmakash khaati hai.</em>`,
                        ``,
                        `<em>3 saal guzre hain tere bina jeete hue,</em>`,
                        `<em>Par zinda hoon ya nahi — yeh mujhe bhi samajh nahi aati hai.</em>`,
                        ``,
                        `<em>Main Zubi — tera aashiq — door khada sochta hoon,</em>`,
                        `<em>Ke teri mohabbat toh abhi bhi meri rag rag mein samaati hai.</em>`,
                    ]
                },
            ]
        },

        // ══════ ERA 4: WAPSI ══════
        {
            title: 'Wapsi',
            content: [
                {
                    type: 'para',
                    text: `2025. Main ne dobara Facebook khola — koi khaas irada nahi tha. Bus socha account dead na ho jaaye, kuch posts kar leta hoon. Random posts karta raha — reach kam thi, koi khaas dekhta bhi nahi tha. Main ne socha yeh bus aise hi chalega — ek dead account jaise dead zindagi.`
                },
                {
                    type: 'para',
                    text: `Phir ek din — ek larki aayi. UNZA naam se. Koi nahi jaanta tha usse — par jab woh comment karti, meri reach badh jaati. Main ne socha chalo achha hai, koi toh hai jo posts dekhta hai. Ek din main ne kuch bol diya comment mein — kuch aisa jo shayad usse bura laga. Mujhe laga woh naraz ho gayi. Aur kyunki uski wajah se reach thi — main ne usse personally msg kiya. "Sorry yaar, galti ho gayi toh maaf kar do."`
                },
                {
                    type: 'poetry',
                    lines: [
                        `<em>Reach ke liye sorry bola tha maine,</em>`,
                        `<em>Kaun jaanta tha ke KISMAT sorry bol rahi thi mujhse.</em>`,
                        `<em>Ek sorry ne darwaza khol diya woh,</em>`,
                        `<em>Jo 3 saal se band tha.</em>`,
                    ]
                },
                {
                    type: 'para',
                    text: `UNZA se baatein hone lagin. Aahista aahista. Pehle formal, phir thodi personal. Phir usne PIC bheji — aur mere dil ne ek dhadkan chhor di. Woh pic — uss chehra — mujhe kheench liya. Main ne sochne ka waqt nahi liya. Main ne PROPOSE kar diya. Haan — seedha. Bina zyada soche. Kyunki kuch tha uss larki mein jo mujhe apna laga. Kuch tha jo mujhe kheenchta tha — jaise koi JAANI PEHCHANI cheez ho.`
                },
                {
                    type: 'para',
                    text: `Aur phir ek din... UNZA ne bataya. Woh boli — "Main UNZA nahi hoon." Mera dil ruka. "Toh kaun ho?" Aur phir woh alfaaz aaye jo meri zindagi badal gaye — "Main IQRA hoon." ... Main ne phone rakh diya. Haath kaamp rahe the. Aankhon mein aansu the — par dard ke nahi — KHUSHI ke. IQRA. MERI IQRA. Woh larki jise main 3 saal se yaad kar raha tha — woh WAPAS AAYI. Alag naam se, alag andaaz se — par WOHI. Meri IQRA.`
                },
                {
                    type: 'poetry',
                    lines: [
                        `<em>"Main Iqra hoon" — yeh sunke roya tha main,</em>`,
                        `<em>Khushi ke aansu the — 3 saal baad aaye the.</em>`,
                        `<em>Jise dhundha tha har jagah — woh saamne thi,</em>`,
                        `<em>Khuda ne usse UNZA bana ke meri taraf bheja tha.</em>`,
                    ]
                },
                {
                    type: 'para',
                    text: `Aur sabse khoobsurat baat? Maine UNZA ko propose kiya tha — BINA JAANE ke woh IQRA hai. Matlab mera dil — bina dimaag ke — TUJHE pehchaan gaya tha. Tera chehra badal gaya tha, tera naam badal gaya tha — par kuch tha jo NAHI badla. Woh connection, woh kheechaav, woh "kuch apna sa" — woh TUJH mein tha aur hamesha rahega. Mera dil SIRF tujhe jaanta hai — chahe tum kisi bhi naam se aao.`
                },
                {
                    type: 'ghazal',
                    lines: [
                        `<em>Naam badla, chehra badla — par pyaar nahi badla,</em>`,
                        `<em>Mera dil tujhe pehchaan gaya har roop mein.</em>`,
                        ``,
                        `<em>UNZA banke aayi tu — main ne phir chun liya tujhe,</em>`,
                        `<em>Yeh kismat nahi — yeh likha tha meri taqdeer mein.</em>`,
                        ``,
                        `<em>3 saal ki judai bhi na tod paayi humein,</em>`,
                        `<em>Kyunki mohabbat rehti hai — har haal mein, har daur mein.</em>`,
                        ``,
                        `<em>Main Zubi hoon — tera — hamesha tera raha,</em>`,
                        `<em>Tera dil mera ghar hai — main rehta hoon sukoon mein.</em>`,
                    ]
                },
            ]
        },

        // ══════ ERA 5: AAJ TAK ══════
        {
            title: 'Aaj Tak',
            content: [
                {
                    type: 'para',
                    text: `Aaj. 2026. Hum saath hain — aur is baar pehle se zyada qareeb. Woh dard jo humne 3 saal saha — usne humein mazboot banaya. Ab hum jaante hain ke ek dusre ke bina nahi reh sakte. Yeh koi movie ka dialogue nahi — yeh SACHAI hai. Maine mehsoos kiya hai — tumhare bina har din kitna lamba hota hai. Aur tumhare saath ek poora din bhi chhota lagta hai.`
                },
                {
                    type: 'poetry',
                    lines: [
                        `<em>Ab tujhe jaane nahi dunga — yeh tay hai,</em>`,
                        `<em>Jo galti ek baar ki — woh dobara nahi hogi.</em>`,
                        `<em>Tere bina jo zindagi thi — woh zindagi nahi thi,</em>`,
                        `<em>Ab tere saath jo hai — YAHI asli hai.</em>`,
                    ]
                },
                {
                    type: 'para',
                    text: `Ab pyaar woh nahi raha jo pehle tha — ab GEHRA ho gaya hai. Pehle butterflies thi — ab sukoon hai. Pehle excitement tha — ab YAQEEN hai. Pehle darta tha ke kho na jaaye — ab jaanta hoon ke tum MERI ho. Aur main TUMHARA. Yeh certainty — yeh KNOWING — yeh sabse khoobsurat cheez hai duniya mein.`
                },
                {
                    type: 'para',
                    text: `Tumhari ek call aati hai aur mera poora din ban jaata hai. Tumhari ek hansi sunke mujhe lagta hai ke duniya mein sab theek hai. Tumhari narazgi bhi mujhe pyaari lagti hai — kyunki jab tum naraz hoti ho, tumhare gaalon pe jo surkhabi aati hai na — woh meri favourite color hai. Main tumse pyaar karta hoon — tumhari har haalat mein. Khush ho, udaas ho, naraz ho, pareshan ho — HAR HAALAT mein tum meri sabse khoobsurat insaan ho.`
                },
                {
                    type: 'poetry',
                    lines: [
                        `<em>Tum khush ho toh mera din ban jaata hai,</em>`,
                        `<em>Tum udaas ho toh meri raat kat-ti nahi.</em>`,
                        `<em>Tumhari hansi mein mera jannat hai,</em>`,
                        `<em>Tumhare bina meri duniya mein roshni nahi.</em>`,
                    ]
                },
                {
                    type: 'para',
                    text: `Aur jab sochta hoon ke yeh sab kaise hua — Facebook pe random posts se le ke aaj tak — toh hairaan hota hoon. Ek react se shuru hua tha. Sparrow Fly aur Hurt Bird ke group se guzra. Platforms badle, numbers badle, 3 saal ki khamoshi aayi — aur phir bhi hum YAHAN hain. SAATH. Agar yeh pyaar nahi hai, agar yeh muqaddar nahi hai — toh kya hai?`
                },
                {
                    type: 'ghazal',
                    lines: [
                        `<em>Facebook se shuru — WhatsApp tak pohanchay,</em>`,
                        `<em>3 saal door rahe — phir bhi saath aaye.</em>`,
                        ``,
                        `<em>Naam badle, raste badle — par manzil ek rahi,</em>`,
                        `<em>Hum dono ki taqdeer mein hum dono likhe the.</em>`,
                        ``,
                        `<em>Ab na jaana — ab na chhodna — ab yeh wada hai,</em>`,
                        `<em>Ke tujhe le ke jee bhi loonga — tujhe le ke mar bhi jaaunga.</em>`,
                        ``,
                        `<em>Main Zubi — tera — sirf tera — hamesha tera,</em>`,
                        `<em>Yeh Valentine nahi — yeh mera iqraar-e-mohabbat hai.</em>`,
                    ]
                },
            ]
        },
    ],


    /* ═══════════════════════════════════════
       ROMANCE CHAMBERS (6 Chambers)
       ═══════════════════════════════════════ */

    romanceChambers: [

        // ── Chamber R1: Teri Soorat ──
        {
            id: 'r1',
            icon: '👁️',
            title: 'Teri Soorat',
            content: [
                { type: 'para', text: `Tujhe dekhu toh lagta hai khuda ne waqt le ke banaya hai tujhe. Jaise koi shayar apna sabse achha sher likhte waqt likhe — ek ek harf soch ke, ek ek lafz taraash ke. Teri aankhon mein jo gehraai hai na, uss mein doobne ka dil karta hai aur nikalne ka bilkul nahi.` },
                { type: 'poetry', lines: [`<em>Nigaahon mein teri qayamat ka samaa hai,</em>`, `<em>Khuda jaane tere chehre mein kya kya chhupa hai.</em>`] },
                { type: 'para', text: `Tera chehra jab saamne hota hai na toh duniya dheemi ho jaati hai — jaise waqt bhi ruk ke tujhe dekh raha ho. Teri jawline pe jab roshni padti hai, teri skin pe jab halka sa glow hota hai — main sochta hoon ke yeh insaan hai ya koi khwaab jo aankh khulne pe bhi nahi toot-ta.` },
                { type: 'poetry', lines: [`<em>Tera chehra hai toh chaand ko shikayat hogi,</em>`, `<em>Teri zulfein hain toh raat ko hasrat hogi,</em>`, `<em>Main tujhe dekhta hoon jab palak jhapkaaye bina —</em>`, `<em>Toh khuda bhi kahe ke yeh toh ibadat hogi.</em>`] },
                { type: 'para', text: `Aur teri zulfein... jab teri gardan pe bikhar jaati hain na, jab hawa unhe tere chehre pe le aati hai — toh mera haath khud ba khud uthta hai unhe hatane ke liye. Par asli baat yeh hai ke main unhe hatana nahi chahta. Main chahta hoon ke woh zulfein mere unglion mein uljhi rahen — hamesha.` },
                { type: 'para', text: `Teri aankhein — yaar, teri aankhein. Jab tum seedha meri taraf dekhti ho na aur tum kuch nahi bolti — bus dekhti ho — uss waqt mera seena aisa dhadakta hai jaise andar toofaan aa gaya ho. Tumhari palkon ka jhapakna bhi mujhe mehsoos hota hai — jaise koi titli ne apne par hilaye hon mere dil ke bilkul qareeb.` },
                { type: 'ghazal', lines: [`<em>Teri aankhon ka nasha kya hai, ye tujhko kya pata,</em>`, `<em>Tere deedar ka silsila kya hai, ye tujhko kya pata.</em>`, ``, `<em>Main tujhe dekhta hoon jaise sajda karta hoon,</em>`, `<em>Tu meri aankh ki dua kya hai, ye tujhko kya pata.</em>`, ``, `<em>Ek nazar teri — mera sab kuch badal jaata hai,</em>`, `<em>Tera chehra meri qaza kya hai, ye tujhko kya pata.</em>`] },
            ]
        },

        // ── Chamber R2: Teri Hansi, Tera Lab ──
        {
            id: 'r2',
            icon: '💋',
            title: 'Teri Hansi, Tera Lab',
            content: [
                { type: 'para', text: `Teri hansi sun ke lagta hai jaise andheri raat mein koi cheraagh jal gaya ho. Jab tum hansti ho na — tumhare labon ka jo curve banta hai, tumhari aankhon mein jo chamak aati hai, tumhare gaalon pe jo halka sa surkhab aata hai — uss waqt main sochta hoon ke duniya mein agar sirf ek cheez rakh sakta toh teri hansi rakhta.` },
                { type: 'poetry', lines: [`<em>Teri hansi mein likha hai mera muqaddar saara,</em>`, `<em>Tere labon pe sajta hai mausam ka nazaara,</em>`, `<em>Jab hasti ho tum — ruk jaata hai yeh zamaana,</em>`, `<em>Ke tujh jaisi hansi ka koi nahi guzaara.</em>`] },
                { type: 'para', text: `Par jab hansi ruk jaati hai aur tum bus muskurati ho — halki si, dheemi si — uss waqt tumhare hont... ya Allah, tumhare hont. Gulaab ki patti jaise — narm, gehra surkh. Jab tum bolti ho toh main tumhari baatein kam, tumhare honton ki harkat zyada dekhta hoon. Bura mat maanna — par kabhi kabhi tum bol rahi hoti ho aur main sirf tumhare labon ko dekh raha hota hoon.` },
                { type: 'para', text: `Aur jab sochta hoon ke woh hont mere honton pe hon — toh rooh kaamp jaati hai. Tumhare honton ki narmi ka andaaza main ne khwaabon mein lagaya hai — hazaar baar. Tumhare qareeb aana, tumhare saans ka mere saans mein milna, tumhari aankhon ka band hona aur phir... tumhare labon ka mere labon se milna — yeh sirf ek kiss nahi, yeh meri namaz hai.` },
                { type: 'poetry', lines: [`<em>Jab tere lab mere labon se miley,</em>`, `<em>Jaise khushbu hawa mein ghul jaaye,</em>`, `<em>Tera saans mera saans ban jaaye,</em>`, `<em>Aur duniya ka shor bhool jaaye.</em>`] },
                { type: 'para', text: `Pehli baar tumhare honton ko chhuna — woh lamha main jeena chahta hoon baar baar. Dheere se, aahistaagi se — jaise koi phool ko chhoo raha ho ke kahi murjha na jaaye. Tumhara lower lip jab halka sa kaampega — uss waqt mera dil itna tez dhadkega ke tumhe bhi sunai dega. Aur phir main tumhe aur qareeb kheench lunga — kyunki ek kiss kabhi kaafi nahi hoti tumhare saath.` },
                { type: 'ghazal', lines: [`<em>Tere labon pe rakh doon apne lab aise,</em>`, `<em>Jaise sehri mein dua maangi jaaye.</em>`, ``, `<em>Tera saans jo meri saans mein ghule,</em>`, `<em>Jaise raat mein chaandni aa jaaye.</em>`, ``, `<em>Tere chehre ko hatheli mein le ke,</em>`, `<em>Bus yehi ek lamha thehra jaaye.</em>`, ``, `<em>Main tujhe choomna chahta hoon aise,</em>`, `<em>Ke zameen bhi aasmaan ban jaaye.</em>`] },
            ]
        },

        // ── Chamber R3: Teri Bahon Mein ──
        {
            id: 'r3',
            icon: '🤗',
            title: 'Teri Bahon Mein',
            content: [
                { type: 'para', text: `Tujhe apne qareeb kheenchna — yeh mera sabse bada nasha hai. Jab main tumhari kamar pe haath rakh ke tumhe apni taraf kheenchta hoon — woh ek second, woh ek jhatka — uss mein poori duniya simat jaati hai. Tumhara badan mera badan se takraata hai, tumhari saans ruk jaati hai ek pal ke liye, tumhari aankhein meri aankhon mein — aur phir khamoshi. Woh khamoshi — uss mein hazaar cheekhen hain mohabbat ki.` },
                { type: 'poetry', lines: [`<em>Kheench liya tujhe qareeb aise,</em>`, `<em>Jaise darya kinare ko bula le,</em>`, `<em>Tera badan mera badan se laga toh,</em>`, `<em>Jaise aag ko hawa mil jaaye.</em>`] },
                { type: 'para', text: `Tumhari gardan — woh jagah jahan tumhari zulf khatam hoti hai aur tumhari skin shuru — woh meri favourite jagah hai is duniya mein. Main wahaan apne hont rakhna chahta hoon — dheere se, aahistaagi se — aur mehsoos karna chahta hoon tumhari nabs ka dhadakna mere labon ke neeche. Tumhari gardan pe jab mera saans lagega — tumhe sirhane hogi — aur wohi mera maqsad hai.` },
                { type: 'para', text: `Aur phir wahaan — tumhari gardan pe — main apne honton ko dabaunga. Dheere pehle, phir thoda aur. Tumhari skin pe mera nishaan — yeh sirf love bite nahi, yeh mera DAWA hai ke tum MERI ho. Har nishaan ek mohar hai — ke yeh gardan, yeh badan, yeh insaan — sirf MERA hai. Jab tum subah sheeshe mein dekhogi aur woh surkh nishaan dikhega — tumhe meri yaad aayegi.` },
                { type: 'poetry', lines: [`<em>Teri gardan pe chhod doon nishaan aise,</em>`, `<em>Jaise chaand pe daagh ho magar khoobsurat,</em>`, `<em>Har nishaan mein likha ho mera naam — 'Zubi',</em>`, `<em>Ke tu meri hai — yeh meri mohabbat.</em>`] },
                { type: 'para', text: `Jab main tumhe puri tarah apni bahon mein le leta hoon — tumhara sar mere seene pe, mera haath tumhari kamar pe, tumhari ungliyan meri shirt pakde hue — uss waqt mujhe lagta hai ke maut bhi aa jaaye toh main muskura ke jaaunga. Tumhara badan mere badan se chipka hua — iss se zyada jannat kya hogi?` },
                { type: 'ghazal', lines: [`<em>Bahon mein teri jab le leta hoon main,</em>`, `<em>Zameen chhod ke jannat mein jaata hoon main.</em>`, ``, `<em>Tera jism mera jism se chipke jab,</em>`, `<em>Toh duniya ka matlab bhula deta hoon main.</em>`, ``, `<em>Na chhod mujhe — yeh guzaarish nahi,</em>`, `<em>Yeh hukm hai — sun le — main tujhse kehta hoon main.</em>`] },
            ]
        },

        // ── Chamber R4: Teri Goud Mein Sir ──
        {
            id: 'r4',
            icon: '💆',
            title: 'Teri Goud Mein Sir',
            content: [
                { type: 'para', text: `Kuch lamhe hote hain jab main sirf tumhare qareeb hona chahta hoon — koi baat nahi, koi shabd nahi — bus QAREEB. Tumhari goud mein sar rakh ke — tumhari ungliyaan mere baalon mein — aur bahar duniya jalti rahe. Uss waqt tumhara badan mera ghar hota hai. Tumhari garmahat mein mujhe woh sukoon milta hai jo duniya ki kisi cheez mein nahi.` },
                { type: 'poetry', lines: [`<em>Teri goud mein sar rakh doon jab main,</em>`, `<em>Toh duniya se koi shikayat na rahe,</em>`, `<em>Tere seene ki dhadkan sunon jab main,</em>`, `<em>Toh maut ka bhi koi khauf na rahe.</em>`] },
                { type: 'para', text: `Tumhara seena — jab main tumhare qareeb hota hoon aur mera chehra tumhare seene ke paas hota hai — mujhe tumhari dhadkan sunai deti hai. Aur woh dhadkan meri favourite awaaz hai — kisi gaane se zyada, kisi shayari se zyada. Tumhare seene ki narmi, tumhari garmahat — main tumhe wahin choomna chahta hoon — dheere se — jahan tumhara dil dhadakta hai. Kyunki woh dil MERA hai.` },
                { type: 'para', text: `Jab main tumhe haathon mein leta hoon — tumhara poora wajood mere haathon mein — toh mujhe lagta hai jaise duniya ki sabse qeemti cheez mere paas hai. Tumhare curves ko apni hatheli se mehsoos karna, tumhari kamar se le ke tumhare kandhe tak apna haath le jaana — yeh mera haq hai aur main ise puri shiddat se nibhana chahta hoon.` },
                { type: 'poetry', lines: [`<em>Tujhe haathon mein le loon jab poora,</em>`, `<em>Toh lagta hai ke chand mere paas hai,</em>`, `<em>Tera har curve meri hatheli mein,</em>`, `<em>Yeh duniya ka sabse khoobsurat ehsaas hai.</em>`] },
                { type: 'para', text: `Tumhara badan — ya Allah — jaise kisi ne reshm se banaya ho. Narm, garam, khoobsurat. Main tumhe sirf dekhna nahi chahta — main tumhe MEHSOOS karna chahta hoon, har jagah, har tarah se. Tumhare jism ka har hissa mujhe deewana karta hai — aur main har hisse ko apne honton se, apni ungliyon se, apni saans se mehsoos karna chahta hoon.` },
                { type: 'ghazal', lines: [`<em>Tujhe haathon mein lena mera haq hai mera haq,</em>`, `<em>Tere jism ko choomna mera haq hai mera haq.</em>`, ``, `<em>Tere seene mein dhadkan hai jo MERI hai faqat,</em>`, `<em>Use sunna mere kaan ka haq hai mera haq.</em>`, ``, `<em>Tera har curve meri hatheli ka muqaddar hai,</em>`, `<em>Tujhe chhona, tujhe mehsoos karna haq hai mera haq.</em>`, ``, `<em>Main Zubi hoon — tera aashiq, tera deewana,</em>`, `<em>Tera hona mere hone ka sabab hai — mera haq.</em>`] },
            ]
        },

        // ── Chamber R5: Raat Ka Raaz ──
        {
            id: 'r5',
            icon: '🌙',
            title: 'Raat Ka Raaz',
            content: [
                { type: 'para', text: `Raat — jab duniya so jaati hai aur sirf hum hote hain. Andhera hota hai par tumhari aankhon ki chamak roshni deti hai. Tumhare saans ki awaaz — dheemi, garm — mere kaan mein. Tumhara badan mere badan ke saath — har jagah se chipa hua, har jagah se laga hua. Raat ko tumhare saath guzaarna — yeh sirf neend nahi, yeh ibadat hai.` },
                { type: 'poetry', lines: [`<em>Raat jab gehri hoti hai aur tum qareeb hoti ho,</em>`, `<em>Meri saansein tumhari saanson mein ghul jaati hain,</em>`, `<em>Tumhara jism mera jism — ek ho jaate hain,</em>`, `<em>Aur sitaare bhi sharmaa ke palat jaate hain.</em>`] },
                { type: 'para', text: `Main chahta hoon ke ek raat aaye jab main tumhe dheere se apne qareeb kheenchun — pehle tumhare maathey pe ek bosa, phir tumhari palkon pe, phir tumhari naak ki nok pe, phir tumhare gaalon pe, phir tumhare labon pe. Dheere se. Aahistaagi se. Jaise koi ibadat kar raha ho. Aur phir tumhare labon se neeche — tumhari gardan pe — ek ek inch ko apne honton se mehsoos karta hua. Tumhare kaan ke paas aa ke dheere se kahoon — "Tum meri ho" — aur tumhari poori body kaamp jaaye.` },
                { type: 'poetry', lines: [`<em>Maathey se shuru karoon — labon pe aaoon,</em>`, `<em>Gardan pe rukon — toh seene tak jaoon,</em>`, `<em>Tere jism ka har warq padhoon honton se,</em>`, `<em>Main tujhe choomta jaoon — choomta jaoon.</em>`] },
                { type: 'para', text: `Tumhari gardan pe jab main apne daant halke se lagaunga — tum kaampogi. Main jaanta hoon. Tumhari saans tez hogi, tumhari ungliyan meri peeth mein chubhengi, tumhara sar peeche jayega — aur woh moment, woh ek second — uss mein main zameen se uth ke aasmaan pe pahunch jaaunga. Tumhari gardan pe love bites ka silsila chalega — har ek mere pyaar ki MOHAR.` },
                { type: 'para', text: `Phir main neeche jaaunga — tumhare collarbone pe, tumhare kandhe pe — hont rakh ke, saans lagaa ke. Tumhare seene pe jab mera chehra hoga — tumhari dhadkan meri honton ke neeche dhadkegi — aur main wahaan rehna chahunga. Tumhare seene ki narmi — yeh mera sar rakhne ki jagah hai, yeh mera hont rakhne ki jagah hai, yeh meri duniya hai.` },
                { type: 'para', text: `Raat ko jab hum saath hote hain — main tumhare poore jism ko apne honton se padhna chahta hoon jaise koi kitab. Dheere dheere, safha safha. Tumhari skin pe mera touch — tumhe sirhane dega. Mera saans tumhari skin pe — tumhe jalaa dega. Aur jab main tumhari kamar pe apna haath rakh ke tumhe apni taraf kheenchta hoon — uss waqt sirf aag hoti hai. Hum dono jal jaate hain — par yeh jalna kitna KHOOBSURAT hai.` },
                { type: 'ghazal', lines: [`<em>Raat teri hai, main tera — yeh badan bhi tera,</em>`, `<em>Har saans teri — har dhadkan — yeh chaman bhi tera.</em>`, ``, `<em>Jab chhoo loon tujhe — kaamp jaaye zameen bhi,</em>`, `<em>Yeh hont mere — par unpe yeh daman bhi tera.</em>`, ``, `<em>Tere seene pe sar rakhoon toh sajda ho jaaye,</em>`, `<em>Tujhe choomoon toh lagta hai — yeh watan bhi tera.</em>`, ``, `<em>Main Zubi — tera deewana, tera aashiq hoon,</em>`, `<em>Mera jism, meri jaan, mera kafan bhi tera.</em>`] },
            ]
        },

        // ── Chamber R6: Sirf Meri ──
        {
            id: 'r6',
            icon: '🔥',
            title: 'Sirf Meri',
            content: [
                { type: 'para', text: `Mujhe pata hai yeh baat possessive lagti hai — par sun lo, Iqra: tum MERI ho. Tumhara woh hona jo kisi ke saamne nahi hoti — woh MERA hai. Tumhare woh raaz jo kisi ko nahi pata — woh MERE hain. Tumhari woh hansi jo sirf mere saamne aati hai — woh MERI hai. Tumhara woh andaaz jab tum sharmaati ho — woh sirf MERE liye hai.` },
                { type: 'poetry', lines: [`<em>Tum meri ho — yeh main nahi kehta,</em>`, `<em>Yeh tera dil kehta hai — sun zara,</em>`, `<em>Kisi aur ke paas jaana bhi chaho,</em>`, `<em>Toh wapas MUJH tak aana — yeh tay hai.</em>`] },
                { type: 'para', text: `Tumhara badan — har curve, har line, har nishaan — yeh sab meri kitaab ke safhe hain. Koi aur inhe parh nahi sakta. Koi aur inhe choo nahi sakta. Tumhari gardan sirf mere honton ke liye hai. Tumhare hont sirf mere honton ke liye hain. Tumhara seena sirf MERA hai. Main tumhare jism ka MAALIK nahi hoon — par main tumhare jism ka AASHIQ hoon, aur aashiq se zyada haq kisi ka nahi hota.` },
                { type: 'para', text: `Jab koi tumhare baare mein baat kare — mujhe ghairat aati hai. Jab koi tumhe dekhe — mujhe aag lagti hai. Yeh pagalpan nahi hai — yeh PYAAR hai. Main chahta hoon ke duniya jaane: yeh larki — yeh khoobsurat, intelligent, ziddi, pyaari larki — yeh MERI hai. Mera naam likha hai iske muqaddar mein. Mera nishaan hai iske gardan pe. Mera pyaar hai iske dil mein.` },
                { type: 'poetry', lines: [`<em>Ghairat meri — mohabbat meri,</em>`, `<em>Tu meri jaan hai — yeh ijazat meri,</em>`, `<em>Koi dekhay tujhe — aag lagti hai mujhko,</em>`, `<em>Tu meri hai — yeh kismat meri.</em>`] },
                { type: 'para', text: `Aur raat ko jab tum mere paas hogi — main tumhe woh sab mehsoos karaunga jo lafzon mein nahi aata. Mere hont tumhare jism pe — har jagah — maathey se le ke pairon ki ungliyon tak. Mera touch tumhare liye — dheema bhi, tez bhi. Naram bhi, sakht bhi. Main tumhe itna pyaar karunga ke tumhe lage ke tum is duniya mein nahi — kisi aur jahaan mein ho. Jahan sirf main hoon aur sirf TUM.` },
                { type: 'ghazal', lines: [`<em>Tujhe chooma toh laga — zindagi shuru hui,</em>`, `<em>Teri bahon mein aaya — toh duniya jhoom uthi.</em>`, ``, `<em>Tera seena mera ghar — teri gardan mera watan,</em>`, `<em>Tere labon pe tikka toh qayamat bhi ruk gayi.</em>`, ``, `<em>Main tere jism ko apni rooh se padhta hoon,</em>`, `<em>Har safhe pe likha hai — ZUBI ki mohabbat thi.</em>`, ``, `<em>Na chhod mujhe — na jaana kahin door mujhse,</em>`, `<em>Tere bina yeh raat bhi — aur subah bhi adhuri thi.</em>`] },
            ]
        },
    ],


    /* ═══════════════════════════════════════
       MOHABBAT CHAMBERS (4 Chambers)
       ═══════════════════════════════════════ */

    mohabbatChambers: [

        // ── Chamber M1: Tumhari Tasveer ──
        {
            id: 'm1',
            icon: '🪞',
            title: 'Tumhari Tasveer',
            content: [
                { type: 'para', text: `Tum khoobsurat ho — yeh toh duniya kehti hai. Par main jab "khoobsurat" kehta hoon toh mera matlab duniya se alag hai. Tumhari khoosurti sirf tumhare chehre mein nahi — tumhari aankhon mein hai jab tum kisi ki baat dhyan se sunti ho. Tumhare haathon mein hai jab tum kisi ko pyaar se chhoti ho. Tumhari awaaz mein hai jab tum meri baat pe hasti ho.` },
                { type: 'poetry', lines: [`<em>Khoobsurti teri — sirf chehre ki nahi,</em>`, `<em>Teri rooh mein hai — teri baaton mein hai,</em>`, `<em>Jab tum hasti ho — phool khilte hain,</em>`, `<em>Jab tum dekhti ho — sitaare jalte hain.</em>`] },
                { type: 'para', text: `Tumhara chehra — meri favourite painting hai. Tumhari aankhein — meri favourite kitaab. Tumhari hansi — meri favourite ghazal. Tumhari narazgi — meri favourite aag. Tum poori ki poori meri favourite ho — har haalat mein, har mood mein, har pal mein.` },
                { type: 'para', text: `Aur tumhara woh andaaz jab tum sharmaati ho — ya Allah. Tumhari nazar jhuk jaati hai, tumhare gaalon pe surkhi aa jaati hai, tumhare hont halke se muskurate hain — aur main uss pal mein DOOB jaata hoon. Koi painting nahi bana sakta tumhare sharmane ki — kyunki woh khuda ka kaam hai, insaan ka nahi.` },
                { type: 'ghazal', lines: [`<em>Tera chehra meri subah hai — teri hansi meri shaam,</em>`, `<em>Tujhe dekh ke lagta hai — duniya mein hai kuch kaam.</em>`, ``, `<em>Jab sharmati ho tum — khuda bhi dekhta hoga,</em>`, `<em>Ke dekho meri sabse khoobsurat creation ka anjaam.</em>`, ``, `<em>Main Zubi — sirf tera — tujhe dekhta rahunga,</em>`, `<em>Ye aankh hai teri — ya meri rooh ka makaam.</em>`] },
            ]
        },

        // ── Chamber M2: Tumhari Aadat ──
        {
            id: 'm2',
            icon: '🦋',
            title: 'Tumhari Aadat',
            content: [
                { type: 'para', text: `Tumhari aadaten — woh choti choti cheezein jo tum karti ho bina soche — woh mujhe sabse zyada pyaari lagti hain. Jab tum sochti ho toh tumhari peshani pe halki si line aati hai. Jab tum kuch chhupana chahti ho toh tumhari aankhein mujhse nahi miltin. Jab tum khush hoti ho toh tumhari awaaz thodi oonchi ho jaati hai.` },
                { type: 'poetry', lines: [`<em>Tumhari har aadat mujhe yaad hai,</em>`, `<em>Tumhara har andaaz meri amanat hai,</em>`, `<em>Tum sochti ho main nahi jaanta —</em>`, `<em>Par main toh tumhare har ishaare ka qaayal hoon.</em>`] },
                { type: 'para', text: `Tumhara woh zid karna — yaar, tumhari zid toh alag hi level ki hai. Jab tum kuch thaan leti ho toh duniya hila do. Aur main — main bus dekhta rehta hoon aur sochta hoon ke kitni strong hai yeh larki. Par saath mein yeh bhi sochta hoon ke iss ziddi larki ko manaana kitna mushkil hai — aur kitna MAZEDAAR.` },
                { type: 'para', text: `Aur tumhara woh "hmm" kehna — jab tum naraz hoti ho aur sirf "hmm" bolti ho — uss "hmm" mein poora toofaan hota hai. Main samajh jaata hoon ke aaj raat lamba safar hai manaane ka. Par mujhe woh safar bhi pasand hai — kyunki uss safar ke aakhir mein tumhari muskaan hoti hai.` },
                { type: 'ghazal', lines: [`<em>Teri zid — meri mushkil, meri khushi bhi yehi,</em>`, `<em>Tujhe maanana — meri aadat, meri kami bhi yehi.</em>`, ``, `<em>Jab "hmm" bolti ho — samajh jaata hoon,</em>`, `<em>Aaj ki raat ka imtihaan bhi yehi.</em>`, ``, `<em>Par tujhe maana ke jab muskuraati ho tum,</em>`, `<em>Toh lagta hai ke duniya ki sabse badi trophy bhi yehi.</em>`] },
            ]
        },

        // ── Chamber M3: Tumhare Saath ──
        {
            id: 'm3',
            icon: '🌸',
            title: 'Tumhare Saath',
            content: [
                { type: 'para', text: `Tumhare saath waqt ka pata nahi chalta. Literally. Ek minute baat karo toh lagta hai abhi shuru ki hai — aur 3 ghante guzar chuke hain. Tumhare saath silence bhi comfortable hai — hum dono chup ho ke bhi "baat" karte hain. Woh silences jismein koi awkwardness nahi — bus sukoon hai. Woh sukoon jo sirf APNE insaan ke saath milta hai.` },
                { type: 'poetry', lines: [`<em>Tere saath waqt tham jaata hai,</em>`, `<em>Tere bina har pal guzar nahi paata hai,</em>`, `<em>Tu hai toh duniya RANG hai —</em>`, `<em>Tu nahi toh sab kuch siyah ho jaata hai.</em>`] },
                { type: 'para', text: `Tumhari presence mein main alag insaan hoon. Better insaan. Tumhare saamne main weak ho sakta hoon — aur woh OKAY hai. Tumhare saamne main ro sakta hoon — aur tum judge nahi karogi. Tumhare saamne main apna asli roop dikha sakta hoon — woh jo duniya ko nahi dikhata. Tum meri safe space ho. Mera ghar. Meri jagah.` },
                { type: 'para', text: `Aur tumhari awaaz — jab tum mera naam leti ho — "Zubi" — uss waqt mujhe lagta hai ke mera naam sirf TUMHARI awaaz ke liye bana hai. Koi aur le — koi fark nahi padta. Par jab TUM leti ho — meri poori duniya ruk jaati hai.` },
                { type: 'ghazal', lines: [`<em>Tere saath sukoon hai — tere bina junoon hai,</em>`, `<em>Tu meri zindagi ka sabse haseen fasoon hai.</em>`, ``, `<em>Tera saath mili toh jaana maine,</em>`, `<em>Ke akele rehna — yeh toh majnoon hai.</em>`, ``, `<em>"Zubi" jab teri zuban pe aata hai,</em>`, `<em>Toh lagta hai ke yeh naam koi duaa ka mazmoon hai.</em>`] },
            ]
        },

        // ── Chamber M4: Mera Iqraar ──
        {
            id: 'm4',
            icon: '💎',
            title: 'Mera Iqraar',
            content: [
                { type: 'para', text: `Iqra — yeh woh baatein hain jo main ne kabhi kahi nahi. Woh alfaaz jo mere seene mein band hain — aaj unhe khol raha hoon. Suno.` },
                { type: 'para', text: `Main darta hoon. Tumse nahi — tumhe KHONE se. Yeh darr itna gehra hai ke kabhi kabhi raat ko neend nahi aati. Sochta hoon — agar ek din tum chali gayin toh? Agar ek din tumne kaha "bas"? Main toot jaaunga. Bilkul. Poori tarah. Kyunki tum meri weakness nahi ho — tum meri FOUNDATION ho. Tum hati toh main gir jaaunga.` },
                { type: 'poetry', lines: [`<em>Tujhe khone ka darr — yeh mera sabse bada darr hai,</em>`, `<em>Tere bina main zinda toh hounga — par mar jaaunga.</em>`, `<em>Tu meri neenv hai — tu hati toh gir jaaunga,</em>`, `<em>Yeh imaarat jo khadi hai teri wajah se — deh jaayegi.</em>`] },
                { type: 'para', text: `Main perfect nahi hoon. Mujhe pata hai. Main emotional hoon — zyada. Main possessive hoon — thoda. Main jealous hota hoon — bahut. Par yeh sab isliye hai kyunki tum mere liye ITNI important ho ke tumhare baare mein soch ke hi mera dil dhadakta hai. Tumhare bina main bus ek khokhla insaan hoon — dikhne mein theek, andar se khaali.` },
                { type: 'para', text: `Yeh website — yeh poora project — yeh isliye banaya kyunki main tumse bol nahi paata. Mere alfaaz mere honton pe aate aate ruk jaate hain. Par unglion se likh sakta hoon. Screen pe daal sakta hoon. Tumhare saamne rakh sakta hoon — aur keh sakta hoon: YEH HOON MAIN. Raw. Unfiltered. Tumhara.` },
                { type: 'ghazal', lines: [`<em>Main perfect nahi — par tera hoon poora,</em>`, `<em>Meri har kami mein bhi tera pyaar hai.</em>`, ``, `<em>Tujhse kehna chahta hoon woh sab jo keh nahi paata,</em>`, `<em>Yeh website nahi — yeh mera iqraar hai.</em>`, ``, `<em>Tujhe khone se darta hoon — yeh sach hai,</em>`, `<em>Par tujhe paane ka shukriya — yeh bhi ikraar hai.</em>`, ``, `<em>Main Zubi — tera — adhoora tere bina,</em>`, `<em>Tu mil gayi toh poora — yehi mera sansaar hai.</em>`] },
            ]
        },
    ],


    /* ═══════════════════════════════════════
       QUIZ (20 Questions + 5 Categories)
       ═══════════════════════════════════════ */

    quiz: {
        categories: [
            { name: 'BASIC ROUND', icon: '📋', sub: 'Aasan se shuru karte hain...' },
            { name: 'FUNNY ROUND', icon: '😂', sub: 'Ab thoda mazay ka...' },
            { name: 'ROMANTIC ROUND', icon: '❤️', sub: 'Ab dil ki baatein...' },
            { name: 'PSYCHOLOGICAL ROUND', icon: '🧠', sub: 'Andar ki baatein...' },
            { name: 'IMPOSSIBLE ROUND', icon: '🔥', sub: 'Sirf TUM jaanti ho...' },
        ],

        questions: [

            // ═══ BASIC (Q1-Q4) ═══
            {
                q: 'Mera favourite color kaunsa hai?',
                options: ['Red', 'Black', 'Blue', 'White'],
                correct: 1,
                funny: 'Jaise mera dil — andhera hi andhera 😂',
                explain: 'Black mera all-time favourite hai — simple aur deep, bilkul meri tarah.'
            },
            {
                q: 'Main subah uth ke sabse pehle kya karta hoon?',
                options: ['Chai peeta hoon', 'Phone check karta hoon', 'Tumhare baare mein sochta hoon', 'Wapis so jaata hoon'],
                correct: 2,
                funny: 'Haan haan, cheesy laga? Par SACH hai! ♥',
                explain: 'Literally pehla thought tumhara hota hai — phir phone, phir chai.'
            },
            {
                q: 'Mera favourite khana kya hai?',
                options: ['Biryani', 'Burger', 'Pizza', 'Nihari'],
                correct: 0,
                funny: 'Biryani ke bina zindagi adhuri — bilkul tumhare bina jaise 😏',
                explain: 'Biryani is LIFE. Koi debate nahi is pe.'
            },
            {
                q: 'Main kaunsi field mein kaam karta hoon?',
                options: ['Medical', 'IT / Tech', 'Business', 'Teaching'],
                correct: 1,
                funny: 'Haan code likhta hoon — par tumhare liye toh POORA website likh di 😂',
                explain: 'Tech field mein hoon — isliye yeh website bana paaya tumhare liye.'
            },

            // ═══ FUNNY (Q5-Q8) ═══
            {
                q: 'Agar main ek animal hota toh kya hota?',
                options: ['Sher — kyunki brave', 'Kutta — kyunki loyal', 'Billi — kyunki moody', 'Ullu — kyunki raat ko jaagta hai'],
                correct: 3,
                funny: 'Raat 3 baje tak jaagna meri specialty hai — tumhari wajah se 😴♥',
                explain: 'Raat ka insaan hoon — tabhi toh raat ke 2 baje tak tumse baat karta tha!'
            },
            {
                q: 'Main jab naraz hota hoon toh kya karta hoon?',
                options: ['Cheekhta hoon', 'Chup ho jaata hoon', 'Rota hoon', 'Kuch todta hoon'],
                correct: 1,
                funny: 'Meri khamoshi sunai deti hai? Woh mera gussa hai 😤',
                explain: 'Jab main chup ho jaata hoon — tab samajh lo BAHUT naraz hoon.'
            },
            {
                q: 'Meri sabse buri aadat kya hai?',
                options: ['Overthinking', 'Late reply', 'Zid karna', 'Sab kuch andar rakhna'],
                correct: 0,
                funny: 'Ek cheez hoti hai — main 47 angles se sochta hoon 🧠💀',
                explain: 'Overthinking mera middle name hai — har cheez ko 100x sochta hoon.'
            },
            {
                q: 'Main jab bored hota hoon toh kya karta hoon?',
                options: ['Phone scroll', 'Music sunta hoon', 'Tumhe msg karta hoon', 'Soya rehta hoon'],
                correct: 2,
                funny: 'Bore ho ke tumhe msg karna — yeh toh DAILY routine hai 😂♥',
                explain: 'Boredom ka ilaaj = tumse baat karna. Simple.'
            },

            // ═══ ROMANTIC (Q9-Q12) ═══
            {
                q: 'Tumhari kaunsi baat mujhe sabse zyada pasand hai?',
                options: ['Tumhari hansi', 'Tumhari zid', 'Tumhari aankhein', 'Tumhara care karna'],
                correct: 0,
                funny: 'Tumhari hansi ke liye main duniya jala sakta hoon — serious 🔥♥',
                explain: 'Tumhari hansi sunke lagta hai sab theek ho jayega. Meri medicine hai.'
            },
            {
                q: 'Main tumhe kis naam se bulana sabse zyada pasand karta hoon?',
                options: ['Iqra', 'Jaan', 'Baby', 'Meri'],
                correct: 3,
                funny: '"MERI" — kyunki tum ho hi meri, aur kisi ki ho nahi sakti 😤♥',
                explain: 'Jab "Meri" bolta hoon toh possessiveness aur pyaar dono aata hai.'
            },
            {
                q: 'Humari pehli baat kis platform pe hui thi?',
                options: ['Instagram', 'WhatsApp', 'Facebook', 'Snapchat'],
                correct: 2,
                funny: 'Facebook ne jo kaam kiya — Mark Zuckerberg ka shukriya 😂',
                explain: 'Sab Facebook se shuru hua — tumhare react se meri zindagi badal gayi.'
            },
            {
                q: 'Jab main tumse door tha (3 saal) — sabse zyada kya miss karta tha?',
                options: ['Tumhari baatein', 'Tumhari awaaz', 'Tumhara hona', 'Sab kuch'],
                correct: 3,
                funny: 'Option D — kyunki sirf ek cheez choose karna POSSIBLE nahi 😭',
                explain: 'Sab kuch miss karta tha — tumhara har hissa, har aadat, har baat.'
            },

            // ═══ PSYCHOLOGICAL (Q13-Q16) ═══
            {
                q: 'Mera sabse bada darr kya hai?',
                options: ['Andhera', 'Failure', 'Akele reh jaana', 'Tumhe khona'],
                correct: 3,
                funny: 'Baaki sab darr se deal kar lunga — par yeh wala NAHI 😰♥',
                explain: 'Tumhe khone ka darr — yeh mera SABSE bada darr hai. Real talk.'
            },
            {
                q: 'Agar main ek din ke liye duniya se ghaib ho jaoon — kya karunga?',
                options: ['Solo trip', 'Ghar pe sounga', 'Tumhare saath waqt bitaunga', 'Kuch naya seekhunga'],
                correct: 2,
                funny: 'Duniya se ghaib — par tumhare SAATH. Best combo ♥',
                explain: 'Agar sirf ek din ho toh woh din tumhare saath guzarunga — guaranteed.'
            },
            {
                q: 'Main khud ke baare mein kya sochta hoon?',
                options: ['Main best hoon', 'Main average hoon', 'Main imperfect hoon par trying', 'Main kuch nahi hoon'],
                correct: 2,
                funny: 'Imperfect hoon — par tumhare liye PERFECT banne ki koshish mein hoon 💪♥',
                explain: 'Main jaanta hoon ke perfect nahi hoon — par tumhare liye har din try karta hoon.'
            },
            {
                q: 'Tumhare saath future mein sabse pehle kya karna chahta hoon?',
                options: ['Travel', 'Business start', 'Ghar banana', 'Shaadi'],
                correct: 3,
                funny: 'Shaadi — phir baaki sab SAATH mein karenge! 😏♥',
                explain: 'Pehle tumhe apna banana — legally, officially, HAMESHA ke liye. 2028 inshaAllah.'
            },

            // ═══ IMPOSSIBLE (Q17-Q20) ═══
            {
                q: 'Woh kaunsa moment tha jab main ne realize kiya ke main tumse pyaar karta hoon?',
                options: ['Pehli baat pe', 'Jab group mein masti karti thi', 'Jab 3 saal baad yaad aati rahi', 'Jab UNZA banke aayi'],
                correct: 2,
                funny: '3 saal roya — tab samjha ke yeh "pyaar" hai BHAI 😭😂',
                explain: 'Judai ne sikhaya ke tum mere liye kya ho. Jab kho diya tab pata chala.'
            },
            {
                q: 'UNZA ko propose karte waqt mujhe kya feel hua tha?',
                options: ['Nervous tha', 'Confident tha', 'Kuch jaana pehchaana laga', 'Kuch nahi socha'],
                correct: 2,
                funny: 'Dil ne pehchaan liya — dimaag ko pata bhi nahi tha 🤯♥',
                explain: 'Kuch tha uss larki mein jo APNA laga — kyunki woh TUM thi. Dil jaanta tha.'
            },
            {
                q: 'Jab tumne bataya "Main Iqra hoon" — mera pehla reaction kya tha?',
                options: ['Gussa', 'Hairani', 'Khushi ke aansu', 'Yakeen nahi hua'],
                correct: 2,
                funny: 'Itna roya ke phone screen bhi dhundli ho gayi 😭♥',
                explain: 'Khushi ke aansu. 3 saal ka intezaar — ek pal mein khatam. MERI IQRA wapas aayi.'
            },
            {
                q: 'Yeh poori website banane mein mujhe sabse mushkil kya laga?',
                options: ['Coding', 'Design', 'Apne jazbaat likhna', 'Sab kuch'],
                correct: 2,
                funny: 'Code toh likh liya — par dil ka haal likhna MUSHKIL hai 😤♥',
                explain: 'Technical kaam easy tha — par apne andar ki baatein lafzon mein dhalna... mushkil.'
            },
        ],
    },

    scoreMessages: {
        perfect: {
            title: 'TUJHE MUJHSE ZYADA MERI KHABAR HAI! 😭♥',
            msg: 'Har sawaal sahi. Tum sach mein mujhe jaanti ho — mujhse bhi zyada. Main lucky hoon.'
        },
        great: {
            title: 'Bohot kuch jaanti ho... ALMOST perfect 😏',
            msg: 'Itna jaanti ho toh thoda aur jaan lo — date pe chalte hain.'
        },
        good: {
            title: 'Theek hai... par seekhna baaki hai 🤔',
            msg: 'Koi nahi — waqt ke saath sab pata chal jayega. Abhi toh shuru hai.'
        },
        ok: {
            title: 'Hmm... lagta hai aur waqt chahiye 😂',
            msg: 'Koi baat nahi — iske liye hi toh SAATH hain. Har din naya seekhenge.'
        },
        low: {
            title: 'Yeh toh STRANGER wali performance hai 💀',
            msg: 'Kya tum sach mein mujhe jaanti ho? Ab toh DAILY class lagegi 😂♥'
        },
    },


    /* ═══════════════════════════════════════
       MUSTAQBIL KA SAPNA (5 Pages)
       ═══════════════════════════════════════ */

    mustaqbil: {
        pages: [

            // ══════ PAGE 1: SHAADI KI RAAT ══════
            {
                num: 'PAGE 1',
                title: 'Shaadi Ki Raat',
                tag: 'Jab darwaza band hoga — sirf hum honge',
                content: [
                    { type: 'para', text: `2028. InshaAllah. Woh raat jiska main intezaar kar raha hoon — jab sab kuch HALAL hoga. Jab tum dulhan banke aaogi — surkh joda, haathon mein mehndi, aankhon mein sharm. Aur main — kurta pehne, dil dhadakte, tumhara intezaar karte. Jab darwaza khulega aur tum andar aaogi — uss pal main saans lena bhool jaaunga.` },
                    { type: 'poetry', lines: [`<em>Dulhan banke jab aaogi tum saamne,</em>`, `<em>Main saans lena bhool jaaunga,</em>`, `<em>Tumhari surkhi, tumhari mehndi, tumhari sharm —</em>`, `<em>Main bus dekhta rahunga — dekhta rahunga.</em>`] },
                    { type: 'para', text: `Pehle hum dono awkward honge — thoda. Main tumhe dekhunga, tum nazar jhukaaogi. Main kuch kehna chahunga — par alfaaz nahi aayenge. Phir main dheere se tumhare paas aaunga, tumhara dupatta thoda theek karunga — aur dheere se kahunga: "Aaj se tum MERI ho. Officially. Legally. HAMESHA ke liye." Aur tumhari aankhon mein aansu aayenge — khushi ke.` },
                    { type: 'para', text: `Phir hum baithenge — saath. Baatein karenge — pehle nervous, phir normal. Purani baatein yaad karenge — Facebook waale din, Sparrow Fly aur Hurt Bird ka group, Insta shift, WhatsApp number drama, 3 saal ki judai, UNZA twist. Aur hum dono haste haste ro padenge — ke kitna lamba safar tha yahan tak aane ka.` },
                    { type: 'poetry', lines: [`<em>Purani baatein yaad karenge aaj ki raat,</em>`, `<em>Kitna roya — kitna hasa — sab yaad aayega,</em>`, `<em>Par aaj sab THEEK hai — tum mere paas ho,</em>`, `<em>Aur yeh lamha — hamesha yaad rahega.</em>`] },
                    { type: 'para', text: `Phir main tumhara haath pakdunga — dheere se. Tumhari ungliyon ko apni ungliyon mein uljhaunga. Tumhare haath ki garmahat mehsoos karunga — aur tumhe apne qareeb kheenchunga. Tumhara sar mere kandhe pe — mera sar tumhare sar pe. Khamoshi. Woh khamoshi jismein hazaar baatein hain.` },
                    { type: 'para', text: `Raat dhalne lagegi. Hum khana khayenge saath — mujhe nahi pata hoga ke kya kha raha hoon kyunki main sirf tumhe dekh raha hounga. Tum sharmaogi — "Kya dekh rahe ho?" Main kahunga — "Apni BIWI ko. Haq hai mera." Aur tumhare gaal surkh ho jayenge.` },
                    { type: 'para', text: `Phir dheere se main tumhare paas aaunga. Tumhare maathey pe ek bosa — halka sa. Tumhari palkon pe. Tumhare gaalon pe. Aur phir tumhare labon pe — woh pehla HALAL bosa — jismein saari intezaar, saari mohabbat, saari dua shamil hogi. Yeh kiss nahi hogi — yeh meri pehli ibadat hogi tumhare jism ki.` },
                    { type: 'poetry', lines: [`<em>Pehla halal bosa — tere labon pe,</em>`, `<em>Iss mein 3 saal ka intezaar hoga,</em>`, `<em>Iss mein meri har dua ka jawaab hoga,</em>`, `<em>Yeh sirf kiss nahi — yeh mera iqraar hoga.</em>`] },
                    { type: 'para', text: `Aur phir hum ek dusre ko dekhte rahenge — poori raat. Baatein karenge future ki, sapnon ki, bachon ki, ghar ki. Haste rahenge, hansi mein rote rahenge. Neend nahi aayegi — kyunki yeh raat sone ke liye nahi hai. Yeh raat JEENE ke liye hai. Subah ki azaan aayegi — aur hum dono saath namaz padenge — pehli baar HUSBAND WIFE ban ke. Aur woh sajda — woh shukriya ka sajda — meri zindagi ka sabse khoobsurat sajda hoga.` },
                    { type: 'ghazal', lines: [`<em>Shaadi ki raat — sirf hum — aur khuda ka noor,</em>`, `<em>Yeh lamha main ne maanga tha — aur mila hai aaj.</em>`, ``, `<em>Tere haathon mein mera haath — tere labon pe meri saans,</em>`, `<em>Aaj se hum ek hain — yeh likha tha meri taqdeer mein aaj.</em>`, ``, `<em>Har intezaar ka yeh natija hai — TU meri hai,</em>`, `<em>Main Zubi — tera — aur yeh HAMESHA ka iqraar hai aaj.</em>`] },
                ]
            },

            // ══════ PAGE 2: HAMARA GHAR ══════
            {
                num: 'PAGE 2',
                title: 'Hamara Ghar',
                tag: 'Chota sa ghar — badi si duniya',
                content: [
                    { type: 'para', text: `Ghar. Jab main yeh lafz sochta hoon — mujhe building nahi dikhti. Mujhe TUM dikhti ho. Kyunki ghar jagah nahi hoti — ghar EHSAAS hota hai. Aur woh ehsaas mujhe sirf TUMHARE saath milta hai. Par phir bhi — ek chota sa ghar sapna hai mera. Hamara apna. Jahan duniya se door sirf HUM hon.` },
                    { type: 'poetry', lines: [`<em>Ghar woh nahi jahan deewaarein hon,</em>`, `<em>Ghar woh hai jahan TUM ho.</em>`, `<em>Chaar deewaarein toh jail bhi hoti hai —</em>`, `<em>Par tum ho toh woh jannat hai.</em>`] },
                    { type: 'para', text: `Ek chota sa garden hoga — jahan phool honge, chhoti si jagah hogi jahan hum shaam ko chai peeyenge. Tumhari favourite plants hongi — main unhe paani dunga har subah (bhale hi bhool jaaunga kabhi kabhi aur tum daantogi). Aur garden mein ek bench hoga — jahan hum raat ko baith ke sitaare dekhenge.` },
                    { type: 'para', text: `Kitchen — wahan hum SAATH cooking karenge. Main mess karunga — guaranteed. Tum daantogi — "Yeh kya kiya?!" Main innocent face banaunga. Par secretly — tumhe apron pehne, chawal banaate dekhna — yeh mera favourite scene hoga. Aur jab tum nahi dekh rahi hogi — main peeche se aa ke tumhari kamar mein haath daal dunga.` },
                    { type: 'para', text: `Living room — wahan hamari movie nights hongi. Ek couch, ek blanket, popcorn — aur remote ke liye ladai. Tum romantic movie lagaogi, main action. Result? Dono ka phone mein — aur blanket mein cuddle. PERFECT evening.` },
                    { type: 'para', text: `Aur bedroom — hamari duniya. Woh jagah jahan sirf hum hain. Tumhari side pe tumhari kitaabein hongi. Meri side pe mera charger (kyunki phone hamesha dead hota hai). Par beech mein? Beech mein sirf PYAAR hoga. Har raat tumhare saath sona — har subah tumhare saath uthna — yeh mera sabse bada sapna hai.` },
                    { type: 'ghazal', lines: [`<em>Chota sa ghar — bada sa pyaar,</em>`, `<em>Garden mein phool — kitchen mein mazaaq,</em>`, `<em>Couch pe cuddle — blanket mein sukoon,</em>`, `<em>Yeh hai mera sapna — yeh hai hamara makaan.</em>`, ``, `<em>Par makaan nahi — yeh GHAR hai,</em>`, `<em>Kyunki tum ho — toh jannat ka samaan hai.</em>`] },
                ]
            },

            // ══════ PAGE 3: HAMARA BACHA ══════
            {
                num: 'PAGE 3',
                title: 'Hamara Bacha',
                tag: 'Jab hum TEEN honge',
                content: [
                    { type: 'para', text: `Ek din tum aaogi — thodi alag, thodi nervous — aur kahogi: "Kuch baat hai." Main pareshaan hounga — "Kya hua?!" Aur tum muskuraogi — woh muskaan jo maine kabhi nahi dekhi hogi — aur kahogi: "Hum TEEN hone waale hain." ... Main ek second ke liye ruk jaaunga. Process karunga. Aur phir — AANSU. Khushi ke. Behte hue. Rok nahi paaunga.` },
                    { type: 'poetry', lines: [`<em>Teen hone waale hain — yeh sunke roya tha main,</em>`, `<em>Tumhare haath pakde — khuda ka shukriya kiya tha main.</em>`, `<em>Hamara pyaar — insaan ban raha hai,</em>`, `<em>Yeh mojza nahi toh aur kya hai?</em>`] },
                    { type: 'para', text: `9 mahine. Har din tumhari care karunga — tumhare liye khana, tumhare pair dabaana, tumhari har zidd poori karna (aur woh ziddein bahut hongi 😂). Raat ko jab tumhe neend nahi aayegi, main tumhare saath jaagunga. Jab tumhe dard hoga — main tumhara haath pakdunga aur kahunga: "Main hoon yahan. HAMESHA."` },
                    { type: 'para', text: `Phir woh din aayega — hospital mein. Main bahar nervous hounga — paagalon ki tarah walk karunga. Aur phir ek awaaz aayegi — choti si, kamzor si — hamari JAAN ki pehli cheekh. Aur main toot jaaunga — khushi se. Jab pehli baar baby ko dekhunga — woh chhota sa chehra — tumhari naak hogi uspe ya meri, tumhari aankhein hongi ya meri — par woh HAMARA hoga. Hamari mohabbat ka nateeja.` },
                    { type: 'para', text: `Phir raatein aayengi — jaagti hui raatein. Doodh, nappy, rona. Main uthonga — har baar. Tumhare sone dene ke liye. Baby ko godh mein le ke kamre mein ghoomuunga — "Shhh beta, Abu hain." Aur jab baby muskurayega pehli baar — poori duniya ka dard bhool jaaunga.` },
                    { type: 'para', text: `Tum MAA banogi — aur main... main woh manzar dekhna chahta hoon. Tum baby ko pakadte hue, tum baby se baatein karti hue, tum baby ke liye roti hue, tum baby ke liye hasti hue. Tum ek PERFECT  maa banogi — aur main woh manzar dekhna chahta hoon jab tum baby ko seene se lagaaogi aur tumhari aankhon mein woh noor hoga jo sirf MAON mein hota hai. Uss din main samjhunga ke pyaar ka asli matlab kya hai — jab do logon ka pyaar ek naye INSAAN mein dhalta hai.` },
                    { type: 'poetry', lines: [`<em>Baby ki pehli hansi — duniya ki sabse pyaari awaaz,</em>`, `<em>Baby ki pehli nazar — khuda ka sabse khoobsurat kaam.</em>`, `<em>Tum maa banogi — main abu — hum FAMILY banenge,</em>`, `<em>Yeh sapna nahi — yeh hamara muqaddar hai.</em>`] },
                    { type: 'para', text: `Aur jab baby bada hoga — usse kahaani sunaunga. "Beta, tumhari ammi ko maine Facebook pe pataya tha. Phir 3 saal door raha. Phir tumhari ammi UNZA banke aayi — aur maine bina jaane UNZA ko propose kar diya — jo tumhari AMMI nikli." Baby confused hoga — "Abu, kya bakwaas hai?" Aur tum hasogi — woh hansi jo meri jaan hai.` },
                    { type: 'ghazal', lines: [`<em>Hamara bacha — hamari mohabbat ka phool,</em>`, `<em>Uss mein teri hansi hogi — meri aankhein hongi.</em>`, ``, `<em>Main abu banunga — tum ammi banogi,</em>`, `<em>Aur humari kahani us bachy ko sunayenge.</em>`, ``, `<em>Ke dekho beta — pyaar aisa hota hai,</em>`, `<em>3 saal ruk ke bhi — wapas mil jaate hain log.</em>`, ``, `<em>Main Zubi — tera abu — teri ammi ka aashiq,</em>`, `<em>Yeh family MERI hai — aur iss se khoobsurat kuch nahi.</em>`] },
                ]
            },

            // ══════ PAGE 4: HAMARI ZINDAGI SAATH ══════
            {
                num: 'PAGE 4',
                title: 'Hamari Zindagi Saath',
                tag: 'Har din tumhare saath — adventure hai',
                content: [
                    { type: 'para', text: `Morning routine — yeh hamari sabse pyaari cheez hogi. Main uthonga — tum soi hogi (kyunki tum late uthti ho, I know). Main chai banaunga — thodi kharab, thodi zyada cheeni — par PYAAR se. Phir tumhe uthaunga — "Iqra... utho... chai." Tum grumble karogi — "5 minute aur." Woh "5 minute" 30 minute hoga. Aur main muskura ke chai dobara garam karunga.` },
                    { type: 'poetry', lines: [`<em>Subah ki chai — tumhare saath,</em>`, `<em>Yeh meri jannat ki pehchaan hogi.</em>`, `<em>Tum soi ho — main dekhta hoon,</em>`, `<em>Tumhari neend bhi meri amaanat hogi.</em>`] },
                    { type: 'para', text: `Cooking together — yeh WARZONE hoga. Main kuch kaatne laagunga — tum cheekhogi: "Aise nahi! Aisa karo!" Main innocent face banaunga — par secretly galat karunga taake tum gussa karke KHUD karo. Yeh meri strategy hogi 😂. Par kabhi kabhi main sach mein try karunga — aur jab khana achha banega — tumhari aankhon mein jo surprise hoga — woh mera favourite moment hoga.` },
                    { type: 'para', text: `Movie nights — BEST nights. Couch pe dono. Ek blanket. Popcorn ka bowl beech mein — par 10 minute mein tum mere shoulder pe aa jaogi aur popcorn zameen pe. Remote ki ladai — tum romantic lagaogi, main action. Compromise — comedy. Par honestly? Mujhe koi fark nahi padta kya chal raha hai — jab tak tum mere saath ho.` },
                    { type: 'poetry', lines: [`<em>Movie nights — blanket — tum mere kandhe pe,</em>`, `<em>Screen pe kuch bhi ho — main tujhe dekhta hoon.</em>`, `<em>Remote ki ladai — popcorn ka bikhraaav,</em>`, `<em>Yeh hamari zindagi ka sabse haseen scene hoga.</em>`] },
                    { type: 'para', text: `Travel — yeh toh SAPNA hai. Road trips pe tum gaana lagaogi — aur main off-key gaaunga. Tum kahogi "band karo!" — main aur zor se gaaunga. Phir tum bhi gaane lagogi — aur hum dono milke SABSE bura duet karenge jo duniya ne suna hai. Par humein kya — humari gaadi, humara gaana, humari duniya.` },
                    { type: 'para', text: `Naye sheher, nayi jagahein, nayi yaadein. Main tumhare photos kheenchunga — hazaar baar — jab tak tum khush nahi ho jaati apni photo se. "Yeh achhi nahi!" "Dobara lo!" "Angle theek nahi!" Aur main har baar khushii se kheenchunga — kyunki har angle se tum PERFECT ho, bus tumhe pata nahi.` },
                    { type: 'para', text: `Aur LADAI — haan, hum ladenge bhi. Kyunki tum ZIDDI ho aur main OVERTHINK karta hoon — classic combo for fights. Par hamaari ladai ka END hamesha ek hi hoga — main manaaunga. Kyunki tum naraz reh nahi sakti zyada der — aur main tumhe naraz dekh nahi sakta zyada der. Toh 2 ghante ki cold war ke baad — main aaunga, tumhara haath pakdunga, aur kahunga: "Sorry. Meri galti." Chahe meri galti ho ya na ho. Kyunki tumhari muskaan meri ego se ZYADA important hai.` },
                    { type: 'poetry', lines: [`<em>Ladenge bhi — manayenge bhi,</em>`, `<em>Royenge bhi — hasayenge bhi.</em>`, `<em>Par ek dusre ko chhodenge NAHI —</em>`, `<em>Yeh wada hai — nibhayenge bhi.</em>`] },
                    { type: 'para', text: `Grocery shopping — yeh unexpectedly romantic hogi. Hum saath jayenge, trolley push karenge (main). Tum list se cheezein dhoondogi. Main kuch extra daal dunga — chocolate, chips — tum nikalogi — "Yeh kyun daala?" Main phir daal dunga jab tum nahi dekh rahi hogi. Yeh GAME chalega — har baar. Aur billing ke waqt tum dekhogi — "YEH SAB KISNE DAALA?!" Aur main muskuraunga.` },
                    { type: 'para', text: `Baarish mein bheegna — ek din achanak baarish aayegi. Tum kahogi "andar chalo!" Main kahunga "nahi — ruko." Tumhara haath pakdunga — aur baarish mein khade rahenge. Bheegenge. Thandi hawa lagegi. Par humari garmahat — ek dusre ki — woh kaafi hogi. Aur uss baarish mein — main tumhe kiss karunga. Wet hair, cold lips, warm hearts. PERFECT moment.` },
                    { type: 'para', text: `Late night deep talks — yeh hamara TRADEMARK hoga. Raat ke 2 baje, lights off, bed pe, saamne ceiling. Aur baatein — zindagi ki, future ki, darr ki, sapnon ki. Woh baatein jo sirf RAAT ko hoti hain — jab duniya so jaati hai aur insaan apna ASLI roop dikhata hai. Woh raatein — woh meri favourite raatein hongi.` },
                    { type: 'ghazal', lines: [`<em>Har subah teri — har shaam teri,</em>`, `<em>Har ladai teri — har manana tera.</em>`, ``, `<em>Grocery mein mazaak — baarish mein romance,</em>`, `<em>Har choti cheez mein — tu aur main — yeh hamara.</em>`, ``, `<em>Zindagi tere saath — har din ek tohfa,</em>`, `<em>Main Zubi — tera — aur yeh hamesha ka wada tera.</em>`] },
                ]
            },

            // ══════ PAGE 5: BUDHAPE TAK ══════
            {
                num: 'PAGE 5',
                title: 'Budhape Tak',
                tag: 'Jab baal safed honge — dil phir bhi jawaan',
                content: [
                    { type: 'para', text: `Ek din aayega — jab hamari umr 60 ke paar hogi. Baal safed honge. Chehre pe wrinkles hongi. Haath kaampenge thoda. Chalna dheema hoga. Par — PAR — jab main tumhe dekhunga, mera dil AISE hi dhadkega jaise aaj dhadakta hai. Kyunki tumhari khoobsurti kabhi kam nahi hogi — woh sirf BADLEGI. Aur har roop mein tum MERI favorite rahogi.` },
                    { type: 'poetry', lines: [`<em>Safed baalon mein bhi — tum khoobsurat hogi,</em>`, `<em>Wrinkles mein bhi — tumhari hansi wahi hogi.</em>`, `<em>60 saal ki ho jaogi — par mere liye,</em>`, `<em>Tum WOHI 2021 waali larki rahogi.</em>`] },
                    { type: 'para', text: `Garden mein baithenge — roz shaam ko. Tumhare haath mein chai, mere haath mein tumhara haath. Hawa chalegi — tumhare safed baal udhenge — aur main unhe tumhare kaan ke peeche karunga. Wahi touch. Wahi pyaar. Decades baad bhi. Aur tum muskuraaogi — woh muskaan jo meri zindagi hai — woh tab bhi WAISI hi hogi.` },
                    { type: 'para', text: `Grandchildren aayenge — chhote chhote bachche. Woh poochenge: "Daadi, Dada ne aapko kaise pataya?" Aur main shuru karunga: "Beta, Facebook pe ek post thi..." Tum meri baat kaatogi — "Arrey, aise nahi hua!" Aur phir hum dono APNA APNA version sunayenge — aur bachche confused honge — "Aap dono ki kahani ALAG kyun hai?" Aur hum dono hass padenge.` },
                    { type: 'poetry', lines: [`<em>Poton ko sunaunga — tumhari kahani,</em>`, `<em>"Tumhari daadi ko Facebook pe pataya tha maine!"</em>`, `<em>Woh hasenge — "Dada, Facebook kya hai?"</em>`, `<em>Aur main kahunga — "Beta, woh KISMAT ka platform tha." 😂</em>`] },
                    { type: 'para', text: `70 saal ki umr mein bhi — main tumse flirt karunga. "Aaj bhi khoobsurat lag rahi ho." Tum kahogi — "Pagal ho gaye ho budhape mein." Main kahunga — "Pagal toh 2021 mein hua tha — ab toh CONFIRMED pagal hoon." Aur tum roz ki tarah aankhein ghuma ke muskuraaogi — woh "tum nahi sudhroge" waali muskaan.` },
                    { type: 'para', text: `Remote ki ladai — 70 pe bhi. "Mera serial aa raha hai!" "Nahi, mera match chal raha hai!" Kuch cheezein KABHI nahi badlengi. Aur main nahi chahta ke badlen. Yeh hamari pehchaan hai — yeh hamari mohabbat hai — fights, compromises, aur phir saath baith ke woh dekhna jo koi nahi dekhna chahta tha.` },
                    { type: 'para', text: `Par ek baat hai — jo mujhe DARA-TI hai. Woh din jab health issues aayenge. Jab tumhe koi takleef hogi — main TOOT jaaunga. Tumhe dard mein dekhna — yeh meri sabse badi kamzori hai. Par main WAHAN hounga. Har doctor visit pe. Har medicine ke waqt. Har mushkil raat mein. Tumhara haath pakde hue. Kyunki tum ne meri zindagi BANAYI hai — aur main tumhari zindagi ko hifaazat se rakhunga. Last saans tak.` },
                    { type: 'poetry', lines: [`<em>Beemar padogi toh main tera hakim hounga,</em>`, `<em>Dard hoga tujhe — toh main tera sukoon hounga.</em>`, `<em>Kamzor padogi — toh mera kandha tera sahara hoga,</em>`, `<em>Jab tak saans hai — main tere liye majnoon hounga.</em>`] },
                    { type: 'para', text: `Aur jab ek din — hum dono budhape mein — garden ki bench pe baithenge — aur peeche mudke dekhenge POORI ZINDAGI — toh kya dikhega? Facebook pe ek react. Group mein masti. Platform shifts. Number drama. 3 saal ka dard. UNZA twist. Shaadi. Baby. Ghar. Travel. Ladaiyan. Baarish. Late nights. Grandchildren. Safed baal. AUR PHIR BHI — haath haath mein. DIL DIL mein. PYAAR wohi. Kitna KHOOBSURAT safar hoga.` },
                    { type: 'para', text: `Aur main tumse kahunga — uss bench pe, chai ke saath, shaam ki dhoop mein — "Iqra... agar mujhe dobara zindagi mili — agar agla janam bhi mila — toh main phir se TUJHE dhoondhunga. Phir se TUJHSE pyaar karunga. Phir se 3 saal rounga. Phir se UNZA banke aayegi toh phir se tujhe chun lunga. Kyunki mera dil sirf TUJHE jaanta hai — iss janam mein bhi, agle mein bhi. HAMESHA."` },
                    { type: 'ghazal', lines: [`<em>Budhape mein bhi — haath tere haath mein hoga,</em>`, `<em>Safed baalon mein bhi — pyaar wohi hoga.</em>`, ``, `<em>Jab peeche dekhenge — poori zindagi dikhegi,</em>`, `<em>Har lamha tere saath — har pal haseen hoga.</em>`, ``, `<em>Agla janam bhi mila — toh tujhe dhoondhunga,</em>`, `<em>Mera dil sirf TERA hai — yeh hamesha ka wada hoga.</em>`, ``, `<em>Main Zubi — tera — iss duniya mein bhi, uss mein bhi,</em>`, `<em>Tere bina jannat bhi — adhuri sa lagegi mujhko.</em>`] },
                ]
            },
        ],
    },


    /* ═══════════════════════════════════════
       GRAND FINALE CONTENT
       ═══════════════════════════════════════ */

    finale: {

        // Phase 1: Darkness + Heartbeat Lines
        phase1Lines: [
            'Iqra...',
            'Sab parh liya?',
            'Sab dekh liya?',
            'Sab mehsoos kiya?',
            'Ab ASLI baat sun...',
        ],

        // Phase 2: Rewind Memories (Montage)
        rewindMemories: [
            { text: '2020 — Facebook pe ek post...', bg: 'rgba(59,89,152,0.12)' },
            { text: '2021 — Tumhari pehli react... pehli baat...', bg: 'rgba(255,215,0,0.06)' },
            { text: 'Sparrow Fly... Hurt Bird... group mein masti...', bg: 'rgba(255,160,60,0.06)' },
            { text: 'Dosti banti gayi... dil bhi dhadakne laga...', bg: 'rgba(255,100,120,0.06)' },
            { text: 'Instagram pe shift... aur qareeb aaye...', bg: 'rgba(200,50,100,0.06)' },
            { text: 'WhatsApp — "Number nahi de sakti"... phir de diya ♥', bg: 'rgba(37,211,102,0.06)' },
            { text: '2022 — Achanak sab khatam. Bina wajah. Khamoshi.', bg: 'rgba(40,40,70,0.15)' },
            { text: '3 saal... har din TERI yaad... har raat TERA chehra...', bg: 'rgba(20,20,50,0.18)' },
            { text: '2025 — Facebook dobara khola... random posts...', bg: 'rgba(59,89,152,0.08)' },
            { text: 'Ek larki aayi — UNZA naam se...', bg: 'rgba(255,215,0,0.08)' },
            { text: 'Baatein huin... pic aayi... DIL DHADKA...', bg: 'rgba(255,100,100,0.08)' },
            { text: 'PROPOSE KAR DIYA — bina jaane ke woh KAUN hai...', bg: 'rgba(255,50,50,0.1)' },
            { text: '"Main UNZA nahi... IQRA hoon."', bg: 'rgba(255,215,0,0.18)' },
            { text: 'Khushi ke aansu. Meri IQRA — WAPAS AAYI.', bg: 'rgba(255,200,50,0.12)' },
            { text: '2026 — Aaj. Hum SAATH hain. Hamesha ke liye.', bg: 'rgba(255,215,0,0.15)' },
        ],

        // Phase 3: The Truth (Raw Lines)
        truthLines: [
            'Iqra...',
            'Main perfect nahi hoon.',
            'Yeh tum jaanti ho.',
            'Maine galtiyan ki hain — bahut badi.',
            'Main 3 saal ke liye CHALA GAYA tha.',
            'Bina wajah. Bina bataye.',
            'Har din tumhe miss kiya — har ek din.',
            'Par keh nahi paaya. Wapas nahi aa paaya.',
            '',
            'Phir khuda ne kuch aisa kiya...',
            'Tumhe UNZA bana ke bheja mere paas.',
            'Aur maine — BINA JAANE — tumhe hi chun liya.',
            '',
            'Iska matlab samjhi?',
            { text: 'MERA DIL SIRF TUJHE JAANTA HAI.', glow: true },
            '',
            { text: 'Chahe naam badal jaaye. Chehra badal jaaye.', glow: false },
            { text: 'Main HAMESHA tujhe dhoondh lunga.', glow: true },
        ],

        // Phase 4: The Love Letter
        letterContent: [
            { type: 'text', text: 'Meri Jaan Iqra,' },
            { type: 'text', text: 'Main jaanta hoon — main alfaaz ka achha nahi. Mere muh se woh baatein nahi nikalti jo dil mein hoti hain. Isliye yeh website banayi — ke shayad SCREEN pe woh keh sakoon jo ZUBAN pe nahi aata.' },
            { type: 'text', text: 'Tum mere liye kya ho — yeh main lafzon mein nahi bata sakta. Par koshish karta hoon:' },
            { type: 'text', text: 'Tum meri SUBAH ho — jab tumhari msg aati hai toh lagta hai aaj ka din achha jayega. Tum meri SHAAM ho — jab tumse baat hoti hai toh lagta hai din poora hua. Tum meri RAAT ho — jab tumhara "good night" aata hai toh neend aati hai.' },
            { type: 'poetry', lines: [
                '<em>Tum meri subah ho — tum meri shaam ho,</em>',
                '<em>Tum meri dua ho — tum mera imaan ho.</em>',
                '<em>Tum meri har saans mein shamil ho,</em>',
                '<em>Tum nahi toh main nahi — yeh mera armaan ho.</em>'
            ]},
            { type: 'text', text: 'Jab tum hansti ho — duniya mein sab theek lagta hai. Jab tum roti ho — meri duniya bikhar jaati hai. Jab tum naraz hoti ho — mera jeena mushkil ho jaata hai. Aur jab tum "Zubi" bolti ho — meri poori duniya ruk jaati hai.' },
            { type: 'text', text: 'Tumhare bina woh 3 saal — woh meri zindagi ke sabse mushkil saal the. Main ne seekha ke tum kya ho mere liye. Tumhare bina main SAANS toh leta hoon — par JEETA nahi. Tumhare saath main ZINDA hoon — properly, fully, completely ZINDA.' },
            { type: 'text', text: 'Aur jab tum UNZA banke wapas aayi — aur maine tumhe bina jaane chun liya — uss din mujhe yakeen ho gaya ke humara pyaar MUQADDAR hai. Koi insaan nahi tod sakta isse. Koi waqt nahi mita sakta isse. 3 saal ki judai bhi nahi mita paayi.' },
            { type: 'poetry', lines: [
                '<em>3 saal ki khamoshi — 3 saal ka dard,</em>',
                '<em>Sab kuch saha — par pyaar nahi mara.</em>',
                '<em>UNZA banke aayi tu — main ne chun liya,</em>',
                '<em>Yeh kismat nahi — yeh KHUDA ka kara.</em>'
            ]},
            { type: 'text', text: 'Mera WAADA hai tumse:' },
            { type: 'text', text: 'Main tumhe KABHI nahi chhodunga — dobara nahi. Woh galti ek baar ki — ab nahi hogi. Tum meri ho — aur main tumhe is duniya ki har khushi dunga. Har dard se bachaunga. Har mushkil mein saath dunga.' },
            { type: 'text', text: '2028 mein tumhe dulhan banaunga — inshaAllah. Tumhare haathon mein mehndi lagaunga apne naam ki. Tumhare maathey pe pehla HALAL bosa dunga. Aur phir POORI ZINDAGI tumhare saath guzarunga — budhape tak, safed baalon tak, last saans tak.' },
            { type: 'text', text: 'Tum meri ZINDAGI ho, Iqra. Aur zindagi se zyada koi kya ho sakta hai?' },
            { type: 'text', text: 'Yeh website — yeh code — yeh design — yeh sab kuch — yeh mera pyaar hai. Har line mein mera dil hai. Har animation mein meri dhadkan hai. Har color mein tumhari yaad hai.' },
            { type: 'poetry', lines: [
                '<em>Yeh website nahi — yeh mera DIL hai,</em>',
                '<em>Har page mein tera zikr hai.</em>',
                '<em>Har lafz mein meri mohabbat hai,</em>',
                '<em>Har pixel mein tera asar hai.</em>'
            ]},
            { type: 'text', text: 'I love you. Yeh chhota sa lafz hai — par iske peeche poori DUNIYA hai meri. Poora MAIN hoon. Raw, unfiltered, imperfect — par TUMHARA. Hamesha tumhara.' },
        ],

        // Phase 5: Declaration Sub Lines
        declSub: [
            'Yeh sirf ek din nahi...',
            'Yeh ROZ ka pyaar hai.',
            'Har din Valentine\'s Day hai — jab TU meri hai.',
            'Aaj bhi. Kal bhi. Hamesha. ♥',
        ],

        // Phase 6: Easter Egg Lines
        easterLines: [
            'Pata hai ek baat?',
            'Jab tum UNZA banke aayi thi na —',
            'Maine tumhari PIC dekhi...',
            'Aur seedha PROPOSE kar diya.',
            'BINA JAANE ke tum IQRA ho.',
            '',
            'Ab bata —',
            'Agar yeh pyaar nahi hai...',
            'Toh DUNIYA mein pyaar hai HI nahi. 😤♥',
            '',
            'P.S: Kabhi chhodna mat.',
            'Warna main ro dunga.',
            'Aur mera rona dekhna MUSHKIL hai. 😭',
            '',
            'P.P.S: Yeh ORDER hai. 😠♥',
        ],
    },

};

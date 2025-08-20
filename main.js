const words = {
    A1: [
        { en: "apple", tr: "elma" }, { en: "book", tr: "kitap" }, { en: "cat", tr: "kedi" }, { en: "dog", tr: "köpek" },
        { en: "house", tr: "ev" }, { en: "car", tr: "araba" }, { en: "water", tr: "su" }, { en: "milk", tr: "süt" },
        { en: "bread", tr: "ekmek" }, { en: "school", tr: "okul" }, { en: "teacher", tr: "öğretmen" }, { en: "student", tr: "öğrenci" },
        { en: "table", tr: "masa" }, { en: "chair", tr: "sandalye" }, { en: "window", tr: "pencere" }, { en: "door", tr: "kapı" },
        { en: "pen", tr: "kalem" }, { en: "pencil", tr: "kurşun kalem" }, { en: "bag", tr: "çanta" }, { en: "phone", tr: "telefon" },
        { en: "computer", tr: "bilgisayar" }, { en: "mouse", tr: "fare" }, { en: "keyboard", tr: "klavye" }, { en: "sun", tr: "güneş" },
        { en: "moon", tr: "ay" }, { en: "star", tr: "yıldız" }, { en: "tree", tr: "ağaç" }, { en: "flower", tr: "çiçek" },
        { en: "bird", tr: "kuş" }, { en: "fish", tr: "balık" }, { en: "egg", tr: "yumurta" }, { en: "cheese", tr: "peynir" },
        { en: "meat", tr: "et" }, { en: "rice", tr: "pirinç" }, { en: "soup", tr: "çorba" }, { en: "salt", tr: "tuz" },
        { en: "sugar", tr: "şeker" }, { en: "coffee", tr: "kahve" }, { en: "tea", tr: "çay" }, { en: "juice", tr: "meyve suyu" },
        { en: "family", tr: "aile" }, { en: "mother", tr: "anne" }, { en: "father", tr: "baba" }, { en: "sister", tr: "kız kardeş" },
        { en: "brother", tr: "erkek kardeş" }, { en: "friend", tr: "arkadaş" }, { en: "baby", tr: "bebek" }, { en: "child", tr: "çocuk" },
        { en: "man", tr: "adam" }, { en: "woman", tr: "kadın" }, { en: "boy", tr: "oğlan" }, { en: "girl", tr: "kız" },
        { en: "city", tr: "şehir" }, { en: "street", tr: "cadde" }, { en: "road", tr: "yol" }, { en: "bus", tr: "otobüs" },
        { en: "train", tr: "tren" }, { en: "plane", tr: "uçak" }, { en: "boat", tr: "tekne" }, { en: "bicycle", tr: "bisiklet" }
    ],
    A2: [
        { en: "airport", tr: "havaalanı" }, { en: "library", tr: "kütüphane" }, { en: "museum", tr: "müze" }, { en: "cinema", tr: "sinema" },
        { en: "restaurant", tr: "restoran" }, { en: "hotel", tr: "otel" }, { en: "office", tr: "ofis" }, { en: "factory", tr: "fabrika" },
        { en: "university", tr: "üniversite" }, { en: "college", tr: "kolej" }, { en: "school", tr: "okul" }, { en: "classroom", tr: "sınıf" },
        { en: "lesson", tr: "ders" }, { en: "subject", tr: "konu" }, { en: "exam", tr: "sınav" }, { en: "question", tr: "soru" },
        { en: "answer", tr: "cevap" }, { en: "result", tr: "sonuç" }, { en: "success", tr: "başarı" }, { en: "failure", tr: "başarısızlık" },
        { en: "holiday", tr: "tatil" }, { en: "vacation", tr: "tatil" }, { en: "trip", tr: "gezi" }, { en: "travel", tr: "seyahat" },
        { en: "journey", tr: "yolculuk" }, { en: "map", tr: "harita" }, { en: "ticket", tr: "bilet" }, { en: "passport", tr: "pasaport" },
        { en: "luggage", tr: "bagaj" }, { en: "suitcase", tr: "bavul" }, { en: "reservation", tr: "rezervasyon" }, { en: "guide", tr: "rehber" },
        { en: "tourist", tr: "turist" }, { en: "visit", tr: "ziyaret etmek" }, { en: "stay", tr: "kalmak" }, { en: "leave", tr: "ayrılmak" },
        { en: "arrive", tr: "varmak" }, { en: "depart", tr: "ayrılmak" }, { en: "wait", tr: "beklemek" }, { en: "meet", tr: "buluşmak" },
        { en: "invite", tr: "davet etmek" }, { en: "party", tr: "parti" }, { en: "celebrate", tr: "kutlamak" }, { en: "gift", tr: "hediye" },
        { en: "present", tr: "hediye" }, { en: "birthday", tr: "doğum günü" }, { en: "wedding", tr: "düğün" }, { en: "anniversary", tr: "yıldönümü" }
    ],
    B1: [
        { en: "advice", tr: "tavsiye" }, { en: "improve", tr: "geliştirmek" }, { en: "opinion", tr: "görüş" }, { en: "experience", tr: "deneyim" },
        { en: "responsible", tr: "sorumlu" }, { en: "challenge", tr: "zorluk" }, { en: "solution", tr: "çözüm" }, { en: "decision", tr: "karar" },
        { en: "opportunity", tr: "fırsat" }, { en: "achievement", tr: "başarı" }, { en: "goal", tr: "hedef" }, { en: "plan", tr: "plan" },
        { en: "project", tr: "proje" }, { en: "progress", tr: "ilerleme" }, { en: "result", tr: "sonuç" }, { en: "effect", tr: "etki" },
        { en: "cause", tr: "sebep" }, { en: "reason", tr: "neden" }, { en: "purpose", tr: "amaç" }, { en: "method", tr: "yöntem" },
        { en: "system", tr: "sistem" }, { en: "structure", tr: "yapı" }, { en: "process", tr: "süreç" }, { en: "function", tr: "işlev" },
        { en: "feature", tr: "özellik" }, { en: "quality", tr: "kalite" }, { en: "quantity", tr: "miktar" }, { en: "value", tr: "değer" },
        { en: "price", tr: "fiyat" }, { en: "cost", tr: "maliyet" }, { en: "income", tr: "gelir" }, { en: "expense", tr: "gider" },
        { en: "profit", tr: "kâr" }, { en: "loss", tr: "zarar" }, { en: "risk", tr: "risk" }, { en: "benefit", tr: "yarar" },
        { en: "advantage", tr: "avantaj" }, { en: "disadvantage", tr: "dezavantaj" }, { en: "success", tr: "başarı" }, { en: "failure", tr: "başarısızlık" },
        { en: "increase", tr: "artmak" }, { en: "decrease", tr: "azalmak" }, { en: "growth", tr: "büyüme" }, { en: "development", tr: "gelişim" },
        { en: "change", tr: "değişim" }, { en: "difference", tr: "fark" }, { en: "similarity", tr: "benzerlik" }, { en: "comparison", tr: "karşılaştırma" },
        { en: "contrast", tr: "zıtlık" }, { en: "analysis", tr: "analiz" }, { en: "review", tr: "inceleme" }, { en: "debate", tr: "tartışma" }
    ],
    B2: [
        { en: "achievement", tr: "başarı" }, { en: "consequence", tr: "sonuç" }, { en: "requirement", tr: "gereklilik" }, { en: "efficient", tr: "verimli" },
        { en: "significant", tr: "önemli" }, { en: "complex", tr: "karmaşık" }, { en: "comprehensive", tr: "kapsamlı" }, { en: "considerable", tr: "kayda değer" },
        { en: "consistent", tr: "tutarlı" }, { en: "constant", tr: "sürekli" }, { en: "continuous", tr: "devamlı" }, { en: "crucial", tr: "çok önemli" },
        { en: "distinct", tr: "farklı" }, { en: "diverse", tr: "çeşitli" }, { en: "flexible", tr: "esnek" }, { en: "fundamental", tr: "temel" },
        { en: "impact", tr: "etki" }, { en: "indicate", tr: "göstermek" }, { en: "maintain", tr: "sürdürmek" }, { en: "obtain", tr: "elde etmek" },
        { en: "occur", tr: "meydana gelmek" }, { en: "potential", tr: "potansiyel" }, { en: "primary", tr: "birincil" }, { en: "relevant", tr: "ilgili" },
        { en: "require", tr: "gerektirmek" }, { en: "resource", tr: "kaynak" }, { en: "strategy", tr: "strateji" }, { en: "sufficient", tr: "yeterli" },
        { en: "sustain", tr: "sürdürmek" }, { en: "trend", tr: "eğilim" }, { en: "variable", tr: "değişken" }, { en: "approach", tr: "yaklaşım" },
        { en: "assume", tr: "varsaymak" }, { en: "contribute", tr: "katkıda bulunmak" }, { en: "demonstrate", tr: "göstermek" }, { en: "emphasize", tr: "vurgulamak" },
        { en: "enable", tr: "olanak sağlamak" }, { en: "ensure", tr: "sağlamak" }, { en: "establish", tr: "kurmak" }, { en: "evaluate", tr: "değerlendirmek" },
        { en: "expand", tr: "genişletmek" }, { en: "explore", tr: "keşfetmek" }, { en: "generate", tr: "üretmek" }, { en: "implement", tr: "uygulamak" }
    ],
    C1: [
        { en: "ambiguous", tr: "belirsiz" }, { en: "coherent", tr: "tutarlı" }, { en: "substantial", tr: "önemli" }, { en: "sophisticated", tr: "sofistike" },
        { en: "contemporary", tr: "çağdaş" }, { en: "connotation", tr: "çağrışım" }, { en: "deduce", tr: "sonuç çıkarmak" }, { en: "elaborate", tr: "ayrıntılı" },
        { en: "facilitate", tr: "kolaylaştırmak" }, { en: "hypothesis", tr: "hipotez" }, { en: "implication", tr: "ima" }, { en: "inherent", tr: "doğasında olan" },
        { en: "integrate", tr: "bütünleştirmek" }, { en: "interpret", tr: "yorumlamak" }, { en: "justify", tr: "haklı çıkarmak" }, { en: "notion", tr: "kavram" },
        { en: "paradigm", tr: "paradigma" }, { en: "perceive", tr: "algılamak" }, { en: "preliminary", tr: "ön" }, { en: "presume", tr: "varsaymak" },
        { en: "profound", tr: "derin" }, { en: "rationale", tr: "gerekçe" }, { en: "reiterate", tr: "tekrarlamak" }, { en: "subsequent", tr: "sonraki" },
        { en: "suppress", tr: "bastırmak" }, { en: "sustain", tr: "sürdürmek" }, { en: "transient", tr: "geçici" }, { en: "validate", tr: "doğrulamak" },
        { en: "viable", tr: "uygulanabilir" }, { en: "volatile", tr: "uçucu" }, { en: "allocate", tr: "tahsis etmek" }, { en: "articulate", tr: "açıkça ifade etmek" },
        { en: "assert", tr: "iddia etmek" }, { en: "attain", tr: "ulaşmak" }, { en: "coincide", tr: "rastlamak" }, { en: "depict", tr: "tasvir etmek" }
    ],
    C2: [
        { en: "idiosyncratic", tr: "kendine özgü" }, { en: "juxtaposition", tr: "yan yana koyma" }, { en: "ubiquitous", tr: "her yerde bulunan" },
        { en: "paradigm", tr: "paradigma" }, { en: "ephemeral", tr: "kısa ömürlü" }, { en: "obfuscate", tr: "gizlemek" }, { en: "quintessential", tr: "tam anlamıyla" },
        { en: "serendipity", tr: "tesadüf" }, { en: "synergy", tr: "uyum" }, { en: "zenith", tr: "zirve" }, { en: "cognizant", tr: "farkında" },
        { en: "conflagration", tr: "büyük yangın" }, { en: "demagogue", tr: "demagog" }, { en: "enigma", tr: "gizem" }, { en: "epiphany", tr: "aydınlanma" },
        { en: "equanimity", tr: "soğukkanlılık" }, { en: "grandiloquent", tr: "abartılı konuşan" }, { en: "ineffable", tr: "tarifsiz" }, { en: "lachrymose", tr: "ağlamaklı" },
        { en: "mellifluous", tr: "tatlı sesli" }, { en: "nefarious", tr: "kötü" }, { en: "obsequious", tr: "yalakalık yapan" }, { en: "panacea", tr: "her derde deva" }
    ]
};

let currentMode = "en-tr";
let selectedLevel = null;
let selectedWords = [];
let currentIndex = 0;
let userAnswers = [];
let currentFeature = "quiz";
let flashcardFlipped = false;

// Dil ve seviye select eventleri
document.getElementById('mode-select').addEventListener('change', function() {
    currentMode = this.value;
    if (selectedLevel) {
        if (currentFeature === "quiz") {
            showCountOptions(selectedLevel);
        } else {
            showFlashcardCountOptions(selectedLevel);
        }
    }
});

document.getElementById('level-select').addEventListener('change', function() {
    selectedLevel = this.value;
    if (currentFeature === "quiz") {
        showCountOptions(selectedLevel);
    } else {
        showFlashcardCountOptions(selectedLevel);
    }
});

document.querySelectorAll('.feature-select button').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.feature-select button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFeature = btn.id === "quiz-btn" ? "quiz" : "flashcard";
        if (selectedLevel) {
            if (currentFeature === "quiz") {
                showCountOptions(selectedLevel);
            } else {
                showFlashcardCountOptions(selectedLevel);
            }
        }
    });
});

// Quiz için
function showCountOptions(level) {
    const maxCount = Math.min(words[level].length, 50);
    let html = `<h2 style="color:#fff;">${level} Seviye Quiz</h2>
        <p>Kaç kelime ezberlemek istiyorsunuz?</p>
        <div id="count-options">`;
    [10, 20, 30, 40, 50].forEach(count => {
        if (count <= maxCount) {
            html += `<button class="count-btn" data-count="${count}">${count}</button>`;
        }
    });
    html += `</div>`;
    document.getElementById('feature-content').innerHTML = html;

    document.querySelectorAll('.count-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            prepareWords(level, parseInt(btn.getAttribute('data-count')));
        });
    });
}

function prepareWords(level, count) {
    const list = [...words[level]];
    for (let i = list.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [list[i], list[j]] = [list[j], list[i]];
    }
    selectedWords = list.slice(0, count);
    currentIndex = 0;
    userAnswers = Array(count).fill("");
    showSingleWord();
}

function showSingleWord() {
    const word = selectedWords[currentIndex];
    let question = currentMode === "en-tr" ? word.en : word.tr;
    let html = `<h2>${selectedLevel} Seviye - ${currentIndex + 1}/${selectedWords.length}</h2>
        <div style="font-size:2rem; margin:1rem 0;">
            <strong>${question}</strong>
        </div>
        <input type="text" id="answer-input" placeholder="Cevabınızı yazınız" value="${userAnswers[currentIndex] || ""}" style="font-size:1.2rem; padding:0.5rem; width:60%; max-width:300px;">
        <div style="margin-top:2rem;">
            <button id="prev-btn" ${currentIndex === 0 ? "disabled" : ""}>Önceki</button>
            <button id="next-btn">${currentIndex === selectedWords.length - 1 ? "Bitir" : "Sonraki"}</button>
        </div>`;
    document.getElementById('content').innerHTML = html;

    document.getElementById('answer-input').addEventListener('input', function(e) {
        userAnswers[currentIndex] = e.target.value.trim();
    });

    document.getElementById('prev-btn').addEventListener('click', function() {
        saveAnswer();
        if (currentIndex > 0) {
            currentIndex--;
            showSingleWord();
        }
    });
    document.getElementById('next-btn').addEventListener('click', function() {
        saveAnswer();
        if (currentIndex < selectedWords.length - 1) {
            currentIndex++;
            showSingleWord();
        } else {
            showResults();
        }
    });
}

function saveAnswer() {
    const input = document.getElementById('answer-input');
    if (input) userAnswers[currentIndex] = input.value.trim();
}

function showResults() {
    let correct = 0;
    let wrongList = [];
    let html = `<h2>Sonuçlar</h2><p>Doğru sayısı: `;
    selectedWords.forEach((word, idx) => {
        let correctAnswer = currentMode === "en-tr" ? word.tr : word.en;
        if (userAnswers[idx].toLowerCase() === correctAnswer.toLowerCase()) {
            correct++;
        } else {
            wrongList.push({
                question: currentMode === "en-tr" ? word.en : word.tr,
                yourAnswer: userAnswers[idx],
                correctAnswer: correctAnswer
            });
        }
    });
    html += `${correct} / ${selectedWords.length}</p>`;
    if (wrongList.length > 0) {
        html += `<h3>Yanlışlarınız:</h3><ul>`;
        wrongList.forEach(item => {
            html += `<li><strong>${item.question}</strong> - Senin cevabın: <span style="color:red">${item.yourAnswer || "(boş)"}</span> &nbsp; Doğru cevap: <span style="color:green">${item.correctAnswer}</span></li>`;
        });
        html += `</ul>`;
    } else {
        html += `<p>Tebrikler, tüm cevaplar doğru!</p>`;
    }
    document.getElementById('content').innerHTML = html;
}

// Flashcard için
function showFlashcardCountOptions(level) {
    const maxCount = Math.min(words[level].length, 50);
    let html = `<h2 style="color:#fff;">${level} Seviye Ezber (Kart)</h2>
        <p>Kaç kelime çalışmak istiyorsunuz?</p>
        <div id="count-options">`;
    [10, 20, 30, 40, 50].forEach(count => {
        if (count <= maxCount) {
            html += `<button class="count-btn" data-count="${count}">${count}</button>`;
        }
    });
    html += `</div>`;
    document.getElementById('feature-content').innerHTML = html;

    document.querySelectorAll('.count-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            prepareFlashcards(level, parseInt(btn.getAttribute('data-count')));
        });
    });
}

function prepareFlashcards(level, count) {
    const list = [...words[level]];
    for (let i = list.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [list[i], list[j]] = [list[j], list[i]];
    }
    selectedWords = list.slice(0, count);
    currentIndex = 0;
    flashcardFlipped = false;
    showFlashcard();
}

function showFlashcard() {
    const word = selectedWords[currentIndex];
    let front = currentMode === "en-tr" ? word.en : word.tr;
    let back = currentMode === "en-tr" ? word.tr : word.en;
    let html = `<h2 style="color:#fff;">${selectedLevel} Seviye - Kart ${currentIndex + 1}/${selectedWords.length}</h2>
        <div class="flashcard" id="flashcard">
            <div class="flashcard-content">${flashcardFlipped ? back : front}</div>
        </div>
        <div class="flashcard-btns">
            <button id="prev-flash" ${currentIndex === 0 ? "disabled" : ""}>Önceki</button>
            <button id="flip-flash">${flashcardFlipped ? "Gizle" : "Anlamına Bak"}</button>
            <button id="next-flash" ${currentIndex === selectedWords.length - 1 ? "disabled" : ""}>Sonraki</button>
        </div>`;
    document.getElementById('content').innerHTML = html;

    document.getElementById('flip-flash').addEventListener('click', function() {
        flashcardFlipped = !flashcardFlipped;
        showFlashcard();
    });
    document.getElementById('prev-flash').addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            flashcardFlipped = false;
            showFlashcard();
        }
    });
    document.getElementById('next-flash').addEventListener('click', function() {
        if (currentIndex < selectedWords.length - 1) {
            currentIndex++;
            flashcardFlipped = false;
            showFlashcard();
        }
    });
}

// Sayfa yüklendiğinde, sadece adım adım soruları göster
window.addEventListener('DOMContentLoaded', () => {
    // Eski select ve butonları DOM'dan kaldır (gizle değil, tamamen kaldır)
    const oldModeSelect = document.getElementById('mode-select');
    if (oldModeSelect) oldModeSelect.remove();
    const oldLevelSelect = document.getElementById('level-select');
    if (oldLevelSelect) oldLevelSelect.remove();
    const oldFeatureSelect = document.querySelector('.feature-select');
    if (oldFeatureSelect) oldFeatureSelect.remove();

    // Eski başlıkları da kaldır
    const oldModeLabel = document.querySelector('label[for="mode-select"]');
    if (oldModeLabel) oldModeLabel.remove();
    const oldLevelLabel = document.querySelector('label[for="level-select"]');
    if (oldLevelLabel) oldLevelLabel.remove();

    askStepByStep();
});

function askStepByStep() {
    let step = 0;
    let mode = "en-tr";
    let level = "A1";
    let feature = "quiz";
    const steps = [
        {
            question: "Dil seçin",
            options: [
                { value: "en-tr", label: "İngilizce-Türkçe" },
                { value: "tr-en", label: "Türkçe-İngilizce" }
            ]
        },
        {
            question: "Dil Seviyesi Seçin",
            options: [
                { value: "A1", label: "A1" },
                { value: "A2", label: "A2" },
                { value: "B1", label: "B1" },
                { value: "B2", label: "B2" },
                { value: "C1", label: "C1" },
                { value: "C2", label: "C2" }
            ]
        },
        {
            question: "Nasıl çalışmak istersiniz?",
            options: [
                { value: "quiz", label: "Quiz" },
                { value: "flashcard", label: "Ezber (Kart)" }
            ]
        }
    ];

    function renderStep() {
        const s = steps[step];
        let html = `<div style="text-align:center; margin-top:48px;">
            <h2 style="color:#6c63ff; margin-bottom:2.5rem; margin-top:0;">${s.question}</h2>
            <div style="display:flex; justify-content:center; gap:1rem; flex-wrap:wrap; margin-top:1rem;">`;
        s.options.forEach(opt => {
            html += `<button class="first-step-btn" data-value="${opt.value}" style="margin:0.5rem 0; padding:0.7rem 1.5rem; font-size:1.1rem; border-radius:12px; background:#e0e7ff; color:#6c63ff; font-weight:600; border:none; cursor:pointer; min-width:160px;">${opt.label}</button>`;
        });
        html += `</div></div>`;
        document.getElementById('content').innerHTML = html;

        document.querySelectorAll('.first-step-btn').forEach(btn => {
            btn.onclick = () => {
                if (step === 0) mode = btn.getAttribute('data-value');
                if (step === 1) level = btn.getAttribute('data-value');
                if (step === 2) feature = btn.getAttribute('data-value');
                step++;
                if (step < steps.length) {
                    renderStep();
                } else {
                    currentMode = mode;
                    selectedLevel = level;
                    currentFeature = feature;
                    showMainFeature();
                }
            };
        });
    }
    renderStep();
}

function showMainFeature() {
    document.getElementById('content').innerHTML = `<div id="feature-content"></div>`;
    if (currentFeature === "quiz") {
        showCountOptions(selectedLevel);
    } else {
        showFlashcardCountOptions(selectedLevel);
    }
}

// showCountOptions ve showFlashcardCountOptions fonksiyonlarında
// document.getElementById('feature-content') kullanılmalı

function showCountOptions(level) {
    const maxCount = Math.min(words[level].length, 50);
    let html = `<h2 style="color:#fff;">${level} Seviye Quiz</h2>
        <p>Kaç kelime ezberlemek istiyorsunuz?</p>
        <div id="count-options">`;
    [10, 20, 30, 40, 50].forEach(count => {
        if (count <= maxCount) {
            html += `<button class="count-btn" data-count="${count}">${count}</button>`;
        }
    });
    html += `</div>`;
    document.getElementById('feature-content').innerHTML = html;

    document.querySelectorAll('.count-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            prepareWords(level, parseInt(btn.getAttribute('data-count')));
        });
    });
}

function showFlashcardCountOptions(level) {
    const maxCount = Math.min(words[level].length, 50);
    let html = `<h2 style="color:#fff;">${level} Seviye Ezber (Kart)</h2>
        <p>Kaç kelime çalışmak istiyorsunuz?</p>
        <div id="count-options">`;
    [10, 20, 30, 40, 50].forEach(count => {
        if (count <= maxCount) {
            html += `<button class="count-btn" data-count="${count}">${count}</button>`;
        }
    });
    html += `</div>`;
    document.getElementById('feature-content').innerHTML = html;

    document.querySelectorAll('.count-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            prepareFlashcards(level, parseInt(btn.getAttribute('data-count')));
        });
    });
}

// Diğer fonksiyonlar (prepareWords, showSingleWord, showResults, prepareFlashcards, showFlashcard) aynı şekilde çalışır,
// sadece document.getElementById('feature-content').innerHTML ile içerik güncellenir.
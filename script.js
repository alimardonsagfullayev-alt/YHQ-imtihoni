// ========================================
// DASTUR: YHQ AKADEMIYA
// YARATUVCHI: SAG'DULLAYEV ALIMARDON
// ========================================

"use strict";

const APP_INFO = {
    nomi: "YHQ Akademiya",
    yaratuvchi: "Sag'dullayev Alimardon",
    versiya: "1.0.0"
};

// Savollar va javob variantlari
// correct — to'g'ri javobning 0 dan boshlanuvchi tartib raqami.

const questions = [
    {
        question: "Svetoforning qizil chirog'i nimani bildiradi?",
        options: [
            "Harakatlanishga ruxsat beradi",
            "Harakatlanishni taqiqlaydi",
            "Faqat piyodalarga ruxsat beradi",
            "Tezlikni oshirish kerak"
        ],
        correct: 1,
        explanation: "Svetoforning qizil chirog'i harakatlanishni taqiqlaydi."
    },
    {
        question: "Yo'lni kesib o'tayotgan piyodaga haydovchi qanday munosabatda bo'lishi kerak?",
        options: [
            "Signal berib o'tib ketishi kerak",
            "Tezligini oshirishi kerak",
            "Piyodaga yo'l berishi kerak",
            "Faqat chapga burilishi kerak"
        ],
        correct: 2,
        explanation: "Haydovchi piyodalar o'tish joyida qoidalarga muvofiq piyodaga yo'l berishi kerak."
    },
    {
        question: "Xavfsizlik kamaridan foydalanishning asosiy maqsadi nima?",
        options: [
            "Yoqilg'ini tejash",
            "Jarohatlanish xavfini kamaytirish",
            "Avtomobilni tezlashtirish",
            "Dvigatelni himoya qilish"
        ],
        correct: 1,
        explanation: "Xavfsizlik kamari to'qnashuv yoki keskin tormozlanishda jarohatlanish xavfini kamaytiradi."
    },
    {
        question: "Yo'l belgilarining asosiy vazifasi nima?",
        options: [
            "Yo'l harakatini tartibga solish va axborot berish",
            "Avtomobilni bezash",
            "Yoqilg'i sarfini ko'rsatish",
            "Faqat piyodalarni ogohlantirish"
        ],
        correct: 0,
        explanation: "Yo'l belgilari haydovchi va piyodalarga taqiq, buyruq, ogohlantirish yoki kerakli ma'lumotni beradi."
    },
    {
        question: "Haydovchi harakatni boshlashdan oldin nima qilishi kerak?",
        options: [
            "Darhol tezlikni oshirishi kerak",
            "Faqat signal berishi kerak",
            "Harakat xavfsiz ekaniga ishonch hosil qilishi kerak",
            "Faqat faralarni o'chirishi kerak"
        ],
        correct: 2,
        explanation: "Harakatni boshlashdan oldin haydovchi vaziyatni tekshirishi va harakat xavfsizligini ta'minlashi kerak."
    },
    {
        question: "Tartibga solinmagan piyodalar o'tish joyiga yaqinlashganda nima qilish kerak?",
        options: [
            "Tezlikni oshirish",
            "Vaziyatni kuzatib, zarur bo'lsa to'xtash",
            "Qarama-qarshi yo'nalishga chiqish",
            "Doim signal berish"
        ],
        correct: 1,
        explanation: "Haydovchi piyodalar o'tish joyiga yaqinlashganda tezlikni kamaytirib, piyodalarga yo'l berishga tayyor bo'lishi kerak."
    },
    {
        question: "Xavfsiz masofani saqlash nima uchun kerak?",
        options: [
            "Boshqa avtomobilni quvib o'tish uchun",
            "Yo'lni toraytirish uchun",
            "Favqulodda vaziyatda to'qnashuvning oldini olish uchun",
            "Tezlikni cheklovsiz oshirish uchun"
        ],
        correct: 2,
        explanation: "Oldindagi transport vositasi keskin tormoz berganda xavfsiz masofa to'qnashuv xavfini kamaytiradi."
    },
    {
        question: "Haydovchi rul boshqaruvida telefondan foydalanishda nimani hisobga olishi kerak?",
        options: [
            "Bu doim xavfsiz",
            "Diqqat chalg'ishi xavf tug'diradi va qoidalarga rioya qilish kerak",
            "Faqat tunda foydalanish mumkin",
            "Faqat katta yo'lda foydalanish mumkin"
        ],
        correct: 1,
        explanation: "Telefon haydovchining diqqatini chalg'itadi. Harakat vaqtida amaldagi cheklovlarga rioya qilish va xavfsizlikni ta'minlash kerak."
    },
    {
        question: "Tez yordam avtomobili maxsus chiroq va tovushli signal bilan yaqinlashsa, nima qilish kerak?",
        options: [
            "Uning harakatiga xalaqit bermaslik va qoidalarga muvofiq yo'l berish",
            "Uning ortidan tezlikni oshirib yurish",
            "Yo'lning o'rtasida to'xtash",
            "Signalni e'tiborsiz qoldirish"
        ],
        correct: 0,
        explanation: "Maxsus signal bilan kelayotgan tezkor transport vositasiga qoidalarga muvofiq yo'l berish kerak."
    },
    {
        question: "Tumanli havoda haydovchi qanday harakat qilishi kerak?",
        options: [
            "Tezlikni oshirishi kerak",
            "Oldindagi avtomobilga juda yaqin yurishi kerak",
            "Tezlikni sharoitga moslashtirib, ko'rinishni hisobga olishi kerak",
            "Faralarni har doim o'chirishi kerak"
        ],
        correct: 2,
        explanation: "Tuman ko'rinishni yomonlashtiradi. Tezlik va masofa yo'l sharoitiga mos bo'lishi kerak."
    },
    {
        question: "Qaysi holatda quvib o'tishni boshlash xavfli?",
        options: [
            "Yo'l yaxshi ko'rinib, quvib o'tish ruxsat etilganida",
            "Qarama-qarshi yo'nalishdagi yo'l yetarlicha ko'rinmaganda",
            "Quvib o'tish uchun yetarli masofa bo'lganda",
            "Yo'l belgilari quvib o'tishga ruxsat berganda"
        ],
        correct: 1,
        explanation: "Qarama-qarshi yo'nalishdagi vaziyat ko'rinmasa yoki masofa yetarli bo'lmasa, quvib o'tishni boshlash mumkin emas."
    },
    {
        question: "Avtomobilni boshqarishdan oldin haydovchi nimani tekshirishi kerak?",
        options: [
            "Faqat avtomobil rangini",
            "Faqat salon tozaligini",
            "Faqat musiqa ovozini",
            "Transport vositasining texnik holati va xavfsizligini"
        ],
        correct: 3,
        explanation: "Safar oldidan transport vositasining xavfsizligiga ta'sir qiluvchi texnik holatini tekshirish muhim."
    },
    {
        question: "Yo'l-transport hodisasi sodir bo'lganda birinchi navbatda nima muhim?",
        options: [
            "Hodisani videoga olish",
            "Xavfsizlikni ta'minlash va zarur bo'lsa tezkor xizmatlarga xabar berish",
            "Avtomobilni darhol ta'mirlash",
            "Voqea joyidan ketish"
        ],
        correct: 1,
        explanation: "Avvalo odamlar xavfsizligini ta'minlash, vaziyatga muvofiq tegishli xizmatlarga xabar berish va belgilangan tartibga rioya qilish zarur."
    },
    {
        question: "Mast holatda avtomobil boshqarish mumkinmi?",
        options: [
            "Yo'q, mumkin emas",
            "Faqat qisqa masofaga mumkin",
            "Faqat kunduzi mumkin",
            "Yo'l bo'sh bo'lsa mumkin"
        ],
        correct: 0,
        explanation: "Mast holatda transport vositasini boshqarish taqiqlanadi va juda xavflidir."
    },
    {
        question: "Burilishdan oldin haydovchi nima qilishi kerak?",
        options: [
            "Hech kimga qaramasdan burilishi kerak",
            "Faqat signal chalishi kerak",
            "Tegishli burilish ko'rsatkichini yoqib, xavfsizlikni tekshirishi kerak",
            "Doim to'xtab, dvigatelni o'chirishi kerak"
        ],
        correct: 2,
        explanation: "Burilishdan oldin tegishli ko'rsatkichni berish, atrofdagi transport vositalarini tekshirish va manevr xavfsizligini ta'minlash kerak."
    },
    {
        question: "Temir yo'l kesishmasiga yaqinlashganda nima qilish kerak?",
        options: [
            "Shlagbaum yopilayotgan bo'lsa ham o'tish",
            "Qoidalarga rioya qilish, signal va shlagbaumni kuzatish",
            "Har doim boshqa avtomobilni quvib o'tish",
            "Tezlikni oshirish"
        ],
        correct: 1,
        explanation: "Temir yo'l kesishmasida signal, svetofor va shlagbaum talablariga qat'iy rioya qilish kerak."
    },
    {
        question: "Yomg'irli havoda yo'l qanday o'zgarishi mumkin?",
        options: [
            "Har doim quruqroq bo'ladi",
            "Tormoz masofasi qisqaradi",
            "Yo'l sirpanchiq bo'lib, tormoz masofasi uzayishi mumkin",
            "Shinalar ahamiyatsiz bo'lib qoladi"
        ],
        correct: 2,
        explanation: "Ho'l yo'lda shinalarning yo'l bilan tishlashishi kamayishi mumkin. Tezlikni pasaytirib, masofani oshirish kerak."
    },
    {
        question: "Yo'lni kesib o'tayotgan bolalarni ko'rganda nima qilish kerak?",
        options: [
            "Tezlikni oshirish",
            "Signal berib, to'xtamasdan o'tish",
            "Bolalar o'zlari to'xtaydi deb hisoblash",
            "Tezlikni kamaytirib, zarur bo'lsa to'xtashga tayyor turish"
        ],
        correct: 3,
        explanation: "Bolalar yo'l vaziyatini noto'g'ri baholashi mumkin. Haydovchi ehtiyotkorlikni oshirishi kerak."
    },
    {
        question: "Yo'l harakati tartibga soluvchisi ishoralari nimani anglatadi?",
        options: [
            "Uning ishoralari yo'l harakatini tartibga soladi",
            "Ularni e'tiborsiz qoldirish mumkin",
            "Ular faqat piyodalarga tegishli",
            "Ular faqat tunda amal qiladi"
        ],
        correct: 0,
        explanation: "Tartibga soluvchining ishoralariga yo'l harakati qoidalariga muvofiq amal qilish kerak."
    },
    {
        question: "Haydovchi charchoq sezsa nima qilishi kerak?",
        options: [
            "Musiqani balandlatib davom etishi kerak",
            "Xavfsiz joyda to'xtab, dam olishi kerak",
            "Tezroq yetib olishga harakat qilishi kerak",
            "Ko'zini yumib bir necha soniya dam olishi kerak"
        ],
        correct: 1,
        explanation: "Charchoq reaksiya tezligini pasaytiradi. Xavfsiz joyda to'xtab, yetarli dam olish lozim."
    }
];

// Sahifa elementlari
const homePage = document.getElementById("homePage");
const quizPage = document.getElementById("quizPage");
const resultPage = document.getElementById("resultPage");

const practiceButton = document.getElementById("practiceButton");
const examButton = document.getElementById("examButton");
const homeButton = document.getElementById("homeButton");
const resultHomeButton = document.getElementById("resultHomeButton");
const retryButton = document.getElementById("retryButton");
const themeButton = document.getElementById("themeButton");

const modeLabel = document.getElementById("modeLabel");
const timerElement = document.getElementById("timer");
const questionCounter = document.getElementById("questionCounter");
const scoreCounter = document.getElementById("scoreCounter");
const progressBar = document.getElementById("progressBar");
const questionText = document.getElementById("questionText");
const answerOptions = document.getElementById("answerOptions");
const explanation = document.getElementById("explanation");
const explanationTitle = document.getElementById("explanationTitle");
const explanationText = document.getElementById("explanationText");
const answerStatus = document.getElementById("answerStatus");
const nextButton = document.getElementById("nextButton");

const resultIcon = document.getElementById("resultIcon");
const resultTitle = document.getElementById("resultTitle");
const resultMessage = document.getElementById("resultMessage");
const resultCorrect = document.getElementById("resultCorrect");
const resultWrong = document.getElementById("resultWrong");
const resultPercent = document.getElementById("resultPercent");
const resultStatus = document.getElementById("resultStatus");

// Dastur holati
let currentQuestions = [];
let currentIndex = 0;
let correctCount = 0;
let currentMode = "practice";
let selectedAnswer = null;
let answered = [];
let quizActive = false;
let timeLeft = 20 * 60;
let timerInterval = null;

// Savollar tartibini aralashtirish
function shuffleArray(array) {
    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
}

// Sahifalarni almashtirish
function showPage(page) {
    homePage.classList.add("hidden");
    quizPage.classList.add("hidden");
    resultPage.classList.add("hidden");

    if (page === "home") {
        homePage.classList.remove("hidden");
    } else if (page === "quiz") {
        quizPage.classList.remove("hidden");
    } else if (page === "result") {
        resultPage.classList.remove("hidden");
    }
}

// Taymerni to'xtatish
function stopTimer() {
    if (timerInterval !== null) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

// Taymerni boshlash
function startTimer() {
    stopTimer();

    timerInterval = setInterval(() => {
        if (!quizActive) {
            stopTimer();
            return;
        }

        timeLeft--;
        updateTimerDisplay();

        if (timeLeft <= 0) {
            timeLeft = 0;
            updateTimerDisplay();
            finishQuiz();
        }
    }, 1000);
}

// Taymerni ko'rsatish
function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timerElement.textContent =
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");
}

// Test yoki imtihonni boshlash
function initializeQuiz(mode) {
    stopTimer();

    currentMode = mode;
    currentQuestions = shuffleArray(questions).slice(0, 20);
    currentIndex = 0;
    correctCount = 0;
    selectedAnswer = null;
    answered = new Array(currentQuestions.length).fill(false);
    timeLeft = 20 * 60;
    quizActive = false;

    modeLabel.textContent =
        mode === "exam" ? "Imtihon rejimi" : "Test rejimi";

    timerElement.classList.toggle("hidden", mode !== "exam");

    showPage("quiz");

    // Sahifa ko'rsatilgandan keyin testni faollashtiramiz.
    // Aks holda sahifa almashtirish paytida holat qayta o'zgarishi mumkin.
    quizActive = true;

    renderQuestion();

    if (mode === "exam") {
        updateTimerDisplay();
        startTimer();
    }
}

// Savolni ekranga chiqarish
function renderQuestion() {
    if (!quizActive) return;

    const question = currentQuestions[currentIndex];

    if (!question) {
        finishQuiz();
        return;
    }

    selectedAnswer = null;

    questionCounter.textContent =
        `Savol ${currentIndex + 1} / ${currentQuestions.length}`;

    scoreCounter.textContent =
        `To'g'ri javoblar: ${correctCount}`;

    progressBar.style.width =
        `${(currentIndex / currentQuestions.length) * 100}%`;

    questionText.textContent = question.question;

    answerOptions.replaceChildren();

    explanation.classList.add("hidden");
    explanationTitle.textContent = "Izoh";
    explanationText.textContent = "";

    answerStatus.textContent =
        currentMode === "exam"
            ? "Javobni tanlang yoki savolni o'tkazing"
            : "Javobni tanlang";

    // Test rejimida javob tanlanmaguncha keyingi tugma o'chiq.
    // Imtihonda savolni javobsiz o'tkazish mumkin.
    nextButton.disabled = currentMode !== "exam";

    if (currentIndex === currentQuestions.length - 1) {
        nextButton.textContent =
            currentMode === "exam"
                ? "Natijani ko'rish"
                : "Natijani ko'rish";
    } else {
        nextButton.textContent = "Keyingi →";
    }

    const letters = ["A", "B", "C", "D"];

    question.options.forEach((optionText, optionIndex) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "answer-option";

        const letter = document.createElement("span");
        letter.className = "option-letter";
        letter.textContent = letters[optionIndex];

        const text = document.createElement("span");
        text.textContent = optionText;

        button.append(letter, text);

        // Har bir variant uchun bosish hodisasi.
        button.addEventListener("click", () => {
            handleAnswer(optionIndex);
        });

        answerOptions.appendChild(button);
    });
}

// Javobni tekshirish
function handleAnswer(optionIndex) {
    // Javob qayta tanlanishining oldini olamiz.
    if (!quizActive || selectedAnswer !== null) return;

    const question = currentQuestions[currentIndex];

    if (!question) return;

    selectedAnswer = optionIndex;
    answered[currentIndex] = true;

    const optionButtons =
        answerOptions.querySelectorAll(".answer-option");

    const isCorrect = optionIndex === question.correct;

    if (isCorrect) {
        correctCount++;
        answerStatus.textContent = "To'g'ri javob!";
    } else {
        answerStatus.textContent = "Noto'g'ri javob!";
    }

    // Barcha variantlarni tekshirib, ranglarini o'zgartiramiz.
    optionButtons.forEach((button, index) => {
        button.disabled = true;

        if (index === question.correct) {
            button.classList.add("correct");
        }

        if (index === optionIndex && !isCorrect) {
            button.classList.add("incorrect");
        }
    });

    // Javob izohini chiqarish.
    explanationTitle.textContent =
        isCorrect ? "✓ To'g'ri javob" : "✗ Noto'g'ri javob";

    explanationText.textContent = question.explanation;
    explanation.classList.remove("hidden");

    scoreCounter.textContent =
        `To'g'ri javoblar: ${correctCount}`;

    // Eng muhim tuzatish:
    // Javob tanlangandan keyin Keyingi tugmasi faollashadi.
    nextButton.disabled = false;
}

// Keyingi savolga o'tish
function goToNextQuestion() {
    if (!quizActive) return;

    // Test rejimida javob tanlanmagan bo'lsa, o'tishga ruxsat bermaymiz.
    if (currentMode === "practice" && selectedAnswer === null) {
        return;
    }

    // Imtihon rejimida javobsiz savol o'tkazilsa,
    // answered[currentIndex] false bo'lib qoladi va u noto'g'ri hisoblanadi.
    if (currentIndex < currentQuestions.length - 1) {
        currentIndex++;
        renderQuestion();
    } else {
        finishQuiz();
    }
}

// Natijani chiqarish
function finishQuiz() {
    if (!quizActive) return;

    quizActive = false;
    stopTimer();

    const total = currentQuestions.length;

    // Javobsiz savollar ham noto'g'ri javoblar tarkibiga kiradi.
    const wrongCount = total - correctCount;
    const percent = Math.round((correctCount / total) * 100);
    const passed = correctCount >= 18;

    progressBar.style.width = "100%";

    resultCorrect.textContent = `${correctCount} / ${total}`;
    resultWrong.textContent = String(wrongCount);
    resultPercent.textContent = `${percent}%`;

    if (passed) {
        resultIcon.textContent = "🎉";
        resultTitle.textContent = "Tabriklaymiz!";
        resultMessage.textContent =
            "Siz belgilangan o'tish mezoniga erishdingiz.";
        resultStatus.textContent = "✓ O'TDI";
        resultStatus.className = "result-status pass";
    } else {
        resultIcon.textContent = "📘";
        resultTitle.textContent = "Yana mashq qiling";
        resultMessage.textContent =
            "Imtihondan o'tish uchun kamida 18 ta to'g'ri javob kerak.";
        resultStatus.textContent = "✗ O'TMADI";
        resultStatus.className = "result-status fail";
    }

    showPage("result");
}

// Bosh sahifaga qaytish
function goHome() {
    quizActive = false;
    stopTimer();
    showPage("home");
}

// Tugmalar hodisalari
practiceButton.addEventListener("click", () => {
    initializeQuiz("practice");
});

examButton.addEventListener("click", () => {
    initializeQuiz("exam");
});

nextButton.addEventListener("click", goToNextQuestion);

homeButton.addEventListener("click", goHome);
resultHomeButton.addEventListener("click", goHome);

retryButton.addEventListener("click", () => {
    initializeQuiz(currentMode);
});

// Tungi rejim
themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const darkMode = document.body.classList.contains("dark");

    themeButton.textContent = darkMode ? "☀️" : "🌙";

    try {
        localStorage.setItem("yhq-dark-mode", darkMode ? "on" : "off");
    } catch (error) {
        // Brauzer xotirasi mavjud bo'lmasa ham dastur ishlashda davom etadi.
    }
});

// Saqlangan dizayn rejimini tiklash
try {
    const savedTheme = localStorage.getItem("yhq-dark-mode");

    if (savedTheme === "on") {
        document.body.classList.add("dark");
        themeButton.textContent = "☀️";
    }
} catch (error) {
    // Xotiradan foydalanish mumkin bo'lmasa, standart dizayn qoladi.
}

// Dastur ishga tushganda bosh sahifani ko'rsatish.
showPage("home");
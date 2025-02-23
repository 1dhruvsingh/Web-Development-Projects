const questions = {
    'General Knowledge': [
        { question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"], answer: 0 },
        { question: "Who wrote 'Hamlet'?", options: ["Shakespeare", "Hemingway", "Fitzgerald", "Austen"], answer: 0 },
        { question: "Which country is known as the Land of the Rising Sun?", options: ["China", "Japan", "Korea", "Thailand"], answer: 1 },
        { question: "What is the tallest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Makalu"], answer: 2 },
        { question: "Which planet is closest to the sun?", options: ["Mercury", "Venus", "Earth", "Mars"], answer: 0 }
    ],
    'Science': [
        { question: "What planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: 1 },
        { question: "What is the chemical symbol for water?", options: ["HO", "H2", "H2O", "O2"], answer: 2 },
        { question: "What is the speed of light?", options: ["300,000 km/s", "150,000 km/s", "400,000 km/s", "100,000 km/s"], answer: 0 },
        { question: "Who developed the theory of relativity?", options: ["Newton", "Einstein", "Tesla", "Bohr"], answer: 1 },
        { question: "What gas do plants absorb from the atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: 2 }
    ],
    'Math': [
        { question: "What is 5 + 3?", options: ["5", "6", "7", "8"], answer: 3 },
        { question: "What is the square root of 16?", options: ["2", "4", "6", "8"], answer: 1 },
        { question: "Solve: 12 * 12", options: ["120", "130", "144", "156"], answer: 2 },
        { question: "What is the value of π (pi)?", options: ["3.14", "2.71", "1.61", "4.15"], answer: 0 },
        { question: "What is 15% of 200?", options: ["20", "25", "30", "35"], answer: 2 }
    ]
};

let currentCategory = '';
let currentQuestionIndex = 0;
let score = 0;
let correctAnswers = 0;
let timerInterval;

function selectCategory(category) {
    currentCategory = category;
    score = 0;
    correctAnswers = 0;
    currentQuestionIndex = 0;
    document.getElementById('home').classList.add('hidden');
    document.getElementById('quiz').classList.remove('hidden');
    loadQuestion();
}

function loadQuestion() {
    const questionData = questions[currentCategory][currentQuestionIndex];
    document.getElementById('question').innerText = questionData.question;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    questionData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('btn');
        button.innerText = option;
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });

    startTimer();
}

function startTimer() {
    let timeLeft = 10;
    document.getElementById('timer').innerText = `Time Remaining: ${timeLeft}s`;

    clearInterval(timerInterval);
    timerInterval
}

// Navigation function to scroll to the appropriate section
function navigateTo(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Existing quiz logic remains unchanged

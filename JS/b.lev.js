 // Define intervals
 const intervals = {
    "סיקונדה קטנה": ["מי-פה", "סי-דו"],
    "טרצה קטנה": ["רה-פה", "מי-סול", "לה-דו", "סי-רה"],
    "קוורטה זכה": ["דו-פה", "רה-סול", "מי-לה", "סול-דו", "לה-רה", "סי-מי"],
    "קוינטה זכה": ["דו-סול", "רה-לה", "מי-סי", "פה-דו", "סול-רה", "לה-מי"],
    "סקסטה קטנה": ["מי-דו", "לה-פה", "סי-סול"],
    "ספטימה קטנה": ["רה-דו", "מי-רה", "סול-פה", "לה-סול", "סי-לה"],
    "סיקונדה גדולה": ["דו-רה", "רה-מי", "פה-סול", "סול-לה", "לה-סי"],
    "טרצה גדולה": ["דו-מי", "פה-לה", "סול-סי"],
    "קוורטה מוגדלת": ["פה-סי"],
    "קוינטה מוקטנת": ["סי-פה"],
    "סקסטה גדולה": ["דו-לה", "רה-סי", "פה-רה", "סול-מי"],
    "ספטימה גדולה": ["דו-סי", "פה-מי"],
};

// Get DOM elements
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const feedbackElement = document.getElementById("feedback");
const nextButton = document.getElementById("nextBtn");

// Statistics
let totalQuestions = 0;
let correctAnswers = 0;

// Function to pick a random interval (called once initially)
let currentInterval; // Store the current interval object
function getRandomInterval() {
    const intervalTypes = Object.keys(intervals);
    const randomType = intervalTypes[Math.floor(Math.random() * intervalTypes.length)];
    const intervalList = intervals[randomType];
    const randomInterval = intervalList[Math.floor(Math.random() * intervalList.length)];
    currentInterval = {
        type: randomType,
        name: randomInterval
    };
    return currentInterval;
}

// Function to display question (uses the pre-selected interval)
function displayQuestion() {
    questionElement.textContent = `מהו המרווח בין "${currentInterval.name}"?`;
    optionsElement.innerHTML = "";

    Object.keys(intervals).forEach(key => {
        optionsElement.innerHTML += `<button class="btn btn-secondary interval-button">${key}</button>`;
    });
}

// Function to check answer (uses the stored currentInterval)
function checkAnswer(selectedName) {
    totalQuestions++; // Increment total questions count
    const buttons = document.querySelectorAll("#options button");
    buttons.forEach(button => {
        button.disabled = true;
        if (button.textContent === selectedName) {
            button.classList.add("wrong-answer");
        }
        if (button.textContent === currentInterval.type) {
            button.classList.add("correct-answer");
        }
    });

    if (selectedName === currentInterval.type) {
        correctAnswers++; // Increment correct answers count
        feedbackElement.textContent = "יפה מאוד! תשובה נכונה!";
    } else {
        feedbackElement.textContent = "תשובתך שגויה. אל תתייאש, המשך לנסות!";
    }

    updateStats(); // Update statistics after each answer
}

function updateStats() {
    document.getElementById("totalQuestions").textContent = totalQuestions;
    document.getElementById("correctAnswers").textContent = correctAnswers;
    const successPercentage = totalQuestions === 0 ? 0 : Math.round((correctAnswers / totalQuestions) * 100);
    document.getElementById("successPercentage").textContent = successPercentage + "%";
}

function resetStats() {
    totalQuestions = 0;
    correctAnswers = 0;
    updateStats();
}

document.getElementById("resetBtn").addEventListener("click", resetStats);

// Event listener for options
optionsElement.addEventListener("click", function (event) {
    if (event.target.matches("button")) {
        const selectedName = event.target.textContent;
        checkAnswer(selectedName);
        const buttons = document.querySelectorAll("#options button");
        buttons.forEach(button => button.disabled = true);
    }
});

// Event listener for next button
nextButton.addEventListener("click", function () {
    currentInterval = getRandomInterval(); // Get a new random interval for the next question
    displayQuestion();
    feedbackElement.textContent = "";
    const buttons = document.querySelectorAll("#options button");
    buttons.forEach(button => button.disabled = false);
});

// Initial question display
currentInterval = getRandomInterval();
displayQuestion();
 // Define intervals
 const intervals = {
    "סיקונדה מוקטנת": ["מי-פהb", "מי#-פה", "סי-דוb", "סי#-דו"],
    "סיקונדה קטנה": ["מי-פה", "סי-דו", "דו-רהb", "דו#-רה", "רה-מיb", "רה#-מי", "מיb-פהb", "מי#-פה#", "פה-סולb", "פה#-סול", "סול-להb", "סול#-לה", "לה-סיb", "לה#-סי", "סיb-דוb", "סי#-דו#"],
    "סיקונדה גדולה": ["דו-רה", "רה-מי", "פה-סול", "סול-לה", "לה-סי", "דוb-רהb", "דו#-רה#", "רהb-מיb", "מיb-פה", "מי-פה#", "פהb-סולb", "פה#-סול#", "סולb-להb", "סול#-לה#", "להb-סיb", "לה#-סי#", "סיb-דו", "סי-דו#"],
    "סיקונדה מוגדלת": ["#דו-רה", "דוb-רה", "רהb-מי", "רה-מי#", "מיb-פה#", "פהb-סול", "פה-סול#", "סולb-לה", "סול-לה#", "להb-סי", "לה-סי#", "סיb-דו#"],
    "טרצה מוקטנת": ["דו#-מיb", "רה-פהb", "רה#-פה", "מי-סולb", "מי#-סול", "פה#-להb", "סול#-סיb", "לה-דוb", "לה#-דו", "סי-רהb", "סי#-רה"],
    "טרצה קטנה": ["רה-פה", "מי-סול", "לה-דו", "סי-רה", "דו-מיb", "דו#-מי", "רהb-פהb", "רה#-פה#", "מיb-סולb", "מי#-סול#", "פה-להb", "פה#-לה", "סול-סיb", "סול#-סי", "להb-דוb", "לה#-דו#", "סיb-רהb", "סי#-רה#"],
    "טרצה גדולה": ["דו-מי", "פה-לה", "סול-סי", "דוb-מיb", "דו#-מי#", "רהb-פה", "רה-פה#", "מיb-סול", "מי-סול#", "פהb-להb", "פה#-לה#", "סולb-סיb", "סול#-סי#", "להb-דו", "לה-דו#", "סיb-רה", "סי-רה#"],
    "טרצה מוגדלת": ["דו-מי#", "דוb-מי", "רהb-פה#", "מיb-סול#", "פהb-לה", "פה-לה#", "סולb-סי", "סול-סי#", "להb-דו#", "סיb-רה#"],
    "קוורטה מוקטנת": ["bדו-פה", "דו#-פה", "רה-סולb", "רה#-סול", "מי-להb", "מי#-לה", "פה#-סיb", "סול-דוb", "סול#-דו", "לה-רהb", "לה#-רה", "סי-מיb", "סי#-מי"],
    "קוורטה זכה": ["דו-פה", "רה-סול", "מי-לה", "סול-דו", "לה-רה", "סי-מי", "דוb-פהb", "דו#-פה#", "רהb-סולb", "רה#-סול#", "מיb-להb", "מי#-לה#", "פה-סיb", "פה#-סי", "סולb-דוb", "סול#-דו#", "להb-רהb", "לה#-רה#", "סיb-מיb", "סי#-מי#"],
    "קוורטה מוגדלת": ["פה-סי", "דוb-פה", "דו-פה#", "רהb-סול", "רה-סול#", "מיb-לה", "מי-לה#", "פהb-סיb", "פה#-סי#", "סולb-דו", "סול-דו#", "להb-רה", "לה-רה#", "סיb-מי", "סי-מי#"],
    "קוינטה מוקטנת": ["דו-סולb", "דו#-סול", "רה-להb", "רה#-לה", "מי-סיb", "מי#-סי", "פה-דוb", "פה#-דו", "סול-רהb", "סול#-רה", "לה-מיb", "לה#-מי", "סיb-פהb", "סי#-פה#", "סי-פה"],
    "קוינטה זכה": ["דו-סול", "דוb-סולb", "דו#-סול#", "רה-לה", "רהb-להb", "רה#-לה#", "מי-סי", "מיb-סיb", "מי#-סי#", "פה-דו", "פהb-דוb", "פה#-דו#", "סול-רה", "סולb-רהb", "סול#-רה#", "לה-מי", "להb-מיb", "לה#-מי#", "סיb-פה", "סי-פה#"],
    "קוינטה מוגדלת": ["דוb-סול", "דו-סול#", "רהb-לה", "רה-לה#", "מיb-סי", "מי-סי#", "פהb-דו", "פה-דו#", "סולb-רה", "סול-רה#", "להb-מי", "לה-מי#", "סיb-פה#"],
    "סקסטה מוקטנת": ["דו#-להb", "רה#-סיb", "מי-דוb", "מי#-דו", "פה#-רהb", "סול#-מיb", "לה-פהb", "לה#-פה", "סי-סולb", "סי#-סול"],
    "סקסטה קטנה": ["דו-להb", "דו#-לה", "רה-סיb", "רה#-סי", "מי-דו", "מיb-דוb", "מי#-דו#", "פה-רהb", "פה#-רה", "סול-מיb", "סול#-מי", "לה-פה", "להb-פהb", "לה#-פה#", "סי-סול", "סיb-סולb", "סי#-סול#"],
    "סקסטה גדולה": ["דו-לה", "דוb-להb", "דו#-לה#", "רה-סי", "רהb-סיb", "רה#-סי#", "מיb-דו", "מי-דו#", "פה-רה", "פהb-רהb", "פה#-רה#", "סול-מי", "סולb-מיb", "סול#-מי#", "להb-פה", "לה-פה#", "סיb-סול", "סי-סול#"],
    "סקסטה מוגדלת": ["דוb-לה", "דו-לה#", "רהb-סי", "רה-סי#", "מיb-דו#", "פהb-רה", "פה-רה#", "סולb-מי", "סול-מי#", "להb-פה#", "סיb-סול#"],
    "ספטימה מוקטנת": ["דו#-סיb", "רה-דוb", "רה#-דו", "מי-רהb", "מי#-רה", "פה#-מיb", "סול-פהb", "סול#-פה", "לה-סולb", "לה#-סול", "סי-להb", "סי#-לה"],
    "ספטימה קטנה": ["דו-סיb", "דו#-סי", "רה-דו", "רהb-דוb", "רה#-דו#", "מי-רה", "מיb-רהb", "מי#-רה#", "פה-מיb", "פה#-מי", "סול-פה", "סולb-פהb", "סול#-פה#", "לה-סול", "להb-סולb", "לה#-סול#", "סי-לה", "סיb-להb", "סי#-לה#"],
    "ספטימה גדולה": ["דו-סי", "דוb-סיb", "דו#-סי#", "רהb-דו", "רה-דו#", "מיb-רה", "מי-רה#", "פה-מי", "פהb-מיb", "פה#-מי#", "סולb-פה", "סול-פה#", "להb-סול", "לה-סול#", "סיb-לה", "סי-לה#"],
    "ספטימה מוגדלת": ["דוb-סי", "דו-סי#", "רהb-דו#", "מיb-רה#", "פהb-מי", "פה-מי#", "סולb-פה#", "להb-סול#", "סיb-לה#"],
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

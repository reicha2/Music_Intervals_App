window.addEventListener("DOMContentLoaded", () => {
    // Define intervals
    const intervals = {
        "סקונדה": ["דו-רה", "רה-מי", "מי-פה", "פה-סול", "סול-לה", "לה-סי", "סי-דו"],
        "טרצה": ["דו-מי", "רה-פה", "מי-סול", "פה-לה", "סול-סי", "לה-דו", "סי-רה"],
        "קוורטה": ["דו-פה", "רה-סול", "מי-לה", "פה-סי", "סול-דו", "לה-רה", "סי-מי"],
        "קוינטה": ["דו-סול", "רה-לה", "מי-סי", "פה-דו", "סול-רה", "לה-מי", "סי-פה"],
        "סקסטה": ["דו-לה", "רה-סי", "מי-דו", "פה-רה", "סול-מי", "לה-פה", "סי-סול"],
        "ספטימה": ["דו-סי", "רה-דו", "מי-רה", "פה-מי", "סול-פה", "לה-סול", "סי-לה"]
    };

    // Get DOM elements
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const feedbackElement = document.getElementById("feedback");
    const nextButton = document.getElementById("nextBtn");
    const resetButton = document.getElementById("resetBtn");

    // Initialize total questions and correct answers for the current page
    let totalQuestions = parseInt(localStorage.getItem(`${window.location.pathname}_totalQuestions`)) || 0;
    let correctAnswers = parseInt(localStorage.getItem(`${window.location.pathname}_correctAnswers`)) || 0;
    let currentInterval;

    // Function to get a random interval
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

    // Function to display a question
    function displayQuestion() {
        questionElement.textContent = `מהו המרווח בין "${currentInterval.name}"?`;
        optionsElement.innerHTML = "";

        Object.keys(intervals).forEach(key => {
            optionsElement.innerHTML += `<button class="btn btn-secondary interval-button">${key}</button>`;
        });
    }

    // Function to check the answer
    function checkAnswer(selectedName) {
        totalQuestions++;
        const buttons = document.querySelectorAll("#options button");
        buttons.forEach(button => {
            button.disabled = true;
            if (button.textContent === selectedName) {
                button.classList.add("wrong-answer");
            }
            if (button.textContent === currentInterval.type) {
                button.classList.add("correct-answer");
                if (selectedName === currentInterval.type) {
                    correctAnswers++;
                    feedbackElement.textContent = "יפה מאוד! תשובה נכונה!";
                } else {
                    feedbackElement.textContent = "תשובתך שגויה. אל תתייאש, המשך לנסות!";
                }
            }
        });

        updateStats();
    }

    // Function to update the statistics
    function updateStats() {
        document.getElementById("totalQuestions").textContent = totalQuestions;
        document.getElementById("correctAnswers").textContent = correctAnswers;
        const successPercentage = totalQuestions === 0 ? 0 : Math.round((correctAnswers / totalQuestions) * 100);
        document.getElementById("successPercentage").textContent = successPercentage + "%";

        // Unique mapping for each page
        localStorage.setItem(`${window.location.pathname}_totalQuestions`, totalQuestions);
        localStorage.setItem(`${window.location.pathname}_correctAnswers`, correctAnswers);
    }

    // Function to reset the statistics
    function resetStats() {
        totalQuestions = 0;
        correctAnswers = 0;
        updateStats();
    }

    // Event listener for the reset button
    resetButton.addEventListener("click", resetStats);

    // Event listener for the options buttons
    optionsElement.addEventListener("click", function (event) {
        if (event.target.matches("button")) {
            const selectedName = event.target.textContent;
            checkAnswer(selectedName);
            const buttons = document.querySelectorAll("#options button");
            buttons.forEach(button => button.disabled = true);
        }
    });

    // Event listener for the next button
    nextButton.addEventListener("click", function () {
        currentInterval = getRandomInterval();
        displayQuestion();
        feedbackElement.textContent = "";
        const buttons = document.querySelectorAll("#options button");
        buttons.forEach(button => button.disabled = false);
    });

    // Display the first question
    currentInterval = getRandomInterval();
    displayQuestion();

    // Update the statistics when the page is loaded
    updateStats();
});
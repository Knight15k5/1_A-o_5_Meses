document.addEventListener("DOMContentLoaded", function() {
    const questions = [
        {
            question: "¿Que serie me gusta más?",
            options: ["Doc House", "The Bad Batch", "Hazbin Hotel", "Helluva Boss"],
            correctAnswer: "The Bad Batch"
        },
        {
            question: "¿En la serie de Hazbin Hotel, la voz de que personaje me gusta más en Ingles?",
            options: ["Husk", "Alastor", "Adam", "Velvet"],
            correctAnswer: "Husk"
        },
        {
            question: "¿Cuantas cucharadas de azucar le póngo a mi cafe?",
            options: ["1", "2", "4", "6"],
            correctAnswer: "4"
        },
        {
            question: "¿Si voy a un emolientero que pan siempre pido?",
            options: ["Pollo", "Salchicha Huachana", "Camote", "Hotdog con Papas"],
            correctAnswer: "Camote"
        },
        {
            question: "¿Que prefiero...?",
            options: ["GameBoy", "Nintendo Switch", "PC Gamer","PS5"],
            correctAnswer: "PC Gamer"
        },
        {
            question: "¿Que color de sable de luz tendría?",
            options: ["Azul", "Rojo", "Blanco","Negro"],
            correctAnswer: "Negro"
        }
        // Agrega más preguntas según sea necesario
    ];

    let currentQuestionIndex = 0;
    let userScore = 0;

    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options-container");
    const nextButton = document.getElementById("next-btn");
    const resultElement = document.getElementById("result");

    function showQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;

        optionsContainer.innerHTML = "";
        currentQuestion.options.forEach((option, index) => {
            const button = document.createElement("button");
            button.textContent = option;
            button.addEventListener("click", () => checkAnswer(option));
            optionsContainer.appendChild(button);
        });
    }

    function checkAnswer(userAnswer) {
        const correctAnswer = questions[currentQuestionIndex].correctAnswer;

        if (userAnswer === correctAnswer) {
            userScore++;
        }

        resultElement.textContent = `Respuesta correcta: ${correctAnswer}`;
        resultElement.style.color = userAnswer === correctAnswer ? "#28a745" : "#dc3545";

        disableOptions();
        nextButton.style.display = "block";
    }

    function disableOptions() {
        const buttons = optionsContainer.getElementsByTagName("button");
        for (let button of buttons) {
            button.disabled = true;
        }
    }

    function enableOptions() {
        const buttons = optionsContainer.getElementsByTagName("button");
        for (let button of buttons) {
            button.disabled = false;
        }
    }

    function resetState() {
        resultElement.textContent = "";
        nextButton.style.display = "none";
        enableOptions();
    }

    function nextQuestion() {
        resetState();

        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            showQuestion();
        } else {
            endGame();
        }
    }

    function endGame() {
        questionElement.textContent = `¡Fin del juego! Puntaje: ${userScore} de ${questions.length}`;
        optionsContainer.innerHTML = "";
        nextButton.style.display = "none";
    }

    showQuestion();

    nextButton.addEventListener("click", nextQuestion);
});

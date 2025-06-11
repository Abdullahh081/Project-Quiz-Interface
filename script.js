const quizData = [
    {
      question: "Which language runs in a web browser?",
      options: ["Java", "C", "Python", "JavaScript"],
      answer: "JavaScript"
    },
    {
      question: "What does CSS stand for?",
      options: ["Central Style Sheets", "Cascading Style Sheets", "Coded Style System", "Clean Style Syntax"],
      answer: "Cascading Style Sheets"
    },
    {
      question: "What does HTML stand for?",
      options: ["Hypertext Markup Language", "Hyper Tool Multi Language", "Home Tool Markup Language", "High Text Machine Language"],
      answer: "Hypertext Markup Language"
    },
    {
      question: "What year was JavaScript launched?",
      options: ["1996", "1995", "1994", "none of the above"],
      answer: "1995"
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function loadQuestion() {
    const questionEl = document.getElementById("question");
    const optionsEl = document.getElementById("options");
    const questionData = quizData[currentQuestionIndex];
  
    questionEl.textContent = questionData.question;
    optionsEl.innerHTML = "";
  
    questionData.options.forEach(option => {
      const button = document.createElement("button");
      button.textContent = option;
      button.onclick = () => selectAnswer(option);
      optionsEl.appendChild(button);
    });
  }
  
  function selectAnswer(selected) {
    const correct = quizData[currentQuestionIndex].answer;
    if (selected === correct) {
      score++;
    }
  
    document.querySelectorAll("#options button").forEach(btn => {
      btn.disabled = true;
      if (btn.textContent === correct) {
        btn.style.backgroundColor = "#28a745";
      } else if (btn.textContent === selected) {
        btn.style.backgroundColor = "#dc3545";
      }
    });
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("score").textContent = `${score} / ${quizData.length}`;
  }
  
  function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("result").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
    loadQuestion();
  }
  
  // Initial load
  loadQuestion();
  

const quizData = [

  {
    question: "Which keyword is used to define a function in Python?",
    options: ["func", "define", "def", "function"],
    correct: "def",
    image: "1.png"
  },
  {
    question: "What is the output of print(type([1, 2, 3]))?",
    options: ["tuple", "list", "set", "dictionary"],
    correct: "list",
    image: "1.png"
  },
  {
    question: "Which symbol is used for comments in Python?",
    options: ["//", "/*", "#", "--"],
    correct: "#",
    image: "1.png"
  },
  
{
question: 'What is a correct syntax to output "Hello World" in Python?',
options: ['echo("Hello World");', 'p("Hello World")', 'print("Hello World")', 'echo "Hello World"'],
correct: 'print("Hello World")',
image: "1.png"
},
{
question: 'How do you insert COMMENTS in Python code?',
options: ['#This is a comment', '//This is a comment', '/*This is a comment*/'],
correct: '#This is a comment',
image: "1.png"
},
{
question: 'Which one is NOT a legal variable name?',
options: ['my-var', 'my_var', '_myvar', 'Myvar'],
correct: 'my-var',
image: "1.png"
},
{
question: 'How do you create a variable with the numeric value 5?',
options: ['x = 5', 'x = int(5)', 'Both the other answers are correct'],
correct: 'Both the other answers are correct',
image: "1.png"
},
{
question: 'What is the correct file extension for Python files?',
options: ['.pt', '.pyt', '.py', '.pyth'],
correct: '.py',
image: "1.png"
},
{
question: 'How do you create a variable with the floating number 2.8?',
options: ['x = float(2.8)', 'x = 2.8', 'Both the other answers are correct'],
correct: 'Both the other answers are correct',
image: "1.png"
},
{
question: 'What is the correct syntax to output the type of a variable or object in Python?',
options: ['print(typeof x)', 'print(typeof(x))', 'print(type(x))', 'print(typeOf(x))'],
correct: 'print(type(x))',
image: "1.png"
},
{
question: 'What is the correct way to create a function in Python?',
options: ['def myFunction():', 'function myfunction():', 'create myFunction():'],
correct: 'def myFunction():',
image: "1.png"
},
{
question: "In Python, 'Hello', is the same as \"Hello\"",
options: ['True', 'False'],
correct: 'True',
image: "1.png"
},
{
question: 'What is a correct syntax to return the first character in a string?',
options: ['x = "Hello"[0]', 'x = "Hello".sub(0, 1)', 'x = sub("Hello", 0, 1)'],
correct: 'x = "Hello"[0]',
image: "1.png"
},
{
question: 'Which method can be used to remove any whitespace from both the beginning and the end of a string?',
options: ['strip()', 'ptrim()', 'trim()', 'len()'],
correct: 'strip()',
image: "1.png"
},
{
question: 'Which method can be used to return a string in upper case letters?',
options: ['upper()', 'uppercase()', 'upperCase()', 'toUpperCase()'],
correct: 'upper()',
image: "1.png"
},
{
question: 'Which method can be used to replace parts of a string?',
options: ['replace()', 'replaceString()', 'switch()', 'repl()'],
correct: 'replace()',
image: "1.png"
},
{
question: 'Which operator is used to multiply numbers?',
options: ['*', '%', 'x', '#'],
correct: '*',
image: "1.png"
},
{
question: 'Which operator can be used to compare two values?',
options: ['==', '><', '<>', '='],
correct: '==',
image: "1.png"
},
{
question: 'Which of these collections defines a LIST?',
options: ['["apple", "banana", "cherry"]', '("apple", "banana", "cherry")', '{"name": "apple", "color": "green"}', '{"apple", "banana", "cherry"}'],
correct: '["apple", "banana", "cherry"]',
image: "1.png"
},
{
question: 'Which of these collections defines a TUPLE?',
options: ['("apple", "banana", "cherry")', '{"apple", "banana", "cherry"}', '{"name": "apple", "color": "green"}', '["apple", "banana", "cherry"]'],
correct: '("apple", "banana", "cherry")',
image: "1.png"
},
{
question: 'Which of these collections defines a SET?',
options: ['{"apple", "banana", "cherry"}', '{"name": "apple", "color": "green"}', '["apple", "banana", "cherry"]', '("apple", "banana", "cherry")'],
correct: '{"apple", "banana", "cherry"}',
image: "1.png"
},
{
question: 'Which of these collections defines a DICTIONARY?',
options: ['{"name": "apple", "color": "green"}', '{"apple", "banana", "cherry"}', '["apple", "banana", "cherry"]', '("apple", "banana", "cherry")'],
correct: '{"name": "apple", "color": "green"}',
image: "1.png"
},
{
question: 'Which collection is ordered, changeable, and allows duplicate members?',
options: ['DICTIONARY', 'LIST', 'SET', 'TUPLE'],
correct: 'LIST',
image: "1.png"
},
{
question: 'Which collection does not allow duplicate members?',
options: ['SET', 'LIST', 'TUPLE'],
correct: 'SET',
image: "1.png"
},
{
question: 'How do you start writing an if statement in Python?',
options: ['if x > y:', 'if (x > y)', 'if x > y then:'],
correct: 'if x > y:',
image: "1.png"
},
{
question: 'How do you start writing a while loop in Python?',
options: ['while x > y:', 'x > y while {', 'while (x > y)', 'while x > y {'],
correct: 'while x > y:',
image: "1.png"
},
{
question: 'How do you start writing a for loop in Python?',
options: ['for x > y:', 'for each x in y:', 'for x in y:'],
correct: 'for x in y:',
image: "1.png"
},
{
question: 'Which statement is used to stop a loop?',
options: ['break', 'exit', 'stop', 'return'],
correct: 'break',
image: "1.1.png"
}
  
];

let current = 0;
let score = 0;
let timer;
let timeLeft = 15;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");
const timerEl = document.getElementById("timer");
const imageEl = document.getElementById("image");

function startQuiz() {
  current = 0;
  score = 0;
  nextBtn.style.display = "inline-block";
  showQuestion();
}

function showQuestion() {
  nextBtn.disabled = true;
  timeLeft = 15;
  timerEl.textContent = `Time Left: ${timeLeft}s`;
  clearInterval(timer);
  timer = setInterval(updateTimer, 1000);

  const q = quizData[current];
  questionEl.textContent = q.question;
  imageEl.src = q.image;
  imageEl.style.display = "block";
  optionsEl.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("div");
    btn.classList.add("option");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(btn, option, q.correct);
    optionsEl.appendChild(btn);
  });
}

function updateTimer() {
  timeLeft--;
  timerEl.textContent = `Time Left: ${timeLeft}s`;
  if (timeLeft <= 0) {
    clearInterval(timer);
    autoRevealAnswer();
  }
}

function checkAnswer(element, selected, correct) {
  clearInterval(timer);
  const allOptions = document.querySelectorAll(".option");
  allOptions.forEach(opt => opt.style.pointerEvents = "none");

  if (selected === correct) {
    element.classList.add("correct");
    score++;
  } else {
    element.classList.add("wrong");
    allOptions.forEach(opt => {
      if (opt.textContent === correct) opt.classList.add("correct");
    });
  }

  nextBtn.disabled = false;
}

function autoRevealAnswer() {
  const allOptions = document.querySelectorAll(".option");
  allOptions.forEach(opt => {
    opt.style.pointerEvents = "none";
    if (opt.textContent === quizData[current].correct) {
      opt.classList.add("correct");
    }
  });
  nextBtn.disabled = false;
}

function nextQuestion() {
  current++;
  if (current < quizData.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  clearInterval(timer);
  questionEl.textContent = "Quiz Completed!";
  optionsEl.innerHTML = "";
  timerEl.textContent = "";
  imageEl.style.display = "none";
  nextBtn.style.display = "none";
  scoreEl.innerHTML = `Your Score: ${score} / ${quizData.length}<br><br>`;

  const restartBtn = document.createElement("button");
  restartBtn.textContent = "Restart Quiz";
  restartBtn.onclick = startQuiz;
  scoreEl.appendChild(restartBtn);
}

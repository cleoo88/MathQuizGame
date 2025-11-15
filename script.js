let num1, num2, correctAnswer;
let score = 0;
let totalQuestions = 0;

const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const submitBtn = document.getElementById('submit');
const feedbackEl = document.getElementById('feedback');
const scoreEl = document.getElementById('score');
const nextBtn = document.getElementById('next');

function generateQuestion() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    correctAnswer = num1 + num2;
    questionEl.textContent = `What is ${num1} + ${num2}?`;
    answerEl.value = '';
    feedbackEl.textContent = '';
    nextBtn.style.display = 'none';
    submitBtn.style.display = 'inline';
}

function checkAnswer() {
    const userAnswer = parseInt(answerEl.value);
    totalQuestions++;
    if (userAnswer === correctAnswer) {
        feedbackEl.textContent = 'Correct!';
        feedbackEl.style.color = 'green';
        score++;
    } else {
        feedbackEl.textContent = `Wrong! The correct answer is ${correctAnswer}.`;
        feedbackEl.style.color = 'red';
    }
    scoreEl.textContent = `Score: ${score} / ${totalQuestions}`;
    submitBtn.style.display = 'none';
    nextBtn.style.display = 'inline';
}

submitBtn.addEventListener('click', checkAnswer);
nextBtn.addEventListener('click', generateQuestion);

// Initialize the first question
generateQuestion();
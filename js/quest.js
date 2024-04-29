const data = [
    {   
        num: "ЗАДАНИЕ №1",
        question: "Иван Иванович купил в магазине у дома несколько пачек макарон по 40 рублей, несколько пачек печенья по 32 рубля и 2 пакета сока. Продавщица сказала, что с него 525 рублей (скидка не предусмотрена). Иван Иванович заявил, что его пытаются обсчитать. Действительно ли продавщица ошиблась в подсчетах?",
        a: "Да, сумма явно неверная",
        b: "Нет, такая сумма вполне могла получиться",
        c: "Не знаю, не получается решить",
        correct: "a",
    },
    {
        num: "ЗАДАНИЕ №2",
        question: "Иван Иванович купил в магазине у дома несколько пачек макарон по 40 рублей, несколько пачек печенья по 32 рубля и 2 пакета сока. Продавщица сказала, что с него 525 рублей (скидка не предусмотрена). Иван Иванович заявил, что его пытаются обсчитать. Действительно ли продавщица ошиблась в подсчетах?",
        a: "Да, сумма явно неверная",
        b: "Нет, такая сумма вполне могла получиться",
        c: "Не знаю, не получается решить",
        correct: "b",
    },
    {
        num: "ЗАДАНИЕ №3",
        question: "Иван Иванович купил в магазине у дома несколько пачек макарон по 40 рублей, несколько пачек печенья по 32 рубля и 2 пакета сока. Продавщица сказала, что с него 525 рублей (скидка не предусмотрена). Иван Иванович заявил, что его пытаются обсчитать. Действительно ли продавщица ошиблась в подсчетах?",
        a: "Да, сумма явно неверная",
        b: "Нет, такая сумма вполне могла получиться",
        c: "Не знаю, не получается решить",
        correct: "c",
    },
    {
        num: "ЗАДАНИЕ №4",
        question: "Иван Иванович купил в магазине у дома несколько пачек макарон по 40 рублей, несколько пачек печенья по 32 рубля и 2 пакета сока. Продавщица сказала, что с него 525 рублей (скидка не предусмотрена). Иван Иванович заявил, что его пытаются обсчитать. Действительно ли продавщица ошиблась в подсчетах?",
        a: "Да, сумма явно неверная",
        b: "Нет, такая сумма вполне могла получиться",
        c: "Не знаю, не получается решить",
        correct: "a",
    },
]
const quest = document.querySelector('.quest');
const btnQuest = document.querySelectorAll('.btn-header-text');
const overlayQuest = document.querySelector('.overlay-quest');
const btnXQuest = document.querySelector('.btn-x-quest');
const btnQuiz = document.querySelector('.btn-quest');
const btnXQuiz = document.querySelector('.btn-x-quiz');
const quizContainer = document.querySelector('.quiz-container');
const numQuiz = document.getElementById('num-quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const optionA = document.getElementById('optionA');
const optionB = document.getElementById('optionB');
const optionC = document.getElementById('optionC');
const submitBtn = document.getElementById('submit');
const backImgForQuest = document.querySelector('.back-img');
const btnDownForQuest = document.querySelector('.btn-down');
const learningForQuest = document.querySelector('.learning');
const practikForQuest = document.querySelector('.practik');
const macbookForQuest = document.querySelector('.macbook');
const macbookBlurForQuest = document.querySelector('.macbook-blur');
const watchingVideoPositionForQuest = document.querySelector('.watching-video-position');
const watchingVideoTextForQuest = document.querySelector('.watching-video-text');


for (const btn of btnQuest) {
    btn.addEventListener('click', questShow);
}


function questShow() {
   quest.classList.toggle('d-none');
   overlayQuest.classList.toggle('d-none');
   backImgForQuest.classList.toggle('position-relative');
   btnDownForQuest.classList.toggle('d-none');
   learningForQuest.classList.toggle('position-relative');
   practikForQuest.classList.toggle('d-none');
   macbookForQuest.classList.toggle('position-relative');
   macbookBlurForQuest.classList.toggle('d-none');
   watchingVideoPositionForQuest.classList.toggle('d-none');
   watchingVideoTextForQuest.classList.toggle('d-none');
}


btnXQuest.addEventListener('click', questClose)
function questClose(){
    quest.classList.toggle('d-none');
    overlayQuest.classList.toggle('d-none');
    backImgForQuest.classList.toggle('position-relative');
    btnDownForQuest.classList.toggle('d-none');
    learningForQuest.classList.toggle('position-relative');
    practikForQuest.classList.toggle('d-none');
    macbookForQuest.classList.toggle('position-relative');
    macbookBlurForQuest.classList.toggle('d-none');
    watchingVideoPositionForQuest.classList.toggle('d-none');
    watchingVideoTextForQuest.classList.toggle('d-none');
}

btnQuiz.addEventListener('click', quizStart)
function quizStart(){
    quest.classList.toggle('d-none');
    quizContainer.classList.toggle('d-none');
}

btnXQuiz.addEventListener('click', quizClose)
function quizClose(){
    quest.classList.toggle('d-none');
    quizContainer.classList.toggle('d-none');
}

let currentQuiz = 0;
let score = 0;

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = data[currentQuiz]

    questionEl.innerText = currentQuizData.question
    numQuiz.innerText = currentQuizData.num
    optionA.innerText = currentQuizData.a
    optionB.innerText = currentQuizData.b
    optionC.innerText = currentQuizData.c
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => (
        answerEl.checked = false
    ))
}

function getSelected() {
    let answer

    answerEls.forEach((answerEl) =>{
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () =>{
    const answer = getSelected()

    if (answer) {
        if (answer === data[currentQuiz].correct){
            score++
        }
        currentQuiz++


        if (currentQuiz < data.length) {
            loadQuiz()
        }
        else{
            quizContainer.style.padding = '0'
            quiz.innerHTML = `
            <div class="correct-quiz d-flex flex-column justify-content-center align-items-center position-fixed">
              <button onclick="location.reload()" class="btn position-absolute btn-x-quiz top-0 end-0 me-3 mt-3" type="button"><img src="img/x-lg.svg" alt=""></button>
              <div class="score d-flex flex-column justify-content-center align-items-center">
                <img src="img/Like.svg" alt="">
                <h5 class="score-header mt-2">НАБРАНО ${score}/${data.length}</h5>
              </div>
              <p class="score-text">Это великолепный результат! У вас есть все шансы стать 
                отличным программистом. Начните обучение прямо сейчас, 
                доступ ко вводным урокам уже открыт</p>
              <button class="btn btn-quiz-score" onclick="location.reload()">Начать <span class="d-tel-none">учиться бесплатно</span><img src="img/arrow-right.svg" alt=""></button>
            </div>
            `
        }
    }
})
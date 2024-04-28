const data = [
    {
        question: "Иван Иванович купил в магазине у дома несколько пачек макарон по 40 рублей, несколько пачек печенья по 32 рубля и 2 пакета сока. Продавщица сказала, что с него 525 рублей (скидка не предусмотрена). Иван Иванович заявил, что его пытаются обсчитать. Действительно ли продавщица ошиблась в подсчетах?",
        a: "Да, сумма явно неверная",
        b: "Нет, такая сумма вполне могла получиться",
        c: "Не знаю, не получается решить",
        correct: "a",
    },
    {
        question: "Иван Иванович купил в магазине у дома несколько пачек макарон по 40 рублей, несколько пачек печенья по 32 рубля и 2 пакета сока. Продавщица сказала, что с него 525 рублей (скидка не предусмотрена). Иван Иванович заявил, что его пытаются обсчитать. Действительно ли продавщица ошиблась в подсчетах?",
        a: "Да, сумма явно неверная",
        b: "Нет, такая сумма вполне могла получиться",
        c: "Не знаю, не получается решить",
        correct: "b",
    },
    {
        question: "Иван Иванович купил в магазине у дома несколько пачек макарон по 40 рублей, несколько пачек печенья по 32 рубля и 2 пакета сока. Продавщица сказала, что с него 525 рублей (скидка не предусмотрена). Иван Иванович заявил, что его пытаются обсчитать. Действительно ли продавщица ошиблась в подсчетах?",
        a: "Да, сумма явно неверная",
        b: "Нет, такая сумма вполне могла получиться",
        c: "Не знаю, не получается решить",
        correct: "c",
    },
    {
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
const quizContainer = document.querySelector('.quiz-container')
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
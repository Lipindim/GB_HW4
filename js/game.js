var questions = [
    {
        number: 1,
        text: 'Какая столица США?',
        answers: ['Москва', 'Лондон', 'Вашингтон', 'Изумрудный город'],
        correct: 3
    },
    {
        number: 2,
        text: 'Чему равно log100?',
        answers: ['5', '100', '2', '10'],
        correct: 3
    },
    {
        number: 3,
        text: 'Какое животное не относится к семейству куньих?',
        answers: ['Медоед', 'Суслик', 'Расомаха', 'Хорёк'],
        correct: 2
    },
    {
        number: 4,
        text: 'Какое самое теплое время года на Дальнем востоке?',
        answers: ['Лето', 'Зима', 'Весна', 'Осень'],
        correct: 1
    },
    {
        number: 5,
        text: 'Какого числа начинался новый год на Руси?',
        answers: ['1 января', '1 марта', '1 июня', '1 сентября'],
        correct: 4
    },
];

function gameQuest(ques) {
    let play = true;
    let round = 0;
    let countRightAnswer = 0;
    while (play && round < ques.length) {
        let question = generateQuestion(questions[round], round);
        let answer = prompt(question);
        play = check(answer, questions[round].correct);
        round++;
        if (play) {
            countRightAnswer++;
            alert('Правильно!');
        }
    }
    alert("Игра завершена. Правильных ответов: " + countRightAnswer);
}

function generateQuestion(question, round) {
    let answers = '';
    for (let i = 0; i < question.answers.length; i++) {
        answers = answers + (i + 1) + ' - ' + question.answers[i] + '\n';
    }
    let text = 'Раунд ' + (round + 1) + '\n' + question.text + '\n';
    return text + answers + 'Введите правильный ответ';
}

function check(userAnswer, rightAnswer) {
    return rightAnswer == userAnswer;
}

function startGame() {
    gameQuest(questions);
}

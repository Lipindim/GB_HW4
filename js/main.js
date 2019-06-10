const text = 'One: \'Hi Mary.\' Two: \'Oh, hi.\'\n' +
    'One: \'How are you doing?\'\n' +
    'Two: \'I\'m doing alright. How about you?\'\n' +
    '    One: \'Not too bad. The weather is great isn\'t it?\'\n' +
    '    Two: \'Yes. It\'s absolutely beautiful today.\'\n' +
    'One: \'I wish it was like this more frequently.\'\n' +
    'Two: \'Me too.\'\n' +
    'One: \'So where are you going now?\'\n' +
    'Two: \'I\'m going to meet a friend of mine at the department store.\'\n' +
    'One: \'Going to do a little shopping?\'\n' +
    'Two: \'Yeah, I have to buy some presents for my parents.\'\n' +
    'One: \'What\'s the occasion?\'\n' +
    '    Two: \'It\'s their anniversary.\'\n' +
    'One: \'That\'s great. Well, you better get going. You don\'t want to be late.\'\n' +
    'Two: \'I\'ll see you next time.\'\n' +
    'One: \'Sure. Bye.\'';

let newText = text.replace(/'/g, '"');
console.log(newText);
let newText2 = text.replace(/('\B|\B')/g, '"');
console.log(newText2);

function validate(form) {
    var elems = form.elements;

    new CustomValidator(elems.name,
        /[a-zа-я]+/i,
        'Укажите имя',
        'В имени могут быть только буквы.');
    new CustomValidator(elems.phone,
        /\+7\(\d{3}\)\d{3}-\d{4}/,
        'Укажите телефон',
        'Некорректный формат. Формат: +7(000)000-0000.');
    new CustomValidator(elems.email,
        /\w+\.?\-?\w+@mail.ru/,
        'Укажите email',
        'Некорректный формат.');
    new CustomValidator(elems.text,
        /.+/,
        'Напишите сообщение');
}

class CustomValidator {
    constructor(element, regEx, emptyError, incorrectError){
        this.element = element;
        this.regEx = regEx;
        this.emptyError = emptyError;
        this.incorrectError = incorrectError;
        this._resetError();
        this._validate();
    }
    _validate(){
        if (!this.element.value) {
            this._showError(this.emptyError);
            return;
        }
        let result = this.element.value.match(this.regEx);
        if(!result){
            this._showError(this.incorrectError);
            return;
        }
        if(result[0].length != this.element.value.length){
            this._showError(this.incorrectError);
            return;
        }
    }
    _showError(errorMessage) {
        let msgElem = document.createElement('div');
        msgElem.className = "error-message";
        msgElem.innerHTML = errorMessage;
        this.element.parentNode.appendChild(msgElem);
    }
    _resetError() {
        if (this.element.parentNode.lastChild.className == "error-message") {
            this.element.parentNode.removeChild(this.element.parentNode.lastChild);
        }
    }
}
function getDigitalObject() {
    let number = + prompt("Введите число до 1000");
    if(isNaN(number))
        {
            console.log("Вы ввели не число!");
        }
    else if(number >= 1000)
        {
            console.log("Число больше 999!")
        }
    else
        {
            let digitObject = transformNumber(number);
            console.log(digitObject);
        }
}

function transformNumber(number)
{
    let hundreds = Math.floor (number / 100);
    let tens = Math.floor ((number % 100) / 10);
    let units = number % 10;
    
    let digitObject = {
        hundreds: hundreds,
        tens: tens,
        units: units
    }
    return digitObject;
}


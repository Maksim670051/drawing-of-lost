//Массив со всеми значениями
var array = []
var log = []

//Функция запуска
function run() {

    let n = Number(document.getElementById('input').value)
    log.push('f run()')
    log.push(`Введено число n = ${n}`)

    if (isNaN(n / 1)) {
        document.getElementById('error').innerHTML = 'Некорректное число N'
        log.push('Некорректное число N')
    }
    else {
        document.getElementById('error').innerHTML = ''
        document.getElementById('input').disabled = true

        if (array.length == n) {
            document.getElementById('rez').innerHTML += 'Вы достали все бочонки'
            document.getElementById('d').style.width = '0'
            document.getElementById('d').style.padding = '0'
            log.push('Вы достали все бочонки')
            console.log(log)
        }
        else
            while (true) {

                let a = randomInteger(1, n)
                if (!array.includes(a)) {
                    array.push(a)
                    document.getElementById('rez').innerHTML += `${a} ; `
                    log.push(`Достали бочонок ${a}`)
                    break
                }

            }
    }

}

//Генерация случайного чила в интервале
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

//log
function downloadFile() {

    let text = JSON.stringify({

        1: log

    });
    downloadAsFile(text);

}
function downloadAsFile(data) {

    let a = document.createElement("a");
    let file = new Blob([data], { type: 'application/json' });
    a.href = URL.createObjectURL(file);

    // название файла и расширение
    a.download = 'log.txt';
    a.click();

}
/*
* Программа для таймера
*
* Переменные
* deadline - время конца таймера
*
* Функции
* getTimeRemaining(endTime) - выдает объект с разницей текущего времени и deadline
* setClock(id, endTime) - рисует таймер в блоке id
* */

window.onload = function () {

    let deadline = '2019-4-7';

    function getTimeRemaining(endTime) {
        let differenceTime = Date.parse(endTime) - Date.parse(new Date()),
            seconds = Math.floor((differenceTime/1000) % 60),
            minutes = Math.floor((differenceTime/1000/60) % 60),
            hours = Math.floor((differenceTime/1000/60/60));

        return {
            'total' : differenceTime,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        }
    }
    
    function setClock(id, endTime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);


        function updateClock() {
            let objTime = getTimeRemaining(endTime);

            hours.innerText = objTime.hours;

            minutes.innerText = (objTime.minutes < 10)
                ? '0' + objTime.minutes
                : objTime.minutes;

            seconds.innerText = (objTime.seconds < 10)
                ? '0' + objTime.seconds
                : objTime.seconds;

            if(objTime.total <= 0){
                clearInterval(timeInterval);
            }
        }

    }

    setClock('timer', deadline);

};
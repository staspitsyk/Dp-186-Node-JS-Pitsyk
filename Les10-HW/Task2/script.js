function countdown(millSec) {
    let sign;
    if (millSec < 0) {
        sign = '-';
        millSec *= -1;
    } else {
        sign = '+';
    }
    let seconds = millSec / 1000;
    let answer;
    if (millSec === 0 ) {
        answer = `00:00:00`;
    } else if (seconds < 60) {
        seconds = Math.round(seconds)
        answer = String(seconds).length === 2 ? `00:00:${seconds}` : `00:00:0${seconds}`;
    } else if (seconds <= 3600) {
        let minutes = 0;
        while (seconds >= 60) {
            seconds -= 60;
            minutes++;
        }
        minutes = String(minutes).length === 2 ? `${minutes}` : `0${minutes}`;
        seconds = String(seconds).length === 2 ? `${seconds}` : `0${seconds}`;
        answer = `00:${minutes}:${seconds}`;
    } else {
        let hours = 0;
        let minutes = 0;
        while (seconds >= 3600) {
            seconds -= 3600;
            hours++;
        }
        while (seconds > 60) {
            seconds -= 60;
            minutes++;
        }
        hours = String(hours).length > 1 ? `${hours}` : `0${hours}`;
        minutes = String(minutes).length === 2 ? `${minutes}` : `0${minutes}`;
        seconds = String(seconds).length === 2 ? `${seconds}` : `0${seconds}`;
        answer = `${hours}:${minutes}:${seconds}`;
    }

    return sign.concat(answer);
}

console.log(countdown(-154800000));
console.log(countdown(0));
console.log(countdown(61000));
console.log(countdown(360000000));
console.log(countdown(600));

let time = 1800;
const countDownElement = document.querySelector("#countdown");

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds: seconds;
    countDownElement.innerHTML = `${minutes} : ${seconds}`;
    time--;
}

let tel = document.querySelector('#tel');
let reg = /[A-Za-zА-Яа-яЁё]/g;

tel.oninput = function() {
    this.value = this.value.replace(reg, '')
}
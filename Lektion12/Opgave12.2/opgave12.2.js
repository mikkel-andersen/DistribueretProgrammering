let startTid;

function showclock() {
    let date = new Date();
    let clock = document.querySelector("#clock");
    clock.innerHTML = date.getTime() - startTid.getTime();
}

let timerId = null;
function start() {
    if (timerId == null) {
        timerId = setInterval(showclock, 1);
        startTid = new Date();
        showclock();
    }
}
function stop() {
    clearInterval(timerId);
    timerId = null;
}
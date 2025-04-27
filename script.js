let hours = document.querySelector(".hr");
let minutes = document.querySelector(".m");
let seconds = document.querySelector(".s");
let milliSeconds = document.querySelector(".ms");

let ms = 0;
let s = 0;
let m = 0;
let hr = 0
let timeStart = null;

function timerStart(){
    if(timeStart !== null) return
    timeStart = setInterval(updateTime, 0.2)
}

function updateTime(){
    ms++
    if(ms === 100){
        ms = 0
        s++
    }
    if(s === 60){
        s = 0
        m++
    }
    if(m === 60){
        m = 0
        hr++
    }
    updateDisplay()
}

function stopTimer(){
    clearInterval(timeStart)
    timeStart = null
}
function resetTime(){
    stopTimer()
    ms = 0
    s = 0
    m = 0
    hr = 0
    updateDisplay()
}

function updateDisplay(){
    milliSeconds.textContent = ms < 10 ? "0" + ms : ms
    seconds.textContent = s < 10 ? "0" + s : s
    minutes.textContent = m < 10 ? "0" + m : m
    hours.textContent = hr < 10 ? "0" + hr : hr
}
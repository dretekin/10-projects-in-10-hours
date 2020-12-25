var countDownTimerDays = document.querySelector('.days')
var countDownTimerHours = document.querySelector('.hours')
var countDownTimerMins = document.querySelector('.mins')
var countDownTimerSecs = document.querySelector('.seconds')

function countDownFunc() {
var date = new Date;

const formatTime = time => time < 10 ? `0${time}` : time;

var month = date.getMonth(); // beware: January = 0; February = 1, etc.

var days_in_months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
if( (new Date(date.getFullYear(), 1, 29)).getDate() == 29 ) days_in_months[1] = 29;

// get days in all months
var days = 0;
for(let i=0; i<days_in_months.length;i++) {
    if(i >= month) days += (days_in_months[i] - date.getDate() - 1)
}

countDownTimerDays.innerText = days;
countDownTimerHours.innerText = formatTime(24 - date.getHours())
countDownTimerMins.innerText = formatTime(60 - date.getMinutes())
countDownTimerSecs.innerText = formatTime(60 - date.getSeconds())
}
setInterval(() => {
    countDownFunc()
}, 1000);
// 56 lines

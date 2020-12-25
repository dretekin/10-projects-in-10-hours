var countDownTimerContainer = document.querySelector('.count-down-timer');

var countDownTimerDays = countDownTimerContainer.querySelector('.days')
var countDownTimerHours = countDownTimerContainer.querySelector('.hours')
var countDownTimerMins = countDownTimerContainer.querySelector('.mins')
var countDownTimerSecs = countDownTimerContainer.querySelector('.seconds')

setInterval(() => {
    var date = new Date;
    // date.setTime(result_from_Date_getTime);
    
    var seconds = date.getSeconds();
    seconds = 60 - seconds
    seconds = seconds.toString()
    if(seconds.length === 1) seconds = '0' + seconds;
    
    var minutes = date.getMinutes();
    minutes = 60 - minutes
    minutes = minutes.toString();
    if(minutes.length === 1) minutes = '0' + minutes;
    
    var hour = date.getHours();
    hour = hour.toString()
    hour = 24 - hour
    if(hour.length === 1) hour = '0' + hour;
    
    var year = date.getFullYear();
    var month = date.getMonth(); // beware: January = 0; February = 1, etc.
    var day = date.getDate();
    
    // var dayOfWeek = date.getDay(); // Sunday = 0, Monday = 1, etc.
    // var milliSeconds = date.getMilliseconds();
    
    var days_in_months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // for leap years, February has 29 days. Check whether
    // February, the 29th exists for the given year
    if( (new Date(year, 1, 29)).getDate() == 29 ) days_in_months[1] = 29;
    
    // get days in all months
    var daysInRemainingMonths = 0;
    var daysSpentInCurrMonth = day - 1;
    // var daysRemainingInCurrMonth = day - days_in_months[month];
    for(let i=0; i<days_in_months.length;i++) {
        if(i < month) {
            // daysInSpentMonths += days_in_months[i];
        } else {
            daysInRemainingMonths += (days_in_months[i] - day - 1)
        }
    }
    
    daysInCurrMonths = days_in_months[month]
    
    var days = daysInRemainingMonths;
    days = days.toString()
    
    
    countDownTimerDays.innerText = days;
    countDownTimerHours.innerText = hour
    countDownTimerMins.innerText = minutes
    countDownTimerSecs.innerText = seconds
}, 1000);


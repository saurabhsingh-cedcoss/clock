
// ///////////////////////functon to call all the functions repeatedly on 10 millisecond///////////////////////////////////////

setInterval(() => {
    var date = new Date();
    var min = date.getMinutes();
    var sec = date.getSeconds() + (date.getMilliseconds() / 1000);
    var hour = date.getHours();
    second(sec);
    minute(min);
    hours(hour, min);

}, 10);

// function to transform seconds needle
function second(sec) {
    var seconds = (6 * sec);
    var img = document.getElementById('second');
    img.style.transform = `rotate(${seconds}deg)`;
}
// function to transform minute needle
function minute(min) {
    var date = new Date();
    var rotation1 = 6 * min;
    var img1 = document.getElementById('minute');
    img1.style.transform = `rotate(${rotation1}deg)`;
}
// function to transform hours needle
function hours(hour, min) {
    var date = new Date();
    var min = date.getMinutes();
    var rotation2 = (hour * (30)) + (min / 2);
    var img1 = document.getElementById('hour');
    document.getElementById('show').innerHTML = hour + ":" + min;
    img1.style.transform = `rotate(${rotation2}deg)`;
}


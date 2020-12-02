


setInterval(() => {
    second();
    minute();
    hour();

}, 10);

function second() {
    var date = new Date();
    var sec= date.getSeconds()+(date.getMilliseconds()/1000);
    var seconds = (6 * sec);
    console.log(sec);
    var img = document.getElementById('second');
    img.style.transform = `rotate(${seconds}deg)`;

}
function minute() {
    var date = new Date();
    var min = date.getMinutes();
    var rotation1 = 6 * min;
    console.log(min);
    var img1 = document.getElementById('minute');

    img1.style.transform = `rotate(${rotation1}deg)`;
}
function hour() {
    var date = new Date();
    var min = date.getMinutes();
    var hour = date.getHours();
    var rotation2 = (hour * (30)) + (min / 2);
    console.log(rotation2);
    console.log(`.n${hour}`);
    var img1 = document.getElementById('hour');
    document.getElementById('show').innerHTML = hour + ":" + min;
    // document.querySelector(`.n${hour}`).style.backgroundColor="rgb(124, 225, 65)";
    // document.querySelector(`.n${hour}`).style.height="15%";
    img1.style.transform = `rotate(${rotation2}deg)`;
}
function stopwatch(){
    document.querySelector('.clock').style.display="none";
}

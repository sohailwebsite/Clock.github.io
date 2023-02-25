
let hour = document.getElementById("hr");
let minute = document.getElementById("min");
let second = document.getElementById("sec");

setInterval(()=>{
let date = new Date();

let hr = date.getHours()*30;
let min = date.getMinutes()*6;
let sec = date.getSeconds()*6;

hour.style.transform = `rotateZ(${(hr)+(min/12)}100deg)`;
minute.style.transform = `rotateZ(${min}deg)`;
second.style.transform = `rotateZ(${sec}deg)`;

},1000);
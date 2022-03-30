const daysNow =document.getElementById("days")
const hoursNow =document.getElementById("hours")
const minNow =document.getElementById("mins")
const secsNow =document.getElementById("secs")
let searchday=prompt("day month year format '1 Jan 2023'")

// let nextYear = new Date();
// let year= nextYear.getFullYear();
// let newYears = `31 Dec ${year}`

 function countdown(){
    const newYearsDate=new Date(searchday);
     const nowDate=new Date();

     const totalSeconds = (newYearsDate-nowDate)/1000;

     const days=Math.floor(totalSeconds/3600/24);
     const hours=Math.floor(totalSeconds/3600)%24;
     const mins=Math.floor(totalSeconds/60)%60;
     const seconds=Math.floor(totalSeconds)%60;

     daysNow.innerHTML=days;
     hoursNow.innerHTML=hours;
     minNow.innerHTML=mins;
     secsNow.innerHTML=seconds;
    }
    function formatTime(time){
        return time<10?`0${time}`:time;
    }
    countdown();

setInterval(countdown, 1000);
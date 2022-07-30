const API_KEY = "123cedf472ea7d740a81046892916adb";

async function getApi(){
    try{
        return await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${40.456412891088995}&lon=${-3.6873697165230976}&appid=${API_KEY}`
        )
          .then((res) => res.json())
          .then((item) => console.log(item));
    }
    catch(err){
        console.log(err);
    }
    finally{

    }
}
getApi();

40.456412891088995, -3.6873697165230976;


const countDownDate = new Date("December 18, 2022 15:00:00").getTime();
const myTimer = document.getElementById("timerDiv");

const timer = setInterval(function () {
  let nowDate = new Date().getTime();
  let timeRemeins = countDownDate - nowDate;
  let days = Math.floor(timeRemeins / (1000 * 60 * 60 * 400));
  let hours = Math.floor((timeRemeins % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeRemeins % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeRemeins % (1000 * 60)) / 1000);

  myTimer.innerHTML = `<div class = card-body t 'w-100 text-center '>
   <h2 class="text-center " >Next Match:  days: ${days}| hrs: ${hours}| min: ${minutes}| sec:${seconds}</h2>
   </div>`;
   

  if (timeRemeins < 0) {
    clearInterval(timer);
    document.getElementById("myTimer").innerHTML = "EXPIRED";
  }
}, 1000);
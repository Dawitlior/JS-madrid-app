const API_KEY = "123cedf472ea7d740a81046892916adb";
let some ; 
let sun_img= `<img style="width:2vw;" src="/Photos/Home/sun.png" alt=""/>`
async function getApi(){
    try{
        return await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${40.427416712151015}&lon=${-3.7042448033147037}&appid=${API_KEY}`
        )
          .then((res) => res.json())
          .then((item) => {
            for (const res in item) {
              some = Math.floor(item[res]["feels_like"] / 10);
              // console.log(`${some}°C`);
              switch (some) {
                case some:
                  document.getElementById("weather").innerHTML += `${some}°C ${sun_img}`;
                  break;
                default:
                  break;
              }
            }
          });
    }
    catch(err){
        console.log(err);
    }
    finally{

    }
}
getApi();
-76.577862, 17.383380
40.456412891088995, -3.6873697165230976;

31.964827620018422, 34.887017936763236;


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
   <h2 class="text-center " >Next Match:  Days: ${days}| Hrs: ${hours}| Min: ${minutes}| Sec:${seconds}</h2>
   </div>`;
   

  if (timeRemeins < 0) {
    clearInterval(timer);
    document.getElementById("myTimer").innerHTML = "EXPIRED";
  }
}, 1000);

// const API_KEY = "123cedf472ea7d740a81046892916adb";
// let some;
// async function getApi() {
//   try {
//     return await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?lat=${-76.577862}&lon=${17.38338}&appid=${API_KEY}`
//     )
//       .then((res) => res.json())
//       .then((item) => {
//         for (const res in item) {
//           some = Math.floor(item[res]["feels_like"] / 10);
//           document.getElementById("weather").innerHTML += `${some}°C`;
//         }
//       });
//   } catch (err) {
//     console.log(err);
//   } finally {
//   }
// }
// getApi();
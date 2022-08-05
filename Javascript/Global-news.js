let myDiv = document.getElementById("cardDiv");
async function getFunction() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f52cf79f95msh20f9ffa63e08f50p166bfdjsn244619f593a9",
      "X-RapidAPI-Host": "free-football-soccer-videos.p.rapidapi.com",
    },
  };
  try {
    waitingGif.innerHTML = 
    "<div class='d-flex justify-content-center'> <img src='../Photos/Global-news/loadinggif.gif'> </div>";
    return await fetch("https://free-football-soccer-videos.p.rapidapi.com/",options)
      .then((response) => response.json())
      .then((response) => {
      for (let i = 0; i < 50; i++) {
       myDiv.innerHTML += `<div class="card col-sm-12 col-lg-4 justify-content-center mt-5 ">
      ${response[i]["videos"][0]["embed"]}
      <h5 class ="card-title">${response[i]["title"]}</h5>
      <div class="card-body">
      <p class ="card-text">
      Y'all can find all the hot football news and videos
      </p>
      </div>
    </div>

      `;
        }
      });
  } 
  catch (err) {
    console.log(err);
  } 
  finally {
     waitingGif.innerHTML = ""
  }
}
getFunction();

const API_KEY = "123cedf472ea7d740a81046892916adb";
let some;
let sun_img = `<img style="width:2vw;" src="./Photos/Home/sun.png" alt=""/>`;
async function getApi() {
  try {
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
              document.getElementById(
                "weather1"
              ).innerHTML += `${some}°C ${sun_img}`;
              break;
            default:
              break;
          }
        }
      });
  } catch (err) {
    console.log(err);
  } finally {
  }
}
getApi();

// let myDiv = document.getElementById("cardDiv");

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "f52cf79f95msh20f9ffa63e08f50p166bfdjsn244619f593a9",
//     "X-RapidAPI-Host": "free-football-soccer-videos.p.rapidapi.com",
//   },
// };

// fetch("https://free-football-soccer-videos.p.rapidapi.com/", options)
//   .then((response) => response.json())
//   .then((response) => {
//     for (let i = 0; i < 30; i++) {
//       myDiv.innerHTML += `<div class="card col-sm-12 col-lg-4 justify-content-center ">
//       ${response[i]["videos"][0]["embed"]}
//       <h5 class ="card-title">${response[i]["title"]}</h5>
//       <div class="card-body">
//       <p class ="card-text">
//       Y'all can find all the hot football news and videos
//       </p>
//       <a href="#" class=" btn btn-danger">Press Me</a>
//       </div>
//     </div>

//       `;
//     }
//   })
//   .catch((err) => console.error(err));

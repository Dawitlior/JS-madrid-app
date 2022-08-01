// let myArray;


  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "f52cf79f95msh20f9ffa63e08f50p166bfdjsn244619f593a9",
  //     "X-RapidAPI-Host": "madrid-barajas-airport-flights.p.rapidapi.com",
  //   },
  // };

  // fetch("https://madrid-barajas-airport-flights.p.rapidapi.com/MAD/departures",options)
  //   .then((response) => response.json())
  //   .then((item)=>console.log(item))
  //   .catch((err) => console.error(err));



async function getFlightsApi(){

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f52cf79f95msh20f9ffa63e08f50p166bfdjsn244619f593a9",
      "X-RapidAPI-Host": "madrid-barajas-airport-flights.p.rapidapi.com",
    },
  };
  try{
    flightDiv.innerHTML = "<img src='../Photos/Packages/loadinggif.gif'>";
    return await fetch("https://madrid-barajas-airport-flights.p.rapidapi.com/MAD/departures",options)
      .then((res) => res.json())
      .then((item) => {
      for(let i=0;i<35;i++){
        console.log(item[i]);
         flights.innerHTML += `
        <div id="" class="card col-md-4 col-sm-12 d-flex justify-content-between gap-3  text-black text-center ">
        <div>
        <img class="card-img" src="../Photos/Flights/airplainicon.jpg">
        </div>
        <div> From : ${item[i].origin}</div>
            <div> To : ${item[i].destiny} </div>
            <div> company-name : ${item[i].companyName}</div>
            <div> Date : ${item[i].date}</div>
            <div> Terminal : ${item[i].terminal}</div>
            <div> Acronym : ${item[i].acronym}</div>
            <div> Time : ${item[i].estimadedhour}</div>
        </div>`;
      }
      
      });
  }
  catch(err){
    console.log(err);
  }
  finally{
    flightDiv.innerHTML = "";
  }
}
getFlightsApi();


const API_KEY = "123cedf472ea7d740a81046892916adb";
let some11;
let sun_img11 = `<img style="width:2vw;" src="/Photos/Home/sun.png" alt=""/>`;
async function getApi() {
  try {
    document.getElementById(
      "flightsGif"
    ).innerHTML = `<img style="width:2vw;" src="../Photos/Packages/loadinggif.gif" alt=""/>`;
    return await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${40.427416712151015}&lon=${-3.7042448033147037}&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((item) => {
        for (const res in item) {
          some11 = Math.floor(item[res]["feels_like"] / 10);
          // console.log(`${some}°C`);
          switch (some11) {
            case some11:
              document.getElementById(
                "flightsTemp"
              ).innerHTML += `${some11}°C ${sun_img11}`;
              break;
            default:
              break;
          }
        }
      });
  } catch (err) {
    console.log(err);
  } finally {
    document.getElementById("flightsGif").innerHTML = "";
  }
}
getApi();




    // async function getFunction(){

//   try{
//     return await fetch("https://madrid-barajas-airport-flights.p.rapidapi.com/MAD/departures")
//       .then((res) => res.json())
//       .then((item) => {

//       });
//   }
//   catch(err){
//     console.log(err);
//   }
//   finally{

//   }

// }
// getFunction()

//   acronym: "IBE";
//   airplaneType: "A332";
//   companyName: "Iberia";
//   date: "30/07/2022";
//   destiny: "LIMA";
//   estimadedDate: "30/07/2022";
//   estimadedhour: "14:06:00";
//   firstDoor: "S41";
//   flightNumber: "6659";
//   origin: "MAD";
//   programedHour: "13:35:00";
//   secondDoor: "S42";
//   state: "BOARDING";
//   terminal: "T4S";



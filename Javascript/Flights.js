let myArray;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f52cf79f95msh20f9ffa63e08f50p166bfdjsn244619f593a9",
    "X-RapidAPI-Host": "madrid-barajas-airport-flights.p.rapidapi.com",
  },
};

fetch(
  "https://madrid-barajas-airport-flights.p.rapidapi.com/MAD/departures",
  options
)
  .then((response) => response.json())
  .then((response) => {
    for (let i = 0; i < 9; i++) {
      console.log(response[i]);
      
      flights.innerHTML += `
        <div id="" class="card col-md-4 col-sm-12 d-flex justify-content-between  text-black text-center ">
        <div>
            <img class="card-img" src="../Photos/Flights/airplainicon.jpg">
        </div>
        
            
            <div>   ${response[i].destiny} </div>

            <div>  ${response[i].companyName}</div>

            <div> ${response[i].date}</div>

            <div>  ${response[i].origin}</div>

            <div>  ${response[i].state}</div>

            <div>  ${response[i].terminal}</div>

            <div>  ${response[i].acronym}</div>

        </div>`;
    }
  })
  .catch((err) => console.error(err));

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



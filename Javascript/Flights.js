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
  flight.innerHTML = "<img src='../Photos/Packages/loadinggif.gif'>";
  try{
    flightDiv.innerHTML = "<img src='../Photos/Packages/loadinggif.gif'>";
    return await fetch("https://madrid-barajas-airport-flights.p.rapidapi.com/MAD/departures",options)
      .then((res) => res.json())
      .then((item) => {
      for(let i=0;i<35;i++){
        console.log(item[i]);
         flights.innerHTML += `
        <div id="" class="card col-md-4 col-sm-12 d-flex justify-content-between  text-black text-center ">
        <div>
        <img class="card-img" src="../Photos/Flights/airplainicon.jpg">
        </div>
            <div>  ${item[i].destiny} </div>
            <div> ${item[i].companyName}</div>
            <div> ${item[i].date}</div>
            <div>  ${item[i].origin}</div>
            <div>  ${item[i].state}</div>
            <div>  ${item[i].terminal}</div>
            <div>  ${item[i].acronym}</div>
        </div>`
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



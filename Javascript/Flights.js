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

const API_KEY = "123cedf472ea7d740a81046892916adb";
let some11;
let sun_img11 = `<img style="width:2vw;" src="../Photos/Home/sun.png" alt=""/>`;


async function getFlightsApi(){

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f52cf79f95msh20f9ffa63e08f50p166bfdjsn244619f593a9",
      "X-RapidAPI-Host": "madrid-barajas-airport-flights.p.rapidapi.com",
    },
  };
  try{
    flightDiv.innerHTML =
      "<img style='width:75vw' src='../Photos/Flights/airplain.gif'>";
    return await fetch("https://madrid-barajas-airport-flights.p.rapidapi.com/MAD/departures",options)
      .then((res) => res.json());
  }
  catch(err){
    console.log(err);
  }
  finally{
    flightDiv.innerHTML = "";
  }
}
getFlightsApi();

function postFlightsApi(){
getFlightsApi().then((item) => {
  for (let i = 0; i < 35; i++) {
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
postFlightsApi();


async function getApiWetherFlights() {
  try {
    document.getElementById(
      "flightsGif"
    ).innerHTML = `<img style="width:2vw;" src="../Photos/Global-news/loadinggif.gif" alt=""/>`;
    return await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${40.427416712151015}&lon=${-3.7042448033147037}&appid=${API_KEY}`
    )
      .then((res) => res.json());

  } catch (err) {
    console.log(err);
  } finally {
    document.getElementById("flightsGif").innerHTML = "";
  }
}
getApiWetherFlights();

function postApiWetherFlights(){
getApiWetherFlights().then((item) => {
  for (const res in item) {
    some11 = Math.floor(item[res]["feels_like"] / 9);
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
}
postApiWetherFlights()


function postPopularSites(){
  let sitesDiv = document.getElementById("sitesDiv");
  return (sitesDiv.innerHTML = `
  
        <div class="col-10 col-sm-8 col-lg-6">
          <img src="../Photos/Flights/musionmadrid.jpg" loading="lazy" class="d-block mx-lg-auto img-fluid"/>
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3 text-dark">
            Prado Museum
          </h1>
          <p class="lead text-dark">
            The Prado Museum is the largest and most famous museum in Madrid, the capital of Spain.
             The museum has one of the largest collections of European art,
              from the 14th century to the beginning of the 19th century.
          </p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <a href="https://www.museodelprado.es/en">
              <button type="button" class="btn btn-danger btn-lg px-4 me-md-2">
                Read
              </button>
            </a>
          </div>
        </div>

        <div class="col-10 col-sm-8 col-lg-6">
          <img src="../Photos/Flights/palacemadrid.jpg" loading="lazy" class="d-block mx-lg-auto img-fluid"/>
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3 text-dark">
            The Royal Palace 
          </h1>
          <p class="lead text-dark">
            The Royal Palace of Madrid is the official seat of the Royal Family of Spain in the capital city of Madrid,
             but it is now used mainly for national ceremonies.
              King Felipe VI of Spain and his family chose to live in a more modest palace in the suburbs of Madrid,
               the Palace of Zarzuela. The palace is owned by the state,
                and is managed by a public agency of the Office of the President.
                 It is located on Calle Belen, west of the main business center of Madrid,
                  east of the Manzanares River. Several rooms in the palace are regularly open to the public,
                   except during government activities.
          </p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <a href="https://www.esmadrid.com/en/tourist-information/royal-palace">
              <button type="button" class="btn btn-danger btn-lg px-4 me-md-2">
                Read
              </button>
            </a>
          </div>
        </div>

          <div class="col-10 col-sm-8 col-lg-6">
          <img src="../Photos/Flights/shuk-migel.jpg" loading="lazy" class="d-block mx-lg-auto img-fluid"/>
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3 text-dark">
            San Miguel food market
          </h1>
          <p class="lead text-dark">
          The San Miguel food market (Mercado de San Miguel) is an indoor market of traditional food located in the heart of Madrid near the Plaza Mayor.
           The market was built at the beginning of the 20th century and was recently renovated for 6 years and reopened in 2009.
            The structure definitely stands out in the landscape, and this is because,
             unlike the other concrete buildings, the contemporary market structure is mostly made of iron and glass.
              This is one of the city's most important tourist sites,
               but alongside the crowds of tourists you will also notice quite a few locals,
                which is also what makes this market so authentic and a site not to be missed.

          </p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <a href="https://www.esmadrid.com/en/shopping/mercado-de-san-miguel">
              <button type="button" class="btn btn-danger btn-lg px-4 me-md-2">
                Read
              </button>
            </a>
          </div>
        </div>

          <div class="col-10 col-sm-8 col-lg-6">
          <img src="../Photos/Flights/palasmaior.jpg" loading="lazy" class="d-block mx-lg-auto img-fluid"/>
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3 text-dark">
            Plaza Mayor
          </h1>
          <p class="lead text-dark">
          Plaza Mayor is a central square in Madrid, the capital of Spain.
           The shape of the square is rectangular, 129 meters long and 94 meters wide.
            The square is surrounded by three-story residential buildings, including 237 balconies overlooking the square.
             The square has nine entrances and is located close to another central square, the Puerta del Sol.
              The square is relatively quiet during the week, and crowded on the weekends.
          </p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <a href="https://tiptreks.net/plaza-mayor/">
              <button type="button" class="btn btn-danger btn-lg px-4 me-md-2">
                Read
              </button>
            </a>
          </div>
        </div>

          <div class="col-10 col-sm-8 col-lg-6">
          <img src="../Photos/Flights/parkboanrtiro.jpg" loading="lazy" class="d-block mx-lg-auto img-fluid"/>
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3 text-dark">
            Buen Retiro Park
          </h1>
          <p class="lead text-dark">
            Buen Retiro Park is the central and important park of Madrid, the capital of Spain.
             The park covers an area of 1.4 square kilometers and is close to the Alcala Gate and the Prado Museum.
              The park contains, among other things, many statues, monuments and a lake,
               and is considered one of the most popular places in the city.
          </p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <a href="./html-pages/contact-us.html">
              <button type="button" class="btn btn-danger btn-lg px-4 me-md-2">
                Read
              </button>
            </a>
          </div>
        </div>

          <div class="col-10 col-sm-8 col-lg-6">
          <img src="../Photos/Flights/santiagobernabeu.jpg" loading="lazy" class="d-block mx-lg-auto img-fluid"/>
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3 text-dark">
            Santiago Bernabéu Stadium
          </h1>
          <p class="lead text-dark">
           The Santiago Bernabéu Stadium is a football stadium in Madrid,
            which has been used since 1947 as the home ground of the Real Madrid football team.
             The current capacity of the stadium is 81,044 seats, and it is the second largest stadium in Spain,
              and the eighth largest in Europe as a whole.
               Santiago Bernabeu is one of the most famous and prestigious football stadiums in the world,
                which hosted the Champions League final four times, in 1957, 1969, 1980 and 2010.
                 The finals of Euro 1964 and the World Cup 1982 were also held at the Bernabeu,
                  making it the first stadium in Europe to host both the European Championship final and the World Cup final. In an unusual way,
                   the stadium hosted the final of the 2018 Copa Libertadores,
                    the only time in history that the Argentine Super Clasico took place as part of the final of a continental tournament.
                     Also, the Bernabeu has hosted the Copa del Rey final 35 times, more than any other stadium in Spain.
          </p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <a href="./html-pages/contact-us.html">
              <button type="button" class="btn btn-danger btn-lg px-4 me-md-2">
                Read
              </button>
            </a>
          </div>
        </div>
  `);
}
postPopularSites()

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



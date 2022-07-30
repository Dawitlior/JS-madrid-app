let myArray;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f52cf79f95msh20f9ffa63e08f50p166bfdjsn244619f593a9",
    "X-RapidAPI-Host": "madrid-barajas-airport-flights.p.rapidapi.com",
  },
};

fetch("https://madrid-barajas-airport-flights.p.rapidapi.com/MAD/departures",options)
  .then((response) => response.json())
  .then((response) => {
    for (let i = 0; i < 15; i++) {
      console.log(response[i]);
      
      
    }
  })
  .catch((err) => console.error(err));

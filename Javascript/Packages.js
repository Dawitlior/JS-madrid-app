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
    waitingGif.innerHTML = "<div class='d-flex justify-content-center'> <img src='../Photos/Packages/loadinggif.gif'> </div>";
    return await fetch("https://free-football-soccer-videos.p.rapidapi.com/",options)
      .then((response) => response.json())
      .then((response) => {
      for (let i = 0; i < 30; i++) {
       myDiv.innerHTML += `<div class="card col-sm-12 col-lg-4 justify-content-center mt-5 ">
      ${response[i]["videos"][0]["embed"]}
      <h5 class ="card-title">${response[i]["title"]}</h5>
      <div class="card-body">
      <p class ="card-text">
      Y'all can find all the hot football news and videos
      </p>
      <a href="#" class=" btn btn-danger">Press Me</a>
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

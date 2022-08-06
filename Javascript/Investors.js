// import getApi from "./main";
// console.log(getApi());
const API_KEY = "123cedf472ea7d740a81046892916adb";
let temp;
let sun_img0 = `<img style="width:2vw;" src="/Photos/Home/sun.png" alt=""/>`;
const iconsArray = [
  "../Photos/Investors/image3.png",
  "../Photos/Investors/image4.png",
  "../Photos/Investors/image3.png",
  "../Photos/Investors/image4.png",
  "../Photos/Investors/image5.png",
  "../Photos/Investors/image7.png",
  "../Photos/Investors/image7.png",
  "../Photos/Investors/image8.png",
  "../Photos/Investors/image9.png",
  "../Photos/Investors/image10.png",
];
let counter = 0;

async function getApiInvestors(){
  loadingGif.innerHTML ="<div class='d-flex justify-content-center'> <img src='../Photos/Global-news/loadinggif.gif'></div>";
    try{
        return await fetch("https://my-json-server.typicode.com/Jeck99/fake-server/users")
          .then((res) => res.json())
    }
    catch(err){
        console.log(err);
    }
    finally{
        loadingGif.innerHTML = ""
    }
}
getApiInvestors();

function postApiInvestors() {
  getApiInvestors().then((item) => {
    item.forEach((element) => {
      investorsDiv.innerHTML += `<div class="card col-sm-12 col-lg-4 align-items-center mt-5 ">
            <img src="${iconsArray[counter++]}" class="card-img-top"
             <div class="card-body">
            <h5 class="card-title"></h5>
            <p>${element.name.first}</p>
            <p>${element.name.last}</p>
            <p>${element.age}</p>
            <p>${element.phone}</p>
            <p>${element.email}</p>
            <p>${element._id}</p>
             </div>
            </div>`;
    });
  });
}
postApiInvestors();


async function getApiWetherInvestors() {
  try {
    document.getElementById(
      "invesGif"
    ).innerHTML = `<img style="width:2vw;" src="../Photos/Global-news/loadinggif.gif" alt=""/>`;
    return await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${40.427416712151015}&lon=${-3.7042448033147037}&appid=${API_KEY}`
    )
      .then((res) => res.json())
  
  } catch (err) {
    console.log(err);
  } finally {
    document.getElementById("invesGif").innerHTML = "";
  }
}
getApiWetherInvestors();


function postApiWetherInvestors(){
  getApiWetherInvestors().then((item) => {
    for (const res in item) {
      temp = Math.floor(item[res]["feels_like"] / 9);
      // console.log(`${some}°C`);
      switch (temp) {
        case temp:
          document.getElementById(
            "tempPic"
          ).innerHTML += `${temp}°C ${sun_img0}`;
          break;
        default:
          break;
      }
    }
  });
}
postApiWetherInvestors();

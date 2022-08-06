const API_KEY = "123cedf472ea7d740a81046892916adb";
let temp2;
let sun_img011 = `<img style="width:2vw;" src="/Photos/Home/sun.png" alt=""/>`;

async function getFunction() {
  try {
    return await fetch(
      "https://api-football-standings.azharimm.site/leagues/esp.1/standings?season=2021&sort=asc"
    ).then((res) => res.json());
  } catch (err) {
    console.log(err);
  } finally {
  }
}
getFunction();

function postFunction() {
  getFunction().then((item) => {
    for (let key in item) {
      console.log(item[key]);
    }
  });
}

class Statistic {
  constructor(wins, losses, ties, gamesPlayed, points) {
    this.wins = wins;
    this.losses = losses;
    this.ties = ties;
    this.gamesPlayed = gamesPlayed;
    this.points = points;
  }
}

async function getApiWetherTeam() {
  try {
    document.getElementById(
      "TeamGif1"
    ).innerHTML = `<img style="width:2vw;" src="../Photos/Global-news/loadinggif.gif" alt=""/>`;
    return await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${40.427416712151015}&lon=${-3.7042448033147037}&appid=${API_KEY}`
    ).then((res) => res.json());
  } catch (err) {
    console.log(err);
  } finally {
    document.getElementById("TeamGif1").innerHTML = "";
  }
}
getApiWetherTeam();

function postApiWetherTeam() {
  getApiWetherTeam().then((item) => {
    for (const res in item) {
      temp2 = Math.floor(item[res]["feels_like"] / 9);
      // console.log(`${some}°C`);
      switch (temp2) {
        case temp2:
          document.getElementById(
            "TeamTemp1"
          ).innerHTML += `${temp2}°C ${sun_img011}`;
          break;
        default:
          break;
      }
    }
  });
}

postApiWetherTeam();

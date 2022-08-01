const API_KEY = "123cedf472ea7d740a81046892916adb";
let some1;
let sun_img1 = `<img style="width:2vw;" src="/Photos/Home/sun.png" alt=""/>`;
async function getApi() {
  try {
    document.getElementById(
      "aboutWeather1"
    ).innerHTML = `<img style="width:2vw;" src="../Photos/Packages/loadinggif.gif" alt=""/>`;
    return await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${40.427416712151015}&lon=${-3.7042448033147037}&appid=${API_KEY}`
    )
    .then((res) => res.json())
    .then((item) => {
        for (const res in item) {
        some1 = Math.floor(item[res]["feels_like"] / 10);
          // console.log(`${some}°C`);
        switch (some1) {
            case some1:
            document.getElementById(
              "aboutWeather"
            ).innerHTML += `${some1}°C ${sun_img1}`;
            break;
            default:
            break;
        }
        }
    });
  } catch (err) {
    console.log(err);
  } finally {
    document.getElementById("aboutWeather1").innerHTML = "";
  }
}
getApi();

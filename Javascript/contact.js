const API_KEY = "123cedf472ea7d740a81046892916adb";
let temp1;
let sun_img01 = `<img style="width:2vw;" src="/Photos/Home/sun.png" alt=""/>`;
async function getApi() {
  try {
    document.getElementById(
      "contactGif"
    ).innerHTML = `<img style="width:2vw;" src="../Photos/Global-news/loadinggif.gif" alt=""/>`;
    return await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${40.427416712151015}&lon=${-3.7042448033147037}&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((item) => {
        for (const res in item) {
          temp1 = Math.floor(item[res]["feels_like"] / 10);
          // console.log(`${some}°C`);
          switch (temp1) {
            case temp1:
              document.getElementById(
                "contactTemp"
              ).innerHTML += `${temp1}°C ${sun_img01}`;
              break;
            default:
              break;
          }
        }
      });
  } catch (err) {
    console.log(err);
  } finally {
    document.getElementById("contactGif").innerHTML = "";
  }
}
getApi();

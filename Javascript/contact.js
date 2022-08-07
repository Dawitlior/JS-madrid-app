const API_KEY = "123cedf472ea7d740a81046892916adb";
let temp1;
let sun_img01 = `<img style="width:2vw;" src="../Photos/Home/sun.png" alt=""/>`;
async function getApiWetherContact() {
  try {
    document.getElementById(
      "contactGif"
    ).innerHTML = `<img style="width:2vw;" src="../Photos/Global-news/loadinggif.gif" alt=""/>`;
    return await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${40.427416712151015}&lon=${-3.7042448033147037}&appid=${API_KEY}`
    )
      .then((res) => res.json());
      
  } catch (err) {
    console.log(err);
  } finally {
    document.getElementById("contactGif").innerHTML = "";
  }
}
getApiWetherContact();

function postApiWetherContact(){
getApiWetherContact().then((item) => {
  for (const res in item) {
    temp1 = Math.floor(item[res]["feels_like"] / 9);
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
}
postApiWetherContact();


function returnContactPage(){
  let contactDiv = document.getElementById("contactDiv");
return (contactDiv.innerHTML = `
   <h1 class="h1 text-black mb-3 mt-5">Contact</h1>
        <p class="text-black">
          Email us with any questions or inquiries or call 213-387-9322.
          <br />
          we would be happy to answer your question and feedback.
        </p>

        <form class="row justify-content-center">
          <div class="row justify-content-center">
            <div class="col-md-3">
              <label for="firstname" class="form-label"> </label>
              <input
                type="text"
                class="form-control text-center"
                id="firstname"
                placeholder="First Name"
                required
              />
            </div>
            <div class="col-sm col-md-3">
              <label for="lastname" class="form-label"> </label>
              <input type="text" class="form-control text-center text-black" id="lastname" placeholder="Last Name" required/>
            </div>
          </div>

          <div class="row justify-content-center">
            <div class="col-md-6">
              <label for="email" class="form-label"> </label>
              <input type="email" class="form-control text-center" id="email" placeholder=" Email@gmail.com" required/>
            </div>
          </div>

          <div class="row justify-content-center">
            <div class="col-md-6">
              <label for="phoneNumber" class="form-label"> </label>
              <input type="tel" class="form-control text-center" id="phoneNumber" placeholder="Phone Number" required/>
            </div>
          </div>

          <div class="row justify-content-center mt-2">
            <div class="col-sm-1 col-md-6">
              <label for="comment" class="form-label"> </label>
              <textarea name="comment" class="form-control text-center" id="comment" cols="50" rows="10" placeholder="Comments, Questions?" required></textarea>
            </div>

            <div class="row mt-5 mb-5 justify-content-center">
              <div class="col-md-6">
                <a href=""><button type="submit" class="btn btn-danger">SEND</button></a>
              </div>
            </div>
          </div>
        </form>
  `);
}
returnContactPage();
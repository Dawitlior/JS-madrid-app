const API_KEY = "123cedf472ea7d740a81046892916adb";

async function getApi(){
    try{
        return await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${40.428984775380435}&lon=${-3.702871512253494}&appid=${API_KEY}`
        )
          .then((res) => res.json())
          .then((item) => console.log(item));
    }
    catch(err){
        console.log(err);
    }
    finally{

    }
}
getApi();

const API_KEY = "123cedf472ea7d740a81046892916adb";

async function getApi(){
    try{
        return await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${40.456412891088995}&lon=${-3.6873697165230976}&appid=${API_KEY}`
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

40.456412891088995, -3.6873697165230976;
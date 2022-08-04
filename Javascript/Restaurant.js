async function getFunction(){
    try{
        return await fetch(
          "https://api-football-standings.azharimm.site/leagues/esp.1/standings?season=2021&sort=asc"
        )
          .then((res) => res.json())
          .then((item) => {
            for(let key in item){
               console.log(item[key]); 
            }
          });
    }
    catch(err){
        console.log(err);
    }
    finally{

    }
}
getFunction();

class Statistic{
constructor(wins,losses,ties,gamesPlayed,points){
    this.wins = wins;
    this.losses = losses;
    this.ties = ties;
    this.gamesPlayed = gamesPlayed;
    this.points = points;
}
}


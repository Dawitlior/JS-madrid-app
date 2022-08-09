const API_KEY = "123cedf472ea7d740a81046892916adb";
let temp2;
let sun_img011 = `<img style="width:2vw;" src="/Photos/Home/sun.png" alt=""/>`;


class Statistic {
  constructor(wins, losses, ties, gamesPlayed, points) {
    this.wins = wins;
    this.losses = losses;
    this.ties = ties;
    this.gamesPlayed = gamesPlayed;
    this.points = points;
  }
}
const show = new Statistic();

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



// function displayTwenty() {
// const ArrayOptions = Array.from(document.getElementsByClassName('objTwnty'))
// const optionA = document.getElementById("optionTwenty");
// console.log(ArrayOptions);
//   getFunction().then((item) => {
//     // for (let key in item) {
//     //   console.log(item[key]["standings"]);
//     //   // show.wins = ;
//     // }  
//     for(let i = 0 ; i<1 ; i++){
//       let myStateDiv = document.getElementById("statsDiv");
//       myStateDiv.innerHTML=item["data"]["standings"]["0"]["stats"]["12"];
//       switch (ArrayOptions) {
//         case optionA:
//           displayTwenty()
//           break;

//         default:
//           break;
//       }

//     }
//   })
// }


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


function printAllPlayersDetails(){
let myMainDiv = document.getElementById("teamDiv");
return (myMainDiv.innerHTML = `
   
        <div class="col-10 col-sm-8 col-lg-6">
          <img src="../Photos/Team/COURTOIS_1.jpg" loading="lazy" class="d-block mx-lg-auto img-fluid"/>
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3 text-dark">
            COURTOIS <span class="text-danger"><strong>1</strong></span>
          </h1>
          <p class="lead text-black">
            Thibaut Nicolas Marc Courtois (born 11 May 1992) is a Belgian professional
             footballer who plays as a goalkeeper for Spanish club Real Madrid
            and the Belgium national team.
             He is considered one of the best goalkeepers in world football.
          </p>
        </div>

         <div class="col-10 col-sm-8 col-lg-6">
          <img src="../Photos/Team/CARVAJAL_2.jpg" loading="lazy" class="d-block mx-lg-auto img-fluid"/>
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3 text-dark">
            CARVAJAL <span class="text-danger"><strong>2</strong></span>
          </h1>
          <p class="lead text-black">
            Daniel "Dani" Carvajal Ramos (born 11 January 1992)
             is a Spanish professional footballer who plays
              as a right back for Real Madrid and the Spain national team.
          </p>
        </div>

          <div class="col-10 col-sm-8 col-lg-6">
          <img src="../Photos/Team/MILITAO_3.jpg" loading="lazy" class="d-block mx-lg-auto img-fluid"/>
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3 text-dark">
            E.MILITÃO <span class="text-danger"><strong>3</strong></span>
          </h1>
          <p class="lead text-black">
            Éder Gabriel Militão (born 18 January 1998)
             is a Brazilian professional footballer who plays for the Spanish
            club Real Madrid and the Brazil football team.
             Mainly a central defender,
            he can also play as a right back or defensive midfielder.
          </p>
        </div>

          <div class="col-10 col-sm-8 col-lg-6">
          <img src="../Photos/Team/ALABA_4.jpg" loading="lazy" class="d-block mx-lg-auto img-fluid"/>
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3 text-dark">
            ALABA <span class="text-danger"><strong>4</strong></span>
          </h1>
          <p class="lead text-black">
            David Olatukunbo Alaba (born 24 June 1992)
            is an Austrian professional footballer who plays
            either as a central midfielder, wide midfielder,
             left-back or centre-back for La Liga club Real Madrid
            and the Austria national team.
            Alaba is widely regarded as one of the best defenders
           of his generation.
          </p>
        </div>

          <div class="col-10 col-sm-8 col-lg-6">
          <img src="../Photos/Team/VALLEJO_5.jpg" loading="lazy" class="d-block mx-lg-auto img-fluid"/>
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3 text-dark">
            VALLEJO <span class="text-danger"><strong>5</strong></span>
          </h1>
          <p class="lead text-black">
           Jesús Vallejo Lázaro (born 5 January 1997)
           is a Spanish professional footballer who plays as a centre-back for Real Madrid.
          </p>
        </div>

          <div class="col-10 col-sm-8 col-lg-6">
          <img src="../Photos/Team/NACHO_6.jpg" loading="lazy" class="d-block mx-lg-auto img-fluid"/>
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3 text-dark">
            NACHO <span class="text-danger"><strong>6</strong></span>
          </h1>
          <p class="lead text-black">
            José Ignacio Fernández Iglesias (born 18 January 1990),
            known as Nacho ( is a Spanish professional footballer
           who plays as a defender for Real Madrid and the Spain national team.
          </p>
        </div>

          <div class="col-10 col-sm-8 col-lg-6">
          <img src="../Photos/Team/HAZARD_7.jpg" loading="lazy" class="d-block mx-lg-auto img-fluid"/>
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3 text-dark">
            HAZARD <span class="text-danger"><strong>7</strong></span>
          </h1>
          <p class="lead text-black">
           Eden Michael Hazard (born 7 January 1991) is a Belgian
           professional footballer who plays as a winger or attacking
           midfielder for Spanish club Real Madrid and captains
           the Belgium national team. Known for his creativity,
            dribbling, passing and vision,
           Hazard is considered one of the best players of his generation.
          </p>
        </div>

          <div class="col-10 col-sm-8 col-lg-6">
          <img src="../Photos/Team/KROOS_8.jpg" loading="lazy" class="d-block mx-lg-auto img-fluid"/>
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3 text-dark">
            KROOS <span class="text-danger"><strong>8</strong></span>
          </h1>
          <p class="lead text-black">
            Toni Kroos (born 4 January 1990) is a German professional
           footballer who plays as a midfielder for La Liga club Real Madrid.
           Kroos plays mainly as a central midfielder,
            but has also been deployed as a deep-lying playmaker in his career.
           He is known for his vision, passing, creativity,
           crossing and set-piece ability,
           and is widely regarded as one of the greatest midfielders of all time.
          </p>
        </div>

          <div class="col-10 col-sm-8 col-lg-6">
          <img src="../Photos/Team/BENZEMA_9.jpg" loading="lazy" class="d-block mx-lg-auto img-fluid"/>
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3 text-dark">
            BENZEMA <span class="text-danger"><strong>9</strong></span>
          </h1>
          <p class="lead text-black">
            The Prado Museum is the largest and most famous museum in Madrid, the capital of Spain.
             The museum has one of the largest collections of European art,
              from the 14th century to the beginning of the 19th century.
          </p>
        </div>

          <div class="col-10 col-sm-8 col-lg-6">
          <img src="../Photos/Team/MODRIC_10.jpg" loading="lazy" class="d-block mx-lg-auto img-fluid"/>
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3 text-dark">
            MODRIĆ <span class="text-danger"><strong>10</strong></span>
          </h1>
          <p class="lead text-black">
            The Prado Museum is the largest and most famous museum in Madrid, the capital of Spain.
             The museum has one of the largest collections of European art,
              from the 14th century to the beginning of the 19th century.
          </p>
        </div>

          <div class="col-10 col-sm-8 col-lg-6">
          <img src="../Photos/Team/ASENSIO_11.jpg" loading="lazy" class="d-block mx-lg-auto img-fluid"/>
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3 text-dark">
            ASENSIO <span class="text-danger"><strong>11</strong></span>
          </h1>
          <p class="lead text-black">
            The Prado Museum is the largest and most famous museum in Madrid, the capital of Spain.
             The museum has one of the largest collections of European art,
              from the 14th century to the beginning of the 19th century.
          </p>
        </div>

        <div class="col-10 col-sm-8 col-lg-6">
          <img src="../Photos/Team/01_ODRIOZOLA_12.jpg" loading="lazy" class="d-block mx-lg-auto img-fluid"/>
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3 text-dark">
            ODRIOZOLA <span class="text-danger"><strong>12</strong></span>
          </h1>
          <p class="lead text-black">
            The Prado Museum is the largest and most famous museum in Madrid, the capital of Spain.
             The museum has one of the largest collections of European art,
              from the 14th century to the beginning of the 19th century.
          </p>
        </div>

          <div class="col-10 col-sm-8 col-lg-6">
          <img src="../Photos/Team/LUNIN_13.jpg" loading="lazy" class="d-block mx-lg-auto img-fluid"/>
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3 text-dark">
            LUNIN <span class="text-danger"><strong>13</strong></span>
          </h1>
          <p class="lead text-black">
            The Prado Museum is the largest and most famous museum in Madrid, the capital of Spain.
             The museum has one of the largest collections of European art,
              from the 14th century to the beginning of the 19th century.
          </p>
        </div>

          <div class="col-10 col-sm-8 col-lg-6">
          <img src="../Photos/Team/CASEMIRO_14.jpg" loading="lazy" class="d-block mx-lg-auto img-fluid"/>
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3 text-dark">
            CASEMIRO <span class="text-danger"><strong>14</strong></span>
          </h1>
          <p class="lead text-black">
            The Prado Museum is the largest and most famous museum in Madrid, the capital of Spain.
             The museum has one of the largest collections of European art,
              from the 14th century to the beginning of the 19th century.
          </p>
        </div>


          <div class="col-10 col-sm-8 col-lg-6">
          <img src="../Photos/Team/VALVERDE_15.jpg" loading="lazy" class="d-block mx-lg-auto img-fluid"/>
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3 text-dark">
            VALVERDE <span class="text-danger"><strong>15</strong></span>
          </h1>
          <p class="lead text-black">
            The Prado Museum is the largest and most famous museum in Madrid, the capital of Spain.
             The museum has one of the largest collections of European art,
              from the 14th century to the beginning of the 19th century.
          </p>
        </div>

          <div class="col-10 col-sm-8 col-lg-6">
          <img src="../Photos/Team/LUCAS_V_17.jpg" loading="lazy" class="d-block mx-lg-auto img-fluid"/>
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3 text-dark">
            LUCAS V. <span class="text-danger"><strong>17</strong></span>
          </h1>
          <p class="lead text-black">
            The Prado Museum is the largest and most famous museum in Madrid, the capital of Spain.
             The museum has one of the largest collections of European art,
              from the 14th century to the beginning of the 19th century.
          </p>
        </div>

          <div class="col-10 col-sm-8 col-lg-6">
          <img src="../Photos/Team/TCHOUAMENI_18.jpg" loading="lazy" class="d-block mx-lg-auto img-fluid"/>
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3 text-dark">
            TCHOUAMÉNI <span class="text-danger"><strong>18</strong></span>
          </h1>
          <p class="lead text-black">
            The Prado Museum is the largest and most famous museum in Madrid, the capital of Spain.
             The museum has one of the largest collections of European art,
              from the 14th century to the beginning of the 19th century.
          </p>
        </div>

          <div class="col-10 col-sm-8 col-lg-6">
          <img src="../Photos/Team/CEBALLOS_19.jpg" loading="lazy" class="d-block mx-lg-auto img-fluid"/>
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3 text-dark">
            D. CEBALLOS <span class="text-danger"><strong>19</strong></span>
          </h1>
          <p class="lead text-black">
            The Prado Museum is the largest and most famous museum in Madrid, the capital of Spain.
             The museum has one of the largest collections of European art,
              from the 14th century to the beginning of the 19th century.
          </p>
        </div>

          <div class="col-10 col-sm-8 col-lg-6">
          <img src="../Photos/Team/VINI_20.jpg" loading="lazy" class="d-block mx-lg-auto img-fluid"/>
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3 text-dark">
            VINI JR. <span class="text-danger"><strong>20</strong></span>
          </h1>
          <p class="lead text-black">
            The Prado Museum is the largest and most famous museum in Madrid, the capital of Spain.
             The museum has one of the largest collections of European art,
              from the 14th century to the beginning of the 19th century.
          </p>
        </div>

          <div class="col-10 col-sm-8 col-lg-6">
          <img src="../Photos/Team/RODRYGO_21.jpg" loading="lazy" class="d-block mx-lg-auto img-fluid"/>
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3 text-dark">
            RODRYGO <span class="text-danger"><strong>21</strong></span>
          </h1>
          <p class="lead text-black">
            The Prado Museum is the largest and most famous museum in Madrid, the capital of Spain.
             The museum has one of the largest collections of European art,
              from the 14th century to the beginning of the 19th century.
          </p>
        </div>

          <div class="col-10 col-sm-8 col-lg-6">
          <img src="../Photos/Team/RUDIGER_22.jpg" loading="lazy" class="d-block mx-lg-auto img-fluid"/>
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3 text-dark">
            RÜDIGER <span class="text-danger"><strong>22</strong></span>
          </h1>
          <p class="lead text-black">
            The Prado Museum is the largest and most famous museum in Madrid, the capital of Spain.
             The museum has one of the largest collections of European art,
              from the 14th century to the beginning of the 19th century.
          </p>
        </div>

          <div class="col-10 col-sm-8 col-lg-6">
          <img src="../Photos/Team/MENDY_23.jpg" loading="lazy" class="d-block mx-lg-auto img-fluid"/>
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3 text-dark">
            F. MENDY <span class="text-danger"><strong>23</strong></span>
          </h1>
          <p class="lead text-black">
            The Prado Museum is the largest and most famous museum in Madrid, the capital of Spain.
             The museum has one of the largest collections of European art,
              from the 14th century to the beginning of the 19th century.
          </p>
        </div>

          <div class="col-10 col-sm-8 col-lg-6">
          <img src="../Photos/Team/MARIANO_24.jpg" loading="lazy" class="d-block mx-lg-auto img-fluid"/>
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3 text-dark">
            MARIANO <span class="text-danger"><strong>24</strong></span>
          </h1>
          <p class="lead text-black">
            The Prado Museum is the largest and most famous museum in Madrid, the capital of Spain.
             The museum has one of the largest collections of European art,
              from the 14th century to the beginning of the 19th century.
          </p>
        </div>

          <div class="col-10 col-sm-8 col-lg-6">
          <img src="../Photos/Team/CAMAVINGA_25.jpg" loading="lazy" class="d-block mx-lg-auto img-fluid"/>
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3 text-dark">
            CAMAVINGA <span class="text-danger"><strong>25</strong></span>
          </h1>
          <p class="lead text-black">
            The Prado Museum is the largest and most famous museum in Madrid, the capital of Spain.
             The museum has one of the largest collections of European art,
              from the 14th century to the beginning of the 19th century.
          </p>
        </div>



  `);
}
printAllPlayersDetails();
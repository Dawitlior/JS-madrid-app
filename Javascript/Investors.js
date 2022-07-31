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
async function getApi(){
    loadingGif.innerHTML =
      "<img class='justify-content-center' src='../Photos/Packages/loadinggif.gif'>";
    try{
        return await fetch("https://my-json-server.typicode.com/Jeck99/fake-server/users")
          .then((res) => res.json())
          .then((item) => {
            item.forEach(element => {
                 investorsDiv.innerHTML += `<div class="card col-sm-12 col-lg-4 align-items-center mt-5 ">
            <img src="${iconsArray[counter++]}" class="card-img-top"
             <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p>${element._id}</p>
            <p>${element.age}</p>
            <p>${element.name.last}</p>
            <p>${element.name.first}</p>
            <p>${element.phone}</p>
            <p>${element.email}</p>
             </div>
            </div>`;
            });
           
          })
    }
    catch(err){
        console.log(err);
    }
    finally{
        loadingGif.innerHTML = ""
    }
}
getApi()
async function getApi(){
    try{
        return await fetch("https://my-json-server.typicode.com/Jeck99/fake-server/users")
          .then((res) => res.json())
          .then((item) => console.log(item));
    }
    catch(err){
        console.log(err);
    }
    finally{

    }
}
getApi()
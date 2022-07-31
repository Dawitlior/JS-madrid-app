async function getFunction(){
    try{
        return await fetch()
        .then((res)=>res.json())
        .then((item)=>console.log(item));
    }
    catch(err){
        console.log(err);
    }
    finally{

    }
}

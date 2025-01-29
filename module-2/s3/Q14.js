
function fetchData(){
   return new Promise((res,rej) => {
    setTimeout(() => {
        let chance = Math.random();
        if(chance > 0.5){
            res("Data fetched successfully!");
        }else{
            rej("Failed to fetch data.");
        }
    }, 1000);
   })
}

async function fetchDataHandler() {
    try {
        const data =await fetchData();
        console.log(data);
    } catch (error) {
        console.log("Error : ", error);
    }
}

fetchDataHandler();
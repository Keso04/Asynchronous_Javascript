//Task N1
function mySetTimeOut(delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`You waited for ${delay / 1000} seconds`);
        }, delay);
    });
}

mySetTimeOut(3000).then((res) => console.log(res));

//Task N2
function makeToys(){
    return new Promise((resolve, reject) => {
    if(Math.random() > 0.3){
        resolve("Undefected toy");
    }
    else{
        reject("Defected toy");
    }
  });
}

//Task N3
function deliverToys(status){
    return new Promise((resolve, reject) => {
    if(status === "Undefected toy"){
        resolve("Toy is ready for delivery...");
        console.log("Toy is ready for delivery");
    }
    else{
        reject("Toy is not ready for delivery...")
    }
  });
}

//Task N4
function sellYourToy(deliveryStatus){
    return new Promise((resolve, reject) => {
        if(deliveryStatus === "Toy is ready for delivery..."){
            resolve("Toy was successful!!");
        }
        else{
            reject("Toy was unsuccessful");
        }
      });
}

mySetTimeOut(3000).then(() =>{
    return makeToys();
}).then((status) =>{
    console.log(status);
    return mySetTimeOut(2000);
}).then(() => {
    const status = "Undefected toy";
    return deliverToys(status);
}).then(() => {
    return mySetTimeOut(1000);
}).then(() =>{
    const deliveryStatus = "Toy is ready for delivery...";
    return sellYourToy(deliveryStatus);
}).then((result) => {
    console.log(result);
}).catch((err) => console.log(err));


// მეორე ხერხით იგივე დავალება, ცალ-ცალკე გაშვებით

//Task 2 (THE SECOND WAY) 
async function makeToys() {
    if (Math.random() > 0.3) {
        return "Undefected toy";
    }
    else {
        return "Defected toy";
    }
}

//Task N3 (THE SECOND WAY)
async function deliverToys(status) {
    if (status === "Undefected toy") {
        return "Toy is ready for delivery...";
    }
    else {
        return "Toy is not ready for delivery...";
    }
}

//Task N4 (THE SECOND WAY)
async function sellYourToy(deliveryStatus) {
    if (deliveryStatus === "Toy is ready for delivery...") {
        return "Toy was successful!!";
    }
    else {
        return "Toy was unsuccessful";
    }
}

async function promisify(){
    try{
        const status = await makeToys();
        await mySetTimeOut(3000);
        console.log(status);
        const deliveryStatus = await deliverToys(status);
        await mySetTimeOut(2000);
        console.log(deliveryStatus);
        const result = await sellYourToy(deliveryStatus);
        await mySetTimeOut(1000);
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
}

promisify();
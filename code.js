// function nokr(){
    

//     setTimeout(()=>{
//         console.log("idr ah jao");

//     },2000) // take some time
// }
// nokr();// invoke kya ha function ko
// console.log("End");

// function makeFriedEgg(Callback){
//     setTimeout(()=>{
//         Callback("Egg fri ho  gya")

//     },2000)
// }

// function andaFriedCallBack(para){
//     console.log(para);

// }
// function parataTyarKro(callback){
//     setTimeout(()=>{
//         callback("parataTyarHa");


//     },2000)
// }

// function paratatyarHaCallback(para){
//     console.log(para);
// }
// makeFriedEgg(andaFriedCallBack);
// parataTyarKro(paratatyarHaCallback);
// console.log("End"); 



function chaiTyarKro(callback){
    setTimeout(()=>{
        callback("chaityarha"); // call it

    },2000)
}

function paratatyarKro(callback){
    setTimeout(()=>{
        callback("parata Tyar Ha"); // call it

    },2000)
}

chaiTyarKro(function(para1){
    console.log(para1);
    paratatyarKro(function(para2){
        console.log(para2);
    })

})
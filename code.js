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



// function chaiTyarKro(callback){
//     setTimeout(()=>{
//         callback("chaityarha"); // call it

//     },2000)
// }

// function paratatyarKro(callback){
//     setTimeout(()=>{
//         callback("parata Tyar Ha"); // call it

//     },2000)
// }

// chaiTyarKro(function(para1){
//     console.log(para1);
//     paratatyarKro(function(para2){
//         console.log(para2);
//     })

// })


function chaiTyarKro(){
    return new Promise((r,rej)=>{
        setTimeout(()=>{
            if(2==1){
                r("bnao ge");
            }
            else{
                rej("nai bna skte");
            }
        },2000)
    })
    
}



async function resultt(){
    try{
        let result=await chaiTyarKro();
        console.log(result);
    }
    catch(er){
        console.log(er);

    }
}

resultt();
// function rotTyarKro(){
//     return new Promise((r,rej)=>{
//         setTimeout(()=>{
//             if(1==1){
//                 r("roti bnao ge");
//             }
//             else{
//                 rej("nai bna skte");
//             }
//         },2000)
//     })
    
// }

// chaiTyarKro().then((v)=>{
//     console.log(v);
//     return rotTyarKro(); // for other than

// }).then((v)=>{
//     console.log(v);

// })
// .catch((er)=>{
//     console.log(er);
// })

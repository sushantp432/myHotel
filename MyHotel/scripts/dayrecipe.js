import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();




// let url ="https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata";
// let container =document.getElementById("box");
// // let container1 =document.getElementById("box1");
// container.innerHTML=null;
// import {getdata,append} from "./fetch.js"

// getdata(url).then((res)=>{
//     append(res,container);
//     // console.log(res)
// })

let url ="https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata";
let container =document.getElementById("box");
container.innerHTML=null;
import {getdata1,append1} from "./fetch.js"

getdata1(url).then((res)=>{
    append1(res,container);
    // console.log(res)
})
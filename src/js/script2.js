import iki from "/images/iki.jpg"
import uc from "@images/uc.jpg"
import silver from "/../public/silver.jpg"
import cyborg from "../../public/cyborg.jpg"
import fut from "../images/fut.jpg"
import "@styles/style3.css"
import "@scripts/script3.js"

const img1=document.createElement("img");
img1.src=iki;
img1.addEventListener("load",function(){

    document.querySelector("body").append(img1);

});

const img2=document.querySelector(".js-img");
img2.src=uc;


const img3=document.querySelector(".js-img-public");
img3.src=silver;

const img4=document.querySelector(".js-img-public-2");
img4.src=cyborg;

const img5=document.querySelector(".js-img-relative");
img5.src=fut;
import "./style.css";
import "./home-style.css";

import butter from "./img/butter_croissant.webp";
import almond from './img/almond_croissant.jpg';
import pistachio from './img/jst_menu_item_double_baked_pistachio_croissant_1.jpg';
import choco from './img/jst_menu_item_pain_au_chocolat_1.jpg';
import turon from './img/jst_menu_item_turon_turnover_banana_jackfruit_1.jpg';
import matchaS from './img/jst_menu_item_supreme_matcha_1.jpg';
import strawS from './img/jst_menu_item_supreme_strawberry_1-850x850.jpg';
import tuxedoS from './img/jst_menu_item_supreme_tuxedo_1-850x850.jpg';
import ubeS from './img/jst_menu_item_supreme_ube_1-850x850.jpg';
import gingerS from './img/Supreme_Gingerbread-1.png';
import bundle from './img//bundle box.png';
import eggnogS from './img/Supreme_Eggnog-1-850x851.png';
import gingerC from './img/Leavenly-Goods-Holiday-2021-7233-scaled-e1637527126643.jpg (1).webp';
import fButter from './img/Croissant_Butter_Frozen.png';
import fHam from './img/Croissant_HamCheese_Frozen.png';



console.log(butter)

const navRadio = document.querySelectorAll('input[name="nav"]');
const content = document.querySelector("#content");
home();
navRadio.forEach((radio) => {
    radio.addEventListener("change",()=>{
       if(radio.id === "home" && radio.checked){
  
        home();
       };
       if(radio.id === "menu" && radio.checked){
  
       };
    })
});

function home(){

};
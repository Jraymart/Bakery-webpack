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
import gingerC from './img/Leavenly-Goods-Holiday-2021-7233-scaled-e1637527126643.jpg.webp';
import fButter from './img/Croissant_Butter_Frozen.png';
import fHam from './img/Croissant_HamCheese_Frozen.png';

const navRadio = document.querySelectorAll('input[name="nav"]');
const content = document.querySelector("#content");
//home();
navRadio.forEach((radio) => {
    radio.addEventListener("change",()=>{
       if(radio.id === "home" && radio.checked){
        content.innerHTML="";
        home();
       };
       if(radio.id === "menu" && radio.checked){
        content.innerHTML="";
       // menu();
       };
    })
});

function home(){
    const homeContent = document.createElement("div")
    homeContent.classList.add("home-content");
    homeContent.innerHTML = `<div class="home-info">
                    <h2>THE JOY IS IN THE MIX!</h2>
                    <p>Here at Leavenly Goods, we take pride in the creations we make, ensuring only the highest quality
                        ingredients are used.
                        Our bakery offers a delightful mix of viennoiseries and classic Filipino baked goods, each made
                        with the utmost care and attention to detail.
                        Come experience your next favorite treat with us today!
                    </p>
                    <!--Change to a button and connect it to the radio buttons-->
                    <button id="menubtn" onclick="document.querySelector('#menu').click()">EXPLORE OUR MENU</button>
                </div>`;
    content.appendChild(homeContent);

   const featuredContent = document.createElement("div");
    featuredContent.classList.add("home-featured-content");
    featuredContent.innerHTML = `<h2>Featured Products</h2>
                <div class="product-carousel">
                    <div class="product-wrapper">
                        <div class="product-slider">
                            <div id="slide-1" class="slide">
                                <div class="product">
                                    
                                </div>
                                <div class="product">
                                    
                                </div>
                                <div class="product">
                                    
                                </div>
                                <div class="product">
                                    
                                </div>
                                <div class="product">
                                   
                                </div>
                            </div>
                            <div id="slide-2" class="slide">
                                <div class="product">
                                    
                                </div>
                                <div class="product">
                                   
                                </div>
                                <div class="product">
                                   
                                </div>
                                <div class="product">
                                   
                                </div>
                                <div class="product">
                                   
                                </div>
                            </div>
                            <div id="slide-3" class="slide">
                                <div class="product">
                                   
                                </div>
                                <div class="product">
                                   
                                </div>
                                <div class="product">
                                    
                                </div>
                                <div class="product">
                                   
                                </div>
                                <div class="product">
                                    
                                </div>
                            </div>
                        </div>
                        <div class="carousel-nav">
                            <a href="#slide-1"></a>
                            <a href="#slide-2"></a>
                            <a href="#slide-3"></a>
                        </div>`;

    content.appendChild(featuredContent);
    const productImages = [
        butter,almond,pistachio,choco,
        turon,matchaS,strawS,tuxedoS,
        ubeS,gingerS,bundle,
        eggnogS,gingerC,fButter,fHam
    ];
    const productNames = ["Butter Croissant", 
        "Double Baked Almond Croissant", 
        "Double Baked Pistachio", 
        "Pain Au Chocolat","Turon Turnover",
        "Matcha Supreme","Strawberry Supreme",
        "Tuxedo Supreme", "Ube Supreme", 
        "Gingerbread Supreme","Croissant Bundle Box",
        "Eggnog Supreme","Gingerbread Cookie",
        "Frozen Butter Croissant","Frozen Ham & Cheese Croissant"];

    const product = document.querySelectorAll(".product");
    product.forEach((item,index)=>{
        const img = document.createElement("img");
        img.src = productImages[index];
        const h3 = document.createElement("h3");
        h3.textContent = productNames[index];

        item.appendChild(img);
        item.appendChild(h3);
    });

    const mapContent = document.createElement("div");
    mapContent.classList.add("map-content");
    mapContent.innerHTML = `<h2>Find us here!</h2>
                <div class="mapframe">
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2606.9182386188404!2d-123.1293100230839!3d49.20211057645585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548671110d300001%3A0x50ca5ceeffec7511!2sLeavenly%20Goods%20Bakery!5e0!3m2!1sen!2sca!4v1733976530083!5m2!1sen!2sca"
                    height="350" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>`;
    content.appendChild(mapContent);
};

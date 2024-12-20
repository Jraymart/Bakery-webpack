import "./stylesheets/style.css";
import "./stylesheets/home-style.css";
import "./stylesheets/menu-style.css";
import {home} from './home';
import {menu} from './menu';

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
        menu();
       };
       if(radio.id === "about" && radio.checked){
        content.innerHTML="";
        about();
       }
    })
});

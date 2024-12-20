import "./stylesheets/style.css";
import "./stylesheets/home-style.css";
import "./stylesheets/menu-style.css";
import "./stylesheets/about-style.css";
import "./stylesheets/contact-style.css";
import { home } from './home';
import { menu } from './menu';
import { about } from './about';
import { contact } from './contact';

const navRadio = document.querySelectorAll('input[name="nav"]');
const content = document.querySelector("#content");
const aboutRadio = document.querySelector("#about");
home();
navRadio.forEach((radio) => {

    radio.addEventListener("change", () => {
        if (radio.id === "home" && radio.checked) {
            content.innerHTML = "";
            home();
        };
        if (radio.id === "menu" && radio.checked) {
            content.innerHTML = "";
            menu();

        };
        if (radio.id === "about" && radio.checked) {
            content.innerHTML = "";
            about();
        }
        if(radio.id === "contact" && radio.checked) {
            content.innerHTML = "";
            contact();
        }
    })
});

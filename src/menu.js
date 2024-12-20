import {products} from './products';

export function menu(){
content.innerHTML = `<div class="menu-content">
    <div class="sidebar">
        <aside>
            <h2>Categories</h2>
            <label for="croissant">
                <input type="radio" id="croissant" name="category" checked></input>
                Croissants & Danishes
            </label>
            <hr>
            <label for="supreme">
                <input type="radio" id="supreme" name="category"></input>
                Supremes
            </label>
            <hr>
            <label for="bundle">
                <input type="radio" id="bundle" name="category"></input>
                Bundle Sets
            </label>
            <hr>
            <label for="bun">
                <input type="radio" id="bun" name="category"></input>
                Buns
            </label>
            <hr>
            <label for="cookies">
                <input type="radio" id="cookies" name="category"></input>
                Cookies
            </label>
            <hr>
            <label for="frozen">
                <input type="radio" id="frozen" name="category"></input>
                Frozen Bake At Home
            </label>
            <hr>
            <label for="vegan">
                <input type="radio" id="vegan" name="category"></input>
                Sustainable Baking
            </label>
        </aside>
    </div>

    <div class="menu">
    </div>
</div>`;
const catRadio = document.querySelectorAll('input[name="category"]');
const menu = document.querySelector(".menu");
catRadio.forEach((radio)=>{
radio.addEventListener("change",()=>{
if(radio.id === "croissant" && radio.checked){
menu.innerHTML="";
menuItem("croissants");
}else if(radio.id ==="supreme" && radio.checked){
menu.innerHTML="";
menuItem("supremes");
}else if(radio.id ==="bundle" && radio.checked){
menu.innerHTML="";
menuItem("bundles");
}else if(radio.id ==="bun" && radio.checked){
menu.innerHTML="";
menuItem("buns");
}else if(radio.id ==="frozen" && radio.checked){
menu.innerHTML="";
menuItem("frozen");
}else if(radio.id ==="vegan" && radio.checked){
menu.innerHTML="";
menuItem("vegan");
}else if(radio.id ==="cookies" && radio.checked){
menu.innerHTML="";
menuItem("cookies");
}
});
});

const menuItem = (category) =>{
products[category].forEach(item =>{
const card = document.createElement("div");
card.classList.add("card");

const image = document.createElement("img");
image.src = item.img;
const h4 = document.createElement("h4");
h4.textContent = item.name;

const price = document.createElement("p");
price.textContent = item.price;

const add = document.createElement("button");
add.textContent = "Add To Cart";

card.appendChild(image);
card.appendChild(h4);
card.appendChild(price);
card.appendChild(add);
menu.appendChild(card);
});
};

menuItem("croissants");
}

//croissant
import butter from "./img/butter_croissant.webp";
import almond from './img/almond_croissant.jpg';
import pistachio from './img/jst_menu_item_double_baked_pistachio_croissant_1.jpg';
import choco from './img/jst_menu_item_pain_au_chocolat_1.jpg';
import turon from './img/jst_menu_item_turon_turnover_banana_jackfruit_1.jpg';
import bfastDanish from './img/breakfastDanish.webp';
import cheese from './img/twoCheese.webp';
import hamCheese from './img/hamCheese.webp';



//supreme
import matchaS from './img/jst_menu_item_supreme_matcha_1.jpg';
import strawS from './img/jst_menu_item_supreme_strawberry_1-850x850.jpg';
import tuxedoS from './img/jst_menu_item_supreme_tuxedo_1-850x850.jpg';
import ubeS from './img/jst_menu_item_supreme_ube_1-850x850.jpg';
import gingerS from './img/Supreme_Gingerbread-1.png';
import eggnogS from './img/Supreme_Eggnog-1-850x851.png';

//bundle sets
import bundle from './img//bundle box.png';

//buns
import pandesal from './img/pandesal.webp';
import rosemary from './img/rosemaryBun.png';
import spanish from './img/spanishBread.jpg';

//other
import bScone from './img/blueberryScone.webp';

//frozen
import fButter from './img/Croissant_Butter_Frozen.png';
import fHam from './img/Croissant_HamCheese_Frozen.png';
import fChoco from './img/frozenPAC.jpg';

//cookies
import biscoff from './img/biscoffCookie.jpg';
import chocoChip from './img/chocolateChipCookie.webp';
import fruitCookie from './img/fruitNutCookie.jpg';
import gingerC from './img/Leavenly-Goods-Holiday-2021-7233-scaled-e1637527126643.jpg.webp';
import vChoco from './img/veganChocolateCookie.webp';

export const products = {
    croissants: [
        {name:"Butter Croissant", img:butter, price:"$4.00"},
        {name:"Double Baked Almond Croissant", img:almond,price:"6.75"},
        {name:"Double Baked Pistachio Croissant", img:pistachio, price:"$8.50"},
        {name:"Pain Au Chocolat", img:choco, price:"$5.00"},
        {name:"Turon Turnover", img:turon, price:"$5.95"},
        {name:"Breakfast Danish", img:bfastDanish, price:"$5.75"},
        {name:"Two Cheese Croissant", img:cheese, price:"$4.85"},
        {name:"Ham & Cheese Croissant", img:hamCheese, price:"$5.75"}
    ],
    supremes:[
        {name:"Matcha Supreme",img:matchaS,price:"$6.00"},
        {name:"Strawbery Supreme",img:strawS,price:"$6.25"},
        {name:"Ube Supreme",img:ubeS,price:"$6.50"},
        {name:"Tuxedo Supreme",img:tuxedoS,price:"$6.75"},
        {name:"Eggnog Supreme",img:eggnogS,price:"$7.00"},
        {name:"Gingerbread Supreme",img:gingerS,price:"$7.00"}
    ],
    bundles:[
        {name:"Assorted Pastry Box",img:bundle,price:"$30.00"},
    ],
    buns:[
        {name:"Pan De Sal (1 Dozen)",img:pandesal,price:"$8.50"},
        {name:"Spanish Bread",img:spanish,price:"$1.95"},
        {name:"Rosemary Garlic Loaf",img:rosemary,price:"$12.00"},

    ],
    frozen:[
        {name:"Frozen Ham & Cheese",img:fHam,price:"$16.00"},
        {name:"Frozen Pain Au Chocolat",img:fChoco,price:"$15.00"},
        {name:"Frozen Butter Croissant",img:fButter,price:"$12.00"},
    ],
    cookies:[
        {name:"Chocolate Chip Cookie (1/2 Dozen)",img:chocoChip,price:"$21.00"},
        {name:"Marshmallow & Biscoff Cookie (1/2 Dozen)",img:biscoff,price:"$21.00"},
        {name:"Fruit & Nut Cookie (1/2 Dozen)",img:fruitCookie,price:"$21.00"},
        {name:"Vegan Chocolate Chip Cookie (1/2 Dozen)",img:vChoco,price:"$21.00"},
        {name:"Gingerbread Cookie",img:gingerC,price:"$5.50"},
    ],
    vegan:[
        {name:"Fruit & Nut Cookie (1/2 Dozen)",img:fruitCookie,price:"$21.00"},
        {name:"Vegan Chocolate Chip Cookie (1/2 Dozen)",img:vChoco,price:"$21.00"},
        {name:"Blueberry Scone",img:bScone,price:"$4.00"},
    ]
};
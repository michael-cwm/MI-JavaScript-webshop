import { bundledHeaderFunctions } from "./header";

import { loadLandingPage } from "./landingpage";

import { displayItemAmount } from "./shoppingcart";
import "./checkout";

export let shoppingCartArray = [];


window.onload = function () {
    loadLandingPage();
    bundledHeaderFunctions();   
    displayItemAmount()
}

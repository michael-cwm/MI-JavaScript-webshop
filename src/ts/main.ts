import { bundledHeaderFunctions } from "./header";

import { loadLandingPage } from "./landingpage";

import { displayItemAmount } from "./shoppingcart";

window.onload = function () {
    loadLandingPage();
    bundledHeaderFunctions();   
    displayItemAmount()
}

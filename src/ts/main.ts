import {
    productcatalog
} from "./models/productcatalog";

import { bundledHeaderFunctions } from "./header";

import { loadLandingPage } from "./landingpage";

export let shoppingCartArray = [];


window.onload = function () {
    loadLandingPage();
    bundledHeaderFunctions();   
}

import {
    productcatalog
} from "./models/productcatalog";

import { bundledHeaderFunctions } from "./header";

import { loadLandingPage } from "./landingpage";

import "./checkout";

export let shoppingCartArray = [];


window.onload = function () {
    loadLandingPage();
    bundledHeaderFunctions();   
}

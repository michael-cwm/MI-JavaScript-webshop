import {
    productcatalog
} from "./models/productcatalog";

import {
    CartItem
} from "./models/cart";

import { bundledHeaderFunctions } from "./header";

import { loadLandingPage } from "./landingpage";

import { Product } from "./models/productcatalog";

export let shoppingCartItems: Product[] = JSON.parse(localStorage.getItem("Shopping cart")) || [];

window.onload = function () {
    loadLandingPage();
    bundledHeaderFunctions();   
}

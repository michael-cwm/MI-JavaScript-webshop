import {
    productcatalog
} from "./models/productcatalog";

window.onload = function() {
    shoppingCart()

}



function shoppingCart() {

    let wrapper: HTMLDivElement = document.querySelector(".wrapper");
    let arrowContainer = document.createElement("div");
    arrowContainer.classList.add("back-arrow-container");
    let arrow = document.createElement("i");
    arrowContainer.appendChild(arrow);
    arrow.setAttribute("class", "bi bi-arrow-left");

    wrapper.before(arrowContainer);

    arrow.addEventListener("click", () => {
        window.history.back();

    });

    let shoppingcartContainer: HTMLDivElement = document.createElement("div");
    shoppingcartContainer.id = "shoppingcart-container";

    wrapper.appendChild(shoppingcartContainer);

    // Header
    let headerContainer: HTMLDivElement = document.createElement("div");
    headerContainer.classList.add("cart-header-container");
    shoppingcartContainer.appendChild(headerContainer);

    let header: HTMLHeadingElement = document.createElement("h1");
    header.innerHTML = "Din varukorg";
    headerContainer.appendChild(header);

    // Cart Div
    let items: HTMLDivElement = document.createElement("div");
    items.classList.add("cart-items");
    shoppingcartContainer.appendChild(items);
    

    // Cart Image Section
    let cartImageSection: HTMLDivElement = document.createElement("div");
    cartImageSection.classList.add("cart-images");

    let cartImage: HTMLImageElement = document.createElement("img");
    cartImage.setAttribute("src", "");
    cartImageSection.appendChild(cartImage);

    items.appendChild(cartImageSection);

    // Cart Info Section
    let item: HTMLDivElement = document.createElement("div");
    item.classList.add("cart-item");
    items.appendChild(item);

    // Product name
    let name: HTMLSpanElement = document.createElement("span");
    name.classList.add("product-name");
    name.innerHTML = "Produktnamn";
    item.appendChild(name);

    // Price
    let price: HTMLSpanElement = document.createElement("span");
    price.classList.add("price");
    price.innerHTML = "Pris";
    name.after(price);

    // Cart Icons
    let cartIcons: HTMLDivElement = document.createElement("div");
    cartIcons.classList.add("cart-icons");
    item.after(cartIcons);

    let plusicon = document.createElement("i");
    plusicon.setAttribute("class", "bi bi-plus-lg");
    cartIcons.appendChild(plusicon);

    let productAmount: HTMLSpanElement = document.createElement("span");
    cartIcons.appendChild(productAmount);
    productAmount.innerHTML = "Antal";

    let minusicon = document.createElement("i");
    minusicon.setAttribute("class", "bi bi-dash-lg");
    cartIcons.appendChild(minusicon);

}

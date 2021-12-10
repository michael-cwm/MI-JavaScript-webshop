import {
    productcatalog
} from "./models/productcatalog";

import {
    shoppingCartItems
} from "./main";


window.onload = function () {
    console.log(shoppingCartItems)

    shoppingCartItems.forEach(element => {
        loadShoppingCart(element)
        console.log(element)
    })
}

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

function loadShoppingCart(element) {
        let shoppingcartContainer: HTMLDivElement = document.createElement("div");
        shoppingcartContainer.id = "shoppingcart-container";
        wrapper.appendChild(shoppingcartContainer);
        
        // Cart Div
        let items: HTMLDivElement = document.createElement("div");
        items.classList.add("cart-items");
        shoppingcartContainer.appendChild(items);


        // Cart Image Section
        let cartImageSection: HTMLDivElement = document.createElement("div");
        cartImageSection.classList.add("cart-images");

        let cartImage: HTMLImageElement = document.createElement("img");
        cartImage.setAttribute("src", element.img);
        cartImageSection.appendChild(cartImage);

        items.appendChild(cartImageSection);

        // Cart Info Section
        let item: HTMLDivElement = document.createElement("div");
        item.classList.add("cart-item");
        items.appendChild(item);

        // Product name
        let name: HTMLSpanElement = document.createElement("span");
        name.classList.add("product-name");
        name.innerHTML = element.name;
        item.appendChild(name);

        // Price
        let price: HTMLSpanElement = document.createElement("span");
        price.classList.add("price");
        price.innerHTML = element.price.toLocaleString() + " kr";
        name.after(price);

        // Details
        let details: HTMLSpanElement = document.createElement("p");
        details.innerHTML = element.details;
        details.classList.add("details");
        price.after(details);

        // Cart Icons
        let cartIcons: HTMLDivElement = document.createElement("div");
        cartIcons.classList.add("cart-icons");
        item.after(cartIcons);

        let plusicon = document.createElement("i");
        plusicon.setAttribute("class", "bi bi-plus-lg");
        cartIcons.appendChild(plusicon);

        let productAmount: HTMLSpanElement = document.createElement("span");
        cartIcons.appendChild(productAmount);
        productAmount.classList.add("product-amount");
        productAmount.innerHTML = "Antal";

        let minusicon = document.createElement("i");
        minusicon.setAttribute("class", "bi bi-dash-lg");
        cartIcons.appendChild(minusicon);
    }



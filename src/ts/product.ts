import {
    productcatalog
} from "./models/productcatalog";

import {
    addToShoppingCart
} from "./landingpage";


import {
    shoppingCartItems
} from "./landingpage";


import {
    Product
} from "./models/productcatalog";

import { bundledHeaderFunctions } from "./header";

window.onload = function () {

    bundledHeaderFunctions();  

    // Get the ID from the URL
    let url = window.location.search;
    let urlParams = new URLSearchParams(url);

    for (let value of urlParams.values()) {
        let id = value;

        // Look through the product catalog for the ID
        for (let i = 0; i < productcatalog.length; i++) {
            let productIds = productcatalog[i].id.toString();

            if (productIds === id) {
                loadProduct(productcatalog[i])
            }
        }
    }

}


function loadProduct(
    Product) {

    let wrapper: HTMLDivElement = document.querySelector(".wrapper-productpage");
    let arrowContainer = document.createElement("div");
    arrowContainer.classList.add("back-arrow-container");
    let arrow = document.createElement("i");
    arrowContainer.appendChild(arrow);
    arrow.setAttribute("class", "bi bi-arrow-left");

    wrapper.before(arrowContainer);
    let modal: HTMLDivElement = document.createElement("div");

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    modal.classList.add("modalContainer");
    modal.id = "modal-container"

    let modalContent: HTMLDivElement = document.createElement("div");
    modalContent.classList.add("modalContent");
    modalContent.id = "modal-content"

    wrapper.after(modal)
    modal.appendChild(modalContent);


    let close: HTMLSpanElement = document.createElement("span");
    close.classList.add("bi", "bi-x");
    modalContent.appendChild(close);


    let modalHeader: HTMLParagraphElement = document.createElement("p");
    modalHeader.innerHTML = "Upplevelsen lades till i kundkorgen!";
    modalHeader.classList.add("modalHeader");
    modalContent.appendChild(modalHeader);
    close.addEventListener("click", () => {
        modal.style.display = "none";
    })

    let cartButton: HTMLAnchorElement = document.createElement("a");
    cartButton.innerHTML = "Gå till kassan";
    cartButton.classList.add("button-buy");
    cartButton.setAttribute("href", "checkout.html");
    modalHeader.after(cartButton);


    arrow.addEventListener("click", () => {
        window.history.back();

    });

    let productContainer = document.createElement("div");
    productContainer.id = "product-display-container";

    wrapper.appendChild(productContainer);

    let productImgSection: HTMLDivElement = document.createElement("div");
    productImgSection.classList.add("product-img-section");

    let productImage = document.createElement("img");
    productImage.setAttribute("src", Product.img);
    productImgSection.appendChild(productImage);

    productContainer.appendChild(productImgSection);
    productImgSection.appendChild(productImage);

    let productInfoSection: HTMLDivElement = document.createElement("div");
    productInfoSection.classList.add("product-info-section");
    productImgSection.after(productInfoSection);

    // Product name
    let name: HTMLSpanElement = document.createElement("span");
    name.classList.add("product-name");
    name.innerHTML = Product.name;


    // Stars
    let productRating: HTMLSpanElement = document.createElement("span");
    productRating.classList.add("star-rating");
    productRating.innerHTML = "";

    productInfoSection.appendChild(name);
    name.after(productRating);

    // Users
    let users: HTMLSpanElement = document.createElement("span");
    users.classList.add("users");
    users.innerHTML = Product.users;

    productRating.after(users);

    // Product details
    let details: HTMLParagraphElement = document.createElement("p");
    details.innerHTML = Product.details;
    details.classList.add("product-details");
    users.after(details);

    // Product footer
    let footerContainer: HTMLDivElement = document.createElement("div");
    footerContainer.classList.add("product-details-footer");
    details.after(footerContainer);

    let price: HTMLSpanElement = document.createElement("span");
    price.classList.add("price");
    price.innerHTML = Product.price.toLocaleString() + " kr";
    footerContainer.appendChild(price);

    let button: HTMLButtonElement = document.createElement("button");
    button.innerHTML = "Köp nu";
    button.classList.add("button-buy");
    button.setAttribute("data-id", Product.id);

    button.addEventListener("click", (e) => {
        addToShoppingCart(Product);
        modal.style.display = "block";
        console.log(shoppingCartItems);

    })


    footerContainer.appendChild(button);

}
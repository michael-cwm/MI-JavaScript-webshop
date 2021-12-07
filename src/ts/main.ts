import {
    productcatalog
} from "./models/productcatalog";



window.onload = function () {
    loadHTML()
    
}

let wrapper: HTMLDivElement = document.querySelector(".wrapper");
let container: HTMLDivElement = document.createElement("div");
container.classList.add("products");
wrapper.appendChild(container);


// Load HTML on landing page
function loadHTML() {

    // Loop through the product catalog
    for (let i = 0; i < productcatalog.length; i++) {

        // Product card
        let product: HTMLDivElement = document.createElement("div");
        product.classList.add("product");
        container.appendChild(product);

        // Image container
        let imgContainer: HTMLDivElement = document.createElement("div");
        imgContainer.classList.add("img-container");
        product.append(imgContainer);

        // Product image
        let image: HTMLImageElement = document.createElement("img");
        image.setAttribute("src", productcatalog[i].img);
        imgContainer.appendChild(image);

        // Container for product info
        let productCard: HTMLDivElement = document.createElement("div");
        productCard.classList.add("product-card");
        imgContainer.after(productCard);

        // Product name
        let productName: HTMLSpanElement = document.createElement("span");
        productName.classList.add("product-name");
        productName.innerHTML = productcatalog[i].name;


        // Stars
        let productRating: HTMLSpanElement = document.createElement("span");
        productRating.classList.add("star-rating");
        productRating.innerHTML = "";

        // Users
        let productUsers: HTMLSpanElement = document.createElement("span");
        productUsers.classList.add("users");
        productUsers.innerHTML = productcatalog[i].users;

        productCard.appendChild(productName);
        productName.after(productRating);
        productRating.after(productUsers);

        // Product details
        let productDetails: HTMLParagraphElement = document.createElement("p");
        productDetails.innerHTML = productcatalog[i].details;
        productDetails.classList.add("product-details");
        productUsers.after(productDetails);

        // Product footer
        let productFooter: HTMLDivElement = document.createElement("div");
        productFooter.classList.add("product-footer");
        productDetails.after(productFooter);

        // Price
        let priceContainer: HTMLDivElement = document.createElement("div");
        priceContainer.classList.add("price-container");
        productFooter.appendChild(priceContainer);
        let price: HTMLSpanElement = document.createElement("span");
        price.classList.add("price");
        price.innerHTML = productcatalog[i].price.toLocaleString() + " kr";
        priceContainer.appendChild(price);

        // Buttons
        let productButtons: HTMLDivElement = document.createElement("div");
        productButtons.classList.add("product-buttons");
        priceContainer.after(productButtons);
        let buttonBuy: HTMLAnchorElement = document.createElement("a");
        buttonBuy.classList.add("button-buy");
        buttonBuy.innerHTML = "Köp";
        buttonBuy.setAttribute("data-id", productcatalog[i].id.toString());

        let buttonInfo: HTMLAnchorElement = document.createElement("a");
        buttonInfo.classList.add("button-info");
        buttonInfo.setAttribute("data-id", productcatalog[i].id.toString());
        buttonInfo.innerHTML = "Mer info";

        productButtons.appendChild(buttonInfo);
        productButtons.appendChild(buttonBuy);

        buttonInfo.addEventListener("click", () => {
            location.href = "product.html?id=" +  productcatalog[i].id;
        })

    }
}

import { bundledHeaderFunctions } from "./header";

window.onload = function() {
  bundledHeaderFunctions();
}

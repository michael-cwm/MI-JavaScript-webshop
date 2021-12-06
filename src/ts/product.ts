import {
    productcatalog
} from "./models/productcatalog";



window.onload = function () {
  
}


export function redirect(productId: string, 
    productPrice: number, 
    productName: string, 
    productImg: string, 
    productUsers: string, 
    productDetails: string) {
    location.href = "product.html?id=" + productId;
    console.log("Product ID " + productId, " Product name: " + productName + " Product img: " + productImg + " Product users: " + productUsers + " Product price: " + productPrice + " Product details: " + productDetails);

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

    let productContainer = document.createElement("div");
    productContainer.id = "product-display-container";

    wrapper.appendChild(productContainer);

    let productImgSection: HTMLDivElement = document.createElement("div");
    productImgSection.classList.add("product-img-section");

    let productImage = document.createElement("img");
    productImage.setAttribute("src", productImg);
    productImgSection.appendChild(productImage);

    productContainer.appendChild(productImgSection);
    productImgSection.appendChild(productImage);

    let productInfoSection: HTMLDivElement = document.createElement("div");
    productInfoSection.classList.add("product-info-section");
    productImgSection.after(productInfoSection);

    // Product name
    let name: HTMLSpanElement = document.createElement("span");
    name.classList.add("product-name");
    name.innerHTML = productName;


    // Stars
    let productRating: HTMLSpanElement = document.createElement("span");
    productRating.classList.add("star-rating");
    productRating.innerHTML = "";

    productInfoSection.appendChild(name);
    name.after(productRating);

    // Users
    let users: HTMLSpanElement = document.createElement("span");
    users.classList.add("users");
    users.innerHTML = productUsers;

    productRating.after(users);

    // Product details
    let details: HTMLParagraphElement = document.createElement("p");
    details.innerHTML = productDetails;
    details.classList.add("product-details");
    users.after(details);
}

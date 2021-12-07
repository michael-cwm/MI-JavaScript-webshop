import {
    productcatalog
} from "./models/productcatalog";


window.onload = function () {
    // Get the ID from the URL string
    let url = window.location.search;
    let urlParams = new URLSearchParams(url);


    for (let value of urlParams.values()) {
        let id = value;
     
            // Look through the product catalog for the ID
        for (let i = 0; i < productcatalog.length; i++) {
            let productIds = productcatalog[i].id.toString();
           
            if (productIds === id) {
                loadProduct(productcatalog[i].name,
                    productcatalog[i].img,
                    productcatalog[i].users,
                    productcatalog[i].details,
                    productcatalog[i].price)
            }
        }
    }
   
}


function loadProduct(
    productName: string,
    productImg: string,
    productUsers: string,
    productDetails: string,
    productPrice: number,) {

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

    // Product footer
    let footerContainer: HTMLDivElement = document.createElement("div");
    footerContainer.classList.add("product-details-footer");
    details.after(footerContainer);

    let price: HTMLSpanElement = document.createElement("span");
    
}

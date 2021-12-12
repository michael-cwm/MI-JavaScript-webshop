import {
    productcatalog
} from "./models/productcatalog";

import {
    shoppingCartItems
} from "./landingpage";


window.onload = function () {
getShoppingCart()
   
}

function getShoppingCart() {
    shoppingCartItems.forEach(element => {
        loadShoppingCart(element)
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
let shoppingcartContainer: HTMLDivElement = document.createElement("div");
shoppingcartContainer.id = "shoppingcart-container";
wrapper.appendChild(shoppingcartContainer);

let checkoutButtonContainer: HTMLDivElement = document.createElement("div");
let checkoutButton: HTMLAnchorElement = document.createElement("a");
checkoutButton.innerHTML = "Gå till kassan";
checkoutButtonContainer.classList.add("checkout-button");
checkoutButton.classList.add("button-buy");
checkoutButton.setAttribute("href", "checkout.html");
checkoutButtonContainer.appendChild(checkoutButton);
shoppingcartContainer.after(checkoutButtonContainer);

checkoutButton.addEventListener("click", () => {
    location.href = "checkout.html";
})

function loadShoppingCart(element) {

    // Cart Items
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

    let closeIcon: HTMLSpanElement = document.createElement("span");
    closeIcon.classList.add("bi", "bi-x");
    cartIcons.appendChild(closeIcon);

    closeIcon.addEventListener("click", (e) => { // Add event listeners to remove icons
        console.log("element: " + JSON.stringify(element));
        deleteItem(element); // If remove icon is clicked, call this function
    })

}

// Delete object entirely using splice
function deleteItem(itemToDelete) {
    console.log("Item to delete: " + JSON.stringify(itemToDelete));
    let objectIndex: number = shoppingCartItems.indexOf(itemToDelete); // Find index on object to remove
    shoppingCartItems.splice(objectIndex, 1); // Use splice to remove object
   
}
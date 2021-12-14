import {
    Product,
    productcatalog
} from "./models/productcatalog";

import {
    shoppingCartItems
} from "./landingpage";

import { bundledHeaderFunctions } from "./header";

window.onload = function () {
    bundledHeaderFunctions();  
    getShoppingCart()
}

let sum: number = 0;

// HTML for wrapper, arrow-icon at the top and shopping cart footer
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

let shoppingCartFooter: HTMLDivElement = document.createElement("div");
shoppingCartFooter.classList.add("shoppingcart-footer");
let total: HTMLParagraphElement = document.createElement("p");
total.classList.add("total");
shoppingCartFooter.appendChild(total)
shoppingcartContainer.after(shoppingCartFooter);

let checkoutButtonContainer: HTMLDivElement = document.createElement("div");
let checkoutButton: HTMLAnchorElement = document.createElement("a");
checkoutButton.innerHTML = "Gå till kassan";
checkoutButtonContainer.classList.add("checkout-button");
checkoutButton.classList.add("button-buy");
checkoutButton.setAttribute("href", "checkout.html");
checkoutButtonContainer.appendChild(checkoutButton);
shoppingCartFooter.appendChild(checkoutButtonContainer)


checkoutButton.addEventListener("click", () => {
    location.href = "checkout.html";
})

// Check what's in the shopping cart
function getShoppingCart() {
    shoppingcartContainer.innerHTML = "";
    shoppingCartItems.forEach(element => {
        loadShoppingCart(element);
        totalPrice(element.price);
    })
}

// Load the shopping cart
function loadShoppingCart(element: Product) {
    // Cart Items
    let items: HTMLDivElement = document.createElement("div");
    items.classList.add("cart-items");
    shoppingcartContainer.appendChild(items);

    // Cart Image Section
    let cartImageSection: HTMLDivElement = document.createElement("div");
    cartImageSection.classList.add("cart-images");

    // Cart Image
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

    let minusicon = document.createElement("i");
    minusicon.setAttribute("class", "bi bi-dash-lg");
    cartIcons.appendChild(minusicon);

    let productAmount: HTMLSpanElement = document.createElement("span");
    cartIcons.appendChild(productAmount);
    productAmount.classList.add("product-amount");
    productAmount.innerHTML = "1";

    let plusicon = document.createElement("i");
    plusicon.setAttribute("class", "bi bi-plus-lg");
    cartIcons.appendChild(plusicon);

    let closeIcon: HTMLSpanElement = document.createElement("span");
    closeIcon.classList.add("bi", "bi-x");
    cartIcons.appendChild(closeIcon);

    closeIcon.addEventListener("click", (e) => { // Add event listeners to remove icons
        console.log("element: " + JSON.stringify(element));
        deleteItem(element); // If remove icon is clicked, call this function
    })

}

// Delete item from cart
function deleteItem(itemToDelete: Product) {
    console.log("Item to delete: " + JSON.stringify(itemToDelete));
    let objectIndex: number = shoppingCartItems.indexOf(itemToDelete); // Find index on object to remove
    console.log(objectIndex);
    shoppingCartItems.splice(objectIndex, 1); // Use splice to remove object
    localStorage.setItem("Shopping cart", JSON.stringify(shoppingCartItems));
    console.log(shoppingCartItems);
    getShoppingCart();
}

// Calculate sum
function totalPrice(element: number) {
    let price: number = element;
    sum += price;
    updatePrice(sum);
}

// Update sum
function updatePrice(sum) {
total.innerHTML = "Summa: " + sum.toLocaleString() + " kr";
}
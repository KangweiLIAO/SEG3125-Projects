/**
 * SEG 3125 Lab2 Group6
 * File: main.js
 */

/**
 * @description The sorting algorithm for ordering the products in ascending or descending order of price.
 * This is done using a bubble sort.
 * @param ascending indicative of whether to sort by ascending or descending order of price (boolean)
 */
var cards = document.getElementsByClassName("card");
document.getElementById("price-low-high").onclick = () => {
    sort(true);
};
document.getElementById("price-high-low").onclick = () => {
    sort(false);
};
function sort(ascending) {
    var prices = [];
    for (let i = 0; i < cards.length; i++) {
        prices.push(
            parseFloat(
                cards[i]
                    .querySelector("span")
                    .querySelector("p")
                    .innerHTML.slice(1)
            )
        );
    }
    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = 0; j < prices.length - i - 1; j++) {
            if (ascending && prices[j] > prices[j + 1]) {
                let tmp = prices[j];
                prices[j] = prices[j + 1];
                prices[j + 1] = tmp;
                cards[j].parentNode.insertBefore(cards[j + 1], cards[j]);
            } else if (prices[j] < prices[j + 1]) {
                let tmp = prices[j];
                prices[j] = prices[j + 1];
                prices[j + 1] = tmp;
                cards[j].parentNode.insertBefore(cards[j + 1], cards[j]);
            }
        }
    }
}

var fGluten = document.getElementById("f-glutenfree"),
    fWheat = document.getElementById("f-else"),
    fOrganic = document.getElementById("f-organic"),
    fVegetarian = document.getElementById("f-vegetarian"),
    clicked = [false, false, false, false];

/**
 * @description Function responsible for hiding and unhiding (if not already hidden by another category) all
 *              foods that are not ${type}.
 */
fGluten.onclick = () => {
    hide("glutenFree", 0);
};
fWheat.onclick = () => {
    hide("wheatFree", 1);
};
fOrganic.onclick = () => {
    hide("organic", 2);
};
fVegetarian.onclick = () => {
    hide("vegetarian", 3);
};

/**
 * @description Function responsible for directly hiding and unhiding products.
 * @param requirement The key for products that indicate whether a product meets a limited dietary requirement (object).
 * @param clickNumber An array of booleans indicating whether a requirement has been ticked or not (array).
 */
function hide(requirement, clickNumber) {
    clicked[clickNumber] = !clicked[clickNumber];
    for (let i = 0; i < cards.length; i++) {
        let cardName = cards[i].querySelector("p").innerHTML;
        for (let j = 0; j < products.length; j++) {
            if (
                products[j].name == cardName &&
                products[j][requirement] == false
            ) {
                if (clicked[clickNumber]) {
                    cards[i].style.display = "none";
                    products[j].flag--;
                } else {
                    products[j].flag++;
                    if (products[j].flag == 0) {
                        cards[i].style.display = "inline-block";
                    }
                }
            }
        }
    }
}

/**
 * @description Responsible for adding new product card to product page
 * @param name The name of the product (string)
 * @param price The price of the product (float)
 */
function addProduct(name, price) {
    const div = document.createElement("div");
    div.className = "card";
    div.style = "display: inline-block";
    div.innerHTML = `
    <!-- <img src=""> -->
    <div class="card-body">
        <p id="p-name-${name}">${name}</p>
        <span> <p class="price d-inline" id="p-price-${name}">$${price}</p> ea. </span>
        <div class="container d-flex flex-center">
            <button class="btn btn-cart-add d-flex flex-center" id="cart-add-${name}" 
            onclick="addToCart(this.id)">
                <img class="icon" src="resources/add_shopping_cart-24px.svg">
                <span> Add </span>
            </button>
        </div>
    </div>
    `;
    document.getElementById("products").appendChild(div);
    // console.log(`Product: ${name} added`);
}

/**
 * @description Responsible for toggle the display of cart div
 */
function toggleCart() {
    // Show/Hide for main and cart div
    document.getElementById("app-cart").classList.toggle("hide");
    document.getElementById("app-main").classList.toggle("hide");
}

// Variables for addToCart() and addCartItem()
var timer;
var cart = [];

/**
 * @description Responsible for adding item to cart list when the add button clicked
 */
function addCartItem(btnID) {
    var name = btnID.substring(9);
    var price = 0,
        existed = false;
    for (let i = 0; i < products.length; i++) {
        if (products[i].name == name) {
            price = products[i].price;
            break;
        }
    }
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name == name) {
            existed = true;
            cart[i].num++;
            cart[i].price = (price * cart[i].num).toFixed(2);
            break;
        }
    }
    if (!existed) {
        cart.push({
            name: name,
            num: 1,
            price: price,
        });
    }
}

/**
 * @description Responsible for displaying Add-button's toast message and controlling
 *              the number of items showing beside the cart button.
 */
function addToCart(btnID) {
    var toast = document.getElementById("toast-addcart"),
        toastNum = document.getElementById("toast-addcart-num"),
        cartNum = document.getElementById("cart-num"),
        showing = toast.classList.contains("show"),
        currCart = parseInt(cartNum.innerHTML),
        currToast = parseInt(toastNum.innerHTML);

    if (!showing) {
        toast.classList.add("show");
        showing = true;
    } else {
        clearTimeout(timer);
        currToast++;
        toastNum.innerHTML = `${currToast}`;
    }
    timer = setTimeout(() => {
        toast.style.animation = "zoomout .3s";
        showing = false;
        setTimeout(() => {
            toast.style.animation = "";
            toastNum.innerHTML = 1;
            toast.className = toast.className.replace("show", "");
        }, 300);
    }, 2500);
    currCart++;
    cartNum.innerHTML = `${currCart}`;

    addCartItem(btnID); // Add this item into cart list

    var totalPrice = 0,
        totalDiv = document.createElement("div"), // Div for subtotal
        cartListDiv = document.getElementById("cart-item-list");
    cartListDiv.innerHTML = "";
    for (let i = 0; i < cart.length; i++) {
        totalPrice = totalPrice + parseFloat(cart[i].price);
        var div = document.createElement("div");
        div.className = "container d-flex";
        div.style.justifyContent = "space-between";
        div.innerHTML = `
        <span id="cart-item-name" style="width: 8rem">${cart[i].name}</span>
        <span style="width: 8rem"> Quantity:&nbsp
            <span id="cart-item-num"> ${cart[i].num} </span>
        </span>
        <span style="width: 8rem"> $ 
            <span id="cart-item-price"> ${cart[i].price} </span>
        </span>
        `;
        cartListDiv.appendChild(div);
        cartListDiv.appendChild(document.createElement("hr"));
    }
    console.log(totalPrice);
    totalDiv.innerHTML = `
    <span style="width: 8rem">Subtotal:&nbsp $</span>
    <span>${totalPrice.toFixed(2)}</span>
    `;
    cartListDiv.appendChild(totalDiv);
}

/**
 * @description Responsible for empty the cart
 */
document.getElementById("btn-emptycart").onclick = function () {
    cart = [];
    document.getElementById("cart-num").innerHTML = "0";
    document.getElementById("cart-item-list").innerHTML = "Your cart is empty!";
};

/**
 * @description Responsible for changing fontsize for whole page
 */
document.getElementById("slider-fontsize").onchange = function () {
    var fontSizeDisplay = document.getElementById("fontsize");
    fontSizeDisplay.innerHTML = this.value;
    var spans = document.getElementsByTagName("span"),
        ps = document.getElementsByTagName("p");
    for (let i = 0; i < spans.length; i++) {
        const elem = spans[i];
        elem.style.fontSize = this.value + "px";
    }
    for (let i = 0; i < ps.length; i++) {
        const elem = ps[i];
        elem.style.fontSize = this.value + "px";
    }
};

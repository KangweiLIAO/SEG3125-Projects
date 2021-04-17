/**
 * SEG 3125 Lab3 Group6
 * File: main.js
 * @description Responsible for main functions in the page
 */

var fGluten = document.getElementById("f-glutenfree"),
    fWheat = document.getElementById("f-else"),
    fOrganic = document.getElementById("f-organic"),
    fVegetarian = document.getElementById("f-vegetarian"),
    clicked = [false, false, false, false];
var cards = document.getElementsByClassName("card"); // product cards
var cart = []; // Variables for addToCart() and addCartItem()

/**
 * @description Functions responsible for sorting the products by price
 */
document.getElementById("price-low-high").onclick = () => {
    sort(true);
};
document.getElementById("price-high-low").onclick = () => {
    sort(false);
};

/**
 * @description Functions responsible for hiding and un-hiding (if not already hidden by another category) all
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

/**
 * @description The sorting algorithm for ordering the products in ascending or descending order of price.
 * This is done using a bubble sort.
 * @param ascending indicative of whether to sort by ascending or descending order of price (boolean)
 */
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

/**
 * @description Function responsible for directly hiding and showing products.
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
                    products[j].checkboxFlag--;
                } else {
                    products[j].checkboxFlag++;
                    if (products[j].checkboxFlag == 0) {
                        cards[i].style.display = "inline-flex";
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
    div.style = "display: inline-flex";
    div.innerHTML = `
    <!-- <img src=""> -->
    <div class="card-body">
        <p id="p-name-${name}" style="margin: 15px">${name}</p>
        <img src="res/products/${name}.jpg" height="90" width="90" style=opacity:0.8><br>
        <span> <p class="price d-inline" id="p-price-${name}">$${price}</p> ea. </span>
        <div class="container d-flex flex-center">
            <button class="btn btn-cart-add d-flex flex-center" id="cart-add-${name}" 
            onclick="addToCart(this.id)">
                <img class="icon" src="res/icons/add_shopping_cart-24px.svg">
                <span> Add </span>
            </button>
        </div>
    </div>
    `;
    document.getElementById("products").appendChild(div);
}

/**
 * @description Responsible for toggle the display of cart div
 */
function toggleCart() {
    // Show/Hide for main and cart div
    document.getElementById("app-cart").classList.toggle("hide");
    document.getElementById("app-main").classList.toggle("hide");
}

/**
 * @description Responsible for adding item to cart list when the add button clicked
 * @param btnID The button ID for the clicked button
 */
function addCartItem(btnID) {
    var name = btnID.substring(9);
    var price = 0,
		organic = true,
        existed = false;
    for (let i = 0; i < products.length; i++) {
        if (products[i].name == name) {
            price = products[i].price;
			organic = products[i].organic;
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
			organic: organic,
        });
    }
}

/**
 * @description Responsible for displaying the item-added toast message, controlling the
 *              number of items showing beside the cart button and updating the cart data
 * @param btnID The button ID for the clicked button
 */
function addToCart(btnID) {
    var cartNum = document.getElementById("cart-num"),
        currCart = parseInt(cartNum.innerHTML);

    toast("Item(s) added to cart");
    currCart++;
    cartNum.innerHTML = `${currCart}`;

    addCartItem(btnID); // Add this item into cart list

    var totalPrice = 0,
        totalDiv = document.createElement("div"), // Div for subtotal
        cartListDiv = document.getElementById("cart-item-list"),
        allOrganic = true;
    cartListDiv.innerHTML = "";
    for (let i = 0; i < cart.length; i++) {
        totalPrice = totalPrice + parseFloat(cart[i].price);
        if (!cart[i].organic){
			allOrganic = false;
		}
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
	if(allOrganic){
		var adjustedPrice = totalPrice*0.9;
		totalDiv.innerHTML = `
		<span style="width: 8rem">Subtotal:&nbsp $</span>
		<span style="text-decoration: line-through">${totalPrice.toFixed(2)}</span>
		<span>${adjustedPrice.toFixed(2)}</span>
		`;
	}
	else{
		totalDiv.innerHTML = `
		<span style="width: 8rem">Subtotal:&nbsp $</span>
		<span>${totalPrice.toFixed(2)}</span>
		`;
	}
    cartListDiv.appendChild(totalDiv);
}

/**
 * @description Function responsible for displaying the products inputted by the user in the search box
 */
function search() {
    let search = document.getElementById("search-box");
    let lowercaseSearch = search.value.toLowerCase();
    for (let i = 0; i < cards.length; i++) {
        let cardName = cards[i].querySelector("p").innerHTML;
        for (let j = 0; j < products.length; j++) {
            if (products[j].name == cardName && products[j].checkboxFlag == 0) {
                if (cardName.toLowerCase().indexOf(lowercaseSearch) > -1) {
                    //will display all products with the searched string contained in the product name's string
                    products[j].searchFlag = true;
                    cards[i].style.display = "inline-flex";
                } else {
                    products[j].searchFlag = false;
                    cards[i].style.display = "none";
                }
            }
        }
    }
}

/**
 * @description Function responsible for show/hide toast message
 */
var toastTimer; // timer for show/hide toast msg
function toast(text) {
    var msgDiv;
    var toastDiv = document.getElementById("toast"),
        showing = toastDiv.classList.contains("show");
    if (!showing) {
        msgDiv = document.createElement("div");
        msgDiv.id = "toast-body";
        msgDiv.className = "toast rounded";
        msgDiv.innerHTML = `<span id="toast-text"> ${text} </span>`;
        toastDiv.appendChild(msgDiv);
        toastDiv.classList.add("show");
        msgDiv.style.animation = "zoomin .5s";
        showing = true;
    } else {
        msgDiv = document.getElementById("toast-body");
        clearTimeout(toastTimer);
    }
    toastTimer = setTimeout(() => {
        msgDiv.style.animation = "zoomout .3s";
        setTimeout(() => {
            toastDiv.className = toastDiv.className.replace("show", "");
            toastDiv.innerHTML = "";
        }, 300);
    }, 2500);
}

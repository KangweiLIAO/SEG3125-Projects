/**
 * SEG 3125 Lab3 Group6
 * File: category.js
 * @description Responsible for controlling the display & data of categories
 */

var categories = ["All", "Fruit", "Meat", "Vegetable", "Daily", "Snack"];

/**
 * @description Responsible for category dropdown
 */
document.getElementById("drop-btn").onclick = function () {
    var icon = document.getElementById("drop-btn-icon"),
        menu = document.getElementById("drop-menu");
    if (!icon.classList.contains("btn-drop-icon-down")) {
        menu.className = "drop-menu neu-raised";
        menu.style.animation = "drop 1s";
        icon.classList.add("btn-drop-icon-down");
        categories.forEach((category) => {
            var span = document.createElement("span");
            span.className = "drop-item";
            span.addEventListener(
                "click",
                () => categoryFilter(category),
                false
            );
            span.innerHTML = category;
            menu.appendChild(span);
        });
    } else {
        icon.classList.remove("btn-drop-icon-down");
        menu.style.animation = "collapse 1s";
        setTimeout(() => {
            menu.className = "";
            menu.innerHTML = "";
        }, 1000);
    }
};

/**
 * @description Filter the products by specific category
 * @param categoryName the name of category button clicked
 */
function categoryFilter(categoryName) {
    for (let j = 0; j < cards.length; j++) {
        cards[j].style.display = "inline-flex";
    }
    for (let i = 0; i < products.length; i++) {
        //console.log(products[i].category == toString(categoryName))
        if (categoryName == "All") {
            for (let j = 0; j < cards.length; j++) {
                cards[j].style.display = "inline-flex";
            }
            break;
        }
        if (products[i].category != categoryName) {
            //console.log(products[i].category);
            for (let j = 0; j < cards.length; j++) {
                let cardName = cards[j].querySelector("p").innerHTML;
                if (cardName == products[i].name) {
                    cards[j].style.display = "none";
                }
            }
        }
    }
}

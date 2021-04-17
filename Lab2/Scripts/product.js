/**
 * SEG 3125 Lab2 Group6
 * File: product.js
 */

let products = [
    {
        name: "Banana",
        glutenFree: true,
        wheatFree: true,
        organic: true,
        vegetarian: true,
        price: 0.29,
        flag: 0
    },
    {
        name: "Soft bread",
        glutenFree: false,
        wheatFree: false,
        organic: false,
        vegetarian: true,
        price: 3.49,
        flag: 0
    },
    {
        name: "Raspberries",
        glutenFree: true,
        wheatFree: true,
        organic: true,
        vegetarian: true,
        price: 4.99,
        flag: 0
    },
    {
        name: "Gluten free bacon",
        glutenFree: true,
        wheatFree: true,
        organic: true,
        vegetarian: false,
        price: 6.99,
        flag: 0
    },
    {
        name: "Brocoli",
        glutenFree: true,
        wheatFree: true,
        organic: false,
        vegetarian: true,
        price: 2.99,
        flag: 0
    },
    {
        name: "Salmon",
        glutenFree: true,
        wheatFree: true,
        organic: true,
        vegetarian: false,
        price: 6.99,
        flag: 0
    },
    {
        name: "Milk",
        glutenFree: true,
        wheatFree: true,
        vegetarian: true,
        price: 4.99,
        flag: 0
    },
    {
        name: "Salted Almonds",
        glutenFree: false,
        wheatFree: false,
        organic: false,
        vegetarian: true,
        price: 12.59,
        flag: 0
    },
    {
        name: "Sausage",
        glutenFree: false,
        wheatFree: false,
        organic: false,
        vegetarian: false,
        price: 4.59,
        flag: 0
    },
    {
        name: "Organic celery",
        glutenFree: true,
        wheatFree: true,
        organic: true,
        vegetarian: true,
        price: 4.75,
        flag: 0
    },
    {
        name: "Organic broccoli",
        glutenFree: true,
        wheatFree: true,
        organic: true,
        vegetarian: true,
        price: 3.70,
        flag: 0
    },
    {
        name: "Omega-3 Eggs",
        glutenFree: true,
        wheatFree: true,
        organic: true,
        vegetarian: true,
        price: 6.99,
        flag: 0
    },
]

window.onload = function() {
    // Add the list of products into product page
    for (let i=0; i<products.length; i++) {
        addProduct(products[i].name, products[i].price);
    }
}

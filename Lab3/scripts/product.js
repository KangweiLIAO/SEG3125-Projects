/**
 * SEG 3125 Lab3 Group6
 * File: product.js
 * @description Responsible for controlling products' data
 */

let products = [
    {
        name: "Banana",
        glutenFree: true,
        wheatFree: true,
        organic: true,
        vegetarian: true,
        price: 0.29,
        checkboxFlag: 0,
        category:"Fruit",
        searchFlag:true,
        searchFlag:true
    },
    {
        name: "Soft bread",
        glutenFree: false,
        wheatFree: false,
        organic: false,
        vegetarian: true,
        price: 3.49,
        checkboxFlag: 0,
        category:"Bread",
        searchFlag:true
    },
    {
        name: "Raspberries",
        glutenFree: true,
        wheatFree: true,
        organic: true,
        vegetarian: true,
        price: 4.99,
        checkboxFlag: 0,
        category:"Fruit",
        searchFlag:true
    },
    {
        name: "Gluten free bacon",
        glutenFree: true,
        wheatFree: true,
        organic: true,
        vegetarian: false,
        price: 6.99,
        checkboxFlag: 0,
        category:"Meat",
        searchFlag:true
    },
    {
        name: "Brocoli",
        glutenFree: true,
        wheatFree: true,
        organic: false,
        vegetarian: true,
        price: 2.99,
        checkboxFlag: 0,
        category:"Vegetable",
        searchFlag:true
    },
    {
        name: "Salmon",
        glutenFree: true,
        wheatFree: true,
        organic: true,
        vegetarian: false,
        price: 6.99,
        checkboxFlag: 0,
        category:"Meat",
        searchFlag:true
    },
    {
        name: "Milk",
        glutenFree: true,
        wheatFree: true,
        vegetarian: true,
        price: 4.99,
        checkboxFlag: 0,
        category:"Dairy",
        searchFlag:true
    },
    {
        name: "Salted Almonds",
        glutenFree: false,
        wheatFree: false,
        organic: false,
        vegetarian: true,
        price: 12.59,
        checkboxFlag: 0,
        category:"Snack",
        searchFlag:true
    },
    {
        name: "Sausage",
        glutenFree: false,
        wheatFree: false,
        organic: false,
        vegetarian: false,
        price: 4.59,
        checkboxFlag: 0,
        category:"Meat",
        searchFlag:true
    },
    {
        name: "Organic celery",
        glutenFree: true,
        wheatFree: true,
        organic: true,
        vegetarian: true,
        price: 4.75,
        checkboxFlag: 0,
        category:"Vegetable",
        searchFlag:true

    },
    {
        name: "Organic broccoli",
        glutenFree: true,
        wheatFree: true,
        organic: true,
        vegetarian: true,
        price: 3.70,
        checkboxFlag: 0,
        category:"Vegetable",
        searchFlag:true
    },
    {
        name: "Omega-3 Eggs",
        glutenFree: true,
        wheatFree: true,
        organic: true,
        vegetarian: true,
        price: 6.99,
        checkboxFlag: 0,
        category:"Daily",
        searchFlag:true
    },
    {
        name: "Swiss Milk Chocolate Bar",
        glutenFree: true,
        wheatFree: true,
        organic: false,
        vegetarian: true,
        price: 3.99,
        checkboxFlag: 0,
        category:"Snack",
        searchFlag:true
    },
    {
        name: "Orange Juice",
        glutenFree: true,
        wheatFree: true,
        organic: false,
        vegetarian: true,
        price: 5.49,
        checkboxFlag: 0,
        category:"Beverage",
        searchFlag:true
    },
    {
        name: "Soft Drink",
        glutenFree: false,
        wheatFree: false,
        organic: false,
        vegetarian: true,
        price: 6.79,
        checkboxFlag: 0,
        category:"Beverage",
        searchFlag:true
    },
    {
        name: "Orange pekoe tea",
        glutenFree: false,
        wheatFree: false,
        organic: false,
        vegetarian: true,
        price: 5.99,
        checkboxFlag: 0,
        category:"Beverage",
        searchFlag:true
    },
    {
        name: "White cheddar popcorn",
        glutenFree: true,
        wheatFree: false,
        organic: false,
        vegetarian: true,
        price: 3.00,
        checkboxFlag: 0,
        category:"Snack",
        searchFlag:true
    },
    {
        name: "Salted tops crackers",
        glutenFree: true,
        wheatFree: false,
        organic: false,
        vegetarian: true,
        price: 3.99,
        checkboxFlag: 0,
        category:"Snack",
        searchFlag:true
    },
    {
        name: "Live Lobster",
        glutenFree: true,
        wheatFree: true,
        organic: false,
        vegetarian: false,
        price: 14.61,
        checkboxFlag: 0,
        category:"Meat",
        searchFlag:true
    },
    {
        name: "Frozen mini seafood platter",
        glutenFree: true,
        wheatFree: true,
        organic: false,
        vegetarian: false,
        price: 6.99,
        checkboxFlag: 0,
        category:"Meat",
        searchFlag:true
    },
    {
        name: "Red cluster tomatoes",
        glutenFree: true,
        wheatFree: true,
        organic: true,
        vegetarian: true,
        price: 8.53,
        checkboxFlag: 0,
        category:"Vegetable",
        searchFlag:true
    },
    {
        name: "Sliced bread artisan",
        glutenFree: false,
        wheatFree: false,
        organic: true,
        vegetarian: true,
        price: 4.99,
        checkboxFlag: 0,
        category:"Bread",
        searchFlag:true
    },
    {
        name: "Whipping cream",
        glutenFree: false,
        wheatFree: true,
        organic: false,
        vegetarian: true,
        price: 3.49,
        checkboxFlag: 0,
        category:"Daily",
        searchFlag:true
    },
]

window.onload = function() {
    // Add the list of products into product page
    for (let i=0; i<products.length; i++) {
        addProduct(products[i].name, products[i].price);
    }
}

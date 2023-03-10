'use strict';

const restaurant ={
    name: 'Classico Italino',
    location: 'Via Angelo Tavanti 23, Firenze,Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian','Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic','Bread','Caprese Salad'],
    mainMenu: ['Pizza','Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },
    },

    order: function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
    },
    orderDelivery: function({starterIndex =1,mainIndex =0,time ='20:00',address}){
        console.log(`Oder received! $(this.starterMenu[starterIndex]) and ${this.starterMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
    orderPasta: function(ing1, ing2,ing3){
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`)
    }
};

const arr = [7,8,9];
const badNewArr = [1,2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1,2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1,2,7,8,9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//copy array
const mainMenuCopy = [...restaurant.mainMenu];

//join 2 arrays
const menu = [...restaurant.starterMenu,... restaurant.mainMenu];
console.log(menu);

const str = 'Jonas';
const letters = [...str, '','S.'];
console.log(letters);
console.log(...str);

const ingredients = [prompt("Let's make passta! Ingresient 1?")];
console.log(ingredients);

restaurant.orderPasta(ingredients(0), ingredients(1),ingredients[2]);
restaurant.orderPasta(...ingredients);

const newRestaurant = {foudedIn: 1988,...restaurant,founder: 'Guniseppe'};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
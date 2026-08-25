"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const restaurant_1 = __importDefault(require("./restaurant"));
const dollarSigns = '$$';
const deliveryTimeMax = '90';
const maxDistance = 10;
let result;
const hour = new Date().getHours();
const priceBracket = dollarSigns.length;
const filteredRestaurants = restaurant_1.default.filter((restaurant) => {
    let distance = Number(restaurant.distance);
    let time = Number(deliveryTimeMax);
    let closeHour = Number(restaurant.closeHour);
    let openHour = Number(restaurant.openHour);
    if (Number(restaurant.priceBracket) > priceBracket) {
        return false;
    }
    if (restaurant.deliveryTimeMinutes > time) {
        return false;
    }
    if (distance > maxDistance) {
        return false;
    }
    if (hour < openHour && hour > closeHour) {
        return false;
    }
    return restaurant;
});
if (filteredRestaurants.length === 0) {
    result = 'There are no restaurants available right now.';
}
else {
    result = `We found ${filteredRestaurants.length} restaurants, the first is ${filteredRestaurants[0].name}.`;
}
console.log(result);

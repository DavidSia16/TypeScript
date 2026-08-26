import restaurants from './restaurant';

const dollarSigns = '$$';
const deliveryTimeMax = '90';
const maxDistance = 10;
let result: string;
const hour : number = new Date().getHours();


const priceBracket: number = dollarSigns.length;

const filteredRestaurants = restaurants.filter((restaurant) => {
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
  if (hour  < openHour && hour > closeHour ){
    return false;
  }

  return restaurant;
});

if (filteredRestaurants.length === 0) {
  result = 'There are no restaurants available right now.';
} else {
  result = `We found ${filteredRestaurants.length} restaurants, the first is ${filteredRestaurants[0].name}.`;
}

console.log(result);

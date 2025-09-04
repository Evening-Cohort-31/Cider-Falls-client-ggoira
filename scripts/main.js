import { generateServicesHtml } from "./services.js";
import {  getGuests } from "./database.js";
import { generateGuestsHtml } from "./guests.js";
import { LocationsCard } from "./destinations.js";

import { getDestinations } from "./database.js";

const destinations = getDestinations();
const guests = getGuests();






const serviceContainer = document.querySelector(".services")
const destinationContainer = document.querySelector(".destinations")
const guestsContainer = document.querySelector(".column_right")


serviceContainer.innerHTML = generateServicesHtml();
destinationContainer.innerHTML = LocationsCard(destinations)
guestsContainer.innerHTML = generateGuestsHtml(guests, destinations);

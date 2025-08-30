// This module will import a structured clone of the data about the locations and services.

import {
  getDestinations,
  getDestinationServices,
  getServices,
} from "./database.js";

//The function to fill the HTML dynamically.

/* There will need to be a function to iterate the locations and extract the services available at each location
based on the services
*/

let destinations = getDestinations();
let servicesAtDestinations = getDestinationServices();

//Function to iterate and match the different services to their locations and create a variable for them.

const serviceFinder = (destination) => {
  let dsJunction = getDestinationServices();
  let serviceList = getServices();
  let destinationMatch = [];
  let serviceMatch = [];

  for (const destinationItem of dsJunction) {
    if (destinationItem.destination_id === destination.id)
      destinationMatch.push(destinationItem.service_id);
  }

  for (const serviceItem of serviceList) {
    for (const serviceID of destinationMatch) {
      if (serviceItem.id === serviceID) {
        serviceMatch.push(serviceItem.name);
      }
    }
  }
  let servicesHTML = `<ul>`
  for (const each of serviceMatch) {
   servicesHTML +=` <li>${each}</li>`
  }
  servicesHTML += `</ul>`
  return servicesHTML
};

export const LocationsCard = (destinations) => {
  let cardHTML = '<section class="place">';

  // Iterate all the locations from database

  for (const place of destinations) {
    let services = serviceFinder(place);
    cardHTML += `
                         <div class="place_text"
                         data-name="${place.name}"
                         data-id="${place.id}"
                         data-location="${place.location}>
                            <h3 class="place_name">${place.name}</h2>
                            <p class="place_location">- ${place.location} -</p>
                            ${services}
                         </div>`;
  }

  cardHTML += `</section>`;
};


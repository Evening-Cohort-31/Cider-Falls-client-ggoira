// This module will import a structured clone of the data about the locations and services.

import { getDestinations } from "./database.js";

//The function to fill the HTML dynamically.

/* There will need to be a function to iterate the locations and extract the services available at each location
based on the services
*/
let destinations = getDestinations()

export const LocationsCard = () => {
  let cardHTML = '<section class="place">';

  // Iterate all the locations from database

  for (const place of destinations) {
    cardHTML += `
                    <img src="TBD" alt="TBD" class="place_image">
                         <div class="place_text"
                         data-name="${place.name}"
                         data-id="${place.id}"
                         data-location="${place.location}
                         >
                            <h3 class="place_name">${place.name}</h2>
                            <p class="place_location">- ${place.location} -</p>
                         </div>
                </section>`;
  }
};

/* 
destinations: [
{
    id: INT (primaryKey),
    name: varchar,
    location: varchar,
}
],

services: [
{
    id: INT,
    name: varchar
}
],


*/

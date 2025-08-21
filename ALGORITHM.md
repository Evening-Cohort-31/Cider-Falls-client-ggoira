# Cider Falls - Project Algorithm 

## 1. Create a database for the project resources and functions for returning each resource. (See ERD asset)
Format: const database = [destinations: [{},{},{}], services: [{},{},{}, guests: [{},{},{}]]

### a. Destinations: An array of destination objects {id: integer, name: varchar, location: varchar, services: array of services.id foreign keys} 
function: getDestinations() => return database.destinations

### b. Services: An Array of service objects: {id: integer, name: varchar}
function: getServices() => return database.services

### c. Guests: An array of guest objects: {id: integer, first_name: varchar, last_name: varchar, location: integer (destination.id foreign key)}
function: getGuests() => return database.guests

## 2. Create the basic page layout (index.js & layout.css) (See wireframe asset)
### a. Header: Contains logo and title

### b. Main Content: Contains two columns:
- Column 1: Contains services class="services_container" & destinations class="destinations_container"
- Column 2: Contains guest info class="guests_container"

### c. Footer: Contains contact info
### d. script: main.js

## 3. Create the main components
### a. guests.js - Render guest names, assign random location to guest
Logic flow:
1. import getGuests() - returns an array of objects
2. import getDestinations() - returns an array of objects 
3. export generateGuestsHtml((guests) => return guestHtmlString)
4. export assignRandomDestination((guests, destinations) => for guest of guests, create a random destination id, and assign to guest.location)

### b. services.js - Render services, create an alert that shows destinations offering selected service
Logic flow:
1. import getServices() - returns an array of objects
2. import getDestinations() - returns an array of objects
3. export generateServicesHtml((services) => return servicesHtmlString)
4. export handleServiceClick((event) => creates an alert showing destinations offering clicked service)

### c. destinations.js - Render destinations in a 2x3 grid in the proper location (Northwest, North, South East, etc), create an alert showing number of guests in selected destination
Logic flow:
1. import getDestinations() - returns an array of objects
2. import getGuests() - returns an array of objects
3. export generateDestinationHtml((destinations) => returns destinationsHtmlString)
4. export handleDestinationClick((event) => creates an alert showing number of guests in clicked destination)

### d. main.js - Invokes html generator functions and inserts into DOM, adds event listeners for destination & services clicks
Logic flow:
1. import html generator functions (generateGuestsHtml,generateServicesHtml,generateDestinationHtml)
2. import event listeners handlers (handleServiceClick, handleDestinationClick)
3. retrieve DOM elements (html containers, event listener targets)
4. Add generated html to the appropriate dom location (document.querySelector(container).innerHtml = generatedHtml)
5. Add event listeners and assign appropriate handlers (document.addEventLister("click", handlerFunction))

## 4. Style the page (styles.css)
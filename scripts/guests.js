export const generateGuestsHtml = (guests, destinations) => {
  let updatedGuests = assignRandomDestination(guests, destinations);
  updatedGuests.sort((a, b) => a.last_name.localeCompare(b.last_name));
  let guestsHTML = `<aside class="guest-list">
                        <ul>Find A Guest: 
                            <div class="guest-list-wrapper">`;

  for (const guest of updatedGuests) {
    let currentDestination = "where?";

    for (const destination of destinations) {
      if (destination.id === guest.destinationId) {
        currentDestination = destination.name;
      }
    }

    guestsHTML += ` <li class="guest" data-type="guest"
                            data-id="${guest.id}"
                            data-destinationId="${guest.destinationId}">
                            ${guest.first_name} ${guest.last_name} \n
                            
                             @ ${currentDestination}
                        </li>`;
  }
  guestsHTML += `       </div>
                    </ul>
                </aside>`;

  return guestsHTML;
};

export const assignRandomDestination = (guests, destinations) => {
  return guests.map((guest) => {
    const randomIndex = Math.floor(Math.random() * destinations.length);
    const randomDestination = destinations[randomIndex];

    return {
      ...guest,
      destinationId: randomDestination.id,
    };
  });
};

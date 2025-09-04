export const generateGuestsHtml = (guests, destinations) => {

    let updatedGuests = assignRandomDestination(guests, destinations)
    let guestsHTML = "<ul>"

    for (const guest of updatedGuests) {

        let currentDestination = "where?"

        for (const destination of destinations) {
            if (destination.id === guest.destinationId) {
                currentDestination = destination.name
            }
        }

        guestsHTML += ` <li data-type="guest"
                            data-id="${guest.id}"
                            data-destinationId="${guest.destinationId}">
                            ${guest.first_name} ${guest.last_name}
                            (Currently visiting: ${currentDestination})
                        </li>`
    }
    guestsHTML += "</ul>"

    return guestsHTML
}

export const assignRandomDestination = (guests, destinations) => {
    return guests.map(guest => {

        const randomIndex = Math.floor(Math.random() * destinations.length)
        const randomDestination = destinations[randomIndex]

        return {
            ...guest,
            destinationId: randomDestination.id
        }
    })
}
import { getServices, getDestinations, getDestinationServices } from "./database.js";

export const generateServicesHtml = () => {
    let services = getServices()

    let serviceHtml = "<ul>"

    for (const service of services) {

        serviceHtml += `<li
                            data-id="${service.id}"
                            data-name="${service.name}"
                            data-type="service">
                            ${service.name}
                            </li>`

    }

    serviceHtml += "</ul>"

    return serviceHtml

}


document.addEventListener(
    "click",
    (clickEvent) => {
        const handleServiceClick = clickEvent.target

        if (handleServiceClick.dataset.type === "service") {

            const serviceId = handleServiceClick.dataset.id
            const serviceName = handleServiceClick.dataset.name
            const destinationServices = getDestinationServices()
            const destinations = getDestinations()
            let serviceDestinations = []

            const destinationMatch = destinationServices.filter(destination => destination.service_id === parseInt(serviceId))

            for (const destinationItem of destinationMatch) {
                for (const destination of destinations)
                    if (destinationItem.destination_id === destination.id) {
                        serviceDestinations.push(destination.name)
                    }
                }
            window.alert(`${serviceName} is available at the following destinations: ${serviceDestinations.join(", ")}.`)
        }
    }
)
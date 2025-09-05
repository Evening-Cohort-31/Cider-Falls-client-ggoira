import {
  getServices,
  getDestinations,
  getDestinationServices,
} from "./database.js";

export const generateServicesHtml = () => {
  let services = getServices();

  let serviceHtml = `<ul class="service_title">Services:
                        <div class="services-container">
`;
  for (const service of services) {
    serviceHtml += `<li class="es"
                            data-id="${service.id}"
                            data-name="${service.name}"
                            data-type="service">
                            ${service.name}
                            </li>`;
  }

  serviceHtml += "</div></ul>";

  return serviceHtml;
};

document.addEventListener("click", (clickEvent) => {
  const handleServiceClick = clickEvent.target;

  if (handleServiceClick.dataset.type === "service") {
    const serviceId = handleServiceClick.dataset.id;
    const serviceName = handleServiceClick.dataset.name;
    const destinationServices = getDestinationServices();
    const destinations = getDestinations();
    let serviceDestinations = [];

    const destinationMatch = destinationServices.filter(
      (destination) => destination.service_id === parseInt(serviceId)
    );

    for (const destinationItem of destinationMatch) {
      for (const destination of destinations)
        if (destinationItem.destination_id === destination.id) {
          serviceDestinations.push(destination.name);
        }
    }
    window.alert(
      `${serviceName} is available at the following destination(s): \n \n - ${serviceDestinations.join(
        "\n - "
      )}`
    );
  }
});

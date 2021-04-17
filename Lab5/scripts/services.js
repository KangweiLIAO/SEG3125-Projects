/**
 * SEG 3125 Lab5 Group6
 * File: services.js
 * @description Responsible for service gallery in the page
 */

services = [
	{
		name: "Tune-Up",
		img: "res/service-tuning",
		description:
			"We will take your bicycle and perform some small adjustments and check-ups to each individual part of the bicycle to ensure that it runs smoothly and efficiently.",
		price: 65,
	},
	{
		name: "Overhaul",
		img: "res/service-overhaul",
		description:
			"A thorough package in which the bicycle is completely disassembled, parts replaced, cleaned and reassembled and tuned as per the Tune-Up package.",
		price: 200,
	},
	{
		name: "Brake and Gear Adjustments",
		img: "res/service-break",
		description:
			"The gears and brakes are an integral part to safe bicycle operations. With this service, we will realign your rims to the brakes and adjust cable tension and positioning of brake arms to ensure that the rear brake is sufficiently fast and stiff.",
		price: 15,
	},
	{
		name: "Wheel Truing",
		img: "res/service-truing",
		description:
			'The wheel will be subject to an operation called "truing" that will realign the wheel such that the wheels do not pull left or right during operation.',
		price: 20,
	},
];

/**
 * @description Append all service object into the html document
 */
function appendAllServices() {
	for (let i = 0; i < services.length; i++) {
		const elem = services[i];
		content = `
        <div class="card card-service neu-raised">
            <img src="${elem.img}.png" class="card-img-top" alt="${elem.name} image" />
            <div class="card-body d-flex flex-column justify-content-between">
                <h5 class="card-title">
					<img src="res/icon/service-24px.svg" class="icon" alt="expert-icon">
					${elem.name}
				</h5>
                <p id="${elem.name}-description" class="card-text">
                    ${elem.description}
                </p>
				<i class="fas fa-dollar-sign">Price: ${elem.price} CAD</i>
            </div>
        </div>
        `;
		$("#services-body").append(content);
	}
	console.log("All services appended.");
}

function initMap() {
	const bookAddrInput = document.getElementById("book-address");
	const options = {
		bounds: new google.maps.LatLngBounds(new google.maps.LatLng(45.4215296, -75.695)),
		componentRestrictions: { country: "ca" },
		strictBounds: false,
	};
	new google.maps.places.Autocomplete(bookAddrInput, options);
}

// Document Ready
$(() => {
	appendAllServices();
});

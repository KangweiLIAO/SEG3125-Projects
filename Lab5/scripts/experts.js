/**
 * SEG 3125 Lab5 Group6
 * File: experts.js
 * @description Responsible for experts gallery in the page
 */

experts = [
	{
		name: "Robert Smith",
		description:
			"Robert has worked 5 years in the bicycle repair business. He has restored high profile bicycles worth $2000+. He specializes in bicycle overhauls, making your bicycle feel as good as new.",
	},
	{
		name: "Alex Wyatt",
		description:
			"Alex has worked 20 years in the bicycle repair business. He is also an avid cyclist, participating in over 100 bicycle races over the years. He knows exactly what you need for your bicycle to operate at peak effectiveness.",
	},
];

/**
 * @description Append all expert object into the html document
 */
function appendAllExperts() {
	for (let i = 0; i < experts.length; i++) {
		const elem = experts[i];
		content = `
        <div class="card card-expert neu-focus">
            <img src="res/expert-${i + 1}.png" class="card-img-top" alt="${
			elem.name
		} photo" />
            <div class="card-body d-flex flex-column">
                <h5 class="card-title d-flex align-item-center justify-content-center">
					<img src="res/icon/expert.svg" class="icon mr-2" alt="expert-icon">
					${elem.name}
				</h5>
                <p id="${elem.name}-description" class="card-text">
                    ${elem.description}
                </p>
            </div>
        </div>`;
		$("#experts-body").append(content);
	}
	console.log("All experts added");
}

$(() => {
	appendAllExperts();
});

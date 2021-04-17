/**
 * SEG 3125 Lab5 Group6
 * File: comments.js
 * @description Responsible for experts gallery in the page
 */

comments = [
	{
		name: "Bruce T",
		avatarUrl:
			"https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=976&q=80",
		comment:
			"The owner is very friendly. The place is clean and I never have to wait very long. Price is reasonable and cheaper. Highly recommend.",
	},
	{
		name: "Alex C",
		avatarUrl:
			"https://images.unsplash.com/photo-1466112928291-0903b80a9466?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
		comment:
			"Knowledgeable staff, great service, and fair prices. They're my go to place for winter biking maintenance.",
	},
	{
		name: "Ben H",
		avatarUrl:
			"https://images.unsplash.com/photo-1526800544336-d04f0cbfd700?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
		comment:
			"This is a great place to get you skate sharpened. The staff is very helpful and friendly. Only took ten minutes!",
	},
	{
		name: "Dan M",
		avatarUrl:
			"https://cdn2.f-cdn.com/contestentries/1376995/30560087/5b5e674f5aecd_thumb900.jpg",
		comment:
			"What a friendly service at the best price located just in the uOttawa. I’d highly recommend it!",
	},
];

/**
 * @description Append all expert object into the html document
 */
function appendAllComments() {
	for (let i = 0; i < comments.length; i++) {
		const elem = comments[i];
		content = `
		<div class="card card-comment neu-focus col-5">
			<div class="card-body d-flex flex-column justify-content-start">
				<a class="card-title text-decoration-none">
					<img
						src="${elem.avatarUrl}"
						alt="avatar-${elem.name}"
						class="rounded-circle avatar-sm"
					/>
					${elem.name}</a
				>
				<p class="card-text text-justify">
					${elem.comment}
				</p>
			</div>
		</div>`;
		$("#testimonials-body").append(content);
	}
	console.log("All comments added");
}

$(() => {
	appendAllComments();
});

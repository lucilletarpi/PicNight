const data = [
	{
		src: "./picture/astronomy-gfe9e6d0ab_1920.jpg",
		description: "Astronomie",
		alt: "Astronomie",
		label: "Slide 1",
		auteur: "Pexels",
	},
	{
		src: "./picture/orion-nebula.jpg",
		description: "Nébuleuse d'Orion",
		alt: "Nébuleuse d'Orion",
		label: "Slide 2",
		auteur: "WikiImages",
	},
	{
		src: "./picture/constellations.jpg",
		description: "Constellation",
		alt: "Constellation",
		label: "Slide 3",
		auteur: "StockSnap",
	},
	{
		src: "./picture/northern.jpg",
		description: "Lumière du Nord",
		alt: "Lumière du Nord",
		label: "Slide 4",
		auteur: "Andersgaard",
	},
	{
		src: "./picture/aurora.jpg",
		description: "Aurore Boréale",
		alt: "Aurore Boréale",
		label: "Slide 5",
		auteur: "Noel Bauza",
	},
	{
		src: "./picture/cieletoilebypexels.jpg",
		description: "Ciel étoilé",
		alt: "Ciel étoilé",
		label: "Slide 6",
		auteur: "Pexels",
	},
	{
		src: "./picture/lagoon-nebulaby wikilImage.jpg",
		description: "Nébuleuse de la Lagune",
		alt: "Nébuleuse de la Lagune",
		label: "Slide 7",
		auteur: "WikiImages",
	},
	{
		src: "./picture/helix-nebula.jpg",
		description: "Nébuleuse de l'hélice",
		alt: "Nébuleuse de l'hélice",
		label: "Slide 8",
		auteur: "WikiImages",
	},
	{
		src: "./picture/ngc-2818.jpg",
		description: "NGC 2818",
		alt: "NGC 2818",
		label: "Slide 9",
		auteur: "WikiImages",
	},
	{
		src: "./picture/galaxy.jpg",
		description: "Galaxy",
		alt: "Galaxy",
		label: "Slide 10",
		auteur: "WikiImages",
	},
];

function pictureList() {
	//  I select the first div
	const buttonCarousel = document.querySelector(".carousel-indicators");
	const carousels = document.querySelector(".carousel-inner");

	for (let i = 0; i < data.length; i++) {
		// I create the carousel buttons//
		const buttonIndicator = document.createElement("button");

		buttonIndicator.setAttribute("data-bs-slide-to", i);
		buttonIndicator.setAttribute("data-bs-target", "#carouselExampleCaptions");
		buttonIndicator.setAttribute("aria-label", data[i].label);
		buttonIndicator.type = "button";

		buttonCarousel.appendChild(buttonIndicator);
		if (i === 0) {
			buttonIndicator.classList.add("active");
		}
		console.log(buttonCarousel);

		//I'm starting to create the carousel div//

		const carouselItem = document.createElement("div");
		carouselItem.className = "carousel-item";
		carouselItem.setAttribute("data-bs-interval", "5500");
		carousels.appendChild(carouselItem);
		if (i === 0) {
			carouselItem.classList.add("active");
		}
		console.log(carousels);

		// I create the images tag//
		const imgCarousel = document.createElement("img");
		imgCarousel.className = "d-block w-100";
		imgCarousel.src = data[i].src;
		imgCarousel.alt = data[i].alt;
		console.log(imgCarousel);

		carouselItem.appendChild(imgCarousel);

		// the div containing the image information//
		const divCarousel = document.createElement("div");
		divCarousel.className = "carousel-caption d-none d-md-block";
		carouselItem.appendChild(divCarousel);

		// image title//
		const titleImg = document.createElement("h2");
		titleImg.textContent = data[i].description;
		divCarousel.appendChild(titleImg);

		// the author of the image //
		const author = document.createElement("p");
		author.textContent = "By" + " " + data[i].auteur;
		divCarousel.appendChild(author);
	}
}
// function for the loader
function showContent() {
	document.querySelector(".loader-container").classList.add("hidden");
}

setTimeout(showContent, 3000);
pictureList();

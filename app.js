const data = [
    {
    src: "./picture/astronomy-gfe9e6d0ab_1920.jpg",
     description: 'Astronomie',
     alt: "Astronomie",
     label: "Slide 1",
      auteur:"Pexels"
    },
    {
        src:"./picture/milky-way-g21da6e0b7_1920.jpg", description:"Voie Lactée",
        alt: "Voie Lactée",
        label: "Slide 2",
         auteur:"Félix Mittermier"
    },
    {
        src:"./picture/constellations.jpg.jpg",
     description:"Constellation",
     alt:"Constellation",
     label: "Slide 3",
      auteur:"StockSnap"
    },
    {
        src:"./picture/orion-nebula-g4bb47496c_1920.jpg", description:"La nébuleuse d'Orion",
        alt:"La nébuleuse d'Orion",
        label: "Slide 4",
         auteur:"WikiImage"
    },
    {
        src:"./picture/aurora.jpg", 
        description:"Aurore Boréale", 
        alt:"Aurore Boréale",
        label: "Slide 5",
        auteur:"Noel Bauza"
    },
    {
        src:"./picture/cieletoilebypexels.jpg", 
        description:"Ciel étoilé",
        alt:"Ciel étoilé",
        label: "Slide 6",
        auteur:"Pexels"
    },
    {
        src:"./picture/lagoon-nebulaby wikilImage.jpg",
     description:"Nébuleuse de la Lagune",
     alt: "Nébuleuse de la Lagune",
     label: "Slide 7",
     auteur:"WikiImage"
    },
]

function pictureList(){
   // je selectionne les premières div"//
   const buttonCarousel = document.querySelector('.carousel-indicators');
    const carousels = document.querySelector('.carousel-inner');
    // je créer la div qui va intégrer les données du tableau//
    const interval = document.createElement('div');
    // je boucle le tableau des données//

    for (let i = 0; i < data.length; i++) {
        // je créer les buttons du carousels//
        const buttonIndicator = document.createElement("button");
        
        buttonIndicator.setAttribute("data-bs-slide-to", i);
        buttonIndicator.setAttribute("data-bs-target", "#carouselExampleCaptions");
        buttonIndicator.setAttribute("aria-label", "Slide"+" "+i)
        buttonIndicator.type = "button";

        buttonCarousel.appendChild(buttonIndicator);

        console.log(buttonCarousel);

        //Je commence a créer la div des images en carousels//

        const carouselItem = document.createElement('div');
        carouselItem.className = "carousel-item";
        carouselItem.setAttribute("data-bs-interval","10000");
        carousels.appendChild(carouselItem);

        console.log(carousels);

    // je créer la balise img//
        const imgCarousel = document.createElement('img');
        imgCarousel.className = "d-block w-100";
        imgCarousel.src = data[i].src;
        imgCarousel.alt = data[i].alt;
        console.log(imgCarousel);

        carouselItem.appendChild(imgCarousel);
      

    }
}

function showContent(){
    document.querySelector('.loader-container').classList.add('hidden');

}

setTimeout(showContent, 3000);
pictureList()
new bootstrap.Carousel(document.getElementById("carouselExampleCaptions"));
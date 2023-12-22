const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

/*Variable globales*/
	
	const dots = document.querySelector(".dots");
	const arrowRight = document.querySelector(".arrow_right");
	const arrowLeft = document.querySelector(".arrow_left");
	const img = document.querySelector(".banner-img");
	const h2 = document.querySelector("#banner p")
	let index = 0;
	
	


/*Affichage des dots*/

function displayDots(){
		for (let i = 0; i < slides.length; i++){
			let dot = document.createElement("div");
				dot.classList.add("dot");
				dots.appendChild(dot);
			if(i ==index){
				dot.classList.add("dot_selected")
			}
			
	}
}

displayDots();

function clickRight (){
			arrowRight.addEventListener("click",()=>{
				const tabDots = document.querySelectorAll(".dots .dot");
			tabDots[index].classList.remove("dot_selected")
			index++;
		if (index > slides.length -1){
			index = 0;
		}
			tabDots[index].classList.add("dot_selected")
			img.src = "./assets/images/slideshow/" + slides[index].image;
			h2.innerHTML =  slides[index].tagLine;

});
}
clickRight();

function clickLeft (){
	arrowLeft.addEventListener("click",()=>{
		const tabDots = document.querySelectorAll(".dots .dot");
	tabDots[index].classList.remove("dot_selected");
	index--;
if (index < 0){
	index = slides.length -1;
}
	tabDots[index].classList.add("dot_selected")
	img.src = "./assets/images/slideshow/" + slides[index].image;
	h2.innerHTML =  slides[index].tagLine;

});
}
clickLeft();
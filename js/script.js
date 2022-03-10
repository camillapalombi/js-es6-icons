//ARRAY DI OGGETTI DESCRITTIVI PER LE ICON:

const arrIcons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

//MILESTONE 1. e 2.
const iconsContainer = document.querySelector('.main-container'); //container dove stamperò le icone

function insertIcons(arrIcons, iconsContainer) {    //funzione stampa icone 
	iconsContainer.innerHTML = '';    //azzeramento del container per evitare il raddoppiamento
    arrIcons.forEach(element => {    //per ogni elemento di arrIcons fai questo:
        const elementIcons = document.createElement('div');    //crea un elemento div
        elementIcons.classList.add('icon-box');    //dagli classe icon-box
        elementIcons.innerHTML = `<i class="${element.family} ${element.prefix}${element.name}" style="color: ${element.color}"></i>
        <div class="text-icon">${element.name}</div>`;    //inseriscigli questo codice dentro

        iconsContainer.append(elementIcons);    //stampo icone nel DOM
    });
};

insertIcons(arrIcons, iconsContainer);    //richiamo funzione stampa icone


//MILESTONE 3.
let selectIconsType = document.getElementById('selects-icons-type');   //select dell'html


selectIconsType.addEventListener("change", function () {

    let optionSelected = this.value;   //opzione selezionata

	if (optionSelected != "all") {     //se l'option selezionata ha value diversa da "all" fai:
		const filterIcons = arrIcons.filter((icon) => {     //aggiungi alla variabile filterIcons solo le icone di tipo uguale a quello selezionato
		  if (icon.type == optionSelected) {
			return true;
		  }
		});
		insertIcons(filterIcons, iconsContainer); //mostra le icone filtrare per tipo
	  } else {
		insertIcons(arrIcons, iconsContainer); //mostra tutte le icone
	  }
	});


// BONUS COLORI RANDOM

//funzione creazione codici colore random
function randomColor() {
	let alphanumeriCaracters = '0123456789ABCDEF';
	let prefix = '#';

	for (let i = 0; i < 6; i++) {
		prefix += alphanumeriCaracters[randomBetween(15, 0)]; //richiamo funzione numeri random
	}
	return prefix;
}

//funzione creazione numeri random tra due numeri
function randomBetween(max, min) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}


//richiamo funzione colore
arrIcons.forEach((icon) => icon.color = randomColor());





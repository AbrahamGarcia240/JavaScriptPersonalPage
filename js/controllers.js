
let menu = [{
		"clase": "hidden",
		"link": "page-top",
		"text": ""

},
	{
		"clase": "page-scroll",
		"link": "portfolio",
		"text": "portfolio"

},
	{
		"clase": "page-scroll",
		"link": "about",
		"text": "About"

},
	{
		"clase": "page-scroll",
		"link": "contact",
		"text": "Contact"

}]

let modals = [
	{
		"title": "Ejemplo1",
		"id": "portfolioModal1",
		"img": "cabin.png",
		"content": "bla bla bla bla bla bla bla bla bla",
		"client": "atom"
	},
	{
		"title": "Ejemplo2",
		"id": "portfolioModal2",
		"img": "cake.png",
		"content": "bla bla bla bla bla bla bla bla bla",
		"client": "Google"
	},
	{
		"title": "Ejemplo3",
		"id": "portfolioModal3",
		"img": "circus.png",
		"content": "bla bla bla bla bla bla bla bla bla",
		"client": "Google"
	},
	{
		"title": "Ejemplo4",
		"id": "portfolioModal4",
		"img": "game.png",
		"content": "bla bla bla bla bla bla bla bla bla",
		"client": "Google"
	},
	{
		"title": "Ejemplo5",
		"id": "portfolioModal5",
		"img": "safe.png",
		"content": "bla bla bla bla bla bla bla bla bla",
		"client": "Google"
	},
	{
		"title": "Ejemplo6",
		"id": "portfolioModal6",
		"img": "submarine.png",
		"content": "bla bla bla bla bla bla bla bla bla",
		"client": "Google"
	}
]




let app = new Vue({
	el: '#portfolio',
	data: {
		message: 'Hola mundo',
		inputMessage: "",
		portfolioitems: [], //la llamada remota ya carga el json

	},
	beforeCreate() { //funcion de eventos que se ejecutan antes de que se cree el
		//objeto
		console.log("before created 1"); //para ver que si lo hace antes de crear el objeto 
		let self = this; //para amarrar la variable al contexto
		let xhr = new XMLHttpRequest(); //objeto ajax para llamadas remotas
		xhr.onload = function () {
			self.portfolioitems=JSON.parse(xhr.responseText).portfolioitemsarray; //obtener el json del servidor
			//console.log(JSON.parse(xhr.responseText).portfolioitemsarray);
		}
		xhr.open('GET', 'http://localhost:4000/portfolio'); //hace la llamada HTTP
		xhr.send(); //flush
	}
})



let items = new Vue({
	el: '#collapse-menu',
	data: {
		ItemsMenu: menu,

	},
	beforeCreate() {
		console.log("before created 2");
	}
})

let portfolioModalController = new Vue({
	el: '#portfolioModals', //id en donde se va a aplicar este vue
	data: {
		portfolioModals: modals

	},
	beforeCreate() {
		console.log("before created 3");
	}
})

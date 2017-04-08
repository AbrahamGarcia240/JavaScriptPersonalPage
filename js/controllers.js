
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
		ItemsMenu: [],

	},
	beforeCreate() { //funcion de eventos que se ejecutan antes de que se cree el
		//objeto
		console.log("before created 2"); //para ver que si lo hace antes de crear el objeto 
		let self = this; //para amarrar la variable al contexto
		let xhr = new XMLHttpRequest(); //objeto ajax para llamadas remotas
		xhr.onload = function () {
			self.ItemsMenu=JSON.parse(xhr.responseText).menu; //obtener el json del servidor
			//console.log(JSON.parse(xhr.responseText).portfolioitemsarray);
		}
		xhr.open('GET', 'http://localhost:4000/portfolio'); //hace la llamada HTTP
		xhr.send(); //flush
	}
})

let portfolioModalController = new Vue({
	el: '#portfolioModals', //id en donde se va a aplicar este vue
	data: {
		portfolioModals: []

	},
	beforeCreate() { //funcion de eventos que se ejecutan antes de que se cree el
		//objeto
		console.log("before created 1"); //para ver que si lo hace antes de crear el objeto 
		let self = this; //para amarrar la variable al contexto
		let xhr = new XMLHttpRequest(); //objeto ajax para llamadas remotas
		xhr.onload = function () {
			self.portfolioModals=JSON.parse(xhr.responseText).modals; //obtener el json del servidor
			//console.log(JSON.parse(xhr.responseText).portfolioitemsarray);
		}
		xhr.open('GET', 'http://localhost:4000/portfolio'); //hace la llamada HTTP
		xhr.send(); //flush
	}
})

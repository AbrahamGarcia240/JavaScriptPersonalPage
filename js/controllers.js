let portfolioitemsarray = [
	{
		"img": "cabin.png",
		"link": "portfolioModal1",
		"alt": "cabin"
	}, {
		"img": "cake.png",
		"link": "portfolioModal2",
		"alt": "cabin"
	}, {
		"img": "circus.png",
		"link": "portfolioModal3",
		"alt": "cabin"

},
	{
		"img": "game.png",
		"link": "portfolioModal4",
		"alt": "cabin"

},
	{
		"img": "safe.png",
		"link": "portfolioModal5",
		"alt": "cabin"

},
	{
		"img": "submarine.png",
		"link": "portfolioModal6",
		"alt": "cabin"

}
]


let modals = [
	{
		"title":"Ejemplo1",
		"id":"portfolioModal1",
		"img":"cabin.png",
		"content":"bla bla bla bla bla bla bla bla bla",
		"client":"atom"
	},
	{
		"title":"Ejemplo2",
		"id":"portfolioModal2",
		"img":"cake.png",
		"content":"bla bla bla bla bla bla bla bla bla",
		"client":"Google"
	},
	{
		"title":"Ejemplo3",
		"id":"portfolioModal3",
		"img":"circus.png",
		"content":"bla bla bla bla bla bla bla bla bla",
		"client":"Google"
	},
	{
		"title":"Ejemplo4",
		"id":"portfolioModal4",
		"img":"game.png",
		"content":"bla bla bla bla bla bla bla bla bla",
		"client":"Google"
	},
	{
		"title":"Ejemplo5",
		"id":"portfolioModal5",
		"img":"safe.png",
		"content":"bla bla bla bla bla bla bla bla bla",
		"client":"Google"
	},
	{
		"title":"Ejemplo6",
		"id":"portfolioModal6",
		"img":"submarine.png",
		"content":"bla bla bla bla bla bla bla bla bla",
		"client":"Google"
	}
]

var app = new Vue({
	el: '#portfolio',
	data: {
		message: 'Hola mundo',
		inputMessage: "",
		portfolioitems: portfolioitemsarray,
		
	}
})

var portfolioModalController = new Vue({
	el: '#portfolioModals', //id en donde se va a aplicar este vue
	data: {
		portfolioModals: modals
		
	}
})

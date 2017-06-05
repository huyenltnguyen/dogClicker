//----------- MODEL --------------//
let model = {
	currentDog:  null,
	dogList: [
				{
					name: "Fido",
					img: "http://www.pawderosa.com/images/puppies.jpg",
					count: 0,
				},

				{
					name: "Lexi",
					img: "https://www.pets4homes.co.uk/images/articles/2889/large/how-to-teach-puppy-not-to-bark-555f2e6c73b7c.jpg",
					count: 0
				},

				{
					name: "Max",
					img: "https://cdn.pixabay.com/photo/2015/02/05/12/09/chihuahua-624924_1280.jpg",
					count: 0
				},

				{
					name: "Rocky",
					img: "http://www.spaldingvoice.co.uk/wp-content/uploads/2016/05/puppy.jpg",
					count: 0
				},

				{
					name: "Cody",
					img: "https://puppydogweb.com/wp-content/uploads/2015/05/husky-puppy-18220-1920x1200.jpg",
					count: 0
				}
				]

};


//-------- OCTOPUS ---------//
let octopus = {
	init: function() {
		// set the current dog to the first one in the list
		model.currentDog = model.dogList[0];

		// tell the views to initialize
		dogListView.init();
		dogView.init();
	},

	getDogList: function() {
		return model.dogList;
	},

	getCurrentDog: function() {
		return model.currentDog;
	},

	// set the currently-selected dog to the object passed in
	setCurrentDog: function(chosenDog) {
		model.currentDog = chosenDog;
	},

	// increments the counter for the currently-selected dog
	increaseCounter: function() {
		model.currentDog.count++;
		dogView.render();
	}
};

//--------- DOG VIEW -----------//
let dogView = {
	init: function() {
		// store pointers to our DOM elements for easy access later		
		this.name = document.querySelector("#name");
		this.counter = document.querySelector("#counter");
		this.img = document.querySelector("img");

		// on click, increment the current dog's counter
		this.img.addEventListener("click", function() {
			octopus.increaseCounter();
		});

		// render this view (update the DOM elements with the right values)
		this.render();
	},	

	render: function() {
		// update the DOM elements with values from the current dog
		let currentDog = octopus.getCurrentDog();
		this.name.innerText = currentDog.name;
		this.counter.innerText = "Click count: " + currentDog.count;
		this.img.setAttribute("src", currentDog.img);
	}

};

//--------- DOG LIST VIEW ----------//
let dogListView = {
	init: function() {
		// store the DOM element for easy access later
		this.li = document.getElementsByTagName("li");

		// render this view (update the DOM elements with the right values)
		this.render();
	},

	render: function() {
		// get the dogList via octopus
		let dogList = octopus.getDogList();

		for (let i = 0; i < this.li.length; i++) {
			this.li[i].addEventListener("click", function() {
				let item = this;	// set the clicked list item as 'item'

				// check the dogList and return the first (also only) object that has the 'name' property matches the name of the clicked list item
				let chosenDog = dogList.filter(function(elem) {
								if (elem.name === item.innerText) {
									return elem;
								}
							})[0];

				// call octopus to set the clicked item to be the current dog
				// and display the name, image and clicks of the new current dog
				octopus.setCurrentDog(chosenDog);
				dogView.render();
			});
		};
	}
}

// run the app
octopus.init();

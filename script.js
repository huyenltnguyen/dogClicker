let li = document.getElementsByTagName("li");
let name = document.querySelector("#name");
let counter = document.querySelector("#counter");
let img = document.querySelector("img");
let dogInfo;
let dogList = [
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
				},
				];


for (let i = 0; i <  li.length; i++) {
	li[i].addEventListener("click", function() {
		dogInfo = findDogInfo(li[i].innerText);
		displayDogInfo(dogInfo.name, dogInfo.count, dogInfo.img);
	})
}


img.addEventListener("click", function() {
	dogInfo.count++;
	counter.innerText = "Clicks count: " + dogInfo.count;
});


function findDogInfo(dogName) {
	return dogList.filter(function(elem) {
		if (elem.name === dogName) {
			return elem;
		}
	})[0];
}

function displayDogInfo(dogName, clicksCount, dogImg) {
	name.innerText = dogName;
	counter.innerText = "Clicks count: " + clicksCount;
	img.setAttribute("src", dogImg);
}
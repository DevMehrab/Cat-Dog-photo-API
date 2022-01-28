let cat = document.querySelector('.cats');
let dog = document.querySelector('.dogs');
let catBtn = document.querySelector('.cat-btn');
let dogBtn = document.querySelector('.dog-btn');

catBtn.addEventListener('click', fetchCats)
dogBtn.addEventListener('click', fetchDogs)

function fetchCats(){
	fetch('https://aws.random.cat/meow')
	.then(res => {return res.json()})
	.then(data=> {
		cat.innerHTML=`<img src="${data.file}">`
	})
}

function fetchDogs(){
	fetch('https://random.dog/woof.json')
	.then(res => {return res.json()})
	.then(data=> {
	dog.innerHTML=`<img src="${data.url}">`
	
	})
}

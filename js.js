var allPizza = ['Pizza Hawaii', 'Pizza Salami', 'Pizza Calzone'];
var allPrices = [5, 4, 6];

var allToppings = ['Peper', 'Kruiden', "Ui", "Augurk", "Tomaat"];
var allToppingPrices = [1, 2, 1, .5, .2];

var countPrice = [];

function startPizza(){

	document.getElementById('pizzaInfo').style.display = 'none';

	for (i = 0; i < allPizza.length; i++) { 

		var tr = document.createElement("tr");
		tr.setAttribute("id", "pizzalist" + i);
		document.getElementById('tbody').appendChild(tr);

		var tdN = document.createElement("td");
		tdN.setAttribute("id", "myTdN" + i);
		document.getElementById('pizzalist' + i).appendChild(tdN);

		document.getElementById('myTdN' + i).innerHTML = i;

		var tdP = document.createElement("td");
		tdP.setAttribute("id", i);
		
		document.getElementById('pizzalist' + i).appendChild(tdP);

		document.getElementById(i).innerHTML = allPizza[i];

		document.getElementById(i).onclick = function(){
			clickPizza(this.id);
		}
	}
}

function clickPizza($id) {

	var homePage = document.getElementById('homePage');
	var pizzaInfo = document.getElementById('pizzaInfo');
	var pizzaName = document.getElementById('pizzaName');
	var pizzaPicture = document.getElementById('pizzaPicture');
	var pizzaPrice = document.getElementById('pizzaPrice');

	homePage.style.display = 'none';
	pizzaInfo.style.display = 'block';

	pizzaName.innerHTML = allPizza[$id]
	pizzaPicture.src = allPizza[$id] + ".jpg";

	pizzaPrice.innerHTML = '€' + allPrices[$id];

	var $price = allPrices[$id];
	countPrice.push($price);

	var toppingUl = document.createElement("ul");
	toppingUl.setAttribute("id", 'toppingUl');
	document.getElementById('toppingDiv').appendChild(toppingUl);

	for (a = 0; a < allToppings.length; a++) { 

		var toppingText = document.createTextNode(allToppings[a] + ' ' + '€' + allToppingPrices[a]);
		var toppingLi = document.createElement("li");
		toppingLi.appendChild(toppingText);
		toppingLi.setAttribute("id", 't' + a);
		document.getElementById('toppingUl').appendChild(toppingLi);

		document.getElementById('t'+a).onclick = function(){
			clickTopping(this.id);
		}
	}
}

function clickTopping($id) {

	document.getElementById($id).style.color = 'green';

	var $newId = $id.slice(-1);
	countPrice.push(allToppingPrices[$newId]);

	var sum = countPrice.reduce(add, 0);

	function add(a, b){
		return a+b;
	}

	document.getElementById('pizzaPrice').innerHTML = '€' + sum;

}
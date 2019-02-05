var allPizza = ['Pizza Hawaii', 'Pizza Salami', 'Pizza Calzone'];
var allPrices = [5, 4, 6];

var allToppings = [['Ananas', 'Ham', "Tomatensaus"],
				['Salami', 'Paprika', 'Tomatensaus']];

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

	console.log(allToppings);
	
}
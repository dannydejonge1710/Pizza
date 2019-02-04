var allPizza = ['Pizza Hawai', 'Pizza Selami', 'Pizza Calzone'];

function startPizza(){

	console.log(allPizza.length);

	for (i = 0; i < allPizza.length; i++) { 

		var tr = document.createElement("tr");
		tr.setAttribute("id", "pizzalist" + i);
		document.getElementById('tbody').appendChild(tr);

		var tdN = document.createElement("td");
		tdN.setAttribute("id", "myTdN" + i);
		document.getElementById('pizzalist' + i).appendChild(tdN);

		document.getElementById('myTdN' + i).innerHTML = i;

		var tdP = document.createElement("td");
		tdP.setAttribute("id", "myTdP" + i);
		document.getElementById('pizzalist' + i).appendChild(tdP);

		document.getElementById('myTdP' + i).innerHTML = allPizza[i];
	}
}
fetch('https://api.citybik.es/v2/networks/bicloo').then(function(res) {
	return res.json().then(function(data) {
		var stations = data.network.stations;
// name // free bikes // empty slots

	var liste = document.querySelector('ul');

  for (var i = 0; i < stations.length; i++){
		var currentLi = document.createElement('li');
		var textnode = document.createTextNode(stations[i].name + '//' + stations[i].empty_slots + '//' + stations[i].free_bikes);         // Create a text node
		currentLi.appendChild(textnode);
		liste.appendChild(currentLi);
		// test mise en ligne
  }
//
	});
});

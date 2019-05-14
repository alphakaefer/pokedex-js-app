var pokemonRepository = (function () {
  var repository = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  //add-list-item function:
  function addListItem(pokemon) {
    // console.log(pokemon);
    // pokemon in diesem Fall bezieht sich auf jedes einzelne Pokemon
    var newLi = document.createElement('li');
    var $ul = document.querySelector('ul');
    $ul.appendChild(newLi);
    newLi.classList.add('list-item');

    var newButton = document.createElement('button');
    var $li = document.querySelector('li.list-item');
    $li.appendChild(newButton);
    newButton.classList.add('button__more');
    // function für Eventlistener in der Form wie folgt:
    newButton.addEventListener('click', function(event) {
      showDetails(pokemon);
    });
    var pokemonName = document.createTextNode(pokemon.name);
    newButton.appendChild(pokemonName);
  }

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      console.log(item);

      // Call function showModal

    });
  }


  //add-Pokemon-Objects function:
  function add(item) {
    repository.push(item);
  }

  //get-All function:
  function getAll() {
    return repository;
  }

  function loadList() {
    return fetch("https://pokeapi.co/api/v2/pokemon/").then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        var pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    var url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = Object.keys(details.types);
    }).catch(function (e) {
      console.error(e);
    });
  }

  //return function:
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    // search: search,
    loadList: loadList,
    loadDetails: loadDetails
  };
})();

pokemonRepository.loadList().then(function() {
  // get all Pokemon (jedes einzeln), loop through every Pokemon
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

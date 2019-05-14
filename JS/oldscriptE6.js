var pokemonRepository = (function () {
    var repository = [
      {name: 'Bulbasaur', height: 7, types: ['grass', ' poison'] },
      {name: 'Charmander', height: 6, types: ['fire'] },
      {name: 'Squirtle', height: 5, types: ['water'] }
    ];

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
       console.log(item.name);
     }

    //add-Pokemon-Objects function:
    function add(repository) {
      repository.push(repository);
    }

    //get-All function:
    function getAll() {
      return repository;
    }

    //return function:
    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem
    };
  })();

// get all Pokemon (jedes einzeln), loop through every Pokemon
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });

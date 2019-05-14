// function executeProgram() {

  var pokemonRepository = (function () {
    var repository = [
      {name: 'Bulbasaur', height: 7, types: ['grass', ' poison'] },
      {name: 'Charmander', height: 6, types: ['fire'] },
      {name: 'Squirtle', height: 5, types: ['water'] }
    ];

     //add-list-item function:
    function addListItem(pokemon) {
      var newLi = document.createElement('li');
      var $ul = document.querySelector('ul');
      $ul.appendChild(newLi);
      newLi.classList.add('list-item');

      var newButton = document.createElement('button');
      var $li = document.querySelector('li.list-item');
      $li.appendChild(newButton);
      newButton.classList.add('button__more');
      newButton.addEventListener('click', showDetails);

      var pokemonName = document.createTextNode(pokemon.name);
      newButton.appendChild(pokemonName);

      function showDetails() {
        console.log(pokemonName);
      }
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

  var newPokemonRepository = pokemonRepository.getAll();

  newPokemonRepository.forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
//   pokemonRepository.getAll().forEach(function(pokemon){
//     if (pokemon.height >= 7) {
//       document.write(pokemon.name + ' (<i>height:</i> ' + pokemon.height + ' - “Wow, that’s big!” - , <i>type:</i> ' + pokemon.types + ') ' + '<br>');
//     } else {
//       document.write(pokemon.name + ' (<i>height:</i> ' + pokemon.height + ', <i>type:</i> ' + pokemon.types + ') ' + '<br>');
//     }
  // });
//
// }
// executeProgram();

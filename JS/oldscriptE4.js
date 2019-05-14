//IIFE-Wrap: please wrap all within it!
function executeProgram() {

  var pokemonRepository = (function () {
    var repository = [
      {name: 'Bulbasaur', height: 7, types: ['grass', ' poison'] },
      {name: 'Charmander', height: 6, types: ['fire'] },
      {name: 'Squirtle', height: 5, types: ['water'] }
    ];

    //add-list-item function:
    var pokemonUl = document.getElementById("pokemonList");
    console.log(pokemonUl);
    var pokemonLi = document.querySelectorAll('li');
    console.log(pokemonLi);

    console.log(repository.name);

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
      getAll: getAll
    };
  })(); //IIFE-Wrap closes here!

  //getting the Objects-Array to work with:
  pokemonRepository.getAll().forEach(function(pokemon){
    if (pokemon.height >= 7) {
      document.write(pokemon.name + ' (<i>height:</i> ' + pokemon.height + ' - “Wow, that’s big!” - , <i>type:</i> ' + pokemon.types + ') ' + '<br>');
    } else {
      document.write(pokemon.name + ' (<i>height:</i> ' + pokemon.height + ', <i>type:</i> ' + pokemon.types + ') ' + '<br>');
    }
  });

}
executeProgram();

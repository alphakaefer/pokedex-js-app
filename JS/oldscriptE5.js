//IIFE-Wrap: please wrap all within it!
// function executeProgram() {

  var repository = [
    {name: 'Bulbasaur', height: 7, types: ['grass', ' poison'] },
    {name: 'Charmander', height: 6, types: ['fire'] },
    {name: 'Squirtle', height: 5, types: ['water'] }
  ];



// Object.keys(repository).forEach(function(name){
//   console.log(repository[name]);
// });

  //add-list-item function:
  function addListItem(){
    var newLi = document.createElement('li');
    var $ul = document.querySelector('ul');
    $ul.appendChild(newLi);
    newLi.classList.add('list-item');

    var newButton = document.createElement('button');
    var $li = document.querySelector('li.list-item');
    $li.appendChild(newButton);
    newButton.classList.add('button__more');


    newButton.innerText = (pokemon.name);
    // var newPokemonName = document.createTextNode("test");
    // var $newPokemonName = document.querySelector('button');
    // $newButton.appendChild(newPokemonName);

    // Loop to get all Pokemon Names


  };
  for (var i=0;i<repository.length;i+=1) {
      console.log(repository[i].name);
      addListItem();

  }

  addListItem();


// }
// executeProgram();

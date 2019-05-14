// ### V 1.0 ###
// This array will become the repository of Pokémon to display in your application

document.write('Version 1<br><br>');
var repository = [
  {name: 'Bulbasaur', height: 7, types: ['grass', ' poison'] },
  {name: 'Charmander', height: 6, types: ['fire'] },
  {name: 'Squirtle', height: 5, types: ['water'] }
];

for (var i = 0; i < repository.length; i++) {
  if (repository[i].height >= 7) {
    document.write(repository[i].name + ' (<i>height:</i> ' + repository[i].height + ' - “Wow, that’s big!” - , <i>type:</i> ' + repository[i].types + ') ' + '<br>');
  } else {
    document.write(repository[i].name + ' (<i>height:</i> ' + repository[i].height + ', <i>type:</i> ' + repository[i].types + ') ' + '<br>');
  }
}

// ### V 2.0 ###
// This array will become the repository of Pokémon to display in your application
document.write('<br><br>Version 2<br>(I did not manage to combine conditional for height + color for types yet)<br><br>');
var repository = [
  {name: 'Bulbasaur', height: 7, types: ['grass', ' poison'] },
  {name: 'Charmander', height: 6, types: ['fire'] },
  {name: 'Squirtle', height: 5, types: ['water'] }
];

for (var i = 0; i < repository.length; i++) {
  if (repository[i].height >= 7) {
    document.write(repository[i].name + ' (<i>height:</i> ' + repository[i].height + ' - “Wow, that’s big!” - , <i>type:</i> ' + repository[i].types + ') ' + '<br>');
  } else if (repository[i].types[0] === 'grass') {
    document.write(repository[i].name + ' (<i>height:</i> ' + repository[i].height + ', <i>type:</i><span class="green"> ' + repository[i].types + '</span>) ' + '<br>');
  } else if (repository[i].types[0] === 'fire') {
    document.write(repository[i].name + ' (<i>height:</i> ' + repository[i].height + ', <i>type:</i><span class="red"> ' + repository[i].types + '</span>) ' + '<br>');
  } else if (repository[i].types[0] === 'water') {
    document.write(repository[i].name + ' (<i>height:</i> ' + repository[i].height + ', <i>type:</i><span class="blue"> ' + repository[i].types + '</span>) ' + '<br>');
  } else {
    document.write(repository[i].name + ' (<i>height:</i> ' + repository[i].height + ', <i>type:</i> ' + repository[i].types + ') ' + '<br>');
  }
}


// ### V 3.0 ###
// DISCLAIMER: I GOT HELP HERE.
document.write('<br><br>Version 3 <br>(Disclaimer: I got help here!)<br><br>');

// This array will become the repository of Pokémon to display in your application
var repository = [
  {name: 'Bulbasaur', height: 7, types: ['grass', ' poison'] },
  {name: 'Charmander', height: 6, types: ['fire'] },
  {name: 'Squirtle', height: 5, types: ['water'] }
];

// This array will assign colors to pokemon types
var color={"grass":"green","poison":"","fire":"red","water":"blue"};

// This function will check for the pokemon's size
function getSizeTest(size){
  if(size>=7){
    return(" - Wow thats big! - ");
  }
  else return("");
}
// Loop with conditional to display pokemon with some features
for (var i = 0; i < repository.length; i++) {
  document.write(repository[i].name + ' (<i>height:</i> ' + repository[i].height +
  ' ' + getSizeTest(repository[i].height) + ', <i>type:</i><span style="color:' + color[repository[i].types[0]] +'" > ' + repository[i].types[0] + ') ' + '</span><br>');
}

/*var i=0;
document.write(repository[i].name + ' (<i>height:</i> ' + repository[i].height +
' - ' + getSizeTest(repository[i].height) + ' - ,
<i>type:</i><span style="color:' + color[repository[i].types[0]] +'" > ' +
 repository[i].types[0] + ') ' + '</span><br>');*/

 

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
      showModal(item.name, item.imageUrl, item.height);
    });
  }


// modal

var $modalContainer = document.querySelector('#modal-container');

  function showModal(name, img, height) {
    // Clear all existing modal content
    $modalContainer.innerHTML = '';

    var modal = document.createElement('div');
    modal.classList.add('modal');

    // Add the new modal content
    var closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);

    var titleElement = document.createElement('h1');
    titleElement.innerText = name;

    var imageElement = document.createElement('img');
    imageElement.src = img;
    imageElement.classList.add('pokemon__image');

    var contentElement = document.createElement('p');
    contentElement.innerText = 'height: ' + height;

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(imageElement);
    modal.appendChild(contentElement);
    $modalContainer.appendChild(modal);

    $modalContainer.classList.add('is-visible');
  }

  function hideModal() {
    $modalContainer.classList.remove('is-visible');
  }

  document.querySelector('#show-modal').addEventListener('click', () => {
    showModal('Modal title', 'This is the modal content!');
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && $modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });

  $modalContainer.addEventListener('click', (e) => {
    // Since this is also triggered when clicking INSIDE the modal container,
    // We only want to close if the user clicks directly on the overlay
    var target = e.target;
    if (target === $modalContainer) {
      hideModal();
    }
  });

// End modal






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
    loadDetails: loadDetails,
    hideModal: hideModal,

  };
})();

pokemonRepository.loadList().then(function() {
  // get all Pokemon (jedes einzeln), loop through every Pokemon
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

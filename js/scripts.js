// Exercise 1-6


let pokemonRepository = (

  function() {
  
   
    let pokemonList = [];


    function add(pokemon) {
      pokemonList.push(pokemon);
    }


    function getAll() {
      return pokemonList;
    }
    

    // addListItem() function
    function addListItem(pokemon) {

      //DOM maniuplation
      let ulElement = document.querySelector('ul');

      let listItem = document.createElement('li');

      let button = document.createElement('button');

      button.innerText = pokemon.name;        

      button.classList.add('pokemon-name');

      button.addEventListener('click', function() {
        showDetails(pokemon);
      });
    
      listItem.appendChild(button);

      ulElement.appendChild(listItem);

    }

    function showDetails(pokemon) {
      console.log(pokemon.name);
    }

    return {

      add: add,

      getAll: getAll,

      addListItem: addListItem

    };

  }

) ();

pokemonRepository.add(
    {name: 'Charmander', 
    type: ['FIRE', 'Lizard Pokémon', 'The fire on the tip of its tail is a measure of its life. If healthy, its tail burns intensely.'], 
    profile: [ {height: 0.6, weight: 8.5, abilities:['Blaze', 'Solar-power'] }], 
    evolutions: ['Charmander evolves into Charmeleon at level 16.']}
    );

pokemonRepository.add(
    {name: 'Druddigon', 
    type: ['DRAGON', 'Cave Pokémon', 'It runs through the narrow tunnels formed by Excadrill and Onix. It uses its sharp claws to catch prey.'], 
    profile: [ {height: 1.6, weight: 139, abilities:['Rough-skin', 'Mold-breaker', 'Sheer-force'] }], 
    evolutions: ['Druddigon has no evolutions.']}
    );

pokemonRepository.add(
    {name: 'Ivysaur', 
    type: ['GRASS', 'POISON', 'Seed Pokémon', 'When the bud on its back starts swelling, a sweet aroma wafts to indicate the flowers coming bloom.'], 
    profile: [ {height: 1, weight: 13, abilities:['Chlorophyll', 'Overgrow'] }],  
    evolutions: ['Bulbasaur evolves into Ivysaur at level 16.', 'Ivysaur evolves into Venusaur at level 32.']}
    );

pokemonRepository.add(
    {name: 'Quagsire', 
    type: ['WATER', 'GROUND', 'Water Fish Pokémon', 'It has an easygoing nature. It doesnt care if it bumps its head on boats and boulders while swimming.'], 
    profile: [ {height: 1.4, weight: 75, abilities:['Damp', 'Water-absorb', 'Unaware'] }], 
    evolutions: ['Wooper evolves into Quagsire at level 20.']}
    );

pokemonRepository.add(
    {name: 'Zangoose', 
    type: ['NORMAL', 'Cat Weasel Pokémon', 'Its Sevipers archrival. To threaten those it encounters, it fans out the claws on its front paws.'], 
    profile: [ {height: 1.3, weight: 40.3, abilities:['Immunity', 'Toxic-boost'] }], 
    evolutions: ['Zangoose has no evolutions.']}
    );


let repositoryPokemonList = pokemonRepository.getAll(); // pokemonRepository.getAll(); returns the following arrays: [object Object],[object Object],[object Object],[object Object],[object Object]

repositoryPokemonList.forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon);
});




  


 


// Exercise 1-5 

// Part 1: forEach() Loops

// Use a forEach() function instead of the for loop you have to iterate over the Pokémon in your pokemonList array in order to print the details of each one.
// Commit and push the changes to your GitHub repository.

// array of pokemon data to display in the app
let pokemonList = [ 

  {name: 'Charmander', 
   type: ['FIRE', 'Lizard Pokémon', 'The fire on the tip of its tail is a measure of its life. If healthy, its tail burns intensely.'], 
   profile: [ {height: 0.6, weight: 8.5, abilities:['Blaze', 'Solar-power'] }], 
   evolutions: ['Charmander evolves into Charmeleon at level 16.']},

  {name: 'Druddigon', 
   type: ['DRAGON', 'Cave Pokémon', 'It runs through the narrow tunnels formed by Excadrill and Onix. It uses its sharp claws to catch prey.'], 
   profile: [ {height: 1.6, weight: 139, abilities:['Rough-skin', 'Mold-breaker', 'Sheer-force'] }], 
   evolutions: ['Druddigon has no evolutions.']},
 
  
  {name: 'Ivysaur', 
   type: ['GRASS', 'POISON', 'Seed Pokémon', 'When the bud on its back starts swelling, a sweet aroma wafts to indicate the flowers coming bloom.'], 
   profile: [ {height: 1, weight: 13, abilities:['Chlorophyll', 'Overgrow'] }],  
   evolutions: ['Bulbasaur evolves into Ivysaur at level 16.', 'Ivysaur evolves into Venusaur at level 32.']},
 
  {name: 'Quagsire', 
   type: ['WATER', 'GROUND', 'Water Fish Pokémon', 'It has an easygoing nature. It doesnt care if it bumps its head on boats and boulders while swimming.'], 
   profile: [ {height: 1.4, weight: 75, abilities:['Damp', 'Water-absorb', 'Unaware'] }], 
   evolutions: ['Wooper evolves into Quagsire at level 20.']},

  {name: 'Zangoose', 
   type: ['NORMAL', 'Cat Weasel Pokémon', 'Its Sevipers archrival. To threaten those it encounters, it fans out the claws on its front paws.'], 
   profile: [ {height: 1.3, weight: 40.3, abilities:['Immunity', 'Toxic-boost'] }], 
   evolutions: ['Zangoose has no evolutions.']},
]; 

function forEachLoopFunction(element) {

  // get array objects
  let pokemonListObjects = element;

  // get pokemon names
  let pokemonName = pokemonListObjects.name;
  // document.write(pokemonName); 

  // get height key-value pairs

  // first, for each pokemon, get the profile property value objects containing height and its value, weight and it's value as well as abilities and it's value.
  let profilePropertyValueArrayObjects = Object.entries(pokemonListObjects)[2][1][0]; // returns 5 objects containing height and its value, weight and it's value as well as abilities and it's value.

  // get an ARRAY of the profile property objects containing height and its value, weight and it's value as well as abilities and it's value.
  let profilePropertyValuesIncludingHeight = Object.entries(profilePropertyValueArrayObjects); // returns an ARRAY of 5 elements; each of the 5 elements is an array containing 3 elements (index 0, index 1, index 2); each of the 3 elements is an array; the first element contains 2 elements (height, value-of-height), the second element contains 2 elements (weight, value-of-weight), and the third element contains 2 elements (abilities, array-of-varying-length). Hence, the height-and-its-value pairs can be accessed by using their index positions.

  // get array of the height-and-its-value pairs only
  let heightAndItsValueOnly = profilePropertyValuesIncludingHeight[0];

  // get height element
  let heightElement = heightAndItsValueOnly[0];

  // get height value
  let heightValue = heightAndItsValueOnly[1];

  // concatenate height and its value like this: (height: 7)
  let concatHeightAndValue = "\("+ heightElement + "\:" + " " + heightValue + "\)" ; 

  // “Bulbasaur (height: 7) - Wow, that’s big!”

  // write pokemon name and profile to the DOM like this: “Bulbasaur (height: 7)”
  let pokemonNameFormatToWriteToDOM = "\"" + pokemonName + " " + concatHeightAndValue + "\"" + " " + "<br/>" + "</br>" ;
  let bigPokemon = "\"" + pokemonName + " " + concatHeightAndValue + "\"" + " " + " " + "- Wow, that’s big!" + " " + "<br/>" + "</br>" ;

  // document.write(pokemonNameFormatToWriteToDOM);
  if (pokemonNameFormatToWriteToDOM && heightValue > 1.5) {
    document.write(bigPokemon);
  // console.log(bigPokemon);
  }else {
    document.write(pokemonNameFormatToWriteToDOM);
  // console.log(pokemonNameFormatToWriteToDOM);
  }

}

pokemonList.forEach(forEachLoopFunction);

 
 

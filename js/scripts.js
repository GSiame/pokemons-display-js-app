// Exercise 1-5 

// Part 2: IIFE

// 1. In the “scripts.js” file of your project, wrap your pokemonList array in an IIFE to avoid accidentally accessing the global state.

// 2. Before anything else, create a new pokemonRepository variable to hold what your IIFE will return, then assign the IIFE to that variable. 

// 3. The IIFE should return an object with the following public functions assigned as keys:

      // getAll: return all items
      // (pokemonRepository.getAll(); should return the pokemonList array)

      // add: add a single item to the pokemonList array
      // (calling pokemonRepository.add(item); should add the Pokémon referred to with item to the pokemonList array)

 
// 4. Make sure both functions are defined separately with the function keyword. Also, the IIFE returns only an object with the same names for keys as values (see the last paragraph of the Exercise)

// 5. Outside of and below the IIFE, you should alreadyhave a forEach() loop that iterates over each Pokémon in the repository. But since you’ve limited access to the pokemonList array that’s inside the IIFE (so that it’s only accessible through
      // one of the two functions returned by the IIFE), you need to update the loop code to cope with the new changes. 
      // Essentially, you need to use one of the two functions returned by the IIFE in order to retrieve the pokemonList array.

// 6. Commit and push the changes to your GitHub repository. If all has gone well, your “index.html” file should look the same as before, but the code in "scripts.js" will look a whole lot more complicated. 
      // It’s also much more stable and ready to grow into a real app! 


// 7. Create a zip file of your project repository on your computer.
      
// 8. Upload the zip file and share the link to your repository here, then submit both items to your tutor for review. 
      // Feel free to share additional thoughts or ask questions along with your submission. 




// Use of Immediatiately Invoked Function Expression (IIFE) to wrap around / restrict accessibility of global variable named pokemonList
let pokemonRepository = (

  function() {

    let pokemonList = [];

    function add(item) {
      pokemonList.push(item);
    }

    function getAll() {
      return pokemonList;
    }

    return {

      add: add,

      getAll: getAll

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

// forEach() loop function
function forEachLoopFunction(element) {

  // get array objects
  let pokemonListObjects = element;

  // get pokemon names
  let pokemonName = pokemonListObjects.name;

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


  // write pokemon name and profile to the DOM like this: “Bulbasaur (height: 7)”
  let pokemonNameFormatToWriteToDOM = "\"" + pokemonName + " " + concatHeightAndValue + "\"" + " " + "<br/>" + "</br>" ;
  let bigPokemon = "\"" + pokemonName + " " + concatHeightAndValue + "\"" + " " + " " + "- Wow, that’s big!" + " " + "<br/>" + "</br>" ;

  // document.write(pokemonNameFormatToWriteToDOM);
  if (pokemonNameFormatToWriteToDOM && heightValue > 1.5) {
    document.write(bigPokemon);

  }else {
    document.write(pokemonNameFormatToWriteToDOM);
  }
}

// pokemonList.forEach(forEachLoopFunction);
repositoryPokemonList.forEach(forEachLoopFunction);


  


 

console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
   firstName:"Mel",
  lastName:"Roe",
  hasSiblings: true,
  shoeCount:4,
  favThreeFoods:["tacos","steak","strawberries"]
  // TODO - add properties here
};
console.log('A little about me:', me);

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/
let fullName = me.firstName + " " + me.lastName;
console.log('made fullName', fullName);




/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/
let myFirstFavFood = me.favThreeFoods[0];
console.log('my first fav food is ', myFirstFavFood);



/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/
 me.shoeCount = me.shoeCount +1;
console.log('my new shoe count should now be 5', me, me.shoeCount);

/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/
 me.favoriteColor = me.favoriteColor = ('purple');
console.log('added a new property favorite color to me, purple',me, me.favoritecolor);
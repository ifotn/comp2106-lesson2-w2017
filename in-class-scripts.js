let x = 'abc';
let y = 123;
let z = x + parseInt(123);
console.log(z);

x = null;
y = undefined;

if (x == y) { 
  console.log('true');
}
else {
  console.log('false');
}

if (x === y) { 
  console.log('true');
}
else {
  console.log('false');
}

let fruit = ['apple', 'watermelon', 'grapes'];
console.log(fruit[0]);

for (let i = 0; i < fruit.length; i++) {
  console.log(fruit[i]);
}


let foods = [
  ['sushi', ['rice', 'seaweed', 'fish']],
  ['tacos', ['tortillas', 'meat', 'cheese', 'lettuce']],
  ['pizza', ['dough', 'cheese', 'sauce']]
];

for (let i = 0; i < foods.length; i++) {
  console.log(foods[i][0]);
  
  // create new array for the ingredient list
  let ingredients = foods[i][1];
  
  // output each ingredient for the current food
  for (let j = 0; j < ingredients.length; j++) {
    console.log('\t' + ingredients[j]);
  }
}

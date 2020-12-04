const random_answer = document.getElementById('random_answer');
let recipes = ['asian', 'jewish', 'italian', 'baked_goods'];
const spinner = document.getElementById('spinner');

// generates link to random recipe group when spinner clicked
spinner.addEventListener("click", function(){
  /*
  generates random number between 0-length of random recipes,
  then finds that element in recipes array
  */
  random_recipe = recipes[Math.floor(Math.random() * recipes.length)];
  random_answer.innerHTML = 'You will be making a dish from <a class = "random_link" href=/'+random_recipe+'>'+
  random_recipe+'</a> tonight!';
}
);

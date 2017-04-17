const names = ['zac', 'paul', 'nick'];

// old way
names.forEach(function (name) {
  console.log('forEach', name);
});

// new way
names.forEach((name) => {
  console.log('arrow forEach', name);
})

// shorthand
names.forEach(name => console.log('short', name));


var returnMe = name => name + '!';
console.log(returnMe('zac'));


let person = {
  name: 'zac',
  greet: function () {
    names.forEach(name =>  console.log(this.name + ' says yo to ' + name));
  }
}

// person.greet();


// Challenge
function add (a, b) {
  return a + b;
}
console.log(add(2, 3));

var addArrow = (a, b) => {
  return a + b;
}
console.log(addArrow(10, 20));

var addArrowShort = (a, b) => a + b;
console.log(addArrowShort(3, 6));

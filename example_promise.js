// Callback
function getTempCallback (location, callback) {
  callback(undefined, 20); // success
  callback('Not Found'); // error
}

getTempCallback("California", function (err, temp) {
  if (err) {
    return console.log(err);
  }
  console.log(temp);
})

// Promise
function getTempPromise (location) {
  return new Promise(function (resolve, reject) {
    resolve(21); // success
    reject('Not Found') // error
  });
}

getTempPromise('Irvine').then(function (temp) {
  console.log(temp);
}, function (err) {
  console.log(err)
})


// Challenge
function addPromise (num1, num2) {
  return new Promise(function (resolve, reject) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
      resolve(num1 + num2);
    }
    reject('Arguements must be numbers');
  });
}

addPromise(4, 2).then(function (result) {
  console.log(result);
}, function (err) {
  console.log(err);
})

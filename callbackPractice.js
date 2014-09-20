/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem 

  //code here for favNum

   var favoriteNumber = 13;
   favNum(favoriteNumber, function(){
      console.log('My favorite number is ', + 13);
   });
   

and what you should write is the favNum function that makes the code above work, 
    
    
   var favNum = function(num, cb){
    cb(num);
   }

   var favoriteNumber = 13;
   favNum(favoriteNumber, function(){
      console.log('My favorite number is ', + 13);
   });
    
    
*/



  //Code Here for first
  // Finished!
var first = function(array, callback) {
  var firstItem = array[0];
  callback(firstItem);
};
  
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




  //Code Here for last
  // Finished!
var last = function(array, callback) {
  var lastItem = array[array.length - 1];
  callback(lastItem);
};

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */






  //Code Here for multiply
  // Finished
var multiply = function(num1, num2, callback) {
  var product = num1 * num2;
  callback(product);
}

multiply(4, 3, function(answer){
  console.log('The answer is ', answer); //should console.log 12
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





  //Code Here for contains
  // Finished
var contains = function(array, searchItem, callback) {
  var yes = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === searchItem) {
	  yes = true;
	}
  }
  callback(yes);
};  
  
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
contains(names, 'Colt', function(yes){
  if(yes === true){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the array');
  }
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for uniq
var uniq = function(array, callback) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
	  if (array[i] === array[j]) {
	    array[j].splice(j, 1);
		i--;
	  }
	}
  }
  callback(array);
};

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




    //Code Here for each
var each = function(array, callback) {
  for (var i = 0; i < array.length; i++) {
    callback(array[i], i);
  }
};

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
each(names, function(item, indice){
  console.log('The item in the ' + indice + 'position is ' + item)
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





 //code here for getUserById
 var getUserById = function(idNumber, callback) {
   for (var i = 0; i < users.length; i++) {
     if (users[i].id === idNumber) {
	   callback(users[i]);
	 }
   }
 };

var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById('16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + 'the name of ' + user.name + ' and the address of ' + user.address); 
});

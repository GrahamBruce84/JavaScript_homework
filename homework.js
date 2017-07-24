var name = 'Slim Shady';

var printName = function() {
  console.log('Hi! My name is', name);
};

printName();
// this has created the global variable name Slim shady. the funtion prints to the console the sentence concat with name

score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());
// this has a glabal variable score of 5 but the function has created its own local variable which takes precedence so when printing to the console it will display 3

var myAnimals = ['chickens', 'cats', 'rabbits'];

var listAnimals = function() {
  myAnimals = ['ducks', 'dogs', 'lions'];
  for(var i=0; i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();
// as states previously, this has a global array but the function has its own local array, this will print out a count with the names of each animal in the array

var suspectOne = 'Alan';
var suspectTwo = 'Steve';
var suspectThree = 'John';
var suspectFour = 'Ally';

var allSuspects = function() {
  var suspectThree = 'Adam'
  console.log('Suspects include:', suspectOne, suspectTwo, suspectThree, suspectFour);
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );
// the function has changed the name of suspect 3, the console then prints out the line "suspects include" then each of the names in the list this time it should have Adam as suspect 3. the next console.log will display the John as its outside the function

var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());
// printName function should display Ace Ventura, detectiveInfo changes the name to Poirot but then calls on previous method so should still print out Ace Ventura
// after running it it displays Poirot which i now undestand as its all done within the method and Poirot has overridden Ave Ventura

var murderer = 'John';

var outerFunction = function() {
  var murderer = 'Ally';

  var innerFunction = function() {
    murderer = 'Steve';
  }

  innerFunction();
}

outerFunction();
console.log('The murderer is', murderer);
// Once again I think this will display Steve as it doesnt have var infront of it so this now becomes the global variable, after running it I see John is still the murderer(typical) because the console.log is still just calling on murderer which is the global variable

var players = ["Chris", "Mick", "Davie"];

var player = function(){
  return players.push("John");

  var morePlayers = function(){
    return players.push("Colin");

    var possiblyMorePlayers = function(){
      return players.unshift("Chris");
    }
    possiblyMorePlayers();
  }
  morePlayers();
}
player();
console.log("The players are: ", players);
// This is my own 'episode'










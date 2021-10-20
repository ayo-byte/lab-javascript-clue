// ITERATION 1
/*Clue has three different card types: suspects, rooms, and weapons.

Let's create an array for every card type. These arrays should be named suspectsArray, weaponsArray, roomsArray. Each array will contain objects, where each object represents one card.

All of the information you need about suspects, rooms, and weapons can be found on the DATA.md file.*/
// Suspects Array

const suspectsArray = [
  {
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 45,
    description: "He has a lot of connections",
    image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
    color: "green"},

  {
    firstName: "Doctor",
    lastName: "Orchid",
    occupation: "Scientist",
    age: 26,
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "white"},

  {
    firstName: "Victor",
    lastName: "Plum",
    occupation: "Designer",
    age: 22,
    description: "Billionaire video game designer",
    image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
    color: "purple"},

  {
    firstName: "Kasandra",
    lastName: "Scarlet",
    occupation: "Actor",
    age: 31,
    description: "She is an A-list movie star with a dark past",
    image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "red"},

  {
    firstName: "Eleanor",
    lastName: "Peacock",
    occupation: "Socialité",
    age: 36,
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    color: "blue"},

  {
    firstName: "Jack",
    lastName: "Mustard",
    occupation: "Retired Football player",
    age: 62,
    description: "He is a former football player who tries to get by on his former glory",
    image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
    color: "yellow"}

];



// Rooms Array

const roomsArray = [{name: "Dining Room"},
{name: "Conservatory"},
{name: "Kitchen"},
{name: "Study"},
{name: "Library"},
{name: "Billiard Room"},
{name: "Lounge"},
{name: "Ballroom"},
{name: "Hall"},
{name: "Spa"},
{name: "Living Room"},
{name: "Observatory"},
{name: "Theater"},
{name: "Guest House"},
{name: "Patio"}
];

// Weapons Array

const weaponsArray = [
{name: "rope", weight: 10},
{name: "knife", weight: 8},
{name: "candlestick", weight: 2},
{name: "dumbbell", weight: 30},
{name: "poison", weight: 2},
{name: "axe", weight: 15},
{name: "bat", weight: 13},
{name: "trophy", weight: 25},
{name: "pistol", weight: 20}
];

// ITERATION 2
/*Random selector
Declare a function named selectRandom to randomly select one element from a card stack. The function should expect an array as an argument, and should return a random element from the array.*/
function selectRandom(arr) {
  const randomElement = arr[Math.floor(Math.random() * arr.length)];
   return randomElement
 }

 function pickMystery() {
  let mystery = {};
  mystery.suspect = selectRandom(Object.values(suspectsArray));
  mystery.weapon = selectRandom(Object.values(weaponsArray));
  mystery.room = selectRandom(Object.values(roomsArray));
  return  mystery
}
// ITERATION 3
let theMystery = pickMystery()

function revealMystery(object) {
  let fN = object.suspect.firstName
  let lN = object.suspect.lastName
  let weapon = object.weapon.name
  let room = object.room.name
  return `${fN} ${lN} killed Mr. Boddy using the ${weapon} in the ${room}!`
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
module.exports = {
suspectsArray,
roomsArray,
weaponsArray,
pickMystery,
revealMystery,
selectRandom
};
}

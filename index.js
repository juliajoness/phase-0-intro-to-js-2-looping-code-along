// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

const cards = ["Charlie", "Samip", "Ali"]
function writeCards(cards) {
    let newCards = [];
    for (let p = 0; p < cards.length; p++) {
        newCards.push(`Thank you, ${cards[p]}, for the wonderful surprise gift!`) 
    }
    return newCards; 
      
    debugger;
};


function countDown(num) {
while (num >= 0) {
    console.log(num--)
}
}
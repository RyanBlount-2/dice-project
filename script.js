const diceArray = [
   'Images/Die-1.png',
   'Images/Die-2.png',
   'Images/Die-3.png',
   'Images/Die-4.png',
   'Images/Die-5.png',
   'Images/Die-6.png'
];

function rollDice() {
   let randomNumber1 = Math.floor(Math.random() * 6) + 1;
   let randomNumber2 = Math.floor(Math.random() * 6) + 1;
   let total = randomNumber1 + randomNumber2;
   let data = document.getElementById('input');
   data.value = total;
   let dice = document.getElementsByClassName('die');
   dice[0].src = diceArray[randomNumber1 - 1];
   dice[1].src = diceArray[randomNumber2 - 1];
   console.log(randomNumber1 + ' & ' + randomNumber2 + '   Total = ' + total);
}

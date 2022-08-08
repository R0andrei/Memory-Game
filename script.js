var myImgDiv = document.getElementsByClassName("imgDiv");
var myCard = document.getElementsByClassName("pic");
var noMoves = document.getElementById("myText");
var lenCard = myCard.length;
var lenImg = myImgDiv.length;
var imgCheck = [];
var cardCheck = [];
var moves;
var noclk;
var k;
var goodImg;
var doneImg = [];

addImgs();

function addImgs() {
   let a = 0;
   moves = 0;
   noclk = 0;
   k = [];
   goodImg = 0;
   noMoves.innerText = "Number of moves: " + moves;
   for (let i = 0; i < lenImg; i++) {
      imgCheck[i] = 0;
   }
   for (let j = 0; j < lenCard; j++) {
      cardCheck[j] = 0;
      doneImg[j] = 0;
      myCard[j].innerHTML = "";
   }
   while (a < lenImg) {
      let noImg;
      let noCard1;
      let noCard2;
      noImg = randomImg();
      imgCheck[noImg] = 1;
      noCard1 = randomCard();
      cardCheck[noCard1] = 1;
      noCard2 = randomCard();
      cardCheck[noCard2] = 1;
      myCard[noCard1].innerHTML = myImgDiv[noImg].innerHTML;
      myCard[noCard2].innerHTML = myImgDiv[noImg].innerHTML;
      a++;
   }
   let displayImg = document.querySelectorAll(".pic > img");
   for (let l = 0; l < lenCard; l++) {
      displayImg[l].style.display = "none";
   }
}

function randomImg() {
   let x = Math.floor(Math.random() * lenImg);
   if (imgCheck[x] === 1) {
      x = randomImg();
   }
   return x;
}

function randomCard() {
   let y = Math.floor(Math.random() * lenCard);
   if (cardCheck[y] === 1) {
      y = randomCard();
   }
   return y;
}

function myCheck(n) {
   let displayImg = document.querySelectorAll(".pic > img");
   if (doneImg[n] === 0) {
      k[noclk] = n;
      noclk++;
   }
   if (noclk < 3) {
      displayImg[n].style.display = "inline-block";
   }
   if (noclk === 3) {
      moves++;
      if (myCard[k[0]].innerHTML === myCard[k[1]].innerHTML) {
         goodImg++;
         doneImg[k[0]] = 1;
         doneImg[k[1]] = 1;
      } else {
         if (doneImg[k[0]] === 0) {
            displayImg[k[0]].style.display = "none";
         }
         if (doneImg[k[1]] === 0) {
            displayImg[k[1]].style.display = "none";
         }
      }
      noclk = 0;
      k = [];
   }
   if (goodImg === lenImg - 1 && noclk == 2) {
      alert("Good job! Number of moves: " + Number(moves + 1));
      noMoves.innerText = "Number of moves: " + Number(moves + 1);
   } else {
      noMoves.innerText = "Number of moves: " + moves;
   }
}
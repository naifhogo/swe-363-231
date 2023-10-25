
var height = 6; // number of guesses
var width = 5; // length of the word

var row = 0; // current guess (attempt #)
var col = 0; // current letter for that attempt

var gameOver = false;
var words = ["apple", "beach", "camel", "dairy", "eagle", "fairy", "giant", "hobby", "image", "jolly","clown", "kings", "lemon", "mango", "noble"
,"olive", "piano", "queen", "rider", "sunny", "tiger", "umbra", "vivid", "waltz", "xenon", "yacht", "zebra","abide", "bison", "cabin", "dance", "elbow", "fence", "globe", "honey",
 "ivory", "joker", "knees", "leash", "magic", "nymph", "oasis", "pouch", "quilt", "raven", "sweep", "tango", "urban", "vixen", "wound", "xerox", "youth", "zealot"];
var word = getRandomWord();

window.onload = function() {
  initialize();
};

function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex].toUpperCase();
}

function initialize() {
  // Create the game board
  for (let r = 0; r < height; r++) {
    for (let c = 0; c < width; c++) {
      let tile = document.createElement("span");
      tile.id = r.toString() + "-" + c.toString();
      tile.classList.add("tile");
      tile.innerText = "";
      document.getElementById("board").appendChild(tile);
    }
  }

  // Listen for key press
  document.addEventListener("keyup", (e) => {
    if (gameOver) return;

    if (/^[A-Z]$/.test(e.key.toUpperCase())) {
      if (col < width) {
        let currTile = document.getElementById(row.toString() + "-" + col.toString());
        if (currTile.innerText === "") {
          currTile.innerText = e.key.toUpperCase();
          col += 1;
        }
      }
    } else if (e.key === "Backspace") {
      if (col > 0) {
        col -= 1;
      }
      let currTile = document.getElementById(row.toString() + "-" + col.toString());
      currTile.innerText = "";
    } else if (e.key === "Enter") {
      update();
      row += 1; // start new row
      col = 0; // start at 0 for new row
    }

    if (!gameOver && row === height) {
      gameOver = true;
      document.getElementById("answer").innerText = word;
    }
  });
}

function update() {
  let correct = 0;
  for (let c = 0; c < width; c++) {
    let currTile = document.getElementById(row.toString() + "-" + c.toString());
    let letter = currTile.innerText;

    // Is it in the correct position?
    if (word[c] === letter) {
      currTile.classList.add("correct");
      correct += 1;
    } else if (word.includes(letter)) {
      currTile.classList.add("present");
    } else {
      currTile.classList.add("absent");2
    }

    if (correct === width) {
      gameOver = true;
    }
  }
}
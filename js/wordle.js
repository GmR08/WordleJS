var turn = 0;
var word;
var correct_word;

function checkWord() {
  
  document.getElementById("label").style.opacity = 0;
  
  word = document.getElementById("insert").value.toUpperCase();
  correct_word = random_word;

  if (word.length != 5) {
    document.getElementById("label").style.opacity = 1;
    document.getElementById("message").textContent =
      "Word must be five characters long";

  } else {

    //loop that develops game's logic

    for (let i = 0; i < word.length; i++) {

      document.getElementById(String(turn) + i).textContent = word.charAt(i);

      if (correct_word.charAt(i) == word.charAt(i)) {
        document.getElementById("box" + String(turn) + i).style.backgroundColor = "green";
      } else if (
        correct_word.charAt(i) != word.charAt(i) && correct_word.includes(word.charAt(i))) {
        document.getElementById("box" + String(turn) + i).style.backgroundColor = "yellow";
      } else {
        document.getElementById("box" + String(turn) + i).style.backgroundColor = "gray";
      }

    }

    if (word == correct_word) {
      document.getElementById("label").style.opacity = 1;
      document.getElementById("message").textContent =
        "Congratulations! you've done it in " + (turn + 1) + " attempts!";
    } else {
      turn++;
    }

    if (turn > 5) {
      document.getElementById("label").style.opacity = 1;
      document.getElementById("message").textContent =
        "You've run out of attempts";
    }
  }
}

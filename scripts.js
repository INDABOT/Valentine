let greenScaleMultiplier = 1;

function handleNoClick() {
  // Increase the size of the green button by 1.5X
  greenScaleMultiplier += 0.5;
  document.getElementById("yesButton").style.transform = `scale(${greenScaleMultiplier})`;

  // Change the caption in the noButton to one of the alternatives
  const alternatives = ["Change of heart?", "I love you", "You're the best", "Mistake?"];
  const randomAlternative = alternatives[Math.floor(Math.random() * alternatives.length)];
  document.getElementById("noButton").innerHTML = randomAlternative;

  // Show the love message
  // document.getElementById("loveMessage").style.display = "block";
}

function handleYesClick() {
  // Display the kissing animation and "I LOVE YOU" message
  document.getElementById("loveMessage").style.display = "block";

  // Disable the buttons after 'YES' is clicked
  document.getElementById("yesButton").disabled = true;
  document.getElementById("noButton").disabled = true;
}

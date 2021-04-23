function createParagraph(){
var wordOne = document.getElementById('noun1').value;
var wordTwo = document.getElementById('noun2').value;
var wordThree = document.getElementById('number').value;
var wordFour = document.getElementById('verb1').value;
var wordFive = document.getElementById('noun3').value;
var wordSix = document.getElementById('adjective1').value;
var wordSeven = document.getElementById('verb2').value;
var wordEight = document.getElementById('verb3').value;
var wordNine = document.getElementById('verb4').value;
var wordTen = document.getElementById('noun4').value;
var wordEleven = document.getElementById('verb5').value;
var wordTwelve = document.getElementById('noun5').value;
var wordThirteen = document.getElementById('verb6').value;
var wordFourteen = document.getElementById('noun6').value;
var wordFifteen = document.getElementById('adjective2').value;




var paragraph="*My name is " + wordOne + " and I've known " + wordTwo +" for " + wordThree + " years. I " + wordFour + " all the way from " + wordFive + " to celebrate today.I'm so " + wordSix + " for the new parents. Don't forget to " + wordSeven + " before you " + wordEight + " and " + wordNine + " after the " + wordTen + ". Daddy you should always " + wordEleven + " Mommy's " + wordTwelve + " and Mommy you should always " + wordThirteen + " daddy's " + wordFourteen + ". You are going to be the " + wordFifteen + " parents ever!"




document.getElementById('answer').innerHTML = paragraph;
}


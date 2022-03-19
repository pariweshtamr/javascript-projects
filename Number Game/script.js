var y = Math.floor(Math.random() * 10 + 1)
var guess = 1

document.getElementById('submitGuess').onclick = function () {
  var x = document.getElementById('guessField').value

  if (x == y) {
    alert(
      'Congratulations!!! You guessed it right in' +
        ' ' +
        guess +
        ' ' +
        'guesses.',
    )
  } else if (x > y) {
    guess++
    alert('Oops... Sorry!!! Try a smaller number')
  } else {
    guess++
    alert('Oops Sorry!!! Try a greater number')
  }
}

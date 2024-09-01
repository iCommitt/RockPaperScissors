let btns = document.querySelectorAll('.imgContainer img');
btns.forEach(function (img) {
  img.addEventListener('click', function() {
    let botChoice = Math. floor(Math. random()*3) + 1;

    switch(img.id){
      case 'Rock':
        document.getElementById('playerChoice').src = '/RockPaperScissors/img/Камень.png';
        botChoice == 1 ? console.log('Ничья') :
        botChoice == 2 ? +document.getElementById('playerScore').innerHTML++ :
        botChoice == 3 ? +document.getElementById('botScore').innerHTML++ : 0;
        break;
      case 'Scissors':
        document.getElementById('playerChoice').src = '/RockPaperScissors/img/Ножницы.png';
        botChoice == 1 ? +document.getElementById('botScore').innerHTML++ :
        botChoice == 2 ? console.log('Ничья')  :
        botChoice == 3 ? +document.getElementById('playerScore').innerHTML++ : 0;
        break;  
      case 'Paper':
        document.getElementById('playerChoice').src = '/RockPaperScissors/img/Бумага.png';
        botChoice == 1 ? +document.getElementById('playerScore').innerHTML++ :
        botChoice == 2 ? +document.getElementById('botScore').innerHTML++  :
        botChoice == 3 ? console.log('Ничья'): 0;
        break;  
    }

    switch(botChoice){
      case 1:
        document.getElementById('botChoice').src = '/RockPaperScissors/img/Камень.png';
        break
      case 2:
        document.getElementById('botChoice').src = '/RockPaperScissors/img/Ножницы.png';
        break
      case 3:
        document.getElementById('botChoice').src = '/RockPaperScissors/img/Бумага.png';
        break

    }
  });
});





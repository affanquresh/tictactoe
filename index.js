console.log('welcome to tic tac toe')
let music = new Audio('music.mp3')
let ting = new Audio('ting.mp3')
let gameover = new Audio('gameover.mp3')
let Gamewon = new Audio('Gamewon.wav')
let turn = 'x'
// music.play()
let isGameover = false
const changeTurn = () => {
  return turn === 'x' ? 'o' : 'x'
}

//check for win
const checkWin = () => {
  let boxtext = document.getElementsByClassName('boxtext')
  let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  win.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[1]].innerText === boxtext[e[2]].innerText &&
      boxtext[e[0]].innerText !== ''
    ) {
      isGameover = true
      document.querySelector('.info').innerText =
        'congratulation ' + boxtext[e[0]].innerText + ' ' + 'won'
      document
        .querySelector('.img-box')
        .getElementsByTagName('img')[0].style.height = '20vw'
      Gamewon.play()
    }
  })
}

//game logic
let boxes = document.getElementsByClassName('box')
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector('.boxtext')
  element.addEventListener('click', () => {
    if (boxtext.innerText === '') {
      boxtext.innerText = turn
      ting.play()
      turn = changeTurn()
      checkWin()
      if (!isGameover) {
        document.getElementsByClassName('info')[0].innerText =
          'Turn for ' + turn
      }
    }
  })
})

//reset button logic
// let reset = document.getElementById('reset')
reset.addEventListener('click', () => {
  let boxtext = document.querySelectorAll('.boxtext')
  Array.from(boxtext).forEach((element) => {
    element.innerText = ''
    isGameover = false
    turn = 'x'
    document.getElementsByClassName('info')[0].innerText = 'Turn for ' + turn
        document.getElementsByTagName('img')[0].style.height = '0px'

  })
})

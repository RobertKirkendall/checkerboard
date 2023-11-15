//make container for board
var container = document.createElement('container')
document.body.appendChild(container)
container.style.display = "flex"
container.style.flexWrap = "wrap"
container.style.width = "800px"
container.style.height = "800px"
container.style.backgroundColor = "black"



//make smaller cells to fill container
function makeSquareYellow(){
    const cell = document.createElement('div')
container.appendChild(cell)
cell.style.width = "12.5%"
cell.style.height = "12.5%"
cell.style.backgroundColor = color()
cell.style.backgroundImage = `linear-gradient(${color()}, ${color()})`
//cell.style.backgroundColor = "red"
//cell.style.border = '1px solid black'
}

function makeSquarePurple(){
    const cell = document.createElement('div')
    container.appendChild(cell)
    cell.style.width = "12.5%"
    cell.style.height = "12.5%"
    cell.style.backgroundColor = color()
    cell.style.backgroundImage = `radial-gradient(${color()}, ${color()}, ${color()})`
    //cell.style.backgroundColor = "red"
    //cell.style.border = '1px solid black'
    }


  
    //declare a variable and assign it a random color
let color = function getRandomColor(){
    var letters = '0123456789ABCDEF'
    var color = '#'
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
}

function chessBoardOne(){
    for( var i=0; i<8; i+=1){
        if(i % 2 === 0){
            makeSquareYellow()
        }if(i % 2 !== 0){
            makeSquarePurple() 
        }
    }
}
function chessBoardTwo(){
    for( var x=0; x<8; x++){
        if(x % 2 === 0){
            makeSquarePurple()
        }if(x % 2 !== 0){
            makeSquareYellow()
        }
    }
}
function chessBoardThree(){
    for( var x=0; x<8; x++){
        if(x % 2 === 0){
            makeSquareYellow()
        }if(x % 2 !== 0){
            makeSquarePurple()
        }
    }
}
function chessBoardFour(){
    for( var x=0; x<8; x++){
        if(x % 2 === 0){
            makeSquarePurple()
        }if(x % 2 !== 0){
            makeSquareYellow()
        }
    }
}
function chessBoardFive(){
    for( var x=0; x<8; x++){
        if(x % 2 === 0){
            makeSquareYellow()
        }if(x % 2 !== 0){
            makeSquarePurple()
        }
    }
}
function chessBoardSix(){
    for( var x=0; x<8; x++){
        if(x % 2 === 0){
            makeSquarePurple()
        }if(x % 2 !== 0){
            makeSquareYellow()
        }
    }
}
function chessBoardSeven(){
    for( var x=0; x<8; x++){
        if(x % 2 === 0){
            makeSquareYellow()
        }if(x % 2 !== 0){
            makeSquarePurple()
        }
    }
}
function chessBoardEight(){
    for( var x=0; x<8; x++){
        if(x % 2 === 0){
            makeSquarePurple()
        }if(x % 2 !== 0){
            makeSquareYellow()
        }
    }
}


chessBoardOne()
chessBoardTwo()
chessBoardThree()
chessBoardFour()
chessBoardFive()
chessBoardSix()
chessBoardSeven()
chessBoardEight()







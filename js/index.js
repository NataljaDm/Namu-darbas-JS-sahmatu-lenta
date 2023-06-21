const lentaDOM = document.querySelector('.lenta');
const whiteDOM = lentaDOM.querySelector('.white');
const blackDOM = lentaDOM.querySelector('.black');

const black = `<div style="display: inline-block; height: 50px; width: 50px; background-color: black;"></div>`;
const white = `<div style="display: inline-block; height: 50px; width: 50px; background-color: white;"></div>`;





function mapSize(size) {
    let chessSize = size * size;
    let arr = Array(chessSize);
    let board = '';
    
  
    for (let i = 0; i < arr.length; i++) {
      
      if(i % 2 === 0){
        board += black;
      }else {
        board += white;
      }
    }
    return lentaDOM.innerHTML = board;
  }
  
  console.log(mapSize(9));


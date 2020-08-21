/*
* brute force
*/
function chessBoard(w = 4, h = 4) {
    var odd = true;
    var board = '';
    for (let i = 0; i <= w; i++) {
        odd = i % 2 == 0 ? true : false;
        for (let j = 0; j <= h; j++) {
            if (odd) board += '#';
            else board += ' ';
            odd = !odd;
        }
        console.log(board);
        board = '';
    }
}
chessBoard(6,6);
console.log('---------best answer----------')
chessBoardBest(6,6);

/*
* O(n)
*/
function chessBoardBest(w = 4, h = 4) {
    var board = [];
    var pairRow = [];
    var oddRow = [];
    var max = w > h ? w : h;
    for (let i = 0; i <= max; i++) {        
        if (isOdd(i)) board.push(true);
        else board.push(false);        
    }

    for (const n of board) {
        if(n) oddRow.push('# ');
        else pairRow.push(' #');
    }

    for (const n of board) {     
        if (n)  console.log(oddRow.join(''));
        else console.log(pairRow.join(''));      
    }
}

function isOdd(num) {
    return num % 2 == 0 ? true : false;
}
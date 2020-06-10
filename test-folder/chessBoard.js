chessBoard(40, 40);

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

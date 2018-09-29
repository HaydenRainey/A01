let TTT = function () {
    let huPlayer,
    aiPlayer,
    origBoard,
    fc,
    bestSpot;

    start = function () {
        huPlayer = "O";
        aiPlayer = "X";
        //origBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        origBoard = ["O",1 ,"X","X",4 ,"X", 6 ,"O","O"];
        fc = 0;
        bestSpot = minimax(origBoard, aiPlayer);

        console.log("index: " + bestSpot.index);
        console.log("function calls: " + fc);

    },

    minimax = function (newBoard, player) {
        fc++

        let availSpots = emptyIndexies(newBoard);

        if (winning(newBoard, huPlayer)) {
            return {
                score: -10
            };
        } else if (winning(newBoard, aiPlayer)) {
            return {
                score: 10
            };
        } else if (availSpots.length === 0) {
            return {
                score: 0
            };
        }

        let moves = [];

        for (let i = 0; i < availSpots.length; i++) {
            let move = {};
            move.index = newBoard[availSpots[i]];

            newBoard[availSpots[i]] = player;

            if (player == aiPlayer) {
                let result = minimax(newBoard, huPlayer);
                move.score = result.score;
            } else {
                let result = minimax(newBoard, aiPlayer);
                move.score = result.score;
            }

            newBoard[availSpots[i]] = move.index;

            moves.push(move);
        }
        let bestMove;
        if (player === aiPlayer) {
            let bestScore = -10000;
            for (let i = 0; i < moves.length; i++) {
                if (moves[i].score > bestScore) {
                    bestScore = moves[i].score;
                    bestMove = i;
                }
            }
        } else {
            let bestScore = 10000;
            for (let i = 0; i < moves.length; i++) {
                if (moves[i].score < bestScore) {
                    bestScore = moves[i].score;
                    bestMove = i;
                }
            }
        }

        return moves[bestMove];
    },

    emptyIndexies = function(board) {
        return board.filter(s => s != "O" && s != "X");
    },

    winning = function(board, player) {
        if (
            (board[0] == player && board[1] == player && board[2] == player) ||
            (board[3] == player && board[4] == player && board[5] == player) ||
            (board[6] == player && board[7] == player && board[8] == player) ||
            (board[0] == player && board[3] == player && board[6] == player) ||
            (board[1] == player && board[4] == player && board[7] == player) ||
            (board[2] == player && board[5] == player && board[8] == player) ||
            (board[0] == player && board[4] == player && board[8] == player) ||
            (board[2] == player && board[4] == player && board[6] == player)
        ) {
            return true;
        } else {
            return false;
        }
    };

    return{
        start: start,
        minimax: minimax,
        winning: winning,
        emptyIndexies, emptyIndexies
    };
} ();
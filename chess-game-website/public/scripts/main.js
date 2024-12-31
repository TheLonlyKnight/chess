document.addEventListener('DOMContentLoaded', () => {
    const chessBoardElement = document.getElementById('chess-board');
    const chessBoard = new ChessBoard(chessBoardElement);

    chessBoard.render();

    chessBoardElement.addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains('square')) {
            const move = chessBoard.handleMove(target.dataset.position);
            if (move) {
                updateUI(move);
            }
        }
    });

    function updateUI(move) {
        // Update the UI based on the move made
        // This could include updating the board, showing messages, etc.
    }
});
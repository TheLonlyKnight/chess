# Chess Game Website

This project is a web-based chess game that allows users to play chess in their browser. It features a fully interactive chessboard and implements the basic rules of chess.

## Project Structure

```
chess-game-website
├── public
│   ├── index.html          # Main HTML document
│   ├── styles.css         # Styles for the chess game
│   └── scripts
│       └── main.js        # Main JavaScript file
├── src
│   ├── components
│   │   └── ChessBoard.js   # ChessBoard component
│   ├── utils
│   │   └── chessLogic.js    # Chess game logic functions
│   └── index.js            # Entry point for the application
├── package.json            # npm configuration file
├── .gitignore              # Files to ignore in Git
└── README.md               # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd chess-game-website
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Open `public/index.html` in your browser to start playing.

## Usage

- The chessboard will be displayed in the browser.
- Click on the pieces to select them and then click on the destination square to make a move.
- The game will enforce the rules of chess and only allow valid moves.

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for the project.
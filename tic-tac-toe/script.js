function createTable(rows, columns) {
    let table = [];
    for (let i = 0; i < rows; i++) {
        table[i] = [];
        for (let j = 0; j < columns; j++) {
            table[i][j] = null; 
        }
    }
    return table;
}


function createPlayer(name, marker) {
    const username = "@" + name;
    let points = 0;
    
    return {
        username,
        marker,
        points,
        addPoints(addPoints) {
            points += addPoints;
        },
        getPoints() {
            return points;
        },
        getUsername() {
            return username;
        }
    };
}


function fabricPlayers(firstName, secondName) {
    const firstPlayer = createPlayer(firstName, "X");
    const secondPlayer = createPlayer(secondName, "O");
    return { firstPlayer, secondPlayer };
}


function checkWinner() {
    const table = Game.table;
    
   
    for (let i = 0; i < 3; i++) {
        if (table[i][0] && table[i][0] === table[i][1] && table[i][1] === table[i][2]) {
            return table[i][0];
        }
    }
    
   
    for (let i = 0; i < 3; i++) {
        if (table[0][i] && table[0][i] === table[1][i] && table[1][i] === table[2][i]) {
            return table[0][i];
        }
    }
    
    
    if (table[0][0] && table[0][0] === table[1][1] && table[1][1] === table[2][2]) {
        return table[0][0];
    }
    if (table[0][2] && table[0][2] === table[1][1] && table[1][1] === table[2][0]) {
        return table[0][2];
    }

    return null;
}

function startGame() {
    const firstPlayerName = document.getElementById('player1FirstName').value;
    const secondPlayerName = document.getElementById('player2FirstName').value;

    if (!firstPlayerName || !secondPlayerName) {
        alert('Please insert names of the players');
        return;
    }

    Game.players = fabricPlayers(firstPlayerName, secondPlayerName);
    Game.turn = 0;
    console.log("Game started");
    Game.updateScreen();
}


function reset() {
    console.log("Game reset");
    Game.table = createTable(3, 3);
    Game.players.firstPlayer.points = 0;
    Game.players.secondPlayer.points = 0;
    document.getElementById('player1FirstName').value = '';
    document.getElementById('player2FirstName').value = '';
    Game.turn=0;
    Game.updateScreen();
}

function updateScreen() {
    console.log("Updating screen");
    
    let tableHtml = "<table border='1' id='gameTable'>";
    for (let rowIndex = 0; rowIndex < Game.table.length; rowIndex++) {
        tableHtml += "<tr>";
        for (let colIndex = 0; colIndex < Game.table[rowIndex].length; colIndex++) {
            tableHtml += `<td onclick="Game.controllerGame(${rowIndex}, ${colIndex})">${Game.table[rowIndex][colIndex] || ''}</td>`;
        }
        tableHtml += "</tr>";
    }
    tableHtml += "</table>";
    document.getElementById('gameTable').innerHTML = tableHtml;

    let scoresHtml = "";
    scoresHtml += `<p>${Game.players.firstPlayer.getUsername()} (X) has ${Game.players.firstPlayer.getPoints()} points.</p>`;
    scoresHtml += `<p>${Game.players.secondPlayer.getUsername()} (O) has ${Game.players.secondPlayer.getPoints()} points.</p>`;
    document.getElementById('playersScores').innerHTML = scoresHtml;
}



function isBoardFull() {
    for (let row of Game.table) {
        if (row.includes(null)) {
            return false;
        }
    }
    return true;
}

function controllerGame(row, col) {
    if (Game.table[row][col]) return; 
    let currentPlayer = (Game.turn % 2 === 0) ? Game.players.firstPlayer : Game.players.secondPlayer;
    Game.table[row][col] = currentPlayer.marker;
    if (Game.table[row][col] === null) {
        Game.table[row][col] = currentPlayer.marker;
    }
    
    const winner = checkWinner();
    if (winner) {
        let winnerName = (winner === 'X') ? Game.players.firstPlayer.getUsername() : Game.players.secondPlayer.getUsername();
        alert(`${winnerName} wins the game!`);
        
        if (winner === 'X') {
            Game.players.firstPlayer.addPoints(1); 
        } else if (winner === 'O') {
            Game.players.secondPlayer.addPoints(1);  
        }
        Game.reset(); 
        return;
    }
    if (isBoardFull()) {
        alert("It's a draw!");
        Game.reset();
        return;
    }
    Game.turn++;
    Game.updateScreen();
}

const Game = (function() {
    const table = createTable(3, 3); 
    const players = {}; 

    return {
        table,
        players,
        startGame,
        reset,
        updateScreen,
        controllerGame
    };
})();
class Player {
  constructor (name, token, wins) {
    this.name = name
    this.token = token
    this.wins = wins || 0
    this.fighter = 'rock'
  }

  takeTurn (selectedFighter) {
    this.fighter = selectedFighter ||
      classicFightersList[Math.floor(Math.random() * 3)]
  }
}

// constructor - properties should include: name (ex: 'Human'), token (ex: '👩🏻'), wins (ex: 0)
// saveWinsToStorage - only necessary if you choose the localStorage extension
// retrieveWinsFromStorage - only necessary if you choose the localStorage extension
// takeTurn
var human = new Player('Human', '\uD83D\uDC69', 0)
// Player {name: 'Human', token: '👩', wins: 0}
var computer = new Player('Computer', '\uD83D\uDCBB', 0)
// Player {name: 'Computer', token: '💻', wins: 0}
// player1.takeTurn('scissors')
// when invoked it switched rock to paper.
// player1 // Player {name: 'Human', token: '👩', wins: 0, fighter: 'paper'}
// player2.takeTurn('paper')
// player 2 // Player {name: 'Computer', token: '💻', wins: 0, fighter: 'paper'}
//player1.takeTurn() without an argument will then just generate a random fighter from the classicFightersList array in main.js

class Game {
  constructor (selectedGameType) {
    this.selectedGameType = selectedGameType
    this.human = new Player('Human', '\uD83D\uDC69', 0)
    this.computer = new Player('Computer', '\uD83D\uDCBB', 0)
    this.winner = 'unknown'
  }

  checkForWinner () {
    var humanFighter = this.human.fighter
    var computerFighter = this.computer.fighter
    if (humanFighter.name === computerFighter.name) {
      this.winner = 'no one'
    } else if (humanFighter.beats.includes(computerFighter.name)) {
      this.human.wins += 1
      this.winner = this.human
    } else if (computerFighter.beats.includes(humanFighter.name)) {
      this.computer.wins += 1
      this.winner = this.computer
    }
  }
  resetGameBoard () {
  }
}

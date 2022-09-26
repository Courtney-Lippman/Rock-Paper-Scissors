class Game {
  constructor (selectedGameType, human, computer) {
    this.selectedGameType = selectedGameType
    this.human = human
    this.computer = computer
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

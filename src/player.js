class Player {
  constructor(name, token, wins) {
    this.name = name
    this.token = token
    this.wins = wins || 0
    this.fighter = {}
  }

  takeTurn (selectedFighter) {
    this.fighter = selectedFighter || fightersList[Math.floor(Math.random() * fightersList.length)]
  }
}

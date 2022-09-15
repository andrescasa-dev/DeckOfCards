export function cardWinner(playerCard, botCard){
  const playerScore = getScore(playerCard)
  const botScore = getScore(botCard)
  if(playerScore === botScore) return 'Tie'
  return playerScore > botScore ? "Player wins" : "bot wins"
}

export function getScore(card){
  const table = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "JACK", "QUEEN", "KING", "ACE"]
  return table.findIndex(tValue => card.value === tValue);
}
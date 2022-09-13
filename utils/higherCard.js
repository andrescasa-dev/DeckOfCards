function whichIsHigher(playerCard, botCard){
  const table = [ "2", "3", "4", "5", "6", "7", "8", "9", "10", "JACK", "QUEEN", "KING", "ACE"]
  playerScore = table.findIndex(tValue => playerCard.value === tValue);
  botScore = table.findIndex(tValue => botCard.value === tValue);
  if(playerScore === botScore) return 'tie'
  return playerScore > botScore ? "player wins" : "bot wins"
}

  
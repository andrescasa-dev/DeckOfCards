
import { btn_newCards, d_bot, d_player, p_remaining, p_winner } from "./view.js";
import { BASE_URL} from "../../utils/constants.js";
import { whoWins, getScore } from "../../utils/functions.js";
import Card from "../components/Card.js";
import store from "../store.js";

export default async function newCardsHandler(event){ 
  const {cards, remaining} = await getCards(store.state.deckId)
  const [playerCard, botCard] = cards
  
  rendering({playerCard, botCard, remaining});
}

async function getCards(deck_id){
  const QUANTITY = 2;
  const response = await fetch(`${BASE_URL}/deck/${deck_id}/draw/?count=${QUANTITY}`)
  console.log(`${BASE_URL}/deck/${deck_id}/draw/?count=${QUANTITY}`);
  const data = await response.json();
  return data;
}

function displayCards(actor, card, elm){
  const newScore = store.state[`${actor}Score`] + getScore(card);
  store.dispatch({type:`UPDATE_${actor.toUpperCase()}_SCORE`, payload:{score: newScore}})
  elm.innerHTML = Card({
    ...card,
    name: actor,
    score: store.state[`${actor}Score`]
  });
}

function rendering({botCard, playerCard, remaining}){
  displayCards('bot', botCard, d_bot)
  displayCards('player', playerCard, d_player)
  
  p_remaining.textContent = remaining
  store.dispatch({type: 'UPDATE_REMAINING', payload:{remaining}})

  if(remaining === 0){
    btn_newCards.disabled = true;
    p_winner.textContent = whoWins(store.state.playerScore, store.state.botScore)
  } 
}
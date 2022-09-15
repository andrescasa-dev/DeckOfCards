
import { d_bot, d_player, p_remaining, p_winner } from "./view.js";
import { BASE_URL} from "../../utils/constants.js";
import { cardWinner, getScore } from "../../utils/functions.js";
import Card from "../components/Card.js";
import store from "../store.js";

export default async function newCardsHandler(){ 
  const {cards, remaining} = (await getCards(store.state.deckId))
  const playerCard = cards[0]
  const botCard = cards[1]

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
  store.dispatch({type:`INCREASE_${actor.toUpperCase()}_SCORE`, payload:{score: getScore(card)}})
  elm.innerHTML = Card({
    ...card,
    name: actor,
    score: store.state[`${actor}Score`]
  });
}

function rendering({botCard, playerCard, remaining}){
  displayCards('bot', botCard, d_bot)
  displayCards('player', playerCard, d_player)
  
  p_winner.textContent = cardWinner(playerCard, botCard)
  p_remaining.textContent = remaining
  store.dispatch({type: 'UPDATE_REMAINING', payload:{remaining}})
}
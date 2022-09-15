import { d_bot, d_player, p_deck, p_remaining } from "./view.js";
import { BASE_URL} from "../../utils/constants.js";
import Card from "../components/Card.js";
import store from "../store.js";

export default async function newDeckHandler(){
  const deck = await getDeck();
  rendering({remaining: deck.remaining, deckId: deck.deck_id})
}

async function getDeck(){
  const response = await fetch(`${BASE_URL}/deck/new/shuffle/`);
  return await response.json();
}

function rendering({remaining, deckId}){
  d_player.innerHTML = Card({name: 'player', score: 0});
  d_bot.innerHTML = Card({name: 'bot', score: 0});

  p_remaining.textContent = remaining
  store.dispatch({type: 'UPDATE_REMAINING', payload:{remaining}});
  p_deck.textContent = 'Deck id: ' + deckId
  store.dispatch({type:'UPDATE_DECK_ID', payload:{deckId}})
}

import { BASE_URL, view } from "../../utils/constants.js";
import Card from "../components/Card.js";

export default async function newCardsHandler(){
  const deck = document.querySelector('#deck');
  await displayCards('bot', deck.dataset.idd)
  await displayCards('player', deck.dataset.idd)
}

async function getCards(deck_id){
  const QUANTITY = 1;
  const response = await fetch(`${BASE_URL}/deck/${deck_id}/draw/?count=${QUANTITY}`)
  const data = await response.json();
  return data;
}

async function displayCards(actor, deck){
  const cards = (await getCards(deck)).cards;
  view.querySelector(`#${actor}`).innerHTML += cards.map(card => Card(card)).join('');
}
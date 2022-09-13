import Card from "../components/Card.js";
import { view, BASE_URL} from "../../utils/constants.js";

export default async function newCard(){
  const deck = await getDeck();
  const cards = (await getCards(deck)).cards;
  view.innerHTML = cards.map(card => Card(card)).join('');
}

async function getDeck(){
  const response = await fetch(`${BASE_URL}/deck/new/shuffle/`);
  return await response.json();
}

async function getCards({deck_id}){
  const QUANTITY = 6;
  const response = await fetch(`${BASE_URL}/deck/${deck_id}/draw/?count=${QUANTITY}`)
  const data = await response.json();
  return data;
}
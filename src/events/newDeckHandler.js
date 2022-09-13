import { view, BASE_URL} from "../../utils/constants.js";

export default async function newDeckHandler(){
  const deck = await getDeck();
  const p = view.querySelector('#deck');
  p.textContent = 'Deck id: ' + deck.deck_id;
  p.dataset.idd = deck.deck_id
}

async function getDeck(){
  const response = await fetch(`${BASE_URL}/deck/new/shuffle/`);
  return await response.json();
}


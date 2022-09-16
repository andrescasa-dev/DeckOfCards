class Store{
  #state;
  #reducer;
  constructor(reducer){
    this.#reducer = reducer
    this.#state = this.#reducer(undefined, '')
  }
  
  dispatch(action){
    this.#state = this.#reducer(this.#state, action);
  }

  get state(){
    return this.#state;
  }
}

const initialState = {
  deckId: undefined,
  remaining: 0,
  playerScore: 0,
  botScore: 0,
}

function cardsReducer(state = initialState, action){
  switch(action.type){
    case 'UPDATE_REMAINING':
      return {...state, remaining: action.payload.remaining}

    case 'UPDATE_PLAYER_SCORE':
      return {...state, playerScore: action.payload.score}

    case 'UPDATE_BOT_SCORE':
      return {...state, botScore: action.payload.score}

    case 'UPDATE_DECK_ID':
      return {...state, deckId: action.payload.deckId}

    default: return state
  }
}
const store = new Store(cardsReducer)

export default store;
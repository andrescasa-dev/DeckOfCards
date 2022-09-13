import newCardsHandler from "./events/newCardsHandler.js";
import newDeckHandler from "./events/newDeckHandler.js";


class App{
  constructor(){
    newDeckHandler().then( ()=>{newCardsHandler()});
    this.listeners();
  }
  listeners(){
    document.body.addEventListener('click', (event)=>{
      if(event.target.matches('#btn_getCards')){
        newCardsHandler();
      }
      if(event.target.matches('#btn_newDeck')){
        newDeckHandler();
      }
    })
  }
}

new App();
import newCard from "./events/newDeckHandler.js";

class App{
  constructor(){
    newCard();
    this.listeners();
  }
  listeners(){
    document.body.addEventListener('click', (event)=>{
      if(event.target.matches('#btn_getCard')){
        newCard();
      }
    })
  }
}

new App();
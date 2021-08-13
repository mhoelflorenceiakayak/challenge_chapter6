class Player{
    constructor(hand){
      this.hand = hand;
    }
    getHand() {
      return this.hand;
    }
  }
  class Human extends Player {
    constructor(hand,name){
      super(hand);
      this.name = "name";
    }
  }
  class computer extends Player {
    constructor(){
    super("");
  }
  getHand() {
    const arrayHand = ["rock","paper","scissors"];
    const hand = arrayHand[Math.floor(Math.random() * arrayHand.length)]
    
    this.hand = hand;
  }
}
  class Match {
    constructor(player1,player2) {
      this.player1 = player1;
      this.player2 = player2;
    }
    getResult() {
      let result;
      const player1 = this.player1;
      const player2 = this.player2;

      if(player1 == player2) {
        return "Draw";  
      }
      if(player1 == "rock") {
        if(player2 == "paper"){
          return `player 2 win` ;
        }
        if(player2 == "scissors"){
          return `player1 win` ;
        }
      }
      if(player1 == "paper"){
          if(player2 == "rock"){
              return `player1 win` ;
          }
    if(player2 == "scissors") {
        return `player2 win` ;
    }
      }
    if(player1 == "scissors"){
        if(player2 == "rock"){
        return `player2 win` ;
        }
    if(player2 == "paper") {
        return `player1 win` ;
    }
    }
    return `Player 1 :${player1} , Player 2: ${player2}, result: ${result}` ;
    }
  }

  let player1 = new Human ("paper", "Player 1");
  let com = new computer();
  com.getHand();

  let Match1 = new Match(player1.hand, com.hand);
  console.log(Match1.getResult());
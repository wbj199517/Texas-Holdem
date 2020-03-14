import { Component, OnInit } from '@angular/core';
import {Card} from '../card';
import {GetCardService} from '../get-card.service';
import { CheckWinService } from '../check-win.service';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent implements OnInit {
  cardPool: Card[];
  currentState = 0;     //0->init state  1->pocket state   2->the flop   3->the turn   4->the river
  buttonName="Deal";
  stateName = "New Game";
  isTestRound = true;
  testRound = 1;
  pocketCard: Card[];
  flopCard: Card[];
  turnCard: Card;
  riverCard: Card;
  showResult = false;
  cardResult="";
  randomCardArray = [];
  cardInGame=[];

   Icon = {"Heart": "♥","Diamond": "♦","Spade": "♠","Club": "♣"};
  

  constructor(private getCardService:GetCardService, private checkWinServce:CheckWinService) { }

  setPocket(){

      var firstId= this.randomCardArray[0];
      var secondId= this.randomCardArray[1];
      this.pocketCard = this.cardPool.filter(card=>card.id==firstId||card.id==secondId);
      this.cardInGame.push(this.pocketCard[0]);
      this.cardInGame.push(this.pocketCard[1]);
  }
  setFlop(){
    var thirdId= this.randomCardArray[2];
    var fourthId= this.randomCardArray[3];
    var fifthId= this.randomCardArray[4];
    this.flopCard = this.cardPool.filter(card=>card.id==thirdId||card.id==fourthId||card.id==fifthId);
    this.cardInGame.push(this.flopCard[0]);
    this.cardInGame.push(this.flopCard[1]);
    this.cardInGame.push(this.flopCard[2]);
  }
  setTurn(){
      this.turnCard = this.cardPool.filter(card=>card.id==this.randomCardArray[5])[0];
      this.cardInGame.push(this.turnCard);
    }

  setRiver(){
    this.riverCard = this.cardPool.filter(card=>card.id==this.randomCardArray[6])[0];
    this.cardInGame.push(this.riverCard);
  }

  closePopWindow(){
    this.showResult=false;

  }
  setTestPocket(round:number){
    switch(round){
      case 1:
        var firstId=49;
        var secondId=40;
        this.pocketCard = this.cardPool.filter(card=>card.id==firstId||card.id==secondId);
        this.cardInGame.push(this.pocketCard[0]);
        this.cardInGame.push(this.pocketCard[1]);
        break;
      case 2:
        var firstId=49;
        var secondId=40;
        this.pocketCard = this.cardPool.filter(card=>card.id==firstId||card.id==secondId);
        this.cardInGame.push(this.pocketCard[0]);
        this.cardInGame.push(this.pocketCard[1]);
        break;
      case 3:
        var firstId=35;
        var secondId=21;
        this.pocketCard = this.cardPool.filter(card=>card.id==firstId||card.id==secondId);
        this.cardInGame.push(this.pocketCard[0]);
        this.cardInGame.push(this.pocketCard[1]);
        break;        
      case 4:
        var firstId=43;
        var secondId=21;
        this.pocketCard = this.cardPool.filter(card=>card.id==firstId||card.id==secondId);
        this.cardInGame.push(this.pocketCard[0]);
        this.cardInGame.push(this.pocketCard[1]);
        break;  

    }

  }
  setTestFlop(round:number){
    switch(round){
      case 1:
        var firstId=23;
        var secondId=2;
        var thirdId = 48;
        this.flopCard = this.cardPool.filter(card=>card.id==firstId||card.id==secondId||card.id==thirdId);
        this.cardInGame.push(this.flopCard[0]);
        this.cardInGame.push(this.flopCard[1]);
        this.cardInGame.push(this.flopCard[2]);
        break;
      case 2:
        var firstId=44;
        var secondId=2;
        var thirdId = 48;
        this.flopCard = this.cardPool.filter(card=>card.id==firstId||card.id==secondId||card.id==thirdId);
        this.cardInGame.push(this.flopCard[0]);
        this.cardInGame.push(this.flopCard[1]);
        this.cardInGame.push(this.flopCard[2]);
        break;
      case 3:
        var firstId=36;
        var secondId=34;
        var thirdId = 24;
        this.flopCard = this.cardPool.filter(card=>card.id==firstId||card.id==secondId||card.id==thirdId);
        this.cardInGame.push(this.flopCard[0]);
        this.cardInGame.push(this.flopCard[1]);
        this.cardInGame.push(this.flopCard[2]);
        break;        
      case 4:
        var firstId=36;
        var secondId=34;
        var thirdId = 24;
        this.flopCard = this.cardPool.filter(card=>card.id==firstId||card.id==secondId||card.id==thirdId);
        this.cardInGame.push(this.flopCard[0]);
        this.cardInGame.push(this.flopCard[1]);
        this.cardInGame.push(this.flopCard[2]);
        break;  

    }

  }
  setTestTurn(round:number){
    switch(round){
      case 1:
        
        this.turnCard = this.cardPool.filter(card=>card.id==44)[0];
        this.cardInGame.push(this.turnCard);
        break;
      case 2:
        this.turnCard = this.cardPool.filter(card=>card.id==32)[0];
        this.cardInGame.push(this.turnCard);
        break;
      case 3:
        this.turnCard = this.cardPool.filter(card=>card.id==33)[0];
        this.cardInGame.push(this.turnCard);
        break;        
      case 4:
        this.turnCard = this.cardPool.filter(card=>card.id==41)[0];
        this.cardInGame.push(this.turnCard);
        break;  

    }

  }
  setTestRiver(round:number){
    switch(round){
      case 1:
        
        this.riverCard = this.cardPool.filter(card=>card.id==36)[0];
        this.cardInGame.push(this.riverCard);
        break;
      case 2:
        this.riverCard = this.cardPool.filter(card=>card.id==23)[0];
        this.cardInGame.push(this.riverCard);
        break;
      case 3:
        this.riverCard = this.cardPool.filter(card=>card.id==23)[0];
        this.cardInGame.push(this.riverCard);
        break;  
      case 4:
        this.riverCard = this.cardPool.filter(card=>card.id==23)[0];
        this.cardInGame.push(this.riverCard);
        break;

    }
  }
  clearState(){
    this.currentState=0;
    this.stateName="New Game";
    this.pocketCard =[];
    this.flopCard=[];
    this.turnCard = undefined;
    this.riverCard = undefined;
    this.cardInGame=[];
    this.randomCardArray = [];
    this.generateRandomCard();
    
  }

  onDeal(){
    if(this.currentState==0){  //into pocket state
      
      this.currentState++;
      this.buttonName="Check";
      this.stateName="The Pocket State";
      if(this.testRound>4){
     this.setPocket();
    }else{
      this.setTestPocket(this.testRound);
    }

    }
    else if(this.currentState==1){   //into flop
      this.currentState++;
      this.buttonName="Check";
      this.stateName="The Flop State";
      if(this.testRound>4){
        this.setFlop();
       }else{
         this.setTestFlop(this.testRound);
       }
    }
    else if(this.currentState==2){  // into turn
      this.currentState++;
      this.buttonName="Check";
      this.stateName="The Turn State";
      if(this.testRound>4){
        this.setTurn();
       }else{
         this.setTestTurn(this.testRound);
       }
    }
    else if(this.currentState==3){  // into river
      this.currentState++;
      this.buttonName="Re-deal";
      this.stateName="The River State";
      if(this.testRound>4){
        this.setRiver();
       }else{
         this.setTestRiver(this.testRound);
         this.testRound++;
       }
       
       this.showResult=true;
       this.cardResult = this.checkWinServce.getResult(this.cardInGame);
      
     
    }
    else if(this.currentState==4){  // into river
      this.clearState();
    }

    
  }

  generateRandomCard(){
    var count =0;
    while(count < 7){
      var r = Math.floor(Math.random() * 54) + 1;
      if(this.randomCardArray.indexOf(r) === -1) {
        this.randomCardArray.push(r);
        count++;
      };
  }
  }
  ngOnInit() {
   this.cardPool= this.getCardService.getCard();
    this.generateRandomCard();
  }

}

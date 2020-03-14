import { Injectable } from '@angular/core';
import {Card} from './card';


@Injectable({
  providedIn: 'root'
})
export class CheckWinService {

  isFourKind(cards:Card[]){
    var freq={};
    var flag = false;
    var name;
    for ( var i = 0; i < cards.length; i++ ) {
      if ( freq[cards[i].name] ) {
          freq[cards[i].name]++;
          
      } else {
        freq[cards[i].name]=1;       
      }
  
  }

  for(var key in freq){
    
    if(freq[key]==4){
      flag = true;
    }
   
  }
  return flag;


  }
  isFullHouse(cards:Card[]){
 
    var freq={};
    var flagTwo = false;
    var flagThree = false;
    
    for ( var i = 0; i < cards.length; i++ ) {
      if ( freq[cards[i].name] ) {
          freq[cards[i].name]++;
          
      } else {
        freq[cards[i].name]=1;       
      }
  
  }

  for(var key in freq){
    
    if(freq[key]==2){
      flagTwo= true;
    }
    if(freq[key]==3){
      flagThree= true;
    }
    

   
  }
  return (flagTwo&&flagThree);

  }
  isThreeKind(cards:Card[]){
    var freq={};
    var flag = false;
    
    for ( var i = 0; i < cards.length; i++ ) {
      if ( freq[cards[i].name] ) {
          freq[cards[i].name]++;
          
      } else {
        freq[cards[i].name]=1;       
      }
  
  }

  for(var key in freq){
    
    if(freq[key]==3){
      flag = true;
    }
   
  }
  return flag;
  }
  isTwoPair(cards:Card[]){
    var freq={};
    var flag = false;
    
    for ( var i = 0; i < cards.length; i++ ) {
      if ( freq[cards[i].name] ) {
          freq[cards[i].name]++;
          
      } else {
        freq[cards[i].name]=1;       
      }
  
  }
 var count =0;
  for(var key in freq){
    
    if(freq[key]==2){
      count ++;
    }
   
  }
  return count>=2;
  }
  isOnePair(cards:Card[]){
    var freq={};
    var flag = false;
    
    for ( var i = 0; i < cards.length; i++ ) {
      if ( freq[cards[i].name] ) {
          freq[cards[i].name]++;
          
      } else {
        freq[cards[i].name]=1;       
      }
  
  }
 var count =0;
  for(var key in freq){
    
    if(freq[key]==2){
      count ++;
    }
   
  }
  return count==1;
  }

  


  getResult(cards:Card[]):string{

 
    
    if(this.isStraightFlush(cards)){
          return "Straight-Flush";
    }
    else if(this.isFourKind(cards)){
      return "Four-Of-A-Kind";
    }
    else if(this.isFullHouse(cards)){
      return "Full-House";
    }
    else if(this.isFlush(cards)){
      return "Flush";
    }
    else if(this.isStraight(cards)){
      return "Straight";
    }
    else if(this.isThreeKind(cards)){
      return "Three-Of-A-Kind";
    }
    else if(this.isTwoPair(cards)){
      return "Two-Pair";
    }
    else if(this.isOnePair(cards)){
      return "One-Pair"
    }
    else{
      return "High Card";
    }

    
  }

  isStraight(cards:Card[]){
    var freq={};
    var flag = false;
    
    for ( var i = 0; i < cards.length; i++ ) {
      if ( freq[cards[i].rank] ) {
          freq[cards[i].rank]++;
          
      } else {
        freq[cards[i].rank]=1;       
      }
  
  }
  var temp=[];
  for(var key in freq){
    if(freq[key]==1){
      temp.push(parseInt(key));
    } 
  }
  temp.sort((a,b)=>a-b);
  console.log(temp);
  var flag1=true;
  var flag2= true;
  var flag3= true;
  for(let i = 1;i<5;i++){

    if(temp[i]!=temp[i-1]+1){
      flag1=false;

    }
  }
  for(let i = 2;i<6;i++){
    if(temp[i]!=temp[i-1]+1){
      flag2=false;
    }
  }
  for(let i = 3;i<7;i++){
    if(temp[i]!=temp[i-1]+1){
      flag3=false;
    }
  }
 

  return  flag1||flag2||flag3;
  }

  isFlush(cards:Card[]){
    var freq={};
    for ( var i = 0; i < cards.length; i++ ) {
      if ( freq[cards[i].color] ) {
          freq[cards[i].color]++;
          
      } else {
        freq[cards[i].color]=1;       
      }

  
  }
  for(var key in freq){
    
    if(freq[key]==5){
      return true;
    }
   
  }
  return false;
  }

  isStraightFlush(cards:Card[]){
   return this.isFlush(cards)&&this.isStraight(cards);
  }

  constructor() { }

  
}

import { Injectable } from '@angular/core';
import {Card} from './card';
import {Cards} from './cardData';

@Injectable({
  providedIn: 'root'
})
export class GetCardService {
  getCard():Card[]{
    return Cards;
  }

  constructor() { }
}

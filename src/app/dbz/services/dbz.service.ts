import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  addCharacter(character: Character):void {
    const newCharacter: Character = { id: uuid(), ...character }; // spread (toma todas las propiedades y las esparce)
    this.characters.push(newCharacter); // insertando nuevo personaje en el array de characters
    /* const newCharacter: Character = {
      id: uuid(),
      name: character.name,
      power: character.power
    } */
  }

  /* onDeleteCharacter(index: number) {
    this.characters.splice(index, 1); // elimina 1 elemento
  } */

  deleteCharacterById(id: string) {
    this.characters = this.characters.filter(character => character.id !== id);
  }

}

import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

//! COMPONENTE PADRE

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.componetnt.html'
})

export class MainPageComponent {

  // Inyectando service, con esto podemos obtener los propiedades y metodos de la clase service.
  constructor(private dbzService: DbzService) { }

  get characters(): Character[] {
    return [...this.dbzService.characters]; // el spread crea una copia del arreglo.
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character) {
    this.dbzService.addCharacter(character);
  }

}

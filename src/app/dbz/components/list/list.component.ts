import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  // Indica que recibira datos por parte del componente padre.
  @Input()
  public characterList: Character[] = [{
    name: 'Trunk',
    power: 10
  }];

  @Output()
  public onDeleted: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {

    if (!id) return; // si no existe el id, se terminará la ejecución.

    // TODO: Emitir el ID del personaje
    console.log({ id });
    this.onDeleted.emit(id);
  };

}

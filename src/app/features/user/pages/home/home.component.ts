import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // response.items es Character[]
  protected characters!: Character[];
  // Definimos las columnas que se mostrarán en la tabla. 
  // Estas columnas corresponden a las propiedades de los objetos Character que queremos mostrar en la tabla.
  protected displayedColumns: string[] = ['name', 'race', 'ki', 'affiliation', 'image'];

  constructor(
    protected character: CharacterService,

  ) { }

  ngOnInit(): void {
    this.character.getCharacters().subscribe((response) =>{
      this.characters = response.items;
    });
  }

}

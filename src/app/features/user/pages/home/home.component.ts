import { Component, OnDestroy, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../interfaces/character.interface';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  // response.items es Character[]
  protected characters!: Character[];
  // Definimos las columnas que se mostrarán en la tabla. 
  // Estas columnas corresponden a las propiedades de los objetos Character que queremos mostrar en la tabla.
  protected displayedColumns: string[] = ['name', 'race', 'ki', 'affiliation', 'image'];
  // Subject que emite cuando el componente se destruye, 
  // usado para cancelar suscripciones activas y evitar fugas de memoria.
  private destroy$ = new Subject<void>();

  constructor(
    protected character: CharacterService,
  ) { }


  ngOnInit(): void {
    this.character.getCharacters()
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) =>{
        this.characters = response.items;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}

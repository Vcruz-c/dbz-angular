import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CharacterResponse } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  /**
   * Constructor.
   * HttpClient es injectado y nos permite hacer peticiones HTTP a la API de personajes de Dragon Ball Z. (cualquier api que queramos consumir)
   * @param http HttpClient es un servicio de Angular que facilita la comunicación con servidores remotos a través de HTTP. En este caso, 
   * se utiliza para realizar solicitudes a la API de personajes de Dragon Ball Z y obtener datos sobre los personajes.
   */
  constructor(
    protected http: HttpClient,
  ) { }

  /**
   * Método para obtener los personajes de Dragon Ball Z desde la API. Devuelve un Observable que emite los datos de los personajes.
   * @returns Observable<CharacterResponse> Un Observable que emite los datos de los personajes obtenidos de la API. 
   * El tipo 'CharacterResponse' se utiliza aquí para indicar el tipo de datos.
   * sería recomendable definir una interfaz o clase para representar la estructura de los datos de los personajes SIEMPRE, 
   * para garantizar que los datos recibidos tengan la estructura esperada y para facilitar el manejo de los datos en el resto de la aplicación.
   * La URL es 'https://dbz-api.fly.dev/api/characters', que es un endpoint que devuelve una lista de personajes en formato JSON. 
   * Al llamar a este método, se iniciará la solicitud HTTP y el Observable emitirá los datos de los personajes cuando la respuesta sea recibida.
   */
  public getCharacters() : Observable<CharacterResponse>{ 

    return this.http.get<CharacterResponse>('https://dragonball-api.com/api/characters?limit=100');
  }
}

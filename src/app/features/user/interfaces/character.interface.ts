/**
 * Interfaz que representa la estructura de un personaje de Dragon Ball Z. 
 * Esta interfaz define las propiedades que un objeto de tipo Character debe tener, 
 * incluyendo su id, nombre, ki, raza, género, descripción, imagen, afiliación y fecha de eliminación (si aplica). 
 * Esta interfaz se utiliza para tipar los datos que se reciben de la API de personajes de Dragon Ball Z 
 * y para garantizar que los objetos que representan personajes tengan la estructura correcta.
 */
export interface Character{
    id: number;
    name: string;
    ki: string;
    maxKi: string;
    race: string;
    gender: string;
    description: string;
    image: string;
    affiliation: string;
    deletedAt: string | null;
}

/**
 * Interfaz que representa la estructura de la respuesta de la API de personajes de Dragon Ball Z.
 * Esta interfaz define una propiedad 'items' que es un array de objetos de tipo Character. 
 * Esta interfaz se utiliza para tipar la respuesta que se recibe de la API cuando se solicita la lista de personajes, 
 * garantizando que la respuesta tenga la estructura correcta y que los datos de los personajes estén correctamente tipados.
 */
export interface CharacterResponse {
  items: Character[];
}
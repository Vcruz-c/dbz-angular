import { Injectable } from '@angular/core';
import { openDB, IDBPDatabase  } from 'idb';

@Injectable({
  providedIn: 'root'
})
/**
 * Esta clase es el servicio de la BBDD del navegador.
 * En esta clase definiremos todo lo que necesitemos
 * relacionado con la BBDD.
 */
export class StorageService {

  private db!: IDBPDatabase;

  constructor() { }

  /**
   * Inicializa la base de datos del navegador.
   * async/await espera a que la operación termine antes de continuar (una sola vez).
   * A diferencia de Observable/subscribe, que escucha continuamente y reacciona a cambios.
   * Aqui usamos async/await porque solo necesitamos inicializar la base de datos una vez al inicio de la aplicación.
   */
  private async initDB(): Promise<void> {
    
    this.db = await openDB('dbz-app', 1, {
      upgrade(db) {
        if (!db.objectStoreNames.contains('session')) {
          db.createObjectStore('session');
        }
      }
    });
  }

  /**
   * 
   * @param email 
   */
  public async saveEmail(email: string): Promise<void> {
    await this.initDB()
    await this.db.put('session', email, 'email');
  }

  /**
   * 
   * @returns 
   */
  public async getEmail(): Promise<string | null> {
    await this.initDB()
    return this.db.get('session', 'email');
  }

}

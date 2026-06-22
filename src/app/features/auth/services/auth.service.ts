import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from '../../../core/services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private storageService: StorageService,
  ) {}

  // behavior es un tipo de observable que permite emitir valores y también mantener un valor actual. 
  // En este caso, se está utilizando para almacenar el estado de autenticación del usuario.
  private listenerAutomatic = new BehaviorSubject<string | null>(null);

  // Observable que emite el estado de autenticación del usuario.
  public readonly email$ = this.listenerAutomatic.asObservable();

  /**
   * Actualizamos el BehaviorSubject, pero no guardamos en BBDD
   * @param email correo que pone el usuario
   */
  public restoreSession(email: string): void {
  this.listenerAutomatic.next(email);
  }

  /**
   * Actualiza el estado de autenticación
   * emitiendo el email del usuario.
   * @param email correo electrónico del usuario autenticado, recibido como parámetro, o null si no hay sesión.
   * login lo obtiene y actualiza el estado a través de este método.
   * Dice si está logueado o no, y si lo está, quién es el usuario.
   * Esta información luego la usará el header.
   */
  public updateAuthenticationState(email: string | null) : void{
    this.listenerAutomatic.next(email);
    // Aqui guardamos el email y lo metemos en BBDD
    if (email){
      this.storageService.saveEmail(email);
    }
  }

  /**
   * Este método devuelve el valor actual del estado de autenticación, 
   * es decir, el email del usuario autenticado o null si no hay sesión.
   * @returns El email del usuario autenticado o null si no hay sesión.
   */
  public getEmail(): string | null {
    return this.listenerAutomatic.getValue();
  }

}

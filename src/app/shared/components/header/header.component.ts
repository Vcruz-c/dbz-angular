import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../../features/auth/services/auth.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  // Para leer el email SOLO necesitamos una variable simple 
  protected userEmail: string | null = null;
  // Esto es un tipo especial de Observable. Es Observable y emisor a la vez
  // Subject que emite cuando el componente se destruye, 
  // usado para cancelar suscripciones activas y evitar fugas de memoria.
  private destroy$ = new Subject<void>();

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    // Nos suscribimos al email$ que es un observable y 
    // simplemente obtenemos email y lo asignamos a nuestra variable useremail.
    // Aquí quiero usar firstValueFrom, pero como necesito estar escuchando siempre
    // que haya cambios, no puedo usarlo. Usaré takeUtil y ngOnDestroy
    this.authService.email$
      .pipe(takeUntil(this.destroy$))
      .subscribe((email) => {
        this.userEmail = email;
        console.log('Obtenido en el header:',this.userEmail);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}

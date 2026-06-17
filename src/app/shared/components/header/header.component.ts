import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../features/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // Para leer el email SOLO necesitamos una variable simple 
  protected userEmail: string | null = null;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    // Nos suscribimos al email$ que es un observable. Simplemente obtenemos email y lo asignamos a nuestra variable useremail
    this.authService.email$.subscribe((email) => {
      this.userEmail = email;
    });

    console.log('Obtenido desde header:',this.userEmail)
  }


}

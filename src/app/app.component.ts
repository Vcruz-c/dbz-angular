import { Component, OnInit } from '@angular/core';
import { StorageService } from '../app/core/services/storage.service';
import { AuthService } from './features/auth/services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'dbz-angular';

  constructor(
    private storageService: StorageService,
    private authService: AuthService,
  ) {}

  async ngOnInit(): Promise<void>{
    const email = await this.storageService.getEmail();
    if (email){
      this.authService.restoreSession(email);
    }
  }
}

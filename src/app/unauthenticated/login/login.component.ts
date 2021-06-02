import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '@app/shared/services';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../unauthenticated.component.scss'],
  
})


export class LoginComponent {
  email: string | null = null;
  password: string | null = null;
  

  constructor(private router: Router, private unauthenticatedService: AuthService) {}

  login(): void {
    this.unauthenticatedService.login(this.email!, this.password!).subscribe(() => {
      this.router.navigateByUrl('/');
    });
  }
  
}

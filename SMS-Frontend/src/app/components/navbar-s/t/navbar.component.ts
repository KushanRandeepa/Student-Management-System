import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth-service.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {



  authService = inject(AuthService)
  userRole: string | null = null;
  userId: string | null = null;

  ngOnInit(): void {
    // this.userRole = this.authService.getUserRole();
    this.userRole='STUDENT'
    this.userId=this.authService.getUserId();
  }


  logout() {
    this.authService.logout();
   
  }

}

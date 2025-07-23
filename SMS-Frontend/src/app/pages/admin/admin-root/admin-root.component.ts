import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { IDeactivateGuard } from '../../../services/guards/DeactivateGuard-service';
import { AuthService } from '../../../services/auth-service.service';

@Component({
  selector: 'app-admin-root',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './admin-root.component.html',
  styleUrl: './admin-root.component.css'
})
export class AdminRootComponent  {

authService=inject(AuthService)

  logout(){
    this.authService.logout()
  }

}

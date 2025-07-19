import { Component } from '@angular/core';
import { IDeactivateGuard } from '../../services/guards/DeactivateGuard-service';

@Component({
  selector: 'app-signup-page',
  imports: [],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupPageComponent implements IDeactivateGuard {


  canDeactivate(): boolean {
   return confirm(' Are you sure you want to leave .');
  }

}

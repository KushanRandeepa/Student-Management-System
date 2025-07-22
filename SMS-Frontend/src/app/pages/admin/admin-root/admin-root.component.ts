import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-root',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './admin-root.component.html',
  styleUrl: './admin-root.component.css'
})
export class AdminRootComponent {

}

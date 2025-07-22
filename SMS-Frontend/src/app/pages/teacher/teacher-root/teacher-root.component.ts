import { Component } from '@angular/core';
import { NavbarComponent } from "../../../components/navbar-s/t/navbar.component";
import { RouterOutlet } from  '@angular/router';

@Component({
  selector: 'app-teacher-root',
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './teacher-root.component.html',
  styleUrl: './teacher-root.component.css'
})
export class TeacherRootComponent {

}

import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth-service.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { StudentRootComponent } from "./pages/student/student-root/student-root.component";
import { StudentDashboardComponent } from "./pages/student/student-dashboard/student-dashboard.component";
import { AdminRootComponent } from "./pages/admin/admin-root/admin-root.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIf, AsyncPipe, MatProgressSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SMS-Frontend';

  constructor(public authService: AuthService) {}
}

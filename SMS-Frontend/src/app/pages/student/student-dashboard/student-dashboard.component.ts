import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth-service.service';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-student-dashboard',
  imports: [RouterOutlet],
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.css'
})
export class StudentDashboardComponent implements OnInit{

  http=inject(HttpClient);
  authService=inject(AuthService)
  userRole!: string | null
  userId!: string | null

  constructor(){
    this.userRole=this.authService.getUserRole();
  this.userId=this.authService.getUserId()


  }
  ngOnInit(): void {
  
    this.http.get( 'http://localhost:8080/student/getAll').subscribe({
      next:(res)=>{
        console.log(res)
      },
      error:(error)=>{
        alert('error')
      }
    })
  }
  
  logout(){
    this.authService.logout();
  }

}

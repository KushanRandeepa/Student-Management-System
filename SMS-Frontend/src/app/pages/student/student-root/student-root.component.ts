import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth-service.service';
import { HttpClient } from '@angular/common/http';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../../../components/navbar-s/t/navbar.component";

@Component({
  selector: 'app-student-root',
  imports: [RouterOutlet,  NavbarComponent],
  templateUrl: './student-root.component.html',
  styleUrl: './student-root.component.css'
})
export class StudentRootComponent implements OnInit{
 http=inject(HttpClient);
  authService=inject(AuthService)
  userRole!: string | null
  userId!: string | null

  constructor(){
    this.userRole=this.authService.getUserRole();
  this.userId=this.authService.getUserId()


  }
  ngOnInit(): void {
  
    // this.http.get( 'http://localhost:8080/student/getAll').subscribe({
    //   next:(res)=>{
    //     console.log(res)
    //   },
    //   error:(error)=>{
    //     alert('error')
    //   }
    // })
  }
  
  logout(){
    this.authService.logout();
  }
}

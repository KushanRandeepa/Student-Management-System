import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-dashboard',
  imports: [],
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.css'
})
export class StudentDashboardComponent implements OnInit{

  http=inject(HttpClient);
  constructor(){

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

  
  
}

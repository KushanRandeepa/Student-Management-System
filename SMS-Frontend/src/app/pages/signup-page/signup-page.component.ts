import { Component, inject, OnInit, signal } from '@angular/core';
import { IDeactivateGuard } from '../../services/guards/DeactivateGuard-service';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthBypassService } from '../../services/AuthbypassService';
import { CommonModule, NgIf } from '@angular/common';
import { E, N } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-signup-page',
  imports: [FormsModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatStepperModule, MatButtonModule, MatIconModule],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupPageComponent implements IDeactivateGuard, OnInit {

  private readonly http = inject(HttpClient);

  private _formBuilder = inject(FormBuilder);
  route = inject(Router)
  bypassService = inject(AuthBypassService)

  ngOnInit(): void {
  }


  canDeactivate(): boolean {
    return confirm(' Are you sure you want to leave .');
  }

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  isLinear = false;

  firstFormGroup = this._formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(3)], this.isExistedUsername.bind(this)],
    email: ['', [Validators.required, Validators.email],this.isExistedEmail.bind(this)],
    newPassword: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required]
  });
  secondFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    address: ['',],
    phoneNumber: ['', Validators.required],
    grade: ['', Validators.required],
    birthday: ['', Validators.required]
  });

  register() {
    this.bypassService.bypassGuard = true
    this.route.navigateByUrl('/login')
  }

  isExistedUsername(control: FormControl): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.http.get<boolean>(`http://localhost:8080/auth/check-username/${control.value}`).subscribe((res) => {
          if (res) {
            resolve({ usernameExists: true })
          } else {
            resolve(null)
          }
        })
      }, 1000)
    })
  }

  isExistedEmail(control: FormControl): Promise<any> {
    return new Promise((reolve, reject) => {
      setTimeout(() => {
        this.http.get<boolean>(`http:///localhost:8080/auth/check-email/${control.value}`).subscribe((res)=>{

          if(res){
            reolve({ emailExists: true})
          }else{
            reolve(null)
          }
        })
       }, 1000)
    })
  }



}

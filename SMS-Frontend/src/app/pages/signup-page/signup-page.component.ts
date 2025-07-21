import { Component, inject, OnInit, signal } from '@angular/core';
import { IDeactivateGuard } from '../../services/guards/DeactivateGuard-service';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormControl, NonNullableFormBuilder } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthBypassService } from '../../services/bypassAuthService';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { SignupRequest } from '../../models/SignupRequest';

@Component({
  selector: 'app-signup-page',
  providers: [provideNativeDateAdapter()],
  imports: [FormsModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatStepperModule, MatButtonModule, MatIconModule, MatDatepickerModule, MatSelectModule],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupPageComponent implements IDeactivateGuard, OnInit {

  private readonly http = inject(HttpClient);
  private _formBuilder = inject(FormBuilder);

  route = inject(Router)
  bypassService = inject(AuthBypassService)
  userRole = 'STUDENT';

  ngOnInit(): void {

  }
  canDeactivate(): boolean {
    return confirm(' Are you sure you want to leave .');
  }

  hide = signal(true);
  isLinear = false;

  grads: { value: string, viewValue: string }[] = [
    { value: 'A/L', viewValue: 'AL' },
    { value: 'O/L', viewValue: 'OL' },
    { value: 'Grade-9', viewValue: 'Grade-9' },
    { value: 'Grade-10', viewValue: 'Grade-10' },
  ];
  roles: { value: string, viewValue: string }[] = [
    { value: 'STUDENT', viewValue: 'STUDENT' },
    { value: 'ADMIN', viewValue: 'ADMIN' },
    { value: 'TEACHER', viewValue: 'TEACHER' }
  ];


  firstFormGroup = this._formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(3)], this.isExistedUsername.bind(this)],
    email: ['', [Validators.required, Validators.email], this.isExistedEmail.bind(this)],
    newPassword: ['', [Validators.required, Validators.minLength(6), Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{6,}$")]],
    confirmPassword: ['', [Validators.required], this.isConfirmPassword.bind(this)]
  });

  secondFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    address: ['', Validators.required],
    phoneNumber: ['', [Validators.required, Validators.pattern('^0\\d{9}$')]],
    grade: ['', Validators.required],
    birthday: ['', [Validators.required]],
  });



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
        this.http.get<boolean>(`http:///localhost:8080/auth/check-email/${control.value}`).subscribe((res) => {
          if (res) {
            reolve({ emailExists: true })
          } else {
            reolve(null)
          }
        })
      }, 1000)
    })
  }

  isConfirmPassword(control: FormControl): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.firstFormGroup.get('newPassword')?.value === control.value) {
          resolve(null);
        } else {
          resolve({ passwordMismatch: true });
        }
      }, 1000);
    });
  }

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  submit() {
    if (this.firstFormGroup.valid && this.secondFormGroup.valid) {
      console.log(this.firstFormGroup.valid)
      const signupRequest: SignupRequest = {
        username: this.firstFormGroup.get('username')?.value as string,
        email: this.firstFormGroup.get('email')?.value as string,
        phoneNumber: this.secondFormGroup.get('phoneNumber')?.value as string,
        password: this.firstFormGroup.get('newPassword')?.value as string,
        role: this.userRole,
      };
      console.log(signupRequest)
      this.http.post<any>('http://localhost:8080/auth/signup', signupRequest).subscribe({
        next: (res) => {
            alert('Registration successful!');
            this.firstFormGroup.reset();
            this.bypassService.bypassGuard = true;
            this.route.navigateByUrl('/login');
         
        },error: (error) => {
          console.error(error);
          alert('Registration failed. Please try again.');
        }
    })
    } else {
      alert('Please fill in all required fields correctly.');
    }
  }


}


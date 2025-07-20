import { Component , inject} from '@angular/core';
import { IDeactivateGuard } from '../../services/guards/DeactivateGuard-service';

import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-signup-page',
  imports: [FormsModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatStepperModule, MatButtonModule ],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupPageComponent implements IDeactivateGuard {


  canDeactivate(): boolean {
   return confirm(' Are you sure you want to leave .');
  }

   private _formBuilder = inject(FormBuilder);

  firstFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });
  secondFormGroup = this._formBuilder.group({
    address: ['', Validators.required],
  });
  isLinear = false;

}

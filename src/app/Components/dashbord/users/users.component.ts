import { Component } from '@angular/core';
import { Users } from '../../../Models/users';
import { NgForOf, NgIf } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ErrorsStateMatcher } from '../../../Models/ErrorStateMatcher';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    MatError,
    MatFormField,
    MatIcon,
    MatInput,
    MatLabel,
    NgIf,
    ReactiveFormsModule,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  users: Users[] = [
    {
      accountStatus: 'Suspended',
      email: 'anasAtb.com',
      fullName: 'Anas ATB',
      id: 123,
      identifier: 1252484215,
      job: '',
      phonenumber: '',
      role: '',
    },
    {
      accountStatus: 'Active',
      email: 'anasAtb2.com',
      fullName: 'Anas ATB2',
      id: 12,
      identifier: 1252484215,
      job: '',
      phonenumber: '',
      role: '',
    },
  ];

  // Add Form Variable and Functions
  // Form validators
  matcher = new ErrorsStateMatcher();

  formSubs: FormGroup = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    emailSubs: new FormControl('', [Validators.required, Validators.email]),
    identificateur: new FormControl('', [Validators.required]),
    passwordSubs: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  // Get all Form Fields
  get nom() {
    return this.formSubs.get('nom');
  }
  get emailSubs() {
    return this.formSubs.get('emailSubs');
  }
  get identificateur() {
    return this.formSubs.get('identificateur');
  }
  get passwordSubs() {
    return this.formSubs.get('passwordSubs');
  }

  // Method invoked on form submission
  onSubmit() {
    const addInfos = {
      nom: this.nom?.value,
      email: this.emailSubs?.value,
      identificateur: this.identificateur?.value,
      password: this.passwordSubs?.value,
    };
    console.log(addInfos);
    if (this.formSubs.valid) {
      console.log(this.formSubs);
    }
  }
}

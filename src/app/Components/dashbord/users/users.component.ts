import { Component } from '@angular/core';
import { User } from '../../../Models/users';
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
import {UserService} from "../../../Services/user.service";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {EntryService} from "../../../Services/entry.service";

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
    MatOption,
    MatSelect,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  users: User[] = [];
  constructor(private userService: UserService,private entryservice : EntryService) {
    userService.getAll().subscribe(
      (data) => {
        this.users = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // Add Form Variable and Functions
  // Form validators
  matcher = new ErrorsStateMatcher();

  formSubs: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    privilege: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  // Get all Form Fields
  get email() {
    return this.formSubs.get('email');
  }
  get firstName() {
    return this.formSubs.get('firstName');
  }
  get lastName() {
    return this.formSubs.get('lastName');
  }
  get password() {
    return this.formSubs.get('password');
  }
  get privilege() {
    return this.formSubs.get('privilege');
  }

  selectedUser : User = {
    email: "", firstName: "", id: 0, lastName: "", password: "", privilege: "", role: "", status: false
  };

  // Method invoked on form submission
  onSubmit() {
    if(this.selectedUser.firstName== ""){
      const addInfos = {
        email: this.email?.value,
        password: this.password?.value,
        firstName: this.firstName?.value,
        lastName: this.lastName?.value,
        privilege: this.formSubs.get('privilege')?.value,
      };
      this.entryservice.signUp(addInfos).subscribe(
        (res: any) => {
          console.log(res);
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    }else{
      const modifInfos = {
        email: this.email?.value,
        password: this.password?.value,
        firstName: this.firstName?.value,
        lastName: this.lastName?.value,
        privilege: this.formSubs.get('privilege')?.value,
      };
      this.userService.Update(this.selectedUser.id,modifInfos).subscribe(
        (res: any) => {
          console.log(res);
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }


  delete(id : number){
    this.userService.Delete(id).subscribe(
      ()=>{
        console.log('User deleted successfully.');
        window.location.reload();
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  edit(user : User){
    this.selectedUser = user;
    this.formSubs.patchValue({
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      privilege: user.privilege,
    });
  }

  emptyModal(){
    this.selectedUser = {
      email: "", firstName: "", id: 0, lastName: "", password: "", privilege: "", role: "", status: false

    }
  }
}

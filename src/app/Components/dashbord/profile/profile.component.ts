import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Users } from '../../../Models/users';
import { NgIf } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { ErrorsStateMatcher } from '../../../Models/ErrorStateMatcher';
const LogoImgPath =
  'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    ReactiveFormsModule,
    MatError,
    MatFormField,
    MatIcon,
    MatInput,
    MatLabel,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  imageProfile!: SafeUrl;
  user: Users = {
    accountStatus: 'Active',
    email: 'foulenbenfoulen@gmail.com',
    fullName: 'foulen ben foulen',
    id: 0,
    identifier: 2244,
    job: 'agent',
    phonenumber: '88888888',
    role: '',
  };
  uploadedImage!: any;

  constructor(
    private _snackBar: MatSnackBar,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.getImage(this.user.identifier);
  }

  // Method to get profile picture
  getImage(userId: any) {
    // let objectURL = URL.createObjectURL(res);
    // this.imageProfile = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    this.imageProfile = LogoImgPath;
  }

  // Form validators
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    fullName: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });
  matcher = new ErrorsStateMatcher();

  // Get all Form Fields
  get email() {
    return this.form.get('email');
  }
  get phone() {
    return this.form.get('phone');
  }
  get fullName() {
    return this.form.get('fullName');
  }

  // Method invoked on form submission
  onSubmit() {
    const profileInfo = {
      email: this.email?.value,
      password: this.fullName?.value,
    };
    console.log(profileInfo);
    if (this.form.valid) {
      console.log(this.form);
      this.user.fullName = this.fullName?.value;
      this.user.email = this.email?.value;
      this.user.phonenumber = this.phone?.value;

      this._snackBar.open('Change Success', '✅');
    } else {
      this._snackBar.open('Enter valid information !!!', '❌');
    }
  }

  // Method to handle image upload
  onImageUpload(event: any) {
    this.uploadedImage = event.target.files[0];
    this.imageUploadAction();
  }

  // Method to change profile picture
  imageUploadAction() {
    const imageFormData = new FormData();
    imageFormData.append('file', this.uploadedImage);
  }
}

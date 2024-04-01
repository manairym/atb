import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { EntryService } from '../../Services/entry.service';
import { TokenStorageService } from '../../Services/token.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatIcon } from '@angular/material/icon';
import { Users } from '../../Models/users';

@Component({
  selector: 'app-dashbord',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, RouterLinkActive, MatIcon],
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.css',
})
export class DashbordComponent implements OnInit {
  LogoImgPath = '../../assets/img/atbLogo.png';

  // Dark Mode or Light Mode
  darkMode: boolean = false;

  // User data object
  userData: Users = {
    accountStatus: '',
    email: '',
    fullName: 'foulen ben foulen',
    id: 0,
    identifier: 0,
    phonenumber: '',
    job: '',
    role: '',
  };

  // Status variable
  status = false;

  // Image profile variable
  imageProfile!: SafeUrl;

  constructor(
    private tokenStorageService: TokenStorageService,
    private EService: EntryService,
    private sanitizer: DomSanitizer,
    private MatSnackBar: MatSnackBar
  ) {
    // Setting user role from token storage
    this.userData.role = this.tokenStorageService.getRole() as string;
  }

  ngOnInit(): void {
    // Method to initialize component
    this.refreshProfile();
  }

  // Method to refresh profile
  refreshProfile() {
    //const userAuth = this.tokenStorageService.getUser();
    this.getImage();
  }

  // Method to logout
  signOut() {
    this.EService.signOut();
  }

  // Method to toggle status
  addToggle() {
    this.status = !this.status;
  }

  // Method to get user image
  getImage() {
    this.imageProfile =
      'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp';
  }

  // Method to change mode (Dark Mode or Light Mode)
  modeChanges() {
    this.darkMode = !this.darkMode;
    console.log(this.darkMode);
  }
}

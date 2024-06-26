import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { EntryService } from '../../Services/entry.service';
import { TokenStorageService } from '../../Services/token.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatIcon } from '@angular/material/icon';
import { User } from '../../Models/users';
import {UserService} from "../../Services/user.service";

@Component({
  selector: 'app-dashbord',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, RouterLinkActive, MatIcon],
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.css',
})
export class DashbordComponent implements OnInit {
  LogoImgPath = '../../assets/img/atbLogo.png';
  isLoggedIn:boolean = false;

  // Dark Mode or Light Mode
  darkMode: boolean = false;

  // User data object
  userData: User = {
    email: "", firstName: "", id: 0, lastName: "", password: "", privilege: "", role: "", status: false
  };

  // Status variable
  status = false;

  // Image profile variable
  imageProfile!: SafeUrl;
  userRole : string ="";
  constructor(
    private tokenStorageService: TokenStorageService,
    private EService: EntryService,
    private sanitizer: DomSanitizer,
    private MatSnackBar: MatSnackBar,
    private userService: UserService
  ) {
    this.userRole = this.tokenStorageService.getRole() as string;
  }
  ngOnInit(): void {
    this.isLoggedIn =!!this.tokenStorageService.getToken();
    // Method to initialize component
    this.refreshProfile();
  }

  // Method to refresh profile
  refreshProfile() {
    const userAuth = this.tokenStorageService.getUser();
    this.getImage(userAuth as number);
    this.userService.get(userAuth).subscribe((res: User) => {
      this.userData = res;
      console.log(res);
    },(error)=>{
      this.MatSnackBar.open(error.error.message,'❌',{
        duration: 3000
      })
    });
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
  getImage(userId : number) {
    this.userService.getFile(userId).subscribe(
      (res: any) => {
        let objectURL = URL.createObjectURL(res);
        this.imageProfile = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      },
      () => {
        this.imageProfile =
          'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp';
      }
    );
  }

  // Method to change mode (Dark Mode or Light Mode)
  modeChanges() {
    this.darkMode = !this.darkMode;
  }
}

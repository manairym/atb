import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-reset-email',
  standalone: true,
  imports: [],
  templateUrl: './reset-email.component.html',
  styleUrl: './reset-email.component.css'
})
export class ResetEmailComponent {
  constructor(private router:Router) {
  }
  resetEmail(){
    this.router.navigate(['/resetPassword']);
  }
}

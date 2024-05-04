import { Component } from '@angular/core';
import { Equipemnt } from '../../../Models/equipemnt';
import {DatePipe, NgForOf, NgIf} from '@angular/common';
import {EquipemetService} from "../../../Services/equipemet.service";
import {RouterLink} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {User} from "../../../Models/users";
import {UserService} from "../../../Services/user.service";
import {TokenStorageService} from "../../../Services/token.service";
@Component({
  selector: 'app-equipements',
  standalone: true,
  imports: [NgForOf, DatePipe, RouterLink, MatIcon, NgIf],
  templateUrl: './equipements.component.html',
  styleUrl: './equipements.component.css',
})
export class EQUIPEMENTSComponent {
  equipements: Equipemnt[] = [];
  user : User = {
    email: "", firstName: "", id: 0, lastName: "", password: "", privilege: "", role: "", status: false
  }
  constructor(private equipemetService : EquipemetService,private userService : UserService, private tokenService : TokenStorageService) {
    this.user.id = this.tokenService.getUser() as number;
    this.userService.get(this.user.id).subscribe((res: User) => {
      this.user = res;
      console.log(res);
    },(error)=>{
      console.log(error);
    });
    equipemetService.getAll().subscribe((data) => {
        this.equipements = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      });
  }
    delete(id : number){
      if (confirm("Are you sure you want to delete this equipment?")) {
        this.equipemetService.Delete(id).subscribe({
          next: () => {
            console.log('Equipment deleted successfully.');
            // Optionally refresh the list or navigate away
            window.location.reload();
          },
          error: (err) => alert("Equipement Already Exist in History can't delete it!"),
        });
      }

    }
}

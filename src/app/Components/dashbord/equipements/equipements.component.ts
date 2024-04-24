import { Component } from '@angular/core';
import { Equipemnt } from '../../../Models/equipemnt';
import { DatePipe, NgForOf } from '@angular/common';
import {EquipemetService} from "../../../Services/equipemet.service";
@Component({
  selector: 'app-equipements',
  standalone: true,
  imports: [NgForOf, DatePipe],
  templateUrl: './equipements.component.html',
  styleUrl: './equipements.component.css',
})
export class EQUIPEMENTSComponent {
  equipements: Equipemnt[] = [];
  constructor(private equipemetService : EquipemetService) {
    equipemetService.getAll().subscribe((data) => {
        this.equipements = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      });
  }
}

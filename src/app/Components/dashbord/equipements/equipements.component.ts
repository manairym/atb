import { Component } from '@angular/core';
import { Equipemnt } from '../../../Models/equipemnt';
import { DatePipe, NgForOf } from '@angular/common';
@Component({
  selector: 'app-equipements',
  standalone: true,
  imports: [NgForOf, DatePipe],
  templateUrl: './equipements.component.html',
  styleUrl: './equipements.component.css',
})
export class EQUIPEMENTSComponent {
  equipements: Equipemnt[] = [
    {
      num_id_equipement: 1,
      category: 'Informatique',
      entryDate: new Date(),
      exitDate: new Date(),
      state: 'Parfait',
      status: 'Actif',
    },
    {
      num_id_equipement: 2,
      category: 'Mécanique',
      entryDate: new Date(),
      exitDate: new Date(),
      state: 'Moyen',
      status: 'Inactif',
    },
  ];
}

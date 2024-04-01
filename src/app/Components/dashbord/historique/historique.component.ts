import { DatePipe, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { History } from '../../../Models/history';

@Component({
  selector: 'app-historique',
  standalone: true,
  imports: [NgForOf, DatePipe],
  templateUrl: './historique.component.html',
  styleUrl: './historique.component.css',
})
export class HistoriqueComponent {
  historique: History[] = [
    {
      num_id_equipement: 1,
      num_modification: 3,
      userId: 2,
      startDate: new Date(),
      status: 'En marche',
      returnDate: new Date(),
    },
    {
      num_id_equipement: 1,
      num_modification: 3,
      userId: 2,
      startDate: new Date(),
      status: 'En marche',
      returnDate: new Date(),
    },
  ];
}

import { Component } from '@angular/core';
import { DatePipe, NgForOf } from '@angular/common';
import { Privilege } from '../../../Models/Privilege';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-privilege',
  standalone: true,
  imports: [NgForOf, DatePipe, FormsModule],
  templateUrl: './privilege.component.html',
  styleUrl: './privilege.component.css',
})
export class PrivilegeComponent {
  selected_item: Privilege = {
    id: 0,
    userId: 0,
    privivleges: '',
  };

  privileges: Privilege[] = [
    {
      id: 1,
      userId: 222,
      privivleges:
        'AJOUTER UN ÉQUIPEMENT/ DONNER UN ÉQUIPEMENT/ SUPPRIMER UN ÉQUIPEMENT',
    },
    {
      id: 2,
      userId: 333,
      privivleges: 'SUPPRIMER UN ÉQUIPEMENT DONNER UN ÉQUIPEMENT',
    },
    {
      id: 4,
      userId: 355,
      privivleges: 'SUPPRIMER UN ÉQUIPEMENT',
    },
  ];

  delete(arg0: number) {
    const index = this.privileges.findIndex(
      (privilege) => privilege.id === arg0
    );
    if (index !== -1) {
      this.privileges.splice(index, 1); // Remove one item at the found index
      console.log(`Privilege with id ${arg0} deleted successfully.`);
    } else {
      console.log(`Privilege with id ${arg0} not found.`);
    }
  }
  edit(_t12: Privilege) {
    this.selected_item = _t12;
  }
  saveChanges() {
    const index = this.privileges.findIndex(
      (privilege) => privilege.id === this.selected_item.id
    );
    if (index !== -1) {
      this.privileges[index].privivleges = this.selected_item.privivleges;
      console.log(
        `Privilege with id ${this.selected_item.id} modified successfully.`
      );
    } else {
      console.log(`Privilege with id ${this.selected_item.id} not found.`);
    }
  }
}

import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {EquipemetService} from "../../Services/equipemet.service";

@Component({
  selector: 'app-add-edit-equipemnt',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './add-edit-equipemnt.component.html',
  styleUrl: './add-edit-equipemnt.component.css'
})
export class AddEditEquipemntComponent implements OnInit {
  equipmentForm !: FormGroup;
  isEditMode: boolean = false;
  equipmentId: string="";

  constructor(
    private equipmentService: EquipemetService,
    private ac: ActivatedRoute,
    private router: Router
  ) {
    this.ac.params.subscribe((data) => {
      this.equipmentId = data['id'];
      if (this.equipmentId) {
        this.isEditMode = true;
        this.loadEquipmentDetails(this.equipmentId);
      }
    });
  }

  ngOnInit(): void {
    this.equipmentForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      entree: new FormControl(''),
      sortie: new FormControl('')
    });


  }

  loadEquipmentDetails(id: string): void {
    // Call your service to get equipment details
    this.equipmentService.get(id).subscribe(
      (data : any) => {
        this.equipmentForm.patchValue({
          name: data.name,
          category: data.category,
          entree: data.entree,
          sortie: data.sortie
        });
      });
  }

  onSubmit(): void {
    if (this.equipmentForm.valid) {
      const equipmentData = this.equipmentForm.value;
      if (this.isEditMode) {
        this.equipmentService.Update(this.equipmentId, equipmentData).subscribe(
          () =>
        {
          this.router.navigate(['/Dashboard/Equipements']);
        });
      } else {
        this.equipmentService.Create(equipmentData).subscribe({
          next: () => this.router.navigate(['/Dashboard/Equipements']),
          error: () => console.error("errror")
        });
      }
    }
  }
}

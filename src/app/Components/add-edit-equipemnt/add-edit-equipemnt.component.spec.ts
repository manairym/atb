import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEquipemntComponent } from './add-edit-equipemnt.component';

describe('AddEditEquipemntComponent', () => {
  let component: AddEditEquipemntComponent;
  let fixture: ComponentFixture<AddEditEquipemntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditEquipemntComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEditEquipemntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

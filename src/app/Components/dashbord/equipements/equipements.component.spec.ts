import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EQUIPEMENTSComponent } from './equipements.component';

describe('EQUIPEMENTSComponent', () => {
  let component: EQUIPEMENTSComponent;
  let fixture: ComponentFixture<EQUIPEMENTSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EQUIPEMENTSComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EQUIPEMENTSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

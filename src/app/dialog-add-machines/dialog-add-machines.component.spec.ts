import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddMachinesComponent } from './dialog-add-machines.component';

describe('DialogAddMachinesComponent', () => {
  let component: DialogAddMachinesComponent;
  let fixture: ComponentFixture<DialogAddMachinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddMachinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddMachinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

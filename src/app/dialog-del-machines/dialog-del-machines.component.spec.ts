import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogdelMachinesComponent } from './dialog-del-machines.component';

describe('DialogdelMachinesComponent', () => {
  let component: DialogdelMachinesComponent;
  let fixture: ComponentFixture<DialogdelMachinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogdelMachinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogdelMachinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

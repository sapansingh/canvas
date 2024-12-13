import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addnewvehicle108Component } from './addnewvehicle108.component';

describe('Addnewvehicle108Component', () => {
  let component: Addnewvehicle108Component;
  let fixture: ComponentFixture<Addnewvehicle108Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addnewvehicle108Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addnewvehicle108Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

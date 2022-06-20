import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAgregarAreaConoComponent } from './form-agregar-area-cono.component';

describe('FormAgregarAreaConoComponent', () => {
  let component: FormAgregarAreaConoComponent;
  let fixture: ComponentFixture<FormAgregarAreaConoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAgregarAreaConoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAgregarAreaConoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

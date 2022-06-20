import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAgregarCursoComponent } from './form-agregar-curso.component';

describe('FormAgregarCursoComponent', () => {
  let component: FormAgregarCursoComponent;
  let fixture: ComponentFixture<FormAgregarCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAgregarCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAgregarCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

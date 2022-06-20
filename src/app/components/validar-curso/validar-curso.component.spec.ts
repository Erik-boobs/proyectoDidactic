import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarCursoComponent } from './validar-curso.component';

describe('ValidarCursoComponent', () => {
  let component: ValidarCursoComponent;
  let fixture: ComponentFixture<ValidarCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidarCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidarCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

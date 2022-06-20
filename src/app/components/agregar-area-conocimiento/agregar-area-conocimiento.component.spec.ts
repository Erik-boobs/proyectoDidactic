import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAreaConocimientoComponent } from './agregar-area-conocimiento.component';

describe('AgregarAreaConocimientoComponent', () => {
  let component: AgregarAreaConocimientoComponent;
  let fixture: ComponentFixture<AgregarAreaConocimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarAreaConocimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarAreaConocimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

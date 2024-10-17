import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarDetalleOrdenComponent } from './mostrar-detalle-orden.component';

describe('MostrarDetalleOrdenComponent', () => {
  let component: MostrarDetalleOrdenComponent;
  let fixture: ComponentFixture<MostrarDetalleOrdenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarDetalleOrdenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarDetalleOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

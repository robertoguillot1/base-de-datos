import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarDetalleOrdenComponent } from './actualizar-detalle-orden.component';

describe('ActualizarDetalleOrdenComponent', () => {
  let component: ActualizarDetalleOrdenComponent;
  let fixture: ComponentFixture<ActualizarDetalleOrdenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarDetalleOrdenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarDetalleOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

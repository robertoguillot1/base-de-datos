import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDetalleOrdenComponent } from './crear-detalle-orden.component';

describe('CrearDetalleOrdenComponent', () => {
  let component: CrearDetalleOrdenComponent;
  let fixture: ComponentFixture<CrearDetalleOrdenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearDetalleOrdenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearDetalleOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

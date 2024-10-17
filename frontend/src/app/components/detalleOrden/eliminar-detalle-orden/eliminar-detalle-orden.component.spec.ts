import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarDetalleOrdenComponent } from './eliminar-detalle-orden.component';

describe('EliminarDetalleOrdenComponent', () => {
  let component: EliminarDetalleOrdenComponent;
  let fixture: ComponentFixture<EliminarDetalleOrdenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarDetalleOrdenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarDetalleOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarOrdenComponent } from './mostrar-orden.component';

describe('MostrarOrdenComponent', () => {
  let component: MostrarOrdenComponent;
  let fixture: ComponentFixture<MostrarOrdenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarOrdenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [PanelMenuModule],
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Clientes',
        icon: 'pi pi-users',
        routerLink: '/clientes'  // Enlace al componente de mostrar clientes
      },
      {
        label: 'Empleados',
        icon: 'pi pi-tags',
        routerLink: '/empleados'  // Enlace al componente de mostrar empleados
      },
      {
        label: 'Órdenes',
        icon: 'pi pi-shopping-cart',
        routerLink: '/ordenes'  // Enlace al componente de mostrar órdenes
      },
      {
        label: 'Productos',
        icon: 'pi pi-chart-line',
        routerLink: '/productos'  // Enlace al componente de mostrar productos
      },
      {
        label: 'Pagos',
        icon: 'pi pi-money-bill',
        routerLink: '/pagos'  // Enlace al componente de mostrar pagos
      },
      {
        label: 'Detalle de Órdenes',
        icon: 'pi pi-shopping-cart',
        routerLink: '/detalle-ordenes'  // Enlace al componente de mostrar detalle de órdenes
      }
    ];
  }
}

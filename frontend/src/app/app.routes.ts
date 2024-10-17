import { Routes } from '@angular/router';
// Clientes
import { MostrarClienteComponent } from './components/cliente/mostrar-cliente/mostrar-cliente.component';
import { CrearClienteComponent } from './components/cliente/crear-cliente/crear-cliente.component';
import { ActualizarClienteComponent } from './components/cliente/actualizar-cliente/actualizar-cliente.component';
import { EliminarClienteComponent } from './components/cliente/eliminar-cliente/eliminar-cliente.component';
// Empleados
import { MostrarEmpleadoComponent } from './components/empleado/mostrar-empleado/mostrar-empleado.component';
import { CrearEmpleadoComponent } from './components/empleado/crear-empleado/crear-empleado.component';
import { ActualizarEmpleadoComponent } from './components/empleado/actualizar-empleado/actualizar-empleado.component';
import { EliminarEmpleadoComponent } from './components/empleado/eliminar-empleado/eliminar-empleado.component';
// Órdenes
import { MostrarOrdenComponent } from './components/orden/mostrar-orden/mostrar-orden.component';
import { CrearOrdenComponent } from './components/orden/crear-orden/crear-orden.component';
import { ActualizarOrdenComponent } from './components/orden/actualizar-orden/actualizar-orden.component';
import { EliminarOrdenComponent } from './components/orden/eliminar-orden/eliminar-orden.component';
// Productos
import { MostrarProductoComponent } from './components/producto/mostrar-producto/mostrar-producto.component';
import { CrearProductoComponent } from './components/producto/crear-producto/crear-producto.component';
import { ActualizarProductoComponent } from './components/producto/actualizar-producto/actualizar-producto.component';
import { EliminarProductoComponent } from './components/producto/eliminar-producto/eliminar-producto.component';
// Pagos
import { MostrarPagoComponent } from './components/pago/mostrar-pago/mostrar-pago.component';
import { CrearPagoComponent } from './components/pago/crear-pago/crear-pago.component';
import { ActualizarPagoComponent } from './components/pago/actualizar-pago/actualizar-pago.component';
import { EliminarPagoComponent } from './components/pago/eliminar-pago/eliminar-pago.component';
// Detalle de Órdenes
import { MostrarDetalleOrdenComponent } from './components/detalleOrden/mostrar-detalle-orden/mostrar-detalle-orden.component';
import { CrearDetalleOrdenComponent } from './components/detalleOrden/crear-detalle-orden/crear-detalle-orden.component';
import { ActualizarDetalleOrdenComponent } from './components/detalleOrden/actualizar-detalle-orden/actualizar-detalle-orden.component';
import { EliminarDetalleOrdenComponent } from './components/detalleOrden/eliminar-detalle-orden/eliminar-detalle-orden.component';


export const routes: Routes = [
    { 
        path: '', 
        redirectTo: '/clientes', // Cambia la redirección inicial según lo que desees
        pathMatch: 'full' 
    },
    
    // Rutas de Clientes
    {
        path: 'clientes',
        component: MostrarClienteComponent
    },
    {
        path: 'clientes/nuevo',
        component: CrearClienteComponent
    },
    {
        path: 'clientes/edit/:id',
        component: ActualizarClienteComponent
    },
    {
        path: 'clientes/eliminar/:id',
        component: EliminarClienteComponent
    },

    // Rutas de Empleados
    {
        path: 'empleados',
        component: MostrarEmpleadoComponent
    },
    {
        path: 'empleados/nuevo',
        component: CrearEmpleadoComponent
    },
    {
        path: 'empleados/edit/:id',
        component: ActualizarEmpleadoComponent
    },
    {
        path: 'empleados/eliminar/:id',
        component: EliminarEmpleadoComponent
    },

    // Rutas de Órdenes
    {
        path: 'ordenes',
        component: MostrarOrdenComponent
    },
    {
        path: 'ordenes/nuevo',
        component: CrearOrdenComponent
    },
    {
        path: 'ordenes/edit/:id',
        component: ActualizarOrdenComponent
    },
    {
        path: 'ordenes/eliminar/:id',
        component: EliminarOrdenComponent
    },

    // Rutas de Productos
    {
        path: 'productos',
        component: MostrarProductoComponent
    },
    {
        path: 'productos/nuevo',
        component: CrearProductoComponent
    },
    {
        path: 'productos/edit/:id',
        component: ActualizarProductoComponent
    },
    {
        path: 'productos/eliminar/:id',
        component: EliminarProductoComponent
    },

    // Rutas de Pagos
    {
        path: 'pagos',
        component: MostrarPagoComponent
    },
    {
        path: 'pagos/nuevo',
        component: CrearPagoComponent
    },
    {
        path: 'pagos/edit/:id',
        component: ActualizarPagoComponent
    },
    {
        path: 'pagos/eliminar/:id',
        component: EliminarPagoComponent
    },

    // Rutas de Detalle de Órdenes
    {
        path: 'detalle-ordenes',
        component: MostrarDetalleOrdenComponent
    },
    {
        path: 'detalle-ordenes/nuevo',
        component: CrearDetalleOrdenComponent
    },
    {
        path: 'detalle-ordenes/edit/:id',
        component: ActualizarDetalleOrdenComponent
    },
    {
        path: 'detalle-ordenes/eliminar/:id',
        component: EliminarDetalleOrdenComponent
    }
];
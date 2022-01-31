import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/auth/login/login.component';
import { PerfilComponent } from './componentes/auth/perfil/perfil.component';
import { RegisterComponent } from './componentes/auth/register/register.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { CrearAdminComponent } from './componentes/crear-admin/crear-admin.component';

import { GestionPedidoComponent } from './componentes/gestion-pedido/gestion-pedido.component';
import { HomeComponent } from './componentes/home/home.component';
import { ListaProductosComponent } from './componentes/lista-productos/lista-productos.component';
import { NoticiasComponent } from './componentes/noticias/noticias.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"registro", component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"perfil",component:PerfilComponent},
  {path:"crear",component:CrearAdminComponent},
  {path:"listaProductos", component:ListaProductosComponent},
  {path:"home", component:HomeComponent},
  {path:"carrito", component:CarritoComponent},
  {path:"noticias", component:NoticiasComponent},
  {path:"pedidos",component:GestionPedidoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

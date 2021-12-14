import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/auth/login/login.component';
import { PerfilComponent } from './componentes/auth/perfil/perfil.component';
import { RegisterComponent } from './componentes/auth/register/register.component';
import { CrearProductosComponent } from './crear-productos/crear-productos.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"registro", component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"perfil",component:PerfilComponent},
  {path:"crearProducto", component:CrearProductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

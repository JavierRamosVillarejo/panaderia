import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { PerfilComponent } from './componentes/auth/perfil/perfil.component';
import { LoginComponent } from './componentes/auth/login/login.component';
import { RegisterComponent } from './componentes/auth/register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnviarTokenInterceptor } from './auth/enviar-token.interceptor';
import { HomeComponent } from './componentes/home/home.component';
import { ListaProductosComponent } from './componentes/lista-productos/lista-productos.component';
import { NoticiasComponent } from './componentes/noticias/noticias.component';
import { GestionPedidoComponent } from './componentes/gestion-pedido/gestion-pedido.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { CrearAdminComponent } from './componentes/crear-admin/crear-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    PerfilComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ListaProductosComponent,
    
    NoticiasComponent,
    GestionPedidoComponent,
    CarritoComponent,
    CrearAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: EnviarTokenInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

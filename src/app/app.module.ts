import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProductosComponent } from './productos/productos.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { SubcategoriaComponent } from './subcategoria/subcategoria.component';
import { RouterModule,Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './clientes/form.component';
import { CrformComponent } from './clientes/crform.component';
import { EdformComponent } from './clientes/edform.component';
import { ElformComponent } from './clientes/elform.component';
import { FormComponentCat } from './categorias/form.component';
import { CrformcaComponent } from './categorias/crformca.component';
import { EdformcaComponent } from './categorias/edformca.component';
import { ElformcaComponent } from './categorias/elformca.component';
import { CrformproComponent } from './productos/crformpro.component';
import { EdformproComponent } from './productos/edformpro.component';
import { ElformproComponent } from './productos/elformpro.component';
import { FormComponentPro } from './productos/form.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { FichaSocioComponent } from './ficha-socio/ficha-socio.component';
import { ListformadComponent } from './administrador/listformad.component';
import { CrformadComponent } from './administrador/crformad.component';
import { EdformadComponent } from './administrador/edformad.component';
import { ElformadComponent } from './administrador/elformad.component';
import { ListformfsComponent } from './ficha-socio/listformfs.component';
import { CrformfsComponent } from './ficha-socio/crformfs.component';
import { EdformfsComponent } from './ficha-socio/edformfs.component';
import { ElformfsComponent } from './ficha-socio/elformfs.component';
import { ListFormfavComponent } from './favoritos/form.component';
import { CrformfavComponent } from './favoritos/crformfav.component';
import { EdformfavComponent } from './favoritos/edformfav.component';
import { ElformfavComponent } from './favoritos/elformfav.component';
import { CrformsubComponent } from './subcategoria/crformsub.component';
import { EdformsubComponent } from './subcategoria/edformsub.component';
import { ElformsubComponent } from './subcategoria/elformsub.component';
import { ListFormsubComponent } from './subcategoria/form.component';
import { ReporteriasComponent } from './reporterias/reporterias.component';
import { ListFormRepComponent } from './reporterias/list-form-rep.component';
import { RegistroComponent } from './auth/registro.component';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './auth/login.component';
import { interceptorProvider } from './interceptor/prod-interceptor.service';
const routes: Routes=[

  {path:'',component:LoginComponent},
  {path:'registro',component:RegistroComponent},
  {path:'admin',component:AdministradorComponent},
  {path:'ficha',component:FichaSocioComponent},
  {path:'productos',component:ProductosComponent},
  {path:'clientes',component:ClientesComponent},
  {path:'favoritos',component:FavoritosComponent},
  {path:'categoria',component:CategoriasComponent},
  {path:'subcategoria',component:SubcategoriaComponent},
  {path:'clientes/form',component:FormComponent},
  {path:'clientes/crform',component:CrformComponent},
  {path:'clientes/edform',component:EdformComponent},
  {path:'clientes/elform',component:ElformComponent},
  {path:'categorias/form',component:FormComponentCat},
  {path:'categorias/crform',component:CrformcaComponent},
  {path:'categorias/edform',component:EdformcaComponent},
  {path:'categorias/elform',component:ElformcaComponent},
  {path:'productos/listform',component:FormComponentPro},
  {path:'productos/crformpro',component:CrformproComponent},
  {path:'productos/edformpro',component:EdformproComponent},
  {path:'productos/elformpro',component:ElformproComponent},
  {path:'administrador/listformad',component:ListformadComponent},
  {path:'administrador/cr',component:CrformadComponent},
  {path:'administrador/edformad',component:EdformadComponent},
  {path:'administrador/elformad',component:ElformadComponent},
  {path:'favoritos/listformfv',component:ListFormfavComponent},
  {path:'favoritos/crformfv',component:CrformfavComponent},
  {path:'favoritos/edformfv',component:EdformfavComponent},
  {path:'favoritos/elformfv',component:ElformfavComponent},
  {path:'subcategoria/listformsub',component:ListFormsubComponent},
  {path:'subcategoria/crformsub',component:CrformsubComponent},
  {path:'subcategoria/edformsub',component:EdformsubComponent},
  {path:'subcategoria/elformsub',component:ElformsubComponent},
  {path:'fichasocio/lisformfic',component:ListformfsComponent},
  {path:'reporteria',component:ReporteriasComponent},
  {path:'reporteria/lisformrep',component:ListFormRepComponent},
  {path:'',redirectTo:'',pathMatch:'full'},
 
  ];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientesComponent,
    ProductosComponent,
    CategoriasComponent,
    FavoritosComponent,
    SubcategoriaComponent,
    FormComponent,
    CrformComponent,
    EdformComponent,
    ElformComponent,
    FormComponentCat,
    CrformcaComponent,
    EdformcaComponent,
    ElformcaComponent,
    CrformproComponent,
    EdformproComponent,
    ElformproComponent,
    FormComponentPro,
    AdministradorComponent,
    FichaSocioComponent,
    ListformadComponent,
    CrformadComponent,
    EdformadComponent,
    ElformadComponent,
    ListformfsComponent,
    CrformfsComponent,
    EdformfsComponent,
    ElformfsComponent,
    ListFormfavComponent,
    CrformfavComponent,
    EdformfavComponent,
    ElformfavComponent,
    ListFormsubComponent,
    CrformsubComponent,
    EdformsubComponent,
    ElformsubComponent,
    ReporteriasComponent,
    ListFormRepComponent,
    RegistroComponent,
    MenuComponent,
    IndexComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
      
    
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }

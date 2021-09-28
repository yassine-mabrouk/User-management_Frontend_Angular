import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAddressComponent } from './components/add-address/add-address.component';
import { EditAddressComponent } from './components/edit-address/edit-address.component';
import { ListAddressComponent } from './components/list-address/list-address.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/partials/navbar/navbar.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';

import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './servises/auth.service';

const routes:Routes = [
  {path : '' ,redirectTo:'/address',pathMatch:'full'},
  {path:"address", children :[
    {path : 'add' ,component:AddAddressComponent},
    {path : 'edit/:id' ,component:EditAddressComponent},
    {path : '' ,component:ListAddressComponent},
  ]},

  {path : 'login' ,component:LoginComponent},
  {path : '**' ,component:NotFoundComponent},
 
]

@NgModule({
  declarations: [
    AppComponent,
    AddAddressComponent,
    EditAddressComponent,
    ListAddressComponent,
    LoginComponent,
    NavbarComponent,
    NotFoundComponent,

 
  ],
  imports: [
 
BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule
    
   

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

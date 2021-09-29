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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './servises/auth.service';
import { TokenService } from './servises/token.service';
import { AccountService } from './servises/account.service';

import { AddressService } from './servises/address.service';

import { AuthGuard } from './guards/auth.guard';
import { AfterAuthGuard } from './guards/after-auth.guard';
import { JwtInterceptor } from './servises/jwt.interceptor';
const routes:Routes = [
  //canActivate:[AuthGuard] pour securiser les routes 
  {path : '' ,redirectTo:'/address',pathMatch:'full',canActivate:[AuthGuard]},
  {path:"address", children :[
    {path : 'add' ,component:AddAddressComponent},
    {path : 'edit/:id' ,component:EditAddressComponent},
    {path : '' ,component:ListAddressComponent},
  ],canActivate:[AuthGuard]},

  {path : 'login' ,component:LoginComponent,canActivate:[AfterAuthGuard]},
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
  providers: [AuthService,TokenService,AccountService,AuthGuard,AfterAuthGuard,AddressService,
    // pour jwt 
    {
      provide:HTTP_INTERCEPTORS,
      useClass:JwtInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

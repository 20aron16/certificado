import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { CanActivateViaAuthGuard } from './services/guard';

import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { CertificadoComponent } from './certificado/certificado.component';


/*
const routes: Routes = [
	{path: '', redirectTo: '/menu', pathMatch: 'full' },
	{path : 'menu', component : MenuComponent, children: [
		{path : '', redirectTo : 'accesorios', pathMatch : 'full'},
		{path : 'accesorios', component : AccesoriosComponent},
		{path : 'upload', component : UploadComponent},
		{path : 'login', component : LoginComponent}	
	]},
	{path : 'accesorios', component : AccesoriosComponent},
	{path : 'login', component : LoginComponent},
	{path : '**', component : LoginComponent}
];
*/

const routes: Routes = [
	{path: '', component: LoginComponent },
	{path: 'login', component: LoginComponent},
	{path : 'home', component : HomeComponent, canActivate: [CanActivateViaAuthGuard]},
	{path : 'certificado', component : CertificadoComponent, canActivate: [CanActivateViaAuthGuard]},
	{path : '**', component : ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

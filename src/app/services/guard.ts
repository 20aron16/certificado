import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
//import { LoginService } from '../login/login.service';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {

        if(sessionStorage.getItem('nombre')){
           // console.log('estas logueado');
            return true;
        }else{
            //console.log('no estas logueado');
            this.router.navigate(['/']);
            return true;    
        }
        
    }

}
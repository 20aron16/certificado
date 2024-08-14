import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CertificacionService } from '../services/certificacion.service';
import { ReteFuente } from '../models/retefuente';
import { ReteIca } from '../models/reteica';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [CertificacionService]
})
export class LoginComponent implements OnInit {

  public nit : number;
  public pass;
  public rete_fuente: ReteFuente;
  public rete_ica: ReteIca;
  public cargando;
  public mensaje;
  public cm : boolean;

  constructor(
     private _cerService : CertificacionService,
     private _route : Router,
     private _aR : ActivatedRoute
  ) {
    this.nit=0;
    this.pass = '';
    this. rete_fuente = new ReteFuente(0,0,'',0,'',0,0,0);
    this. rete_ica = new ReteIca(0,0,'',0,'',0,0,0);
    this.cargando = false;
    this.mensaje = '';
    this.cm = false;
  }

  ngOnInit() {
  }

  login(){
    this.mensaje = '';
    this.cargando = true;
    this.cm = false;
    if(this.nit == 891904029 && this.pass){

      this.cm = true;
      this._cerService.loginCm(this.nit, this.pass).subscribe(
        result => {
          var r: any = new Array();
          r = result;
          this.nit = 0;
          this.pass = '';
          if(r.nit && r.pass){
            console.log('Logueado');
            sessionStorage.setItem('nombre',r.nombres);
            sessionStorage.setItem('nit',r.nit);
            this.cargando = false;
            this._route.navigate(['../home'], {relativeTo: this._aR});
          }else{
            console.log('credenciales erroneas');
            this.mensaje = 'credenciales erroneas';
            sessionStorage.clear();
            this.cargando = false;
          }
        },
        error => {
          this.cargando = false;
          console.log(<any>error);
          this.mensaje = 'Proveedor no se encuentra en nuestra base de datos, ERROR BD';
        }
      );
    }else{
      console.log('false');
      this.cm = false;
      this._cerService.logueo(this.nit).subscribe(
        result => {
          console.log(result);
          var r: any = new Array();
          r = result;
          console.log(r.length);
          if(r.nit){
            console.log('Logueado');
            sessionStorage.setItem('nombre',r.nombres);
            //sessionStorage.setItem('nit',this.nit);
            this.cargando = false;
            this._route.navigate(['../home'], {relativeTo: this._aR});
          }else{
            console.log('Proveedor no se encuentra en nuestra base de datos');
            this.mensaje = 'Proveedor no se encuentra en nuestra base de datos';
            sessionStorage.clear();
            this.cargando = false;
          }
        }, error => {
          this.cargando = false;
          console.log(<any>error);
          this.mensaje = 'Proveedor no se encuentra en nuestra base de datos, ERROR BD';
        }
      );
    }
    
  }

  logout(){
    sessionStorage.clear();
    localStorage.clear();
  }

}

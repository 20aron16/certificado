import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, XhrFactory } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable()
export class CertificacionService{

	url = '';
	constructor(
		public _http : HttpClient
	){
		this.url = 'http://192.168.0.6:83/certificados/backend/index.php/'
		//this.url = '../../../back-end/index.php/'; // URL HOSTGATOR
	}

	logueo(nit): Observable<any>{
		return this._http.get(this.url+'login/'+nit);		
	}

	loginCm(nit,pass): Observable<any>{
		return this._http.get(this.url+'logincm/'+nit+'/'+pass);		
	}

	getReteFuente(nit): Observable<any>{
		return this._http.get(this.url+'get-retefuente/'+nit);		
	}

	getVehicles(): Observable<any>{
    	return this._http.get(this.url+'get-vehiculos');		
	}

	insertVehiculo(vh): Observable<any>{
		let json = JSON.stringify(vh);
		let params = 'json='+json;
		let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

		return this._http.post(this.url+'add-vehiculo', params, {headers: headers});
	}

	getMarcas(): Observable<any>{
		return this._http.get(this.url+'get-marcas-active');
	}

}
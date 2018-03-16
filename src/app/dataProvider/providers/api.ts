import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/observable';

@Injectable()
export class ApiService {

    private baseUrl: string = 'http://localhost/FRC.ProductConfiguration.WebAPI/api';
    //private baseUrl: string = 'http://frc-prod-config-api.azurewebsites.net/api';//'http://localhost:3000/api';

    constructor(private _http: HttpClient) { }
    //Headers for example :  headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    get(endPoint: string, paramsInput?: any, headersInput?: any): Observable<any> {
        if (headersInput) {
            var headers = new HttpHeaders();
            for (let k in headersInput) {
                headers.append(k, headersInput[k]);
            }
        }
        if (paramsInput) {
            var params = new HttpParams();
            for (let k in paramsInput) {
                params.append(k, params[k]);
            }
        }

        return this._http.get(this.baseUrl + '/' + endPoint, { headers: headers, params: params });
    }
    post(endPoint: string, body?: any, headersInput?: any): Observable<any> {
        if (headersInput) {
            var headers = new HttpHeaders();
            for (let k in headersInput) {
                headers.append(k, headersInput[k]);
            }
        }

        return this._http.post(this.baseUrl + '/' + endPoint, body, { headers: headers });
    }


}
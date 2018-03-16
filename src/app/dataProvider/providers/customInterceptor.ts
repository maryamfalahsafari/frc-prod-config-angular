import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('I am interceptor');
        const changedReq = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        return next.handle(changedReq);
    }

}

//===================================MARYAM=======================

//local storage ro search kon va ya eenke yek service besaz ke tooye safe login , token migirad va eenja anra be resource ha midahad,
//Agar token valid nabood ya dobare generate kon va ya eenke be safe login bebar karbar ro.
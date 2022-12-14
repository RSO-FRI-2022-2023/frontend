import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Uporabnik} from '../models/uporabnik';
import { Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { Izdelek } from '../models/izdelek';
import { Cena } from '../models/cena';
import { environment } from '../../../environments/environment';

@Injectable()
export class Service {
    uporabnik : Uporabnik = new Uporabnik()

    private headers = new HttpHeaders({'Content-Type': 'application/json'});
    private izdelkiApiUrl = environment.izdelkiApiUrl;
    private priljubljeniIzdelkiApiUrl = environment.priljubljeniIzdelkiApiUrl;

    constructor(private http: HttpClient) {
    }

    getIzdelki(): Observable<Izdelek[]> {
        return this.http.get<Izdelek[]>(this.izdelkiApiUrl+'izdelki')
                        .pipe(catchError(this.handleError));
    }
    getIzdelek(id: number): Observable<Izdelek> {
        const url = `${this.izdelkiApiUrl}izdelki/${id}`;
        return this.http.get<Izdelek>(url)
                        .pipe(catchError(this.handleError));
    }
    getCeneIzdelka(id: number): Observable<Cena[]> {
        const url = `${this.izdelkiApiUrl}cene/izdelek/${id}`;
        return this.http.get<Cena[]>(url)
                        .pipe(catchError(this.handleError));
    }
    getNajblizjeTrgovine(lat: number, lng: number): Observable<Cena[]> {
        const url = `${this.izdelkiApiUrl}trgovine/najblizja/${lat}/${lng}`;
        return this.http.get<Cena[]>(url)
                        .pipe(catchError(this.handleError));
    }
    dodajMedPriljubljene(izdelek: Izdelek): Observable<any>{
        this.getUporabnik();
        var object= {
            "uporabnik":this.uporabnik,
            "izdelek":izdelek
        }
        const url = `${this.priljubljeniIzdelkiApiUrl}priljubljeni`;
        return this.http.post<any>(url, JSON.stringify(object), {headers: this.headers})
                .pipe(catchError(this.handleError));
    }

    getUporabnik(){
        this.uporabnik.id=1;
        this.uporabnik.firstname="David";
        this.uporabnik.lastname="Trafela";
    }
    getNajboljPriljubljene(){
        return this.http.get<any[]>(this.priljubljeniIzdelkiApiUrl+'priljubljeni/najbolj')
                        .pipe(catchError(this.handleError));
    }

    // delete(id: number): Observable<number> {
    //     const url = `${this.url}/${id}`;
    //     return this.http.delete<number>(url, {headers: this.headers})
    //                     .pipe(catchError(this.handleError));
    // }

    // create(uporabnik: Uporabnik): Observable<Uporabnik> {
    //     return this.http.post<Uporabnik>(this.url, JSON.stringify(uporabnik), {headers: this.headers})
    //                     .pipe(catchError(this.handleError));
    // }

    private handleError(error: any): Promise<any> {
        console.error('Prišlo je do napake', error);
        return Promise.reject(error.message || error);
    }
}


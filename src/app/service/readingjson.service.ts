import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map,tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReadingjsonService {

  private url:string = "/assets/json/dados_painel.json";

  constructor(
    private http: HttpClient
  ) { }

  getEmployees():Observable<any>{
    return this.http.get<any>(this.url).pipe(
      tap( res => res),
      tap( res => {
        res.lista.map((resEmployees: any) => {
          this.http.get<any>(resEmployees.url).pipe(
            map(
              res => res
            )
          )
        })
      })
    )
  }
}

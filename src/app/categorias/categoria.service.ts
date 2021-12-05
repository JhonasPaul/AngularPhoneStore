import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, map} from "rxjs";
import {Categoria} from "./categoria";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private urlEndPoint: string = 'http://localhost:8080/categoria';

  /*esto envia a la lista de categorias depues que si inserto una categoria*/
  private httpHeader = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http: HttpClient) { }

  getCategoria(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.urlEndPoint).pipe(
      map((response) => response as Categoria[]));
  }

  createCategoria(categoria:Categoria): Observable<Categoria>{
    return this.http.post<Categoria>(this.urlEndPoint,categoria, {headers: this.httpHeader});
  }
}


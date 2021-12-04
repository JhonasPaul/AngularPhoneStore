import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, map} from "rxjs";
import {Producto} from "./producto";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private urlEndPoint: string = 'http://localhost:8080/producto';
  constructor(private http: HttpClient) { }

  getProductos(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.urlEndPoint).pipe(
      map((response) => response as Producto[])
    )
  }
}

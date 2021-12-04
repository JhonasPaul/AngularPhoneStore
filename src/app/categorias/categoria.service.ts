import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, map} from "rxjs";
import {Categoria} from "./categoria";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private urlEndPoint: string = 'http://localhost:8080/categoria';
  constructor(private htt: HttpClient) { }

  getCategoria(): Observable<Categoria[]>{
    return this.htt.get<Categoria[]>(this.urlEndPoint).pipe(
      map((response) => response as Categoria[])
    );
  }
}




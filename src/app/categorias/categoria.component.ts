import { Component, OnInit } from '@angular/core';
import {Categoria} from "./categoria";
import {CategoriaService} from "./categoria.service";

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categoria: Categoria[] = [];
  constructor(private categoriaServicio: CategoriaService) { }

  ngOnInit(): void {
    this.categoriaServicio.getCategoria().subscribe(
      (categoria) =>this.categoria = categoria
    )
  }

}

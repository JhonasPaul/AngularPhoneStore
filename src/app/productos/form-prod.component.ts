import { Component, OnInit } from '@angular/core';
import {Producto} from "./producto";
import {Router} from "@angular/router";
import {ProductoService} from "./producto.service";

@Component({
  selector: 'app-form-prod',
  templateUrl: './form-prod.component.html',
  styleUrls: ['./form-prod.component.css']
})
export class FormProdComponent implements OnInit {

  public producto:Producto = new Producto()
  public titulo: string ="Creat Producto"
  constructor(private router: Router, private  servicio: ProductoService) { }

  ngOnInit(): void {
  }

  create(producto:Producto){
    this.servicio.createProducto(this.producto).subscribe(
      response => this.router.navigate(['/productos'])
    )
  }

}

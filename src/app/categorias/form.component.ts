import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Categoria} from "./categoria";
import { CategoriaService } from './categoria.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public categoria:Categoria = new Categoria()
  public titulo: string = "Crear Categoria"

  constructor(private router: Router, private service: CategoriaService) { }

  ngOnInit(): void {
  }


  create(categoria:Categoria){
    this.service.createCategoria(this.categoria).subscribe(
      response =>this.router.navigate(['/categorias'])
    )
    // .subscribe(data => {
    //   alert("se agrego con exito...!");
    //   this.router.navigate(["lista"]);
    // })
  }

}

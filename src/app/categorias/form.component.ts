import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Categoria} from "./categoria";
import { CategoriaService } from './categoria.service';
import swal from 'sweetalert2';


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

  create():void{
    this.service.createCategoria(this.categoria)
    .subscribe(categoria => {
        this.router.navigate(['/categorias'])
        swal('Nueva Categoria', `Categoria ${categoria.nombre} creado con exito`, 'success')
       
    }
    );
  }

}

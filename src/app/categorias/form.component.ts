import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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

  constructor(private router: Router, private service: CategoriaService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarCategoria()
  }
/*obtener*/
  cargarCategoria(): void{
    this.activeRoute.params.subscribe(params =>{
      let id = params['id']
      if (id){
        this.service.getCategoria(id).subscribe((categoria) => this.categoria = categoria)
      }
    })
  }

  create():void{
    this.service.createCategoria(this.categoria)
    .subscribe(json => {
        this.router.navigate(['/categorias'])
        swal('Nueva Categoria', `${json.mensaje}, ${json.categoria.nombre}`, 'success')
    }
    );
  }

  update():void{
    this.service.update(this.categoria)
      .subscribe(json =>{
      this.router.navigate(['/categorias'])
      swal('Categoria Actualizada', `${json.mensaje}, ${json.categoria.nombre}`, 'success')
    })
  }
}

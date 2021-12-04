import {Categoria} from "../categorias/categoria";

export class Producto {
  id_estado: number;
  estado: string;
  nombre: string;
  stock: number;
  fecha_Ingreso: Date;
  precio_Compra: number;
  url_imagen: string;
  categoria: Categoria[]
}

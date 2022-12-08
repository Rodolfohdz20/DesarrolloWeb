import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/Service/SerciesService';
import { Producto } from 'src/app/MODELOS/producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos = null;
  constructor(private SVC:ServicesService) {
   
   }

  ngOnInit(): void {
    this.mostrarTodos();
  }

  mostrarTodos(){
    this.SVC.getAll().subscribe((result:any)=>
    this.productos=result);
    console.log(this.productos);
  }

}

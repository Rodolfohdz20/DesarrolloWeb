import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/Service/ProductosService';
import { SetUpService } from 'src/Service/SetUpService';
import { Route } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  ProductList: any[]=[];
  SetUpList: any[]=[];
  constructor(private ProductSvc:ProductService, private SetUpSvc:SetUpService) {
    this.ProductSvc.getAll().subscribe((result:any)=>{
      this.ProductList=result;
      console.log(result)
    })
    this.SetUpSvc.getAll().subscribe((result:any)=>{
      this.SetUpList=result;
      console.log(result)
    })
   }

  ngOnInit(): void {
  }

}

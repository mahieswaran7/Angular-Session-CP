import { Component } from '@angular/core';
import {MyserviceService} from '../../shared/services/myservice.service'
import { response } from 'express';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrl: './product-dashboard.component.css'
})
export class ProductDashboardComponent {
myproducts:any;
constructor(private dbserve:MyserviceService){}
ngOnInit(){
  this.dbserve.getRecord("product").subscribe((response)=>{
    this.myproducts=response;
    console.log(response);
  }
)
}

}

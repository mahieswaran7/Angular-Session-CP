import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { MyserviceService } from '../../shared/services/myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {
    productData:any;

    constructor(private dbServ:MyserviceService,private routerObj:Router){}

    //constructor(){}

    ngOnInit(){
      this.productData=new FormGroup({
        pname:new FormControl("",[Validators.required,Validators.pattern('^[a-zA-Z ]{3,20}$')]),
        price:new FormControl("",[Validators.required,Validators.pattern('^[0-9 ]{6,20}$')]),
        company:new FormControl("",[Validators.required,Validators.pattern('^[a-zA-Z ]{3,20}$')])

      })
    }

    addData()
    {
        // console.log(this.productData.value);
        this.dbServ.addRecord("product",this.productData.value).subscribe(()=>{
          window.alert("Record added successfully");
          this.routerObj.navigate(['/maindashboard/productdash']);
        })

        }
}

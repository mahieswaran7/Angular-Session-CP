import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyserviceService } from '../../shared/services/myservice.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrl: './editproduct.component.css'
})
export class EditproductComponent {
     id:any;
     productData:any;
     oldData:any;
     

     constructor(private actRouteObj : ActivatedRoute,private dbServ:MyserviceService,private routerObj:Router){}

     ngOnInit(){
      this.actRouteObj.paramMap.subscribe((para)=>{
        this.id=para.get('id');
        this.dbServ.getSingleRecord("product",this.id).subscribe((res)=>{
         this.productData=res;
         console.log(this.productData);
        })
      })

      this.productData=new FormGroup({
        pname:new FormControl(this.oldData.pname,[Validators.pattern('^[a-zA-Z ]{3,20}$')]),
        price:new FormControl(this.oldData.price,[Validators.pattern('^[0-9 ]{6,20}$')]),
        company:new FormControl(this.oldData.company,[Validators.required,Validators.pattern('^[a-zA-Z ]{3,20}$')])


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

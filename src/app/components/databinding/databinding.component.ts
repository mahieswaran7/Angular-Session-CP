import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
 
  myName:string="Eswaran Arumugam";

  num1:number=200;
  num2:number=400;
  
  myData:any;


  greeting(){
    window.alert("Good Morning Friends")
  }


 


}

import { Component } from '@angular/core';

@Component({
  selector: 'app-mypipe',
  templateUrl: './mypipe.component.html',
  styleUrl: './mypipe.component.css'
})
export class MypipeComponent {

 msg:string="Hello friend,you all are my fantastic participant";

 emp:any={
  id:101,
  name:"eswaran",
  salary:85000
 }

 dateObj= new Date();

}

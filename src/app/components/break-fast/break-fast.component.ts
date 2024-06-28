import { Component } from '@angular/core';
import { MyserviceService } from '../../shared/services/myservice.service';

@Component({
  selector: 'app-break-fast',
  templateUrl: './break-fast.component.html',
  styleUrl: './break-fast.component.css'
})
export class BreakFastComponent {

 
 
  constructor(private myserObj:MyserviceService){}
  items:any;
    ngOnInit(){
     // this.items=this.myserObj.breakFast;
    }
     
  
}

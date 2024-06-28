import { Component } from '@angular/core';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrl: './list-task.component.css'
})
export class ListTaskComponent {
  items:string[]=[];
  selectedItem:string="";

  cars:string[]=["toyoto","honda","ford","bmw","audi"];
  bike:string[]=["yamaha","suzuki","rx-100","himalayan,","ducati"]

  showcars(){
    this.items=this.cars;
    this.selectedItem="";
  }
  showBikes(){
    this.items=this.bike;
    this.selectedItem="";
  }
  selectItem(items:string){
    this.selectedItem=items;
  }

}

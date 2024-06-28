import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {

  isCond1:boolean=true;
  isCond2:boolean=false;

  bikes:string[]=["bmw","honda","yamaha","ktm","royal","ducati"];

  mybike:string="ktm";

}

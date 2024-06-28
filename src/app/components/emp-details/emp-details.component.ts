import { Component } from '@angular/core';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrl: './emp-details.component.css'
})
export class EmpDetailsComponent {

  emp:any=[{id:101,name:"ajith",salary:90000,post:"manager",address:"chennai"},
  {id:102,name:"vijay",salary:95000,post:"admin",address:"mumbai"},
  {id:103,name:"surya",salary:96000,post:"ceo",address:"kerala"},
  {id:104,name:"karthi",salary:98000,post:"md",address:"pune"},
  {id:105,name:"arya",salary:99000,post:"hr",address:"bangalore"},
  ]

}

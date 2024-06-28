import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-rtf',
  templateUrl: './rtf.component.html',
  styleUrl: './rtf.component.css'
})
export class RtfComponent {

  userForm:any;

  ngOnInit(){
    this.userForm=new FormGroup({

      fname:new FormControl("",[Validators.required,Validators.pattern("^[A-Za-z] {3,20}$")]),
      password:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z0-9!@#$%^&*]{6,16}]$")]),
      email:new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$")]),
      term:new FormControl("",[Validators.requiredTrue])
    })
     
  }
     
  }



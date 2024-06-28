import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { EmpDetailsComponent } from './components/emp-details/emp-details.component';
import { AngFormComponent } from './components/ang-form/ang-form.component';
import { RtfComponent } from './components/rtf/rtf.component';
import { UtdfComponent } from './components/utdf/utdf.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { BreakFastComponent } from './components/break-fast/break-fast.component';
import { ProductDashboardComponent } from './crud/product-dashboard/product-dashboard.component';
import { MyangularMaterialComponent } from './components/myangular-material/myangular-material.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [

  
     
   {path:"maindashboard",component:MainDashboardComponent ,children:[


    {path:"databinding",component:DatabindingComponent},
    {path:"directive",component:DirectiveComponent},
    //3.redirect routing
   // {path:"",redirectTo:"databinding",pathMatch:"full"},
   {path:"emp",component:EmpDetailsComponent},
   {path:"breakFast",component:BreakFastComponent},
   {path:"crud",component:ProductDashboardComponent},
   {path:"AngularMaterial",component:MyangularMaterialComponent},
   {path:"LoginComponent",component:LoginComponent},
   
    //4.parameterized routing
    //  {path:"empdetails/:id",component:EmpDetailsComponent},
     //{path:"empdetails" ,component:EmpDetailsComponent},
    
     //5.child routing
  
     {path:"angform",component:AngFormComponent,children:[
      {path:"emp",component:EmpDetailsComponent},
      {path:"rtf",component:RtfComponent},
      {path:"utdf",component:UtdfComponent}
   
     ]}
    

   ]},
  //2.default routing
  // {path:"",component:DatabindingComponent},
  //1.naming routing
 
  //6.wildcard routing
  // {path:"***",component:PagenotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

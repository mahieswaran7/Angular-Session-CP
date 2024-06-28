import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MypipeComponent } from './components/mypipe/mypipe.component';
import { CubePipe } from './shared/custompipe/cube.pipe';
import { EmpDetailsComponent } from './components/emp-details/emp-details.component';
import { ListTaskComponent } from './components/list-task/list-task.component';
import { AngFormComponent } from './components/ang-form/ang-form.component';
import { RtfComponent } from './components/rtf/rtf.component';
import { UtdfComponent } from './components/utdf/utdf.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreakFastComponent } from './components/break-fast/break-fast.component';
import { ProductDashboardComponent } from './crud/product-dashboard/product-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { AddproductComponent } from './crud/addproduct/addproduct.component';
import { EditproductComponent } from './crud/editproduct/editproduct.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MyangularMaterialComponent } from './components/myangular-material/myangular-material.component';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    DirectiveComponent,
    MypipeComponent,
    CubePipe,
    EmpDetailsComponent,
    ListTaskComponent,
    AngFormComponent,
    RtfComponent,
    UtdfComponent,
    PagenotfoundComponent,
    MainDashboardComponent,
    NavComponent,
    FooterComponent,
    BreakFastComponent,
    ProductDashboardComponent,
    AddproductComponent,
    EditproductComponent,
    MyangularMaterialComponent,
    LoginComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { ListUpdateComponent } from './list/list-update/list-update.component';



@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent,
    ListUpdateComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

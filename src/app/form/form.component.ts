import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { tap, map } from 'rxjs/operators';
import { DataserviceService } from '../data.service';
import { Input } from '@angular/core';

import { Data } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  ///email: FormControl = new FormControl('',Validators.required);
  form = new FormGroup(
    {

      
      description: new FormControl('',[Validators.required]),
      amount: new FormControl('',[Validators.required]),
      
    }
  )
  
checkbox = false;
  
counter=0
  register(){
    
     if(this.form.valid){
     
          this.counter++
          this.DataserviceService.data.push(this.form.value)
      
    } 
  }
  data:any = ""
  constructor(private DataserviceService:DataserviceService) { 
    this.data = this.DataserviceService.data

  }

  ngOnInit(): void {
/*     this.form.valueChanges
    .pipe(
      tap(console.log)
    ).subscribe() */
  }

}



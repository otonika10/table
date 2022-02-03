import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataserviceService } from 'src/app/data.service';
@Component({
  selector: 'app-list-update',
  templateUrl: './list-update.component.html',
  styleUrls: ['./list-update.component.scss']
})
export class ListUpdateComponent implements OnInit {
  form = new FormGroup(
    {
      describtion: new FormControl(''),
      amount: new FormControl(''), 
    }
  )
  
checkbox = false;
  
counter=0
  update(){
          this.counter++
          for(let i in this.DataserviceService.data){ 
            
            this.DataserviceService.data[i].description=this.form.get('describtion')?.value
            this.DataserviceService.data[i].amount=this.form.get('amount')?.value
            //console.log(this.form.get('describtion')?.value);
            //console.log(this.DataserviceService.data[i].amount);
          }
      
  }
  setvalue(){
    for(let i in this.DataserviceService.data){ 
      this.form.controls['describtion'].setValue(this.DataserviceService.data[i].description)
      this.form.controls['amount'].setValue(this.DataserviceService.data[i].amount)
    }
  }

  constructor(private DataserviceService:DataserviceService) { 

  }
  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { DataserviceService } from '../data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  count: number = 0;
  current: 'add' | 'table' = 'table';
  cond: 'true' | 'false' = 'false'
  j:any = 0
  data: any = '';
  constructor(private DataserviceService: DataserviceService) {
    this.data = this.DataserviceService.data;
    
  }

  remove(ind: number) {
    if (
      confirm(
        'This action will remove a user with this Description: ' +
          this.data[ind].description +
          ' Are you sure?'
      )
    ) {
    }
    
    console.log('data:', this.data);
    const removedItem = this.data.splice(ind, 1);
    console.log('removed item:', removedItem);
    //console.log('new data:', this.data);
    
  }


  ngOnInit(): void {
    
    
    
  }
  form = new FormGroup(
    {
      describtion: new FormControl('',[Validators.required]),
      amount: new FormControl('',[Validators.required]), 
    }
  )
  
checkbox = false;
  
counter=0
  b(ind:number){
    this.current = 'add'
    this.j = ind
    this.counter++
    console.log(this.counter);
  }
deletedAmount:any
deletedDescribtion:any
  update(ind:number){
      if(this.form.valid){
          this.cond = 'true'
          
          for(let i in this.DataserviceService.data){ 
            var deletedAmount = this.DataserviceService.data[ind].amount
            this.deletedDescribtion = this.DataserviceService.data[ind].description
            this.DataserviceService.data[ind].description=this.form.get('describtion')?.value
            this.DataserviceService.data[ind].amount=this.form.get('amount')?.value
            //console.log(this.form.get('describtion')?.value);
            //console.log(this.DataserviceService.data[i].amount);
          }
        }else{
        
            alert("both values are mandatory to save update")
          
          }
      
  }
  undo(ind:number){
    //console.log(this.deletedAmount);
    //console.log(this.deletedDescribtion);
    this.update(ind)
    for(let i in this.DataserviceService.data){
      this.DataserviceService.data[ind].description=this.deletedDescribtion
      this.DataserviceService.data[ind].amount=this.deletedAmount
    }
    
  }
/*   setvalue(){
    for(let i in this.DataserviceService.data){ 
      this.form.controls['describtion'].setValue(this.DataserviceService.data[i].description)
      this.form.controls['amount'].setValue(this.DataserviceService.data[i].amount)
    }
  } */
  sumofAmount:number = 0
  sum(ind:number){
    
    var str
    for(let i in this.DataserviceService.data){
      var untillUpd = this.DataserviceService.data[i].amount
      
      str = String(this.DataserviceService.data[i].amount);
      this.sumofAmount+=parseInt(str);
      
    }

    console.log(this.sumofAmount);
    
    
  }

}

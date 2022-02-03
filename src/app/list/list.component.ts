import { Component, Input, OnInit } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { DataserviceService } from '../data.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  count:number= 0
  current:'reg' | 'list' = 'list'
  data:any = ""
  constructor(private DataserviceService:DataserviceService) { 
    this.data = this.DataserviceService.data
  }

   remove(description:string){
    if(confirm("This action will remove a user with this Description: "+description+" Are you sure?")){
    this.data = this.data.filter((d: {description: string; })=>d.description!=description);
 
    }
  } 
  
  ngOnInit(): void {
  }

}

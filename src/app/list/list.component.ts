import { Component, Input, OnInit } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { DataserviceService } from '../data.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  count: number = 0;
  current: 'add' | 'table' = 'table';
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

}

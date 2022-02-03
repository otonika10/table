import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  data:Pdata[]=[

  ]
  constructor() { }
}
interface Pdata{
  description:string
  amount:number

}
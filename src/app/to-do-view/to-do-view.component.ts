import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-to-do-view',
  templateUrl: './to-do-view.component.html',
  styleUrls: ['./to-do-view.component.css']
})
export class ToDoViewComponent {
  constructor(private api:ApiService){
    api.fetchTodo().subscribe(
      (respone)=>{
        this.data=respone;
      }
    )
  }


  data:any=[]
  
  
  
  

}

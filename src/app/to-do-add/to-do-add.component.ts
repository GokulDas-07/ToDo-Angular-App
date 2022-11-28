import { Component } from '@angular/core';

@Component({
  selector: 'app-to-do-add',
  templateUrl: './to-do-add.component.html',
  styleUrls: ['./to-do-add.component.css']
})
export class ToDoAddComponent {
  userid=""
  id=""
  title=""
  status=""

  readValues=()=>
  {
    let data:any={"userid":this.userid,"id":this.id,"title":this.title,"status":this.status}
    console.log(data)
  }


}

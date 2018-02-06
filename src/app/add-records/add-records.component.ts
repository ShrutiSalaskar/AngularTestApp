import { Component, OnInit } from '@angular/core';
import {HttpModule, Http,Response} from '@angular/http'; 
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-add-records',
  templateUrl: './add-records.component.html',
  styleUrls: ['./add-records.component.css']
})
export class AddRecordsComponent implements OnInit {

  ngOnInit() {
    
  }
  post_url: string = 'https://firestore.googleapis.com/v1beta1/angular-task-e7f39/myproject/databases/(default)/documents/tasks';
  data: any = {};
  constructor(public http: Http)
   { 
       console.log('Hello Fellow user');
      
       this.displayData();
   }
  AddData(task) 
  { 
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
  
  }

  displayData() {
    
  }
  

}

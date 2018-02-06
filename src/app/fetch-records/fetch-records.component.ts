import { Component, OnInit } from '@angular/core';
import {HttpModule, Http,Response} from '@angular/http'; 
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-fetch-records',
  templateUrl: './fetch-records.component.html',
  styleUrls: ['./fetch-records.component.css']
})
export class FetchRecordsComponent implements OnInit {



  ngOnInit() {

  }

  
  get_url: string = 'https://firestore.googleapis.com/v1beta1/projects/angular-task-e7f39/databases/(default)/documents/tasks';
  
  data: any = {};
  constructor(public http: Http)
   { 
       
       this.getData();
       this.displayData();
   }
  getData() 
  { 
   return this.http.get(this.get_url).map((res: Response) => { 
      return res.json(); 
  });
  }

  deleteData(name) {

  }

  displayData() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data;
    })
  }
}

import { Component } from '@angular/core';
import {HttpModule, Http,Response} from '@angular/http'; 
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    h3{
      color: dodgerblue;
    }`]
})
export class AppComponent {
  
  constructor(public http: Http)
   { }
 
}

import { Component,OnInit } from '@angular/core';
import {YouCouchService} from '../services/you-couch.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   constructor(
        private youCouchService : YouCouchService 
    ) { }
 public  title = 'youCouch';
 public youcouchdata:any;
myFunction():void {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

 ngOnInit(){
       this.youCouchService.getyouCouch().subscribe(data => {
              this.youcouchdata = data;
        });
   }
}

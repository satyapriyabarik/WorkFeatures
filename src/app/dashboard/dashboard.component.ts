import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import {YouCouchService} from '../../services/you-couch.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
public ydatafromparent:any;

  constructor( private youCouchService : YouCouchService ) { }
//@Input() ydatafromparent:any;
@Output()
sendAct: EventEmitter<any> = new EventEmitter<any>();
transval:string;
public sendval(value){
  this.transval = value.target.defaultValue;
  this.sendAct.emit(this.transval);
}
  ngOnInit() {
    this.youCouchService.getyouCouch().subscribe(data => {
           
            this.ydatafromparent = data;
        });
  }

}

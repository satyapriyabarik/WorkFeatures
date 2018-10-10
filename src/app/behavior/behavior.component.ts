import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import {ycDetails,YouCouchService} from '../../services/you-couch.service';
import { map,catchError } from 'rxjs/operators';
@Component({
  selector: 'app-behavior',
  templateUrl: './behavior.component.html',
  styleUrls: ['./behavior.component.css']
})
export class BehaviorComponent implements OnInit {
public techId: string;
public techName: string;
public isDevEnvironment: string;
ycd$: Observable<ycDetails>;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private youCouchService: YouCouchService) {
     this.techId = route.snapshot.params['technicianId'];
     this.techName = route.snapshot.params['technicianName'];
    // this.isDevEnvironment = route.snapshot.data[0]['isProd'];
   }
public paneval = 'hidepane';
public lftcont = 'col-lg-11 col-sm-11'
public iconval = 'glyphicon glyphicon-triangle-left' 
public changePane(){
  if(this.paneval == 'hidepane'){
    this.paneval ='showpane'
    this.iconval = 'glyphicon glyphicon-triangle-right'
    this.lftcont = 'col-lg-8 col-sm-8'
  }
  else{
    this.paneval ='hidepane'
    this.iconval = 'glyphicon glyphicon-triangle-left'
    this.lftcont = 'col-lg-11 col-sm-11'
  }
  
}
public allowDrop(ev) {
    ev.preventDefault();
  }

public drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

public drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
  public youCouchs:Array<any>;
 public  getYc(technicianId: number | string) {
    return this.youCouchService.getyouCouch().pipe(
      // (+) before `id` turns the string into a number
      map(technicianId => this.youCouchs.find(youCouch => youCouch.technicianId === +technicianId))
    );
  }
ngOnInit() {
    this.ycd$ = this.route.paramMap.pipe(
    switchMap((params: ParamMap) =>
    this.getYc(params.get('technicianId')))
    );
    
  }

}

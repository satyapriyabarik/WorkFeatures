import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { YouCouchService } from '../../services/you-couch.service'
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})

export class ReportsComponent implements OnInit {
    eform: FormGroup;
    submitted = false;
    submitmsg='Register here for sure sort opportunity !'
 constructor(private formBuilder: FormBuilder,private youCouchService:YouCouchService ) { }

  ngOnInit() {
    this.eform = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            cpassword: ['', [Validators.required]],
            countryName:['', [Validators.required]],
            stateName:['', [Validators.required]],
            cityName:['', [Validators.required]],
            typeCity:['', [Validators.required]],
            mobileNo:['', [Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("^[0-9]*$")]],
            fullAddress:['', [Validators.required]],
            zipCode:['', [Validators.required,Validators.minLength(6),Validators.maxLength(6),Validators.pattern("^[0-9]*$")]]
        },
        {
      validator:ReportsComponent.MatchPassword // your validation method
    }
        );

    this.getCountries()  
  }
get f() {
   return this.eform.controls; 
  }
  static MatchPassword(AC: AbstractControl) {
       let password = AC.get('password').value; // to get value in input tag
       let confirmPassword = AC.get('cpassword').value; // to get value in input tag
        if(password != confirmPassword) {
           // console.log('false');
            AC.get('cpassword').setErrors( {MatchPassword: true} )
        } else {
            //console.log('true');
            return null
        }
    }
  onSubmit() {
        this.submitted = true;
         // stop here if form is invalid
        if (this.eform.invalid) {
            return;
        }
      this.submitmsg="You Details has been Saved Sussesfully"
      
    }
    public cntries:Array<any>
    public getCountries(){
        this.youCouchService.getAllCountry().subscribe(data=>{this.cntries=data});
    }
   public states: Array<any>;
   public stdcode:any = "+91";
   
   public changeCountry(countr) {
   this.getCountries()
   this.states = this.cntries.find(data => data.name == countr).states;
    //console.log(countr)
    this.stdcode = this.cntries.find(data => data.name == countr).countryStdcode;
    if(countr==" "){

    }
  }
  public allcities: Array<any>;
  
  public changeStates(stas) {
    this.getCountries()
    this.allcities = this.states.find(data => data.name == stas).cities;
    //console.log(this.allcities)
  }
  public exceptionCity:boolean = false;
  public changeCity(cty){
      if(cty =="Others"){
         this.exceptionCity = true;
      }
      else{
          this.exceptionCity = false;
      }
     
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../test.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-testcomp',
  templateUrl: './testcomp.component.html',
  styleUrls: ['./testcomp.component.css']
})
export class TestcompComponent implements OnInit {
name="";
choice1=true;
choice11=true;
c1=true;
c2=false
p:number=1;
temps;
answer="";
report=[{first:"",second:"",third:""}];



  constructor(private router:Router,private test:TestService,private http:HttpClient) { 
    this.test.user()  //calls user func in service.
    .subscribe(
      data=>this.addName(data),  //data coming from service as response
      error=>this.router.navigate(['/register'])
    )
  }
  addName(data){
    this.name=data.fname;
  }
  

ngOnInit(): void {
    this.http.get('assets/tempdata.json').subscribe(data => {
       //console.log(data);
       this.temps = data;
    });
}


  ToNext(){
    console.log(this.report)
  }
  ToPrevious(){
    this.c2=false,this.c1=true;
  }

  radiochange(e:any){
    this.answer=e.target.value;
    console.log(this.answer);
  }


}

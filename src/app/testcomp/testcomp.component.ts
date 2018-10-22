import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../test.service';
@Component({
  selector: 'app-testcomp',
  templateUrl: './testcomp.component.html',
  styleUrls: ['./testcomp.component.css']
})
export class TestcompComponent implements OnInit {
name="";
  constructor(private router:Router,private test:TestService) { 
    this.test.user()  //calls user func in service.
    .subscribe(
      data=>this.addName(data),  //data coming from service as response
      error=>this.router.navigate(['/register'])
    )
  }
  addName(data){
    this.name=data.fname;

  }

  ngOnInit() {
  }

}

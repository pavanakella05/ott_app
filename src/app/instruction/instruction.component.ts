import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../test.service';
export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css']
})



export class InstructionComponent implements OnInit {
  choice="";
  username:String='';
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  constructor(private router:Router,private test:TestService) { 
    this.test.user()  //calls user func in service.
    .subscribe(
      data=>this.addName(data),  //data coming from service as response
      error=>this.router.navigate(['/register'])
    )
  }
  addName(data){
    this.username=data.fname;

  }

  ngOnInit() {
  }
  logout(){
    this.test.logout()
    .subscribe(
      data=>{console.log(data);this.router.navigate(['/login'])},
      error=>console.error(error)
    )
  }
  ToTest(){
    this.router.navigate(['/testcomp'])
  }

  choice1(){
    this.choice="Angular"
    
  }

}

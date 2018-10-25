import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform:FormGroup;
  constructor(private fb: FormBuilder,private test:TestService,private router:Router) {
    this.loginform=this.fb.group({
      email:['',[Validators.email,Validators.required]],
      password:['',Validators.required],
    });
    this.test.user()  //calls user func in service.
    .subscribe(
      data=>{console.log("error");this.router.navigate(['/instruction'])},  //data coming from service as response
      error=>this.router.navigate(['/login'])
    )
   }
   

  ngOnInit() {
  }

  submited(){
    if(!this.loginform.valid){
      console.log('Invalid');return;
    }
    

    // console.log(JSON.stringify(this.loginForm.value));
    this.test.login(JSON.stringify(this.loginform.value))
    .subscribe(
      data=>{console.log(data);this.router.navigate(['/instruction']);} ,
      error=>console.error(error)
    )
  }

}

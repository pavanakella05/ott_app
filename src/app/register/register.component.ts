import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { TestService } from '../test.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  createForm:FormGroup;
  hi="hii";
  minDate = new Date(1950, 0, 1);
  maxDate = new Date(2000, 0, 1);
  constructor(private fb: FormBuilder,private router:Router,private testservice:TestService) {
    this.createForm=this.fb.group({
      fname:['',[Validators.required,Validators.pattern("^[a-zA-Z \s]*$"),Validators.maxLength(15)]],
      lname:['',[Validators.required,Validators.pattern("^[a-zA-Z \s]*$"),Validators.maxLength(15)]],
      email:['',[Validators.email,Validators.required]],
      phone: ['',[Validators.required, Validators.pattern('^[0-9]{10}$')]],
      date1:['',Validators.required],
      Address:['',Validators.required],
      gender:['',Validators.required],
      password:['',Validators.required],
      cpassword:['',Validators.required],
    });

    this.testservice.user()  //calls user func in service.
    .subscribe(
      data=>{console.log("error");this.router.navigate(['/instruction'])},  //data coming from service as response
      error=>this.router.navigate(['/register'])
    )
   }

  ngOnInit() {
  }

  submited(){
    // this.router.navigate(['login']);
    if(!this.createForm.valid || (this.createForm.controls.password.value != this.createForm.controls.cpassword.value)){
      alert("please enter correct passwords")
      console.log('Invalid Form'); return;
    }
    console.log(this.createForm.value);

    this.testservice.register(JSON.stringify(this.createForm.value))
    .subscribe(
      data=> {console.log(data); this.router.navigate(['/login']);},
      error=>console.error(error)
    )

  }
  notify(){
    alert("done");
    this
  }
    
  }



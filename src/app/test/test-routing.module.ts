import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from '../register/register.component';
import {LoginComponent} from '../login/login.component';
import {InstructionComponent} from '../instruction/instruction.component';
import{TestcompComponent} from '../testcomp/testcomp.component';
const routes: Routes = [
  {path:'', redirectTo:'register', pathMatch:'full'},
  {path:'*',component:LoginComponent},  
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'instruction',component:InstructionComponent},
  {path:'testcomp',component:TestcompComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }

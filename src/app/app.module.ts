import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { InstructionComponent } from './instruction/instruction.component';
import { TestRoutingModule} from './test/test-routing.module';
import {TestService} from './test.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatRadioModule} from '@angular/material/radio';
import{MatToolbarModule,MatFormFieldModule,MatInputModule,MatOptionModule,MatSelectModule,MatIconModule
  ,MatButtonModule,MatNativeDateModule,MatDatepickerModule,MatCardModule,MatTableModule,MatDividerModule,MatSnackBarModule} from '@angular/material';
  import { CountdownModule } from 'ngx-countdown';
import { TestcompComponent } from './testcomp/testcomp.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    InstructionComponent,
    TestcompComponent,
  ],
  imports: [
    BrowserModule,
    TestRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    CountdownModule,
    MatDatepickerModule,MatNativeDateModule,
    MatRadioModule,MatFormFieldModule,MatInputModule,MatOptionModule,MatSelectModule,MatIconModule
    ,MatButtonModule,MatCardModule,MatTableModule,MatDividerModule,MatSnackBarModule,MatToolbarModule


  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }

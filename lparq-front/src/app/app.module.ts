import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppUserRegisterComponent } from './Users/app-user-register/app-user-register.component';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from "@angular/material/core";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { CabecalhoComponent } from './cabecalho/cabecalho.component';

// Imports from Angular Material 
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { UserService } from './Users/user.service';
import { AppUserListComponent } from './Users/app-user-list/app-user-list.component';
import { MatTableModule } from '@angular/material/table';
import { AppUserDeleteComponent } from './Users/app-user-delete/app-user-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    AppUserRegisterComponent,
    CabecalhoComponent,
    AppUserListComponent,
    AppUserDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTableModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

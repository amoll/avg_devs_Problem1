import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BookSeatComponent } from './book-seat/book-seat.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ModalComponent } from './modal/modal.component';
import { AllocationComponent } from './allocation/allocation.component';
import { AllocationDetailsComponent } from './allocation-details/allocation-details.component';

@NgModule({
  declarations: [
  
    AppComponent,
    LoginComponent,
    BookSeatComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
    ModalComponent,
    AllocationComponent,
    AllocationDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

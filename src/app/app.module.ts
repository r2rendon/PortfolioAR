import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Navbar } from './Components/Navbar/Navbar.component';
import { MainCard } from './Components/MainCard/MainCard.component';
import { ProjectCards } from './Components/ProjectCards/ProjectCards.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './routes';
import { ToastrModule } from 'ngx-toastr';
import { Contact } from './Components/Contact/Contact.component';

@NgModule({
  declarations: [AppComponent, Navbar, MainCard, ProjectCards, Contact],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

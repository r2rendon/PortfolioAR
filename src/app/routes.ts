import { Routes } from '@angular/router';
import { MainCard } from './Components/MainCard/MainCard.component';
import { Contact } from './Components/Contact/Contact.component';

export const AppRoutes: Routes = [
  { path: 'home', component: MainCard },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

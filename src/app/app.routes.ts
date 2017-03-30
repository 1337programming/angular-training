import { Routes } from '@angular/router';
import { StatementsComponent } from './statements/statements.component';
import { HomeComponent } from './components/home/home.component';

export const APP_ROUTES: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'statements', component: StatementsComponent
  }
];

import { Routes } from '@angular/router';
import { StatementsComponent } from './statements/statements.component';
import { HomeComponent } from './components/home/home.component';
import { environment } from '../environments/environment';

export const APP_ROUTES: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'statements', loadChildren: './statements/statements.module#StatementsModule'
  }
];

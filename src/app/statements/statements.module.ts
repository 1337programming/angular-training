import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatementsComponent } from './statements.component';
import { RouterModule } from '@angular/router';
import { STATEMENT_ROUTES } from './statements.routes';
import { StatementService } from './services/statement.service';
import { StatementInfoComponent } from './components/statement-info/statement-info.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(STATEMENT_ROUTES)
  ],
  declarations: [StatementsComponent, StatementInfoComponent],
  providers: [StatementService]
})
export class StatementsModule { }

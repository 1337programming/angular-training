import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DataHandlerService } from './services/data-handler.service';
import { ProfileAccountInfoComponent } from './components/profile-account-info/profile-account-info.component';
import { SampleStateService } from './services/sample-state.service';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { StatementsModule } from './statements/statements.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProfileAccountInfoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [
    DataHandlerService,
    SampleStateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

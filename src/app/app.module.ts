import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DataHandlerService } from './services/data-handler.service';
import { ProfileAccountInfoComponent } from './components/profile-account-info/profile-account-info.component';
import { SampleStateService } from './services/sample-state.service';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProfileAccountInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    DataHandlerService,
    SampleStateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

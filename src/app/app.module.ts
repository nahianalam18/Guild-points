import { ApEntryPageService } from './components/ap_entry_page/ap-entry-page.services';
import { ApEntryPageComponent } from './components/ap_entry_page/ap-entry-page.component';
import { LandingePageService } from './components/landing_page/landinge-page.services';
import { LandingPageComponent } from './components/landing_page/landing-page.component';
import { NgModule } from '@angular/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ApEntryPageComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTableModule,
  ],
  providers: [ApEntryPageService,LandingePageService,],
  bootstrap: [AppComponent]
})
export class AppModule { }

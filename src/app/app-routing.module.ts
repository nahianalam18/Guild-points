import { LandingPageComponent } from './components/landing_page/landing-page.component';
import { ApEntryPageComponent } from './components/ap_entry_page/ap-entry-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path: 'view-gps', component: LandingPageComponent},{path: 'ap-entry', component: ApEntryPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

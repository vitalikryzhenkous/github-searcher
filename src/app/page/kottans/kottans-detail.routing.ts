import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KottansDetailComponent } from './kottans-detail.component';

const routes: Routes = [
  { path: '', component: KottansDetailComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

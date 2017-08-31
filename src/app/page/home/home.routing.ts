import { HomeComponent } from './home.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

import { NoContentComponent } from './nocontent.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: NoContentComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

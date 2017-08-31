import { HomeComponent } from './page/home/home.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '',     loadChildren: 'app/page/home/home.module#HomeModule' },
  { path: 'kottans', loadChildren: 'app/page/kottans/kottans-detail.module#KottansModule'},
  { path: '**', redirectTo: '/404' },
  { path: '404', loadChildren: 'app/page/404/nocontent.module#NoContentModule'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

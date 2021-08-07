import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrontStoreComponent } from './components/front-store/front-store.component';

const routes: Routes = [
  { path: '/', component: FrontStoreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

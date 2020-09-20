import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

const components = [
  MatToolbarModule
]

@NgModule({
  imports: [components],
  exports: [components]
})
export class MaterialModule { }

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SarhanFormComponent } from '../../features';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [SarhanFormComponent],
  exports: [SarhanFormComponent],
  providers: []
})
export class HomePageModule {
}


import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { SarhanFormComponent, ArticlesComponent } from '../../features';
import { ArticleEffects } from '../../models';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, EffectsModule.forRoot([ArticleEffects])],
  declarations: [SarhanFormComponent, ArticlesComponent],
  exports: [SarhanFormComponent, ArticlesComponent],
  providers: []
})
export class HomePageModule {
}


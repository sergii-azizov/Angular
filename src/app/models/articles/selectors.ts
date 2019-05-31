import { createSelector, createFeatureSelector } from '@ngrx/store';

import { AppStore } from '../../interfaces';
import { HttpArticles } from './interfaces';

const getArticles = createFeatureSelector<AppStore, HttpArticles>('articles');

export const articlesSelector = createSelector(
  getArticles,
  (state: HttpArticles) => state.data
);

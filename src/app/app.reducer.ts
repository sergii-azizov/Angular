import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { AppStore } from './interfaces';
import { articlesReducer } from './models';

export const appReducers: ActionReducerMap<AppStore, any> = {
  router: routerReducer,
  articles: articlesReducer
};

import { RouterReducerState } from '@ngrx/router-store';

import { HttpArticles } from '../models';

export interface AppStore {
  router: RouterReducerState;
  articles?: HttpArticles;
}

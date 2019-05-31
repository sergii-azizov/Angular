import { Action } from '@ngrx/store';
import { Articles } from './interfaces';

export enum ArticlesActions {
  GetArticles = 'ARTICLES/LOAD',
  GetArticlesSuccess = 'ARTICLES/LOAD/SUCCESS',
  GetArticlesFailure = 'ARTICLES/LOAD/FAILURE',
  AddArticle = 'ARTICLES/ADD',
}

export class GetArticles implements Action {
  public readonly type = ArticlesActions.GetArticles;
}

export class GetArticlesSuccess implements Action {
  public readonly type = ArticlesActions.GetArticlesSuccess;
  constructor(public payload: Articles | {}) {}
}

export class GetArticlesFailure implements Action {
  public readonly type = ArticlesActions.GetArticlesFailure;
  constructor(public payload: any) {}
}

import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';

import { ArticlesActions, GetArticlesFailure, GetArticlesSuccess } from './actions';
import { ArticleService } from './service';

@Injectable()
export class ArticleEffects {
  constructor(private actions$: Actions, private articleService: ArticleService) {
  }

  @Effect()
  loadArticles$ = this.actions$.pipe(
    ofType(ArticlesActions.GetArticles),
    switchMap(() => (
      this.articleService.getArticles().pipe(
        map(articles => new GetArticlesSuccess(articles)),
        catchError(error => of(new GetArticlesFailure(error)))
      )
    ))
  );
}

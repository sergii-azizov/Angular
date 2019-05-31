import { ArticlesActions } from './actions';
import { getInitialHttpState } from '../../helpers';
import { Http, Action } from '../../interfaces';
import { HttpArticles } from './interfaces';

export const articlesReducer = (state: Http = getInitialHttpState({ data: {} }), action: Action): HttpArticles  => {
  switch (action.type) {
    case ArticlesActions.GetArticles:
      return {
        ...state,
        loading: true
      };
    case ArticlesActions.GetArticlesSuccess:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.payload
      };
    case ArticlesActions.GetArticlesFailure:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

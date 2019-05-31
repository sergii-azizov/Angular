import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { AppStore } from '../../interfaces';
import { articlesSelector, GetArticles } from '../../models';

@Component({
  selector: 'Articles',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class ArticlesComponent {
  constructor(private store: Store<AppStore>) {
    this.store.pipe(select(articlesSelector)).subscribe();
  }

  getArticles() {
    this.store.dispatch(new GetArticles());
  }
}

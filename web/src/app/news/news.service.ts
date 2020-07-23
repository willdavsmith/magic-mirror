import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/env';
import { Article } from '../types/Article';
import { Observable, from, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getHeadlines(): Observable<Article[]> {
    return this.http.get<NewsAPIResponse>(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${environment.NEWS_API_KEY}`
    ).pipe(
      map(res => res.articles)
    );
  }
}

interface NewsAPIResponse {
  articles: Article[];
}

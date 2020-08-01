import { Component, OnInit, OnDestroy } from '@angular/core';
import NewsService from './news.service';
import { Article } from 'src/app/types/types';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, OnDestroy {

  private articles: Article[];
  private headlineTimer;
  private articlesTimer;
  public newsTitle = '';
  public newsDescription = '';
  private current = 0;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.createHeadline();
    this.articlesTimer = setInterval(() => {
      this.createHeadline();
    }, 60 * 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.headlineTimer);
    clearInterval(this.articlesTimer);
  }

  createHeadline(): void {
    clearInterval(this.headlineTimer);
    this.getHeadlines().then((data: Article[]) => {
      this.articles = data;
      this.setHeadline();
      this.headlineTimer = setInterval(() => {
        this.setHeadline();
      }, 10 * 1000);
    }).catch((err: Error) => {
      console.log(err);
    });
  }

  setHeadline(): void {
    if (this.current >= this.articles.length) {
      this.current = 0;
    }
    this.newsTitle = this.articles[this.current].title;
    this.newsDescription = this.articles[this.current].description;
    this.current += 1;
  }

  getHeadlines(): Promise<Article[]> {
    return new Promise<Article[]>((resolve, reject) => {
      this.newsService.getHeadlines().subscribe({
        next(data: Article[]) {
          resolve(data);
        },
        error(err: Error) {
          reject(err);
        }
      });
    });
  }
}

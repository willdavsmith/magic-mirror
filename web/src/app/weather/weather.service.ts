import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/env';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getCurrentWeather() {
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?id=${environment.CITY_ID}&APIKEY=${environment.WEATHER_API_KEY}`);
  }
}

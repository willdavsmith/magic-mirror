import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/env';
import { WeatherAPIResponse } from 'src/app/types/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class WeatherService {

  constructor(private http: HttpClient) { }

  getCurrentWeather(): Observable<WeatherAPIResponse> {
    return this.http.get<WeatherAPIResponse>(
      `http://api.openweathermap.org/data/2.5/weather?id=${environment.CITY_ID}&APIKEY=${environment.WEATHER_API_KEY}`
    );
  }
}

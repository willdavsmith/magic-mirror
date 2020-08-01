import { Component, OnInit, OnDestroy } from '@angular/core';
import WeatherService from './weather.service';
import { WeatherAPIResponse, Weather } from 'src/app/types/types';
import { weatherIcons } from './icons';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  private weather: Weather;
  private weatherTimer;
  public iconPath: string;
  public temperature: number;
  public city: string;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getCurrentWeather();
    this.weatherTimer = setInterval(() => {
      this.getCurrentWeather();
    }, 60 * 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.weatherTimer);
  }

  getCurrentWeather(): void {
    this.weatherService.getCurrentWeather().subscribe((data: WeatherAPIResponse) => {
      this.city = data.name;
      this.temperature = this.kelvinToFahrenheit(data.main.temp);
      this.weather = data.weather[0];
      const code = this.weather.id;
      let icon = weatherIcons[code].icon;
      if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
        icon = "day-" + icon;
      }
      this.iconPath = `assets/svg/wi-${icon}.svg`;
      console.log(this.iconPath);
    });
  }

  kelvinToFahrenheit(kelvin: number): number {
    return Math.round(((kelvin-273.15)*1.8)+32);
  }
}

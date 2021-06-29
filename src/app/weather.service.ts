import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  city: string = '';
  country: string = '';

  constructor(private weather: HttpClient , private daily: HttpClient, private hourly: HttpClient) { }

  getWeather(city:string, country:string){
    return this.weather.get(`https://api.weatherbit.io/v2.0/current?city=${city}&country=${country}&key=013bdb10ad584af59d0ea654c3f85710`);
  }
 
  getDaily(city: string, country:string) {
    return this.daily.get(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&country=${country}&days=15&key=013bdb10ad584af59d0ea654c3f85710`)
  }

  getHourly(city: string, country:string) {
    return this.hourly.get(`https://api.weatherbit.io/v2.0/forecast/hourly?city=${city}&country=${country}&hourly&key=013bdb10ad584af59d0ea654c3f85710&hours=24`)
  }
  
}
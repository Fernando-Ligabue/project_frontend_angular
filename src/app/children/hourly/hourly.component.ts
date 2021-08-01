import { WeatherService } from './../../weather.service';
import { LocationService } from './../../location.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hourly',
  templateUrl: './hourly.component.html',
  styleUrls: ['./hourly.component.css'],
})
export class HourlyComponent implements OnInit {
  geoLocation: any = {};
  weather: any = [];
  iconImg: string = '';

  constructor(
    private _weather: WeatherService,
    private _geoLocation: LocationService

  ) { }

  ngOnInit(): void {
    const savedCoords = JSON.parse(localStorage.getItem('userSavedCoords') || '""');

    if (savedCoords) {
      this._weather.getHourly(savedCoords.lat, savedCoords.lon)
        .subscribe((result: any) => {
          this._weather = result['data'];
          let data = result.hourly;
          for (let i = 0; i < data.length; i++) {
            let nextDate = new Date();
            nextDate.setHours(nextDate.getHours() + i);
            data[i].hour = nextDate;
          }
          this.weather = data;
        });
    } else {
      this._geoLocation.getCity().subscribe((data: any) => {
        this.geoLocation = data;
        this._weather
          .getHourly(this.geoLocation.lat, this.geoLocation.lon)
          .subscribe((result: any) => {
            let data = result.hourly;
            for (let i = 0; i < data.length; i++) {
              let nextDate = new Date();
              nextDate.setHours(nextDate.getHours() + i);
              data[i].hour = nextDate;
            }
            this.weather = data;
          });
      });
    }
  }
}

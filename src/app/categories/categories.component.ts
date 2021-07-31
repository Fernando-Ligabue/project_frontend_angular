import { Component, OnInit } from '@angular/core';
import { Category } from '../interfaces/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[] = [
    {
      url: '/videos',
      label: 'Trending Now',
    },
    {
      url: '/videos',
      label: 'Field Coverage',
    },
    {
      url: '/videos',
      label: 'Expert forecasts',
    },
    {
      url: '/videos',
      label: 'Global',
    },
    {
      url: '/videos',
      label: 'Accuweather ready',
    },
    {
      url: '/videos',
      label: 'Space',
    },
    {
      url: '/videos',
      label: 'Animals',
    },
    {
      url: '/videos',
      label: 'Health',
    },
    {
      url: '/videos',
      label: 'Science',
    },
    {
      url: '/videos',
      label: 'Accusports',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

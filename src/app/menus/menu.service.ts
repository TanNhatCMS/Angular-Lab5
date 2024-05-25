import { Injectable } from '@angular/core';
import { Menu } from './menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menus: Menu[] = [
    { name: 'Trang chủ', url: '/index.html' },
    { name: 'Bài 1', url: '/Lab5_1.html' },
    { name: 'Bài 2', url: '/Lab5_2.html' },
  ];

  constructor() { }

  getMenus(): Menu[] {
    return this.menus;
  }

}

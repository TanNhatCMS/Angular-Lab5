import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {Menu} from "../menus/menu";
import {MenuService} from "../menus/menu.service";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  menus: Menu[] | undefined;
  title: string = "Lab5";

  constructor(private btService: MenuService) { }

  ngOnInit(): void {
    this.menus = this.btService.getMenus().slice();
    this.menus.shift();
  }

}

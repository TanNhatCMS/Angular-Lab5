import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {Menu} from "../menus/menu";
import {MenuService} from "../menus/menu.service";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {
  menus: Menu[] | undefined;

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menus = this.menuService.getMenus();
  }

}

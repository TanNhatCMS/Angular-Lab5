import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {Bai1Component} from "./bai1/bai1.component";
import {Bai2Component} from "./bai2/bai2.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule,  Bai1Component, Bai2Component],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lab5';
  namht = new Date().getFullYear();
  searching: string = ''
  bai: number = 1
  num: number = 0
  item(value: any) {
    this.num = value
    console.log(value)
  }
  constructor() {}
}

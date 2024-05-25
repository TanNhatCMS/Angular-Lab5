import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {RouterLink, RouterOutlet} from "@angular/router";
import {itemModel} from "../../utils/itemModel";

@Component({
  selector: 'app-bai1',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterOutlet],
  templateUrl: './bai1.component.html',
  styleUrls: ['./bai1.component.css']
})


export class Bai1Component {

  products: itemModel[] = [
    {
      id: 1, title: 'Macbook Pro', price: 25000000, qty: 1, image:
        './assets/images/1.jpg'
    },
    {
      id: 2, title: 'Asus ROG Gaming', price: 17000000, qty: 1, image:
        './assets/images/2.jpg'
    },
    {
      id: 3, title: 'Amazon Kindle', price: 15000000, qty: 1, image:
        './assets/images/3.jpg'
    },
    {
      id: 4, title: 'Another Product', price: 18000000, qty: 1, image:
        './assets/images/4.jpg'
    },
  ]
  cartItems: itemModel[] = []

  addToCart(item: any) {
// Add the item or increase qty
    let itemInCart = this.cartItems.filter(item => item.id === item.id);
    let isItemInCart = itemInCart.length > 0;
    if (!isItemInCart) {
      this.cartItems.push({
        id: item.id, title: item.title,
        price: item.price, qty: item.qty, image: item.image
      })
    } else {
      itemInCart[0].qty += item.qty;
    }
    item.qty = 1;
    console.log(this.cartItems)
    console.log(this.products)
  }

  removeItem(index: any) {
    this.cartItems.splice(index, 1);
  }

  Total() {
    let sum = 0;
    this.cartItems.forEach(item => sum += item.qty * item.price)
    return sum
  }

  totalItems() {
    let sum = 0;
    this.cartItems.forEach(item => sum += item.qty)
    return sum
  }
}

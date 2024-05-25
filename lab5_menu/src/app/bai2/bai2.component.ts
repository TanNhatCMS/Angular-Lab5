import {Component, Input, Output, EventEmitter} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-bai2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bai2.component.html',
  styleUrls: ['./bai2.component.css']
})


export class Bai2Component {

  products: any[] = [
    {
      id: 1, name: "Đồng hồ thụy sỹ", image: "assets/images/1001.jpg",
      price: 1200,
      incart: 1,
      total: 0
    },
    {
      id: 2,
      name: "Dell Star X",
      image: "assets/images/1003.jpg",
      price: 700,
      incart: 1,
      total: 0
    },
    {
      id: 3,
      name: "Sony Vaio 2017",
      image: "assets/images/1004.jpg",
      price: 1700,
      incart: 1,
      total: 0
    },
    {
      id: 4,
      name: "Máy ảnh Canon",
      image: "assets/images/1005.jpg",
      price: 300,
      incart: 1,
      total: 0
    },
    {
      id: 5,
      name: "Vòng cưới France",
      image: "assets/images/1009.jpg",
      price: 7000,
      incart: 1,
      total: 0
    },
    {
      id: 6,
      name: "Motorola thế hệ 5",
      image: "assets/images/1011.jpg",
      price: 900,
      incart: 1,
      total: 0
    },
    {
      id: 7,
      name: "Mũ cao bồi Mexico",
      image: "assets/images/1014.jpg",
      price: 100,
      incart: 1,
      total: 0
    },
    {
      id: 8,
      name: "Nước hoa Korea",
      image: "assets/images/1023.jpg",
      price: 600,
      incart: 1,
      total: 0
    }
  ]
  cart: any[] = []
  @Input() searching: string = '';
  @Output() count = new EventEmitter<number>();
  itemcount1() {
    var sum = 0;
    for (var i = 0; i < this.cart.length; i++) {
      sum += this.cart[i].incart;
    }
    this.count.emit(sum)
  }
  addCart(item: any) {
    let i;
    let flag = false;
    if (this.cart.length == 0) {
      flag = false;
    } else {
      for (i = 0; i < this.cart.length; i++) {
        if (this.cart[i].id == item.id) {
          flag = true;
        }
      }
    }
    if (!flag) {
      this.cart.push({id: item.id, name: item.name, price: item.price, incarts: item.incart, image: item.image,total: item.total});
    } else {
      for (i = 0; i < this.cart.length; i++) {
        if (this.cart[i].id == item.id) {
          this.cart[i].incarts++;
        }
      }
    }
  }

  filterName() {
    if (this.searching == null) {
      return this.products;
    } else {
      if (this.searching)//có
      {
        console.log(this.searching);
        console.log(this.searching.toUpperCase().split(' '));
        return this.products.filter((item) => {
          return (this.searching).toUpperCase().split(' ').every(v =>
            item.name.toUpperCase().includes(v));
        })
      } else {
        return this.products;
      }
    }
  }

  decrement(index: number) {
    if (this.cart[index].incarts > 1) {
      this.cart[index].incarts--;
    }
  }

  Remove(index: number) {
    this.cart.splice(index, 1);
  }

  itemcount() {
    let sum = 0
    this.cart.forEach(item => sum += item.incarts)
    return sum
  }

  sumTotal() {
    let sum = 0;
    this.cart.forEach(item => sum += item.price * item.incarts)
    return sum
  }

  increment(index: number) {
    this.cart[index].incarts++;
  }

  DeleteAll() {
    this.cart = []
  }
}

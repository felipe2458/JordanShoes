import { Component, Input } from '@angular/core';
import { ProductsComponent } from "./components/products/products.component";
import { Products } from '../../interfaces/interface';

@Component({
  selector: 'app-home',
  imports: [ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products: Products[] = [
    {
      name: "Air Jordan 1 Mid Dutch Green",
      price: "1.199,99",
      url_image: "/images/jordan1.png"
    },
    {
      name: "Air Jordan 1 High Zoom CMFT Tropical Twist",
      price: "1.049,00",
      url_image: "/images/jordan2.png"
    },
    {
      name: "Air Jordan 1 Mid Dutch Green",
      price: "1.350,00",
      url_image: "/images/jordan3.png"
    },
    {
      name: 'Air Jordan 1 Mid GS "Light Smoke Grey"',
      price: "1.585,00",
      url_image: "/images/jordan4.png"
    },
    {
      name: "Air Jordan 1 Mid SE Bright Citrus",
      price: "949,99",
      url_image: "/images/jordan5.png"
    },
    {
      name: "Air Jordan 1 Mid Grey Camo",
      price: "999,99",
      url_image: "/images/jordan6.png"
    }
  ];
}

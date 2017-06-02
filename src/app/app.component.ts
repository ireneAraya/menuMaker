import { Component } from '@angular/core';
import { Category } from '../app/models/category';
import { Dish } from '../app/models/dish'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories = [
    new Category('Breakfast', [new Dish('Gallo Pinto', 2000, 'Arroz y Frijoles')]),
    new Category('Lunch', [new Dish('Casado', 4000, 'con carne en salsa')]),
    new Category('Drinks', [new Dish('Fresa', 500, 'bien frío')])
  ];
}

import { Component } from '@angular/core';
import { Category } from '../app/models/category';
import { Dish } from '../app/models/dish'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*
  categories = [
    new Category('Breakfast', [new Dish('Gallo Pinto', 2000, 'Arroz y Frijoles')]),
    new Category('Lunch', [new Dish('Casado', 4000, 'con carne en salsa')]),
    new Category('Drinks', [new Dish('Fresa', 500, 'bien frío')])
  ];
  */

  //En no estabas pasando el ultimo parametro al constructor del Dish
  categories = [
    new Category('breakfast', [new Dish('Gallo Pinto', 2000, 'Arroz y Frijoles', 'breakfast')]),
    new Category('lunch', [new Dish('Casado', 4000, 'con carne en salsa', 'lunch')]),
    new Category('drinks', [new Dish('Fresa', 500, 'bien frío', 'drinks')])
  ];

  //Agregue el metodo para recibir el dish y agregarlo a la lista de la categoria
  receiveDish(dish: Dish) {
    console.log(dish);
    for (var category of this.categories) {
      console.log(category.getTitle());
      console.log(dish.getCategoryName());
      if (category.getTitle() == dish.getCategoryName()) {
        category.getDishes().push(dish);
      }
    }
  }
}

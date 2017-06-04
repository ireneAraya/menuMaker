import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Dish } from '../../models/dish'

@Component({
  selector: 'app-new-dish-form',
  templateUrl: './new-dish-form.component.html',
  styleUrls: ['./new-dish-form.component.css']
})
export class NewDishFormComponent implements OnInit {

  @Input() categories;

  @Output() sendDish = new EventEmitter();
  name = 'name';
  price = 0;
  description = 'description';
  categoryName = 'categoryname';

  constructor() { }

  ngOnInit() { }

  onAdd() {
    let dish = new Dish(this.name, this.price, this.description, this.categoryName);
    this.sendDish.emit(dish);
    console.log(dish);
    //Agrege esta parte para resetear los valores de os textos por ahora.
    this.name = 'name';
    this.price = 0;
    this.description = 'description';
  }

  //Agregue los metodos para menejar los eventos
  //cuando se hace un cambio en cada elemento
  //Al hacer esto tube que hacer los cambios en el html.
  onNameChange(event) {
    this.name = event.target.value;
  }

  onPriceChange(event) {
    this.price = Number(event.target.value);
  }

  onDescriptionChange(event) {
    this.description = event.target.value;
  }

  onCategoryChange(event) {
    this.categoryName = event.target.value;
  }

}

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
    this.sendDish.emit(new Dish(this.name, this.price, this.description, this.categoryName));
  }

}

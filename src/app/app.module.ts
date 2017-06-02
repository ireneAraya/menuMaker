import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/components/header/header.component';
import { NewDishFormComponent } from '../app/components/new-dish-form/new-dish-form.component';
import { CategoriesComponent } from '../app/components/categories/categories.component';
import { CategoryComponent } from '../app/components/category/category.component';
import { DishComponent } from '../app/components/dish/dish.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewDishFormComponent,
    CategoriesComponent,
    CategoryComponent,
    DishComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

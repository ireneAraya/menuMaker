export class Category {

    private title: string;
    private dishes = [];

    constructor(title: string, dishes) {
        this.setTitle(title);
        this.setDishes(dishes);
    }

    getTitle() { return this.title; }
    getDishes() { return this.dishes; }
    setTitle(value) { this.title = value; }
    setDishes(value) { this.dishes = value; }
}
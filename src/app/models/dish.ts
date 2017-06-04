export class Dish {

    private name: string;
    private price: number;
    private description: string;
    private categoryName: string;

    constructor(name: string, price: number, description: string, categoryName: string) {
        this.setName(name);
        this.setPrice(price);
        this.setDescription(description);
        this.setCategoryName(categoryName);
    }

    getName() { return this.name; }
    getPrice() { return this.price; }
    getDescription() { return this.description; }
    //Tenias retornando la variable equivocada.
    // getCategoryName() { return this.description; }
    getCategoryName() { return this.categoryName; }
    setName(value) { this.name = value; }
    setPrice(value) { this.price = value; }
    setDescription(value) { this.description = value; }
    setCategoryName(value) { this.categoryName = value; }
}
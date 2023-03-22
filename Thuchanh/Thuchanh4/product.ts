class Product {
    name : string;
    price : number
    amount : number;
    constructor(name: string, price: number , amount: number){
        this.name = name;
        this.price = price;  
        this.amount = amount;      
    }
    addProduct (extraQuantity: number){
        this.amount += extraQuantity;
    
    }
}
class Customer {
    name : string;
    quantityOfProduct : number
    constructor(name: string, quatityOfProduct: number){
        this.name = name;
        this.quantityOfProduct = quatityOfProduct;
    }
    buyProduct(product: Product, quantity: number){
        if(product.amount > quantity){
            product.amount -= quantity;
            this.quantityOfProduct += quantity;
        }else{
            console.log('Out of product');
            return;
            
        }
    }
}
let shirt = new Product('shirt', 3000, 20)
shirt.addProduct(10);
console.log(shirt.amount, 'Amount product');

let customer1 = new Customer('cusyomer1', 0)
customer1.buyProduct(shirt, 5);
console.log(customer1.quantityOfProduct, 'Quantity of product customer');
console.log(shirt.amount, 'Amount product after customer buy');




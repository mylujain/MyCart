import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/Order';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProducts: any[] = [];

  constructor(private http: HttpClient) { }

  getCartProducts() {
    return this.cartProducts;
  }

  addToCart(product: any, amount: any) {
    //TODO: Add item to the cart

//check if there exist product
if(this.cartProducts.find(pr =>pr.name===product.name)    ){
  this.cartProducts.find(pr =>pr.name===product.name).amount +=  parseInt(amount) ;
}
else{
  this.cartProducts.push(product);
}
alert('Added to cart successfully!');
}


  clearCart() {
    this.cartProducts = [];
    return this.cartProducts;
  }

  updateCart(cart: any) {
    this.cartProducts = cart;

    return this.cartProducts;
  }

  submitOrder(order: any): Observable<any> {
  //Submit the order information the API
  return this.http.post<Order>( 'http://localhost:4200/orders/', order, {
    headers: { Authorization: 'Basic dWRhY2l0eTpwYXNzd29yZA==' },
  });
  }
}

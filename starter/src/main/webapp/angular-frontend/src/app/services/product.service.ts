import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
  //TODO: Fetch the product list from the API
  return this.http.get<Product[]>('http://localhost:8080/api/'+'all', {
    headers: { Authorization: 'Basic dWRhY2l0eTpwYXNzd29yZA==' },
  });
  }
  getProductById(id: number): Observable<Product> {
    //TODO: Fetch the product list from the API
    return this.http.get<Product>('http://localhost:8080/api/' + id, {
      headers: { Authorization: 'Basic dWRhY2l0eTpwYXNzd29yZA==' },
    });
}
}

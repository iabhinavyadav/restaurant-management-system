import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Bookings } from './bookings';
import { Product } from './product';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http:HttpClient) { }

  public loginUserFromRemote(user:User):Observable<any>{
    return this._http.post<any>("http://localhost:3233/login",user)
    }
  
    public registerUserFromRemote(user:User):Observable<any>{
      return this._http.post<any>("http://localhost:3233/registeruser",user)
    }
    getUsers()
    {
      return this._http.get<User[]>('http://localhost:3233/get');
    }
  
    deleteUser(id) {
      return this._http.delete<User>('http://localhost:3233/' + id);
    }
    getProducts() {
      return this._http.get<Product[]>('http://localhost:3233/foods/get');
    }

    addProduct(newProduct: Product) {
      return this._http.post<Product>('http://localhost:3233/foods/add', newProduct);
    }

    deleteProduct(id) {
      return this._http.delete<Product>('http://localhost:3233/foods/' + id);
    }

    updateProduct(updateFood: Product) {
      return this._http.put<Product>('http://localhost:3233/foods/update', updateFood);
    }

    public  bookTable(booking:Bookings):Observable<any>{
    return this._http.post<any>('http://localhost:3233/booking',booking);
    }

    public  getbookingList(){
      return this._http.get<Bookings[]>('http://localhost:3233/bookingList');
      }
}

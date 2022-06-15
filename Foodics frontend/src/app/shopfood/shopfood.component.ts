import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-shopfood',
  templateUrl: './shopfood.component.html',
  styleUrls: ['./shopfood.component.css']
})
export class ShopfoodComponent implements OnInit {

  products: Array<Product>;
  productsRecieved: Array<Product>;
  cartFoods: any;

  constructor(private router: Router, private httpClientService: RegistrationService) { }


  ngOnInit() {
    this.httpClientService.getProducts().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
    
  }

  // we will be taking the foods response returned from the database
  // and we will be adding the retrieved   
  handleSuccessfulResponse(response) {
    this.products = new Array<Product>();
    //get books returned by the api call
    this.productsRecieved = response;
    for (const food of this.productsRecieved) {

      const foodwithRetrievedImageField = new Product();
      foodwithRetrievedImageField.id = food.id;
  foodwithRetrievedImageField.name = food.name;
      //populate retrieved image field so that book image can be displayed
    foodwithRetrievedImageField.retrievedImage = 'data:image/jpeg;base64,' + food.picByte;
    foodwithRetrievedImageField.description = food.description;
    foodwithRetrievedImageField.price = food.price;
    foodwithRetrievedImageField.picByte = food.picByte;
      this.products.push(foodwithRetrievedImageField);
    }
  }
  

}

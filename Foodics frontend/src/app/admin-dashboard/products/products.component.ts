import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Array<Product>;
  productsReceived:Array<Product>;
  selectedProduct: Product;
  action: string;

  constructor(private httpClientService: RegistrationService,
    private activedRoute: ActivatedRoute,
    private router: Router) { }

    ngOnInit() {
      this.refreshData();
    }
  
    refreshData() {
      this.httpClientService.getProducts().subscribe(
        response => this.handleSuccessfulResponse(response)
      );
      this.activedRoute.queryParams.subscribe(
        (params) => {
          // get the url parameter named action. this can either be add or view.
          this.action = params['action'];
    // get the parameter id. this will be the id of the book whose details 
    // are to be displayed when action is view.
    const id = params['id'];
    // if id exists, convert it to integer and then retrive the product from
    // the products array
          if (id) {
            this.selectedProduct = this.products.find(product => {
              return product.id === +id;
            });
          }
        }
      );
  
    }

  handleSuccessfulResponse(response) {
    this.products = new Array<Product>();
    //get foods returned by the api call
    this.productsReceived = response;
    for (const product of this.productsReceived) {
    
      const foodwithRetrievedImageField = new Product();
      foodwithRetrievedImageField.id = product.id;
     foodwithRetrievedImageField.name = product.name;
      //populate retrieved image field so that food image can be displayed
      foodwithRetrievedImageField.retrievedImage = 'data:image/jpeg;base64,' + product.picByte;
      foodwithRetrievedImageField.description = product.description;
      foodwithRetrievedImageField.price = product.price;
    foodwithRetrievedImageField.picByte=product.picByte;
      this.products.push(foodwithRetrievedImageField);
    }
  }

  addProduct() {
    this.selectedProduct = new Product();
    this.router.navigate(['admin-dashboard', 'products'], { queryParams: { action: 'add' } });
  }
  viewProduct(id: number) {
    this.router.navigate(['admin-dashboard', 'products'], { queryParams: { id, action: 'view' } });
  }
}

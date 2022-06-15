import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/product';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  
  @Input()
  product: Product;

  @Output()
  foodDeletedEvent = new EventEmitter();
  constructor(private  httpClientService: RegistrationService, private router: Router) { }

  ngOnInit(): void {
  }

  deleteProduct() {
    this.httpClientService.deleteProduct(this.product.id).subscribe(
      (product) => {
        this.foodDeletedEvent.emit();
        this.router.navigate(['admin-dashboard', 'products']);
      }
    );
  }

  editProduct() {
    this.router.navigate(['admin-dashboard', 'products'], { queryParams: { action: 'edit', id: this.product.id } });
  }

}

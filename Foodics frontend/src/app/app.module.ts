import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MenuComponent } from './menu/menu.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ProductsComponent } from './admin-dashboard/products/products.component';
import { UsersComponent } from './admin-dashboard/users/users.component';
import { ViewuserComponent } from './admin-dashboard/users/viewuser/viewuser.component';
import { FormsModule } from '@angular/forms';
import { AddProductComponent } from './admin-dashboard/products/add-product/add-product.component';
import { ViewproductComponent } from './admin-dashboard/products/viewproduct/viewproduct.component';
import { ShopfoodComponent } from './shopfood/shopfood.component';
import { BookingComponent } from './booking/booking.component';
import { BookingListComponent } from './admin-dashboard/booking-list/booking-list.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { UserUiComponent } from './user-ui/user-ui.component';
import { UsershopComponent } from './userUi/usershop/usershop.component';
import { UserbookingComponent } from './userUi/userbooking/userbooking.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    MenuComponent,
    AdminDashboardComponent,
    ProductsComponent,
    UsersComponent,
    ViewuserComponent,
    AddProductComponent,
    ViewproductComponent,
    ShopfoodComponent,
    BookingComponent,
    BookingListComponent,
    AdminViewComponent,
    UserUiComponent,
    UsershopComponent,
    UserbookingComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

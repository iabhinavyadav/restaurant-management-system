import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BookingListComponent } from './admin-dashboard/booking-list/booking-list.component';
import { ProductsComponent } from './admin-dashboard/products/products.component';
import { UsersComponent } from './admin-dashboard/users/users.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { BookingComponent } from './booking/booking.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ShopfoodComponent } from './shopfood/shopfood.component';
import { UserUiComponent } from './user-ui/user-ui.component';
import { UserbookingComponent } from './userUi/userbooking/userbooking.component';
import { UsershopComponent } from './userUi/usershop/usershop.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'admin-dashboard',component:AdminDashboardComponent},
  {path:'admin-dashboard/users',component:UsersComponent},
  {path:'admin-dashboard/products',component:ProductsComponent},
  {path:'shop',component:ShopfoodComponent},
  {path:'booking',component:BookingComponent},
  {path:'bookinglist',component:BookingListComponent},
  {path:'adminView',component:AdminViewComponent},
  {path:'userUI',component:UserUiComponent},
  {path:'userUI/shop',component:UsershopComponent},
  {path:'userUI/booking',component:UserbookingComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

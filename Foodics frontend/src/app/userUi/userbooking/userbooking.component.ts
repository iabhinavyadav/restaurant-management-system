import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bookings } from 'src/app/bookings';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-userbooking',
  templateUrl: './userbooking.component.html',
  styleUrls: ['./userbooking.component.css']
})
export class UserbookingComponent implements OnInit {

  
  booking =new Bookings;
  msg="";


  constructor(private _service:RegistrationService,private _router:Router) { }

  ngOnInit(): void {
  }

  bookTables(){
    this._service.bookTable(this.booking).subscribe(
      data=>{
        
        console.log("response received");
        this._router.navigate(['/userUI/shop']);
        this.msg="Your table is booked ";
      },
      error=>{
          console.log("exception occured");
          this.msg=error.error;
      }
    )
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Bookings } from '../bookings';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  booking =new Bookings;
  msg="";


  constructor(private _service:RegistrationService,private _router:Router) { }

  ngOnInit(): void {
  }

  bookTables(){
    this._service.bookTable(this.booking).subscribe(
      data=>{
        
        console.log("response received");
        this._router.navigate(['/shop']);
        this.msg="Your table is booked ";
      },
      error=>{
          console.log("exception occured");
          this.msg=error.error;
      }
    )
  }
}

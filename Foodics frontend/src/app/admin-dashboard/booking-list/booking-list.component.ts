import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bookings } from 'src/app/bookings';
import { RegistrationService } from 'src/app/registration.service';


@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {

  // bookings=new Bookings();
  booking:Array<Bookings>;
  constructor(private httpClientService: RegistrationService,
    private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.httpClientService.getbookingList().subscribe(
      response => this.handleSuccessfulResponse(response)
    ); 

}
handleSuccessfulResponse(response) {
  this.booking = response;
}
}
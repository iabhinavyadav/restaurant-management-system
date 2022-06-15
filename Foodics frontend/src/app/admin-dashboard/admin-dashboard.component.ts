import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  users: Array<User>;
  constructor(private httpClientService: RegistrationService) { }

  ngOnInit(): void {
    this.httpClientService.getUsers().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response) {
    this.users = response;
  }

}

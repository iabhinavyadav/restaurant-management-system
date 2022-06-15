import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {

  mssg:"Deleted successfully";
  @Input()
  user: User
 
 

  @Output()
  userDeletedEvent = new EventEmitter();
  
  constructor(private httpClientService:RegistrationService,
    private router:Router ) { }

  ngOnInit(){
  }

  deleteUser() {
    this.httpClientService.deleteUser(this.user.id).subscribe(
      (user) => {
        this.userDeletedEvent.emit();
       
        this.router.navigate(["./admin-dashboard/users"]);
      
      }
    );
  }

}

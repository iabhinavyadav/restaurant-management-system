import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {

  user=new User();
msg='';
msg2='';

constructor (private _service:RegistrationService, private _router:Router) { }

ngOnInit(){
}

loginUser(){
  this._service.loginUserFromRemote(this.user).subscribe(
    data => {
      console.log("repsonse received");
     this.msg2="Login success";
    this._router.navigate(["/admin-dashboard"])
    },
    error=> {
      console.log("exception occured");
     this.msg='Bad creditianls,please enter valid email and password';
  } 
 )
}

}

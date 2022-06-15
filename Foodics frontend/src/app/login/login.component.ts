import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
    this._router.navigate(["/userUI"])
    },
    error=> {
      console.log("exception occured");
     this.msg='Bad creditianls,please enter valid email and password';
  } 
 )
}

gotoregistration(){
  this._router.navigate(["./registration"])
}

}

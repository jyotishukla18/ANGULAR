import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: []
})
export class CreateUserComponent implements OnInit {

  constructor(
    private _usrService:UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  model = new User();

  addUser(){
    this._usrService.addSerUsers(this.model).subscribe(()=>this.goBack());
  }
  goBack(){
    this.router.navigate(['/home']);
  }

}

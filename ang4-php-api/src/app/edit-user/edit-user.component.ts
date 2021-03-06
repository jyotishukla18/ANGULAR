import { Component, OnInit,Input } from '@angular/core';
import {User} from '../user';
import {UserService} from '../services/user.service';
import {ActivatedRoute,Route} from '@angular/router';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: []
})
export class EditUserComponent implements OnInit {

  @Input() ip_sel_user : User ; 
  //ip_sel_user= new User(); 


  constructor(
    private _route: ActivatedRoute,
    private _usrService:UserService,
    private router: Router
  ) {
      
   }
   id = this._route.snapshot.paramMap.get('id');

  ngOnInit() {
    this.getUser();
  }

   getUser(){
    this._usrService.getUser(this.id)
    .subscribe(
      //abc =>this.ip_sel_user = abc[0]
      (res : any)=>{
        this.ip_sel_user=res[0]
        }
    );
  }

  updateUser(){
    this._usrService.updateUser(this.ip_sel_user)
    .subscribe(()=>this.goBack());
  }

  goBack(){
    this.router.navigate(['/home']);
  }



}

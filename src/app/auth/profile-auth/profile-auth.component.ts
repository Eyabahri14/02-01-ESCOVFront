import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-auth',
  templateUrl: './profile-auth.component.html',
  styleUrls: ['./profile-auth.component.css']
})
export class ProfileAuthComponent implements OnInit {
  username:any;
  email:any;
  contact:any;
  constructor() { }

  ngOnInit(): void {
    this.username=localStorage.getItem('username');
    this.email=localStorage.getItem('email');
    this.contact=localStorage.getItem('contact');

  }


}

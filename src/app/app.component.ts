import {Component, OnInit} from '@angular/core';
import {GoogleApiService, UserInfo} from "./google-api.service";
import {UserService} from "./user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'escov';

  constructor(private readonly googleApi:GoogleApiService,private userService:UserService,private router:Router) {
  }
  ngOnInit(): void {

  }



}

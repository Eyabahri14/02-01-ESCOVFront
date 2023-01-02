import {Component, Input, OnInit} from '@angular/core';
import { GoogleApiService, UserInfo } from "../google-api.service";
import { UserService } from "../user.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public username: any;
  public deconnexion: any;
  public test: any=false;

  public photoUrl: any;

  public name: any;

  public showInitials = false;
  public initials: any;
  public circleColor: any;

  private colors = [
    '#EB7181', // red
    '#468547', // green
    '#FFD558', // yellow
    '#3670B2', // blue
  ];

  constructor(private readonly googleApi: GoogleApiService, private userService: UserService) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
    this.name=this.username;
    if (!this.photoUrl) {
      this.showInitials = true;
      this.createInititals();

      const randomIndex = Math.floor(Math.random() * Math.floor(this.colors.length));
      this.circleColor = this.colors[randomIndex];


    }

    if (this.username) {
      this.deconnexion = true;
    }
    else {
      this.deconnexion = false;
    }


  }


  private createInititals(): void {
    let initials = "";

    for (let i = 0; i < this.name.length; i++) {
      if (this.name.charAt(i) === ' ') {
        continue;
      }

      if (this.name.charAt(i) === this.name.charAt(i).toUpperCase()) {
        initials += this.name.charAt(i);

        if (initials.length == 2) {
          break;
        }
      }
    }

    this.initials = initials;
  }


}

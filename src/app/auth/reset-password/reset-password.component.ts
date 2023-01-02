import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../auth.service";
import Swal from "sweetalert2";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  email:any;
  resetForm= new FormGroup({
    email : new FormControl('',[Validators.required]),

  })
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  Reset(){
    this.authService.reset(this.resetForm.value).subscribe((res: any) => {
      console.log(this.resetForm.value)
      if(res) {
        Swal.fire(
          'Félicitations!',
          'Un mail vous à été envoyé',
          'success'
        )
        this.router.navigate(['/resetPassword'])

      }

    }, (err) => {
      console.log(err);

    })

  }

  backFct(){
     this.router.navigate(['/login-register'])  }

}

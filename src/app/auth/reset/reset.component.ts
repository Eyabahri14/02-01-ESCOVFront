import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../auth.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  resetForm= new FormGroup({
    email : new FormControl('',[Validators.required]),
    otp : new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(4)]),
    password : new FormControl('',[Validators.required])

  })
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  public numbersOnlyValidator(event: any) {
    const pattern = /^[0-9\-]*$/;
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^0-9\-]/g, "");
    }
  }

  ResetPassword(){
    this.authService.resetpassworddone(this.resetForm.value).subscribe((res: any) => {
      console.log(this.resetForm.value)
      if(res) {
        Swal.fire(
          'Félicitations!',
          'votre mot de passe à été modifié avec succés',
          'success'
        )
        this.router.navigate(['/login-register'])
      }

    }, (err) => {
      console.log(err);
    })
  }

  backFct(){
    this.router.navigate(['/login-register'])  }

}

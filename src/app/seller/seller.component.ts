import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SellerService } from '../sevices/seller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent {
  signUpForm !: FormGroup
  showLogin=false
 
  constructor(private _seller: SellerService, private _router: Router) {

  }
  ngOnInit() {
    if(localStorage.getItem("ecomm-project")){
      this._router.navigateByUrl('/seller-home') 
    }
    this.signUpForm = new FormGroup({
      name: new FormControl(),
      password: new FormControl(),
      email: new FormControl()
    })
  }
  signUp() {
    // console.log(this.signUpForm.value)
    this._seller.signUpdata(this.signUpForm.value).subscribe(
      (data: any) => {
        console.log("array data",data)
        localStorage.setItem("ecomm-project",data.name)
        alert("Create Successful")
        this._router.navigateByUrl('/seller-home')
        // this.signUpForm.reset()
       
      },
      (err: any) => {
        this._router.navigateByUrl('/seller')
        alert("Internal Error")
      }

    )
  }

  

  LogIn(){
    this._seller.signInData(this.signUpForm.value).subscribe(
      (data:any)=>{
        // console.log(data)
        // alert("login")
        localStorage.setItem("ecomm-project",data[0].name)
        this._router.navigateByUrl('/seller-home')
        this.signUpForm.reset()
      },
      (err:any)=>{
        alert("Error Occured")
      }
    )
  }
  GoLogin(){
    this.showLogin=true
  }
  GoSignUp(){
    this.showLogin=false
  }
}

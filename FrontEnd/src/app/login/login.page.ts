import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from "@angular/forms";

import { DataService } from "../services/data.service";
import { LoadingService } from "../services/loading.service";
import { AlertController, NavController, Platform } from "@ionic/angular";
@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  errorMsg: string;
  disabled: Boolean;
  userReq: any;
  constructor(
    public loading: LoadingService,
    private navCtrl: NavController,
    private router: Router,
    private dataService: DataService,
    private formBuilder: FormBuilder,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    this.createForm();
  }
  private createForm() {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(3)]],
    });
  }
  signUp() {
    this.router.navigate(["register"]);
    // this.router.navigate(['register-additional-information']);
  }
  async presentAlert(errorMsg: string) {
    const alert = await this.alertController.create({
      header: "Login",
      message: errorMsg,
      buttons: ["OK"],
    });
    await alert.present();
  }
  login() {
    // user - 12121215
    // pass - Password1
    this.disabled = true;
    this.loading.present();
    if (this.validate()) {
      console.log("call api");
      this.userReq = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      };
      this.dataService.login(this.userReq).subscribe(
        (res) => {
          this.loading.dismiss();

          localStorage.setItem("mswalitoken", JSON.stringify(res)); // setting
          localStorage.setItem("isLoggedIn", "true");
          console.log(localStorage.getItem("mswalitoken")); // getting
          this.loginForm.reset();
          this.router.navigateByUrl("home");
        },
        (err) => {
          console.log(err);
          this.loading.dismiss();
          this.errorMsg = err.error.msg;
          this.presentAlert(this.errorMsg);
        }
      );

      // this.navCtrl.navigateRoot(["home"]);
      // this.router.navigate(["home"]);
    }
  }
  validate(): boolean {
    this.errorMsg = "";
    if (this.loginForm.valid) {
      return true;
    } else {
      // validate each field
      let emailControl = this.loginForm.controls["mobile"];
      let passwordControl = this.loginForm.controls["password"];
      if (!emailControl.valid && emailControl.errors["required"]) {
        this.errorMsg = "Please enter your username";
      } else if (!passwordControl.valid && passwordControl.errors["required"]) {
        this.errorMsg = "Please enter your password";
      } else if (
        !passwordControl.valid &&
        passwordControl.errors["minlength"]
      ) {
        this.errorMsg =
          "Sorry, you have entered an invalid username / password";
      }
      return false;
    }
  }
}

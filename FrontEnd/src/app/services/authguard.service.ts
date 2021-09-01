import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from "@angular/router";

import { NavController } from "@ionic/angular";
// import { Storage } from "@ionic/storage";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthguardService implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<any> | Promise<any> {
    return new Promise((resolve) => {
      // this.storage.ready().then(() => {
      const token = localStorage.getItem("mswalitoken");

      if (token) {
        resolve(true);
      } else {
        this.router.navigate(["login"]);

        resolve(false);
      }
      // });
    });
  }
  public isLoggedIn(): boolean {
    let status = false;
    const token = localStorage.getItem("mswalitoken");

    if (token) {
      status = true;
    } else {
      status = false;
    }
    return status;
  }
}

import { Subject, Observable } from "rxjs";
import { firebaseApp } from "./firebase.config";

import "firebase/auth";
import { authState } from "rxfire/auth";
import { filter } from "rxjs/operators";

authState(firebaseApp.auth())
  .pipe(filter((u) => u !== null))
  .subscribe((u) => {
    console.log("the logged in user", u);
  });

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'bus-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  sub1: Subscription;

  form: FormGroup;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'email' :new FormControl(null, [Validators.required, Validators.email]),
      'password' :new FormControl(null, [Validators.required, Validators.minLength(4)])
    })

  }

  onSubmit() {
    const formData = this.form.value;

    console.log(formData);

    this.sub1 = this.userService.getUserByEmail(formData.email)
      .subscribe((response: User) => {
        console.log(response);
      })

  }

  ngOnDestroy() {
    if (this.sub1) this.sub1.unsubscribe()
  }
}

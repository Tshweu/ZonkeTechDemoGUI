import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  public userForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      name: new FormControl("", [Validators.required]),
      surname: new FormControl("", [Validators.required]),
      phoneNumber: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required,Validators.email]),
      password: new FormControl('user@', [Validators.required]),
    })
  }

  ngOnInit(): void {
  }

}

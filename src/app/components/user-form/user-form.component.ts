import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IUser } from 'src/app/models/user';
//////////
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
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
      password: new FormControl("", [Validators.required]),
    })
  }

  ngOnInit(): void {
  }
}

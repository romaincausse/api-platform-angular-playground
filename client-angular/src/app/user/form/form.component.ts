import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User, Role } from 'src/app/model/User';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  userForm: FormGroup
  id: number = null;
  user: User

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.initForm();

    this.id = this.route.snapshot.params['id'];
    this.user = new User(this.id, "", "", [])

    if (this.id != -1) {
      this.userService.getUserById(this.id)
        .subscribe(
          response => {
            this.user = response;
            this.userForm.patchValue(this.user)
          }
        )
    }
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      is_admin: [true]
    }
    );
  }

  onSave() {
    const is_admin = this.userForm.get("is_admin").value;
    const {username, email} = this.userForm.value;
    this.user.username = username;
    this.user.email = email;

    if(is_admin) {
      this.user.roles = [Role.ADMIN];
    } 

    if (this.id == -1) {
      this.userService.create(this.user).subscribe(
        data => {
          console.log(data)
          this.router.navigate(["user"])
        }
      )
    } else {
      this.userService.update(this.id, this.user).subscribe(
        data => {
          console.log(data)
          this.router.navigate(["user"])
        }
      )
    }
  }

  delete() {
    this.userService.delete(this.id).subscribe(
      data => this.router.navigate(['user'])
    );
  }
}
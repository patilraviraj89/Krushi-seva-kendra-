import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formdata: any;

  constructor(private api: ApiService, private route: Router) { }
  ngOnInit(): void {
    this.formdata = new FormGroup({
      username: new FormControl("", Validators.compose([Validators.required])),
      password: new FormControl("", Validators.compose([Validators.required])),
    });
  }
  submit(data: any) {
    console.log(data);
    this.api.post("api/authentications/login", data).subscribe((result: any) => {
      console.log(result); 
      if (result.length == 0) {
        alert("Invalid credentials");
      }
      else {
        localStorage.setItem("userid", result[0].id);
        localStorage.setItem("name", result[0].name);
        localStorage.setItem("username", result[0].username);
        localStorage.setItem("employeeid", result[0].employeeid);
        localStorage.setItem("roleid", result[0].roleid);
        localStorage.setItem("usertype", "admin");
        this.route.navigate(['/admin/dashboard']);
      }
    });

  }
}

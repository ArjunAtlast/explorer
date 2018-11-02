import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email:string;
  password:string;

  isloading: boolean = false;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  async login() {

    this.isloading = true;

    try {

      await this.auth.login(this.email, this.password);

    }

    catch(error) {
      console.log(error);

      this.isloading = false;
    }
  }

}

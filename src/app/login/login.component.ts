import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: UserModel;
  constructor(private router: Router, private authService: AuthService) {
    this.user = {};
  }

  ngOnInit(): void {
  }

  login(): void {
    this.authService.login(this.user).subscribe(
      data => {
        localStorage.setItem('ci', data.ci);
        this.router.navigate(['/list/' + data.ci + '/' + data.name + '/' + data.lastName]);

      }
    )

  }
}

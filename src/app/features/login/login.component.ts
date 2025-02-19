import { Component } from '@angular/core';
import { GlobalStateService } from '../../services/global-state.service';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent {
  usernameControl: FormControl;

  constructor(private globalStateService: GlobalStateService, private router: Router, private route: ActivatedRoute) {
    this.usernameControl = new FormControl('', [Validators.required]);
  }

  login() {
    this.globalStateService.updateState({
      user: { name: this.usernameControl.value }
    });
    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.router.navigate([returnUrl]);
  }
}

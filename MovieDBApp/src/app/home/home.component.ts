import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({

  selector: 'app-home',
  standalone:true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports:[NgIf,NgFor],
})
export class HomeComponent {
  isLoggedIn = false; // track login state

  constructor(private router: Router) {}

  login() {
    // Redirect to your login component/page
    this.router.navigate(['/login']);
  }

  logout() {
    // Handle logout (reset login state)
    this.isLoggedIn = false;
  }
}
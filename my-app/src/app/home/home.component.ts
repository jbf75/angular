import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="home-content">
      <button (click)="sayHello()" class="hello-button">Click me to say Hello!</button>
      <p>{{ message }}</p> 
    </div>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  message = '';

  sayHello() {
    this.message = 'Hello from Angular! 👋';
  }
}
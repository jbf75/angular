import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="about-page">
      <h1>About JBApp</h1>
      <p>This is the about page of our application.</p>
    </div>
  `,
  styles: [`
    .about-page {
      padding: 20px;
    }
  `]
})
export class AboutComponent {
}
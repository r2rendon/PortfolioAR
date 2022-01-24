import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <Navbar></Navbar>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'PortafolioAR';
}

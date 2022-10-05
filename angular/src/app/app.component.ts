import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-app-header></app-app-header>
    <div class="content">
      <router-outlet></router-outlet>
    </div>
    <app-app-footer></app-app-footer>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projeto';
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <div class="app-wrapper">
        <app-header></app-header>
        <app-main></app-main>
        <app-footer></app-footer>
      </div>
  `,
  styles: [`
    /* App header */
    app-header {
      z-index: 1;
      width: 100%;
      background-color: #24292E;
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }

    /* Sticky Footer */
    .app-wrapper {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    app-main {
      flex: 1;
      background-color: #dadada;
    }

  `]
})
export class AppComponent { }

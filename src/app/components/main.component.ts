import { Component } from '@angular/core';
@Component({
    selector: 'app-main',
    template: `
        <main>
            <search-component></search-component>

            <card-list-component></card-list-component>
        </main>
    `,
    styles: [`
        main {
            max-width: 1160px;
            width: 100%;
            margin: 0 auto;
        }
    `]
})
export class MainComponent {}
import { Component } from '@angular/core';

@Component({
    selector: 'no-content',
    template: `
        <div class="wrapper">
            <a href="https://www.facebook.com/woollyhops/" title="Do You Want to Know a Secret"> 404 ;)</a>
        </div>`,
    styles: [`
        .wrapper {
            display: flex;
            margin-top: 100px;
            justify-content: center;
            align-items: center;
            font-size: 64px;
            font-weight: bold;
            font-family: 'Roboto Mono', monospace;
        }
        .wrapper a {
            text-decoration: none;
        }
        .wrapper a:hover {
            text-decoration: line-through;
        }
    `]
})
export class NoContentComponent {}

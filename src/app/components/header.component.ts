import { IUser } from '../models/IUser.model';
import { Component, Input } from '@angular/core';
@Component({
    selector: 'app-header',
    template: `
        <header class="header-container">
            <div class="header-item name"><span>{{ ownerName }}</span></div>
            <div class="header-item avatar">
            <figure>
                <img [src]="dataObj?.avatar_url" [alt]="dataObj?.name" />
            </figure>
            </div>
        </header>
    `,
    styles: [`
        .header-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 0;
            max-width: 1160px;
            width: 100%;
            margin: 0 auto;
        }
        .name span {
            color: #fafafa;
            font-size: 24px;
        }
        .avatar img {
            max-width: 50px;
            max-height: 50px;
            object-fit: contain;
            border-radius: 2px;
        }
    `]
})
export class HeaderComponent {
    public ownerName = 'Vitalii Ryzhenko';
}
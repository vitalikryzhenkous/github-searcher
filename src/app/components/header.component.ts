import { IUser } from '../models/IUser.model';
import { Component, Input } from '@angular/core';
@Component({
    selector: 'app-header',
    template: `
        <header class="header-container">
            <div class="header-item name"><span [routerLink]="['/']">{{ ownerName }}</span></div>
            <div class="header-item avatar">
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
            cursor: pointer;
            font-size: 24px;
        }
        .avatar img {
            max-width: 50px;
            max-height: 50px;
            object-fit: contain;
            border-radius: 2px;
        }
        @media screen and (min-width: 768px) and (max-width: 1160px) { 
            .header-container {
                max-width: 760px;
            }
        }
        @media screen and (min-width: 320px ) and (max-width: 767px) { 
            .header-container {
                max-width: 300px;
            } 
         }
    `]
})
export class HeaderComponent {
    public ownerName = 'Vitalii Ryzhenko';
}
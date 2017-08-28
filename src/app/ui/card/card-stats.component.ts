import { IUser } from '../../models/IUser.model';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'card-stats-component',
    template: `
        <div class="stats-container">
            <div class="stats-item">{{ stats?.followers }}</div>
            <div class="stats-item"></div>
            <div class="stats-item"></div>
            <div class="stats-item">gists{{ stats?.public_gists }}</div>
            <div class="stats-item">followers{{ stats?.followers }}</div>
            <div class="stats-item">following{{ stats?.following }}</div>
        </div>
    `,
    styles: [ `
    .stats-container {
        height: 40px;
        width: 100%;
        background: red;
        padding: 10px;
        box-sizing: border-box;
        display:flex;
        justify-content: space-between;
        }
    .stats-item {
        flex: 1;
        max-width: 120px;
        background: #dadada;
    }
    ` ]
})
export class CardStatsComponent {
    @Input() public stats;
}
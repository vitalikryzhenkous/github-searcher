import { Component, Input } from '@angular/core';

@Component({
    selector: 'card-stats-component',
    template: `
        <div class="stats-container">
            <div class="stats-item"><b>Total</b><span>{{ totalRepos }}</span></div>
            <div class="stats-item"><b>gists</b> <span>{{ stats?.public_gists }}</span></div>
            <div class="stats-item"><b>followers</b> <span>{{ stats?.followers }}</span></div>
            <div class="stats-item"><b>following</b> <span>{{ stats?.following }}</span></div>
        </div>
    `,
    styles: [ `
    .stats-container {
        height: 31px;
        width: 100%;
        box-sizing: border-box;
        display: flex;
        justify-content: flex-start;
        }
    .stats-item {
        max-width: 127px;
        display: flex;
        background: #fafafa;
        padding: 15px;
        border-radius: 100px;
        justify-content: center;
        align-items: center;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        margin-right: 15px;
    }
    .stats-item:last-child {
        margin-right: 0;
    }
    .stats-item b {
        margin-right: 10px;
        color: rgba(0,0,0, .6);
    }
    .stats-item span {
        display: flex;
        width: 25px;
        height: 25px;
        justify-content: center;
        align-items: center;
        font-size: 11px;
        background-color: #42A5F5;
        color: #fff;
        font-weight: bold;
        border-radius: 100%;
        margin-right: -10px;
    }
    @media screen and (min-width: 768px) and (max-width: 1160px) { 
        .stats-container {
            justify-content: space-between;
        }
     }
     @media screen and (min-width: 320px ) and (max-width: 767px) { 
        .stats-container {
            height: 80px;
            margin-top: 20px;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        .stats-item {
            height: 0px;
            margin-right: 0;
        }
        .stats-item:nth-child(2) {
            order: 3;
        }
      }
    ` ]
})
export class CardStatsComponent {
    @Input() public stats;
    @Input() public totalRepos;
}

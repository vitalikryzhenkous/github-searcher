import { Component, Input, EventEmitter } from '@angular/core';

@Component({
    selector: 'card-repo-component',
    template: `
        <!-- REPO CARD ITSELF -->
        <div class="repo-card"
             *ngFor="let repo of repos | slice:0:showCount"
             (click)="proceedToRepo(repo)"
             title="Individual repo card, where you can find data about Repo">
            <!-- LEFT SIDE -->
            <div class="repo-card__left" >
                <div class="level-section">
                     <span><b>name:</b> {{ repo?.name }}</span>
                     <span><b>update:</b> {{ repo?.updated_at | date  }}</span>
                </div>
                <div class="level-section">
                    <span><b>lang:</b> {{ repo?.language || 'not filled' }} </span>
                    <span><b>stars:</b> {{ (repo?.stargazers_count) ?  repo?.stargazers_count : 0 }} </span>
                    <svg *ngIf="repo?.fork" fill="#8BC34A" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
    
                    <svg *ngIf="!repo?.fork" fill="#F44336" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                </div>
            </div>
            <!-- RIGHT SIDE -->
            <div class="repo-card__right">
                <div class="action-section">
                    <span><b>description:</b></span><br/>
                    {{ repo?.description || ' ' }}
                </div>
            </div>
        </div>
    `,
    styles: [`
    .repo-card {
        width: 100%;
        margin: 17px 0;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        display:flex;
        align-items: space-between;
        transition: all 255ms cubic-bezier(0.0, 0.0, 0.2, 1);
        background: #BBDEFB;
        position: relative;
    }
    .repo-card:hover {
        background: #90CAF9;
        cursor: pointer;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        transition: all 255ms cubic-bezier(0.0, 0.0, 0.2, 1);

    }
    .repo-card__left {
        flex: 4;
        margin-left: 10px;
        padding: 10px;
        background: #fafafa;
        border-right: 1px solid #9e9e9e;
    }
    .repo-card__left .level-section span {
        white-space: nowrap;
        max-width: 230px;
        text-overflow: ellipsis;
        overflow: hidden;
        
    }
    .repo-card__right {
        flex: 8;
        padding: 10px;
        display: flex;
        background: #fafafa;
        border-radius: 2px;
        flex-direction: column;
    }
    .action-section,
    .level-section span {
        font-family: 'Roboto Mono';
        font-size: 14px;
        color: rgba(0,0,0, .6);
    }
    .level-section {
        display:flex;
        justify-content: space-between;
    }
    .level-section:first-child {
        flex-direction: column;
    }
    .level-section span:first-child {
        display:block;
    }
    .action-section:first-child  {
        flex: 1;
    }
    `]
})
export class CardRepoComponent {
    @Input() public repos: any[];
    @Input() public showCount: any;
    
    public testContent: 'yes';
    constructor(  ) {}
    public proceedToRepo(repo) {
        console.log(repo);
    }
}

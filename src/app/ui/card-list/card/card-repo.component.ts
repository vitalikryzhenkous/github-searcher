import { Component, Input, EventEmitter } from '@angular/core';

@Component({
    selector: 'card-repo-component',
    template: `
        <div class="repo-card"
             [style.backgroundColor]="(repo?.fork) ? '#A5D6A7' : '#EF9A9A' "
             *ngFor="let repo of repos | slice:0:showCount"
             (click)="proceedToRepo(repo)"
             title="Individual repo card, where you can find data about Repo">
            <div class="repo-card__left" >
                <div class="level-section">
                     <span><b>name:</b> {{ repo?.name }}</span>
                     <span><b>update:</b> {{ repo?.updated_at | date  }}</span>
                </div>
                <div class="level-section">
                    <span><b>lang:</b> {{ repo?.language || 'not filled' }} </span>
                    <span><b>stars:</b> {{ (repo?.stargazers_count) ?  repo?.stargazers_count : 0 }} </span>
                </div>
            </div>
            <div class="repo-card__right">
                <div class="action-section">
                    <b>description:</b> <br/>
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
        background: #DADADA;
        border-right: 1px solid #eee;
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
        background: #DADADA;
        border-radius: 2px;
        flex-direction: column;
    }
    .action-section,
    .level-section span {
        font-family: 'Roboto Mono';
        font-size: 14px;
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

    constructor(  ) {}
    public proceedToRepo(repo) {
        console.log(repo);
    }
}
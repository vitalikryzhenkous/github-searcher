import { Component, Input } from '@angular/core';

@Component({
    selector: 'card-repo-component',
    template: `
        <div class="repo-card" *ngFor="let repo of repos">
            <div class="repo-card__left" [style.backgroundColor]="(repo.fork) ? '#A5D6A7' : '#EF9A9A'" >
                <div class="level-section">
                     <span>name: {{ repo?.name }}</span>
                     <span>update: {{ repo?.updated_at | date  }}</span>
                </div>
                <div class="level-section">
                    <span>lang: {{ repo?.language || 'not filled' }} </span>
                    <span>stars: {{ (repo?.stargazers_count) ?  repo?.stargazers_count : 0 }} </span>
                </div>
                
            </div>
            <div class="repo-card__right">
                <div class="action-section">
                    description: {{ repo?.description || ' ' }}
                </div>
                <div class="action-section">
                    <a [href]="repo?.html_url" title="go to repo"> proceed to repository </a>
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
    }
    .repo-card__left {
        flex: 4;
        margin-right: 10px;
        padding: 10px;
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
        background: #EEEEEE;
        flex-direction: column;
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
}
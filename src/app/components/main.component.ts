import { Subscription } from 'rxjs/Rx';
import { GitHubLayerService } from './../services/github.layer.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
@Component({
    selector: 'app-main',
    template: `
        <main>
            <search-component    (searchParams)="handleSearchValue($event)"
                                 [reposData]="repos"></search-component>

            <card-list-component [userData]="user"
                                 [reposData]="repos"></card-list-component>
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
export class MainComponent implements OnInit, OnDestroy {
    public user: any;
    public repos: any;
    public transformRepos: any;
    public subscriptionUser: Subscription;
    public subscriptionRepos: Subscription;

    constructor( private _github: GitHubLayerService ) {}
    public ngOnInit(): void {
        this._github.getSavedState()
                    .subscribe((transformData) => {
                        this.transformRepos = [...transformData];
                    });
    }
    public handleSearchValue(name: string) {
        this._github.updateUserName(name);
        this.subscriptionUser = this._github.getUser()
                                            .subscribe((user) => this.user = user,
                                                       (err) =>  console.error(err) );
        this.subscriptionRepos = this._github.getUserRepos()
                                             .subscribe((repos) => { this.repos = repos; } ,
                                                        (err) => console.error(err) );
    }

    public ngOnDestroy(): void {
        this.subscriptionUser.unsubscribe();
        this.subscriptionRepos.unsubscribe();
    }
}

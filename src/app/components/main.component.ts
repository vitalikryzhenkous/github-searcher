import { Subscription } from 'rxjs/Rx';
import { GitHubLayerService } from './../services/github.layer.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
@Component({
    selector: 'app-main',
    template: `
        <main>
            <search-component    (searchParams)="handleSearchValue($event)"
                                 [reposData]="repos$"></search-component>

            <card-list-component [userData]="userState"
                                 [reposData]="reposState"></card-list-component>
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
    public userState: any;
    public reposState: any;
    public repos$: any;
    public transformRepos: any;
    public subscriptionUser: Subscription;
    public subscriptionRepos: Subscription;

    constructor( private _github: GitHubLayerService ) {}
    public ngOnInit(): void {
        this._github.getStoreState('REQUEST_USER')
                    .subscribe((userState) => { this.userState = userState; });
        this._github.getStoreState('REQUEST_REPOS')
                    .subscribe((reposState) => { this.reposState = reposState; });

    }

    public handleSearchValue(name: string): void {
        this._github.updateUserName(name);
        this.subscriptionUser = this._github.getUser()
                                            .subscribe((user) => { console.log(user); this._github.storeInitialState('STORE_USER', user); },
                                                       (err) =>  console.error(err) );
        this.subscriptionRepos = this._github.getUserRepos()
                                             .subscribe((repos) => { console.log(repos); this.repos$ = repos; // to render filters and sorting
                                                                     this._github.storeInitialState('STORE_REPOS', repos); } ,
                                                        (err) => console.error(err) );
    }

    public commonSorting(name: string, params: any): void {
        
    }


    public ngOnDestroy(): void {
        this.subscriptionUser.unsubscribe();
        this.subscriptionRepos.unsubscribe();
    }
}

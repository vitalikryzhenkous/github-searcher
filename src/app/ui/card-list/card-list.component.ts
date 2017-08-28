import { IUser } from './../../models/IUser.model';
import { Subscription } from 'rxjs/Rx';
import { CardListService } from './card-list.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
@Component({
    selector: 'card-list-component',
    template: `
        <h2>Card list component</h2> 
        <card-component [user]="userData" [repos]="reposData"></card-component>
    `,
    styles: [``]
})
export class CardListComponent implements OnInit, OnDestroy { 
    public subscriptionUser: Subscription;
    public subscriptionRepos: Subscription;
    public userData: IUser | {};
    public reposData: any | {};
    constructor( private _cardList: CardListService ) {}

    public ngOnInit(): void {
        this.subscriptionUser = this._cardList.getIntialData('GET_USER')
                                          .subscribe((user) => { console.log(user); this.userData = user; },
                                                     (err) => console.error(err));
        this.subscriptionRepos = this._cardList.getIntialData('GET_REPOS')
                                          .subscribe((repos) => { console.log(repos); this.reposData = repos; },
                                                     (err) => console.error(err));
    }

    public ngOnDestroy():void {
        this.subscriptionUser.unsubscribe();
        this.subscriptionRepos.unsubscribe();
    }
}
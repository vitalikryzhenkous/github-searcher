import { Subscription } from 'rxjs/Rx';
import { CardListService } from './ui/card-list/card-list.service';
import { IUser } from './models/IUser.model';
import { GitHubLayerService } from './services/github.layer.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <div class="app-wrapper">
        <app-header [dataObj]="userData"></app-header>
        <app-main></app-main>
        <app-footer></app-footer>
      </div>
  `,
  styles: [`
    /* App header */
    app-header {
      z-index: 1;
      width: 100%;
      background-color: #24292E;
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }

    /* Sticky Footer */ 
    .app-wrapper {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    app-main {
      flex: 1;
      background-color: #dadada;
    }

  `]
})
export class AppComponent implements OnInit, OnDestroy {
  public subscription: Subscription;
  public userData: IUser;
  constructor( private _github: GitHubLayerService, private _cardList: CardListService ) {}

  public ngOnInit(): void {
    this.subscription = this._github.getUser()
                                    .subscribe(( user ) => {  this.userData = user;
                                                              this._cardList.storeInitialData( 'STORE_USER', user);
                                    },( err ) => console.error(err));

    this._github.getUserRepos()
                .subscribe((repos) => this._cardList.storeInitialData('STORE_REPOS', repos),
                           (err) => console.error(err));
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

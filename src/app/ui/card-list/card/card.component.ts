import { IUser } from './../../../models/IUser.model';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'card-component',
    template: `
        <div class="card-item__wrapper" *ngIf="user">
            <div class="card-item__left">
                <figure>
                    <img [src]="user.avatar_url">
                    <figcaption>
                        <div class="caption-box">
                            <span>{{user.name}}</span>
                            <span>{{user.created_at | date }}</span>
                        </div>
                        <div class="caption-box">
                            <span>{{user.login}}</span>
                            <span>{{user.email || 'example@gmail.com'}}</span>
                        </div>
                        <div class="caption-box">
                            <span>{{user.location}}</span>
                            <span>{{user.company || 'zero-company'}}</span>
                        </div>
                    </figcaption>
                </figure>
            </div>
            <div class="card-item__right">
                <card-stats-component [stats]="user" [totalRepos]="repos?.length"></card-stats-component>

                <div class="repos_wrapper">
                    <card-repo-component [repos]="repos" [showCount]="count"></card-repo-component>
                </div>

                <div class="loading-zone">
                    <button class="load-more"
                            [disabled]="( count < repos?.length ) ? false : true"
                            (click)="handleMore()">load more</button >
                </div>
            </div>
        </div>
    `,
    styles: [`
        .card-item__wrapper {
            width: 100%;
            max-width: 1160px;
            background-color: #eee;
            border-radius: 2px;
            padding: 20px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
            margin: 20px auto;
            box-sizing: border-box;

            display:flex;
            justify-content: space-between;
        }
        .card-item__left {
            flex: 4;
            max-width:315px;
            margin-right: 20px;
            overflow: hidden;
        }
        figure {
            width: 100%;
        }
        figure img {
            width: 100%;
            object-fit: fill;
            height: 300px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        }
        figcaption {
            padding: 0 1px;
        }
        figcaption .caption-box {
            padding: 5px;
            background: #fafafa;
            margin: 7px 0;
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
            
        }
        .caption-box span {
            font-family: 'Roboto Mono', monospace;
            color: rgba(0,0,0, .6);
        }
        .caption-box span:first-child {
            display: block;
        }
        .card-item__right {
            flex: 10;
        }
        .loading-zone {
            width: 100%;
        }
        .load-more {
            border: none;
            padding: 10px;
            text-transform: uppercase;
            outline: none;
            width: 100%;
            background-color: rgba(0,0,0, .1);
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
            font-weight: bold;
        }
        .load-more:hover {
            cursor: pointer;
            background-color: rgba(0,0,0, .2);
            color: #fafafa;
        }
        .load-more:disabled {
            pointer-events: none;
            background-color: rgba(0,0,0, .1);
            color: rgba(0,0,0, .1);
        }
        @media screen and (min-width: 768px) and (max-width: 1160px) { 
            .card-item__wrapper {
                max-width: 760px;
            }
            figure img {
                height: 263px;
            }
         }

         @media screen and (min-width: 320px ) and (max-width: 767px) { 
            .card-item__wrapper {
                max-width: 300px;
                flex-direction: column;
            }
            .card-item__left {
                margin-right: 0;
            }
          }
    `]
})

export class CardComponent  {
    @Input() public user: IUser | {};
    @Input() public repos: any[] ;

    public count = 4;
    public disableLoadMore: boolean;

    constructor() { }

    public handleMore() {
        if ( this.count < this.repos.length ) {
            this.count = (this.count + 1) + 1;
        }

    }
}

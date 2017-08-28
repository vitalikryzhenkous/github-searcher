import { IUser } from '../../models/IUser.model';
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
                <card-stats-component [stats]="user"></card-stats-component>

                <div class="repos_wrapper">
                    <card-repo-component [repos]="repos"></card-repo-component>
                </div>
            </div>
        </div>
    `,
    styles: [`
        .card-item__wrapper {
            width: 100%;
            height: 450px;
            background-color: #eee;
            border-radius: 2px;
            padding: 20px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
            margin: 20px 0;
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
            object-fit: cover;
            height: 225px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        }
        figcaption .caption-box {
            padding: 5px;
            background: #dadada;
            margin: 7px 0;
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        }
        .caption-box span {
            font-family: 'Roboto Mono', monospace;
        }
        .caption-box span:first-child {
            display: block;
        }
      
        .card-item__right {
            flex: 10;
            background: #fafafa;
        }
        .repos_wrapper {
            max-height: 368px;
            overflow-y: hidden;
        }
    `]
})

export class CardComponent  { 
    @Input() public user: IUser | {};
    @Input() public repos: any[] ;
}
import { GitHubLayerService } from './../../services/github.layer.service';
import { Component, Input, Output, EventEmitter, HostListener, OnDestroy, AfterViewChecked, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
@Component({
    selector: 'dialog-window',
    template: `
        <div class="dialog-overlay">
            <div class="dialog-wrapper">
                <div class="dialog-header">
                    <div class="header-item">
                        <span><b>name:</b> {{ repoData?.name }}</span>
                    </div>
                    <div class="header-item">
                        <span><b>update:</b> {{ repoData?.updated_at | date  }}</span>
                    </div>
                    <div class="header-item">
                        <span><b>stars:</b> {{ (repoData?.stargazers_count) ?  repoData?.stargazers_count : 0 }} </span>
                    </div>
                </div>

                <div class="dialog-main__wrapper">
                   <div class="main-item__box">
                       <div class="item" *ngFor="let contr of conts | slice:0:3">
                           <div class="item-row">
                               <a [href]="contr.html_url"><span>{{contr?.login}}</span></a>
                           </div>
                           <div class="item-row">
                               <span>{{contr?.contributions}}</span>
                           </div>
                       </div>
                   </div>
                   <div class="main-item__box">
                       <div class="item" *ngFor="let lang of langs">
                           <div class="item-row">
                               <span>{{lang.lang}}</span>
                           </div>
                           <div class="item-row">
                               <span>{{( lang.size >= 1000 ) ? lang.size : '< 1kb' }}</span>
                           </div>
                       </div>
                   </div>
                   <div class="main-item__box">
                       <span>comment</span>
                   </div>
                </div>
                <div class="dialog-footer__action">
                    <a [href]="repoData?.html_url" class="footer-item__btn">
                        link to repo
                    </a>
                    <a [href]="repoData?.forks_url" class="footer-item__btn" [ngClass]="{'fork': repoData?.fork }">
                        link to fork
                    </a>
                </div>
            </div>
        </div>
    `,
    styles: [`
        .dialog-overlay {
            width: 100%;
            min-height: 100vh;
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .dialog-wrapper {
            width: 75%;
            max-width:960px;
            padding: 15px;
            z-index: 3;
            background-color: #fafafa;
            border-radius: 2px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

        }
        .dialog-header {
            margin-bottom: 10px;
            background: #dadada;
        }
        .dialog-main__wrapper {
            background: #eee;
        }
        .dialog-header,
        .dialog-main__wrapper {
            padding: 10px;
            box-sizing: border-box;
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        }
        .header-item:first-child span {
            white-space: nowrap;
            max-width: 205px;
            text-overflow: ellipsis;
            overflow: hidden;
        }
        .header-item,
        .main-item__box {
            flex: 4;
            padding-right: 10px;
            

            display: flex;
            flex-direction: column;
            align-items: baseline;
            justify-content: space-around;
        }
        .header-item b {
            padding-right: 10px;
        }
        .header-item,
        .main-item__box  {
            font-family: 'Roboto Mono';
            font-size: 14px;
            color: rgba(0,0,0, .6)
        }
        .header-item:nth-child(2),
        .main-item__box:nth-child(2) {
            padding-left: 10px;
            border-left: 1px solid rgba(0,0,0, .1);
            border-right: 1px solid rgba(0,0,0, .1);
        }
        .header-item:last-child,
        .main-item__box:last-child {
            padding-right: 0;
            padding-left: 10px;
        }

        .item {
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 100%;
            margin-bottom: 10px;
        }
        .item:last-child {
            margin-bottom: 0;
        }
        .item-row {
            display: flex;
            justify-content: flex-start;
        }
        .item-row:first-child {
            flex: 6;
        }
        .item-row:last-child {
            flex: 2;
            display: flex;
            justify-content: flex-end;
        }
        .dialog-footer__action {
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            margin-top: 10px;
        }
        .footer-item__btn.fork,
        .footer-item__btn {
            flex: 4;
            cursor: pointer;
            text-align: center;
            margin-right: 10px;
            padding: 10px;
            text-transform: uppercase;
            color: rgba(0,0,0, .6);
            font-weight: bold;
            font-family: 'Roboto Mono', monospace;
            background-color: rgba(0,0,0, .1);
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
            font-weight: bold;
        }
        .footer-item__btn:last-child {
            margin-right: 0;
        }
        .footer-item__btn:last-child:not(.fork) {
            margin-right: 0;
            pointer-events: none;
            color: rgba(0,0,0, .4);
            background-color: rgba(0,0,0, .05);

        }

        @media screen and (min-width: 320px ) and (max-width: 767px) { 
            .dialog-wrapper {
                max-width: 300px;
                width: 90%;
            }
            .dialog-header,
            .dialog-main__wrapper {
                flex-direction: column;
            }
            .header-item {
                width: 100%;
            }
            .header-item:first-child span {
                max-width: 250px;
            }
            .header-item span {
                display: flex;
                justify-content: space-between;
                width: 100%;
            }
            .header-item,
            .main-item__box {
                padding-right: 0;
            }
            .header-item[_ngcontent-c10]:last-child, 
            .main-item__box[_ngcontent-c10]:last-child,
            .header-item[_ngcontent-c10]:nth-child(2),
            .main-item__box[_ngcontent-c10]:nth-child(2) {
                padding-left: 0;
                border-left: none;
                border-right: none;
            }
            .main-item__box:first-child,
            .main-item__box:nth-child(2) {
                width: 100%;
                padding-bottom: 10px;
                border-bottom: 1px solid #dadada;
            }
            .main-item__box:nth-child(2),
            .main-item__box:last-child {
                margin-top: 10px;
            }
            
            .main-item__box {
                width: 100%;
            }
         }
    `]
})

export class DialogComponent implements OnDestroy, OnInit {
    public isClicked: boolean;
    @Input() public cardRepoState: boolean;
    @Input() public repoData: any[];
    @Output() public emitFromDialog: EventEmitter<boolean> = new EventEmitter();
    public subscriptionOne: Subscription;
    public subscriptionTwo: Subscription;
    public subscriptionThree: Subscription;
    
    public langs: any[];
    public conts: any[];
    public comms: any[];
    constructor( private _github: GitHubLayerService ) {}
    public ngOnInit(): void {
        this.subscriptionOne = this._github.getStoreState('REQUEST_LANGUAGE')
                                           .subscribe( (langs) => { 
                                                        this.langs = Object.entries(langs)
                                                                            .map(lang => ({ 'lang': lang[0], 'size': lang[1] })); },
                                                       (err) => console.error(err) );

        this.subscriptionTwo = this._github.getStoreState('REQUEST_CONTRIBUTORS')
                                           .subscribe((conts) => { this.conts = conts; console.log(this.conts); },
                                                      (err) => console.error(err));
                                                      
        this.subscriptionThree = this._github.getStoreState('REQUEST_COMMENTS')
                                           .subscribe((comms) => this.comms = comms,
                                                      (err) => console.error(err));
    }
    @HostListener( 'click', ['$event'])
    public handleClick(e) {
        if ( !(e.target.className === 'dialog-wrapper') ) {
            this.isClicked = !this.isClicked && !this.cardRepoState;
            this.emitFromDialog.emit(this.isClicked);
        }
    }

    public ngOnDestroy(): void {
        this.subscriptionOne.unsubscribe();
        this.subscriptionTwo.unsubscribe();
        this.subscriptionThree.unsubscribe();
    }

}

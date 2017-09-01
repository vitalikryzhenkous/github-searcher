import { GitHubLayerService } from './../../services/github.layer.service';
import { Component, Input, Output, EventEmitter, HostListener, OnDestroy, AfterViewChecked, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
@Component({
    selector: 'dialog-window',
    template: `
        <div class="dialog-overlay">
            <div class="dialog-wrapper">
                <div class="dialog-header">
                    header
                </div>
                <div class="dialog-main">
                    <div class="main-item" *ngFor="let cont of conts">
                        {{ cont.login }}
                    </div>
                </div>
                <div class="dialog-footer__action">
                    action foooter
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
            min-height: 250px;
            padding: 15px;
            z-index: 3;
            background-color: #fafafa;
            border-radius: 2px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

        }
    `]
})
export class DialogComponent implements OnDestroy, OnInit {
    public isClicked: boolean;
    @Input() public cardRepoState: boolean;
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
                                           .subscribe( (langs) => { this.langs = langs; console.log(this.langs); },
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

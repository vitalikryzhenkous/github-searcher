import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
@Component({
    selector: 'dialog-window',
    template: `
        <div class="dialog-overlay" >
            <div class="dialog-wrapper">
                <div class="dialog-header">
                    header
                </div>
                <div class="dialog-main">
                    main
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
export class DialogComponent {
    public isClicked: boolean;
    @Input() public cardRepoState: boolean;
    @Output() public emitFromDialog: EventEmitter<boolean> = new EventEmitter();

    @HostListener( 'click', ['$event'])
    public handleClick(e) {
        if ( !(e.target.className === 'dialog-wrapper') ) {
            this.isClicked = !this.isClicked && !this.cardRepoState;
            this.emitFromDialog.emit(this.isClicked);
        }
    }

}
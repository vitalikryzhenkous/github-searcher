import { Component, Input  } from '@angular/core';
@Component({
    selector: 'card-list-component',
    template: `<card-component [user]="userData"
                               [repos]="reposData"></card-component>
    `,
    styles: [``]
})
export class CardListComponent {
    @Input() public userData: any;
    @Input() public reposData: any;
}

import { CardListService } from './card-list.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './card-list.component';
import { CardModule } from './card/card.module';
@NgModule({
    imports: [ CommonModule, CardModule ],
    declarations: [ CardListComponent ],
    exports: [ CardListComponent ],
    providers: [ CardListService ]
})

export class CardListModule {}

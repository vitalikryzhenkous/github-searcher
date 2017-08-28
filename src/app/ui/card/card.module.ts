import { CardRepoComponent } from './card-repo.component';
import { CardStatsComponent } from './card-stats.component';
import { CardComponent } from './card.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


@NgModule({
    imports: [ CommonModule ],
    declarations: [ CardComponent, CardStatsComponent, CardRepoComponent ],
    exports: [ CardComponent ]
})

export class CardModule {}
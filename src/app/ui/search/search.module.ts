import { SearcgUniquePipe } from './seact-unique.pipe';
import { SearchService } from './search.service';
import { GitHubLayerService } from './../../services/github.layer.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [ SearchComponent, SearcgUniquePipe ],
    exports: [ SearchComponent ],
    providers: [ GitHubLayerService, SearchService ]
})

export class SearchModule { }

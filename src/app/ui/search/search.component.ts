import { GitHubLayerService } from './../../services/github.layer.service';
import { SearchService } from './search.service';
import { Component, Output, EventEmitter, Input } from '@angular/core';
@Component({
    selector: 'search-component',
    templateUrl: './search.html',
    styleUrls: ['./search.css']
})
export class SearchComponent {
    public isHide = false;
    public checkedState: boolean;
    @Input() public reposData: any;
    @Output() public searchParams = new EventEmitter();

    public sortings: any[] = [
        {id: 1, title: 'repo name',   name: 'name',   holder: 'sort by repo name',   key: 'name',              selected: false },
        {id: 2, title: 'stars count', name: 'stars',  holder: 'sort by stars count', key: 'stargazers_count',  selected: false },
        {id: 3, title: 'open issue',  name: 'issue',  holder: 'open issue count',    key: 'open_issues_count', selected: false },
        {id: 4, title: 'update',      name: 'update', holder: 'update date',         key: 'updated_at',        selected: false }
    ];
    constructor( private _search: SearchService, private _github: GitHubLayerService ) {}

    // Need to share when user click on submit of input / up to maincomponent
    // public searchValueChanges(value: string): void {
    //     this.searchParams.emit(value);
    // }

    // Need to share when user click on submit of input / up to maincomponent
    // And Control the render view of filters & card width data
    public handleSubmitAction(value: string): void {
        this.isHide = true;
        this.searchParams.emit(value);
    }

    // Common Handler for sorting inputs
    public handleCommonKeyup(key: string, value: any): void {
        this.sortings.filter((el) => {
            if ( el.key !== key && value.length !== 0 ) {
                el.selected = true;
            } else if ( value.length === 0 ) {
                this.sortings.map((sort) => { sort.selected = false; } );
            }
        });
        const result = this._search.filterBySorting(key, value, this.reposData);
        this._github.storeInitialState('STORE_REPOS', result);
        console.log('CHECK handleCommonKeyup: ', result);
    }

    public handleCommonFilter(key: string, value: any) {
        if ( key === 'has_issue') {
            this.checkedState = !this.checkedState;
        }
        const result = this._search.filterByFilters(key, value, this.reposData);
        this._github.storeInitialState('STORE_REPOS', result);
    }

}

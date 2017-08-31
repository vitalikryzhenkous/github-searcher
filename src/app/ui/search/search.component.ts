import { GitHubLayerService } from './../../services/github.layer.service';
import { SearchService } from './search.service';
import { Component, Output, EventEmitter, Input } from '@angular/core';
@Component({
    selector: 'search-component',
    template: `
        <div class="search-form__container">
            <form>
                <!--(ngModelChange)="searchValueChanges($event)"-->
                <input class="input txt"
                       type="text"
                       name="searchParams"
                       #search
                       required
                       autofocus
                       autocomplete
                       placeholder="Will show cards with repositories, filters, and sorting."
                       title="type here search parameters"/>

                <input type="submit"
                       class="input btn"
                       (click)="handleSubmitAction(search.value)"
                       value="search"/>
            </form>
        </div>
        <div class="filte-sorting__container" *ngIf="isHide">
            <div class="filter-wrapper">
                <div class="filter-item">
                    <label for="issue">has open issue</label>
                    <input type="checkbox"
                           name="issue"
                           [checked]="checkedState"
                          (click)="handleCommonFilter('has_issues', $event.target.checked)"/>
                </div>
                <div class="filter-item">
                    <label for="topics">has topics</label>
                    <input type="checkbox" name="topics"/>
                </div>
                <div class="filter-item">
                    <label for="started">started</label>
                    <input type="text" name="started"/>
                </div>
                <div class="filter-item">
                    <label for="update">update after</label>
                    <input type="text" name="update"/>
                </div>
                <div class="filter-item">
                    <label for="update">type</label>
                    <select name="type">
                        <option value="all">all</option>
                        <option value="forks">forks</option>
                        <option value="sources">sources</option>
                    </select>
                </div>
                <div class="filter-item">
                    <label for="update">language</label>
                    <select name="lang" (change)="handleCommonFilter('language', $event.target.value)">
                        <option [value]="repo?.language" *ngFor="let repo of reposData | searchUnique">
                            {{ (repo?.language) ? repo?.language : 'not selected' }}
                        </option>
                    </select>
                </div>
            </div>

            <div class="sorting-wrapper">
                <div class="sorting-item" *ngFor="let sort of sortings;">
                    <label for="name">{{ sort?.title }}</label>
                    <input type="text"
                           [disabled]="sort?.selected"
                           [name]="sort?.name"
                           (keyup)="handleCommonKeyup(sort?.key, $event.target.value)"
                           [placeholder]="sort?.holder"/>
                </div>
            </div>
        </div>
    `,
    styles: [`
        .filte-sorting__container {
            padding: 20px 10px;
            background: #eee;
            border-radius: 2px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
            margin-bottom: 50px;
        }
        .filter-wrapper {
            margin-bottom: 25px;
        }
        .sorting-wrapper,
        .filter-wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .sorting-item,
        .filter-item {
            display: flex;
            align-items: center;
        }
        .sorting-item label,
        .filter-item label {
            padding-right: 10px;
            color: rgba(0,0,0, .6);
        }
        .search-form__container {
            margin: 50px 0;
        }
        form {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        form .input:first-child {
            flex: 10;
            margin-right: 20px;
            outline: none;
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
            border: 1px solid transparent;
        }
        form .input:last-child {
            flex: 2;
            cursor: pointer;
            background: #fafafa;
            border-radius: 2px;
            text-transform: uppercase;
            font-weight: bold;
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
            color: rgba(0,0,0, .6);
            border: 1px solid transparent;
        }
        form .input:last-child:hover {
            background: #fbfbfb;
            color: rgba(0,0,0, .8);
        }
        input, select {
            padding: 2px 5px;
            border: 1px solid #dadada;
        }
        input:focus {
            caret-color: #2196F3;
            border: 1px solid #2196F3 !important;
            transition: all 255ms cubic-bezier(0.0, 0.0, 0.2, 1);
        }
        .txt, .btn {
            padding: 10px;
            font-size: 16px;
        }
    `]
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

import { GitHubLayerService } from './../../services/github.layer.service';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
@Injectable()
export class SearchService {
    constructor( private _github: GitHubLayerService ) {}
    
    public filterBySorting(key, value: any, source: any[]) {
        return source.filter((el) => {
            switch (key) {
                case 'name': case 'updated_at':
                    if (el[`${key}`].includes(value) ) { return el; }
                    break;
                case 'stargazers_count': case 'open_issues_count':
                    if (el[`${key}`] === Number(value) ) { return el; }
                    break;
                default:
                    console.log( 'DEFAULT', value );
                    break;
            }
        });
    }

    public filterByFilters(key, value: any, source: any[]) {
        return source.filter((el) => {
            switch (key) {
                case 'language': case 'has_issues':
                    if (el[`${key}`] === value ) { return el; }
                    break;
                default:
                    console.log( 'DEFAULT', value );
                    break;
            }
        });
    }
}

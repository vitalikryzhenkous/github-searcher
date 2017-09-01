import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class GitHubLayerService {
    private _userName = 'vitalikryzhenkous';
    private _clientID = 'Iv1.aee58b33fc9ae7ab';
    private _clientSecret = '5e9363cf49061ebaabff1e2083ab2e38a16a692e';

    public user$: any = new Subject();
    public repos$: any = new Subject();
    public language$: any = new Subject();
    public contributors$: any = new Subject();
    public comments$: any = new Subject();

    constructor( private _http: Http ) { }

    // Common method for Languages & contributors & top 5
    public getDialogData(repoParams: any, endpoint: string) {
            // GET /repos/:owner/:repo/languages
            // GET /repos/:owner/:repo/contributors
            // GET /repos/:owner/:repo/comments
            const URL = `https://api.github.com/repos/${this._userName}/${repoParams}/${endpoint}`;
            return this._http.get(URL).map( (res) => res.json() );
    }

    // When user will type in input it will-change
    public updateUserName(username) {
        this._userName = username;
    }

    // Get all data about user
    public getUser() {
        const URL = `https://api.github.com/users/${this._userName}?client_id=${this._clientID}&client_secret=${this._clientSecret}`;
        return this._http.get(URL)
                         .map( (res) => res.json() );
    }

    // Get all data about user repos
    public getUserRepos() {
        const URL = `https://api.github.com/users/${this._userName}/repos?client_id=${this._clientID}&client_secret=${this._clientSecret}`;
        return this._http.get(URL)
                         .map( (res) => res.json() );
    }

    // Common initialState for components
    public storeInitialState(type: string, payload: any): void {
        switch (type) {
            case 'STORE_USER':
                this.user$.next(payload);
                break;
            case 'STORE_REPOS':
                this.repos$.next(payload);
                break;
            case 'STORE_LANGUAGE':
                this.language$.next(payload);
                break;
            case 'STORE_CONTRIBUTORS':
                this.contributors$.next(payload);
                break;
            case 'STORE_COMMENTS':
                this.comments$.next(payload);
                break;
            default:
                console.log('DEFAULT at storeInitialState');
                break;
        }
    }

    // Share storeState
    public getStoreState(type: string) {
        switch (type) {
            case 'REQUEST_USER':
                return this.user$.asObservable();
            case 'REQUEST_REPOS':
                return this.repos$.asObservable();
            case 'REQUEST_LANGUAGE':
                return this.language$.asObservable();
            case 'REQUEST_CONTRIBUTORS':
                return this.contributors$.asObservable();
            case 'REQUEST_COMMENTS':
                return this.comments$.asObservable();
            default:
                console.log('DEFAULT at storeInitialState');
                break;
        }
    }
}

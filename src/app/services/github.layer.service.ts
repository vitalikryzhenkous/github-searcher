import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class GitHubLayerService {
    private _userName = 'vitalikryzhenkous';
    private _clientID = 'Iv1.aee58b33fc9ae7ab';
    private _clientSecret = '5e9363cf49061ebaabff1e2083ab2e38a16a692e';

    public initialState: any = new Subject();

    constructor( private _http: Http ) { }
    
    public getUser() {
        const URL = `http://api.github.com/users/${this._userName}?client_id=${this._clientID}&client_secret=${this._clientSecret}`;
        return this._http.get(URL)
                         .map( (res) => res.json() );
    }

    public getUserRepos() {
        const URL = `http://api.github.com/users/${this._userName}/repos?client_id=${this._clientID}&client_secret=${this._clientSecret}`;
        return this._http.get(URL)
                         .map( (res) => res.json() );
    }

    public updateUserName(username) {
        this._userName = username;
    }

    public saveState(payload: any): void {
        this.initialState.next(payload);
    }

    public getSavedState() {
        return this.initialState.asObservable();
    }
}

import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
@Injectable()
export class CardListService {
    public storeUser = new Subject();
    public storeRepos = new Subject();
    
    constructor() {}

    public storeInitialData( action, payload ) {
        switch (action) {
            case 'STORE_USER':
                this.storeUser.next(payload);
                break;
            case 'STORE_REPOS':
                this.storeRepos.next(payload);
                break;
            default:
                console.log(`Default is Fire at storeInitialData | action: ${action} & payload: ${payload}`);
                break;
        }
    }

    public getIntialData(action) {
        switch(action) {
            case 'GET_USER': 
                return this.storeUser.asObservable();
            case 'GET_REPOS':
                return this.storeRepos.asObservable();
            default:
                console.log(`Default is Fire at getIntialData | action: ${action}`);
        }
    }
}
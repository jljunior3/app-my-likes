import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class MarvelApiService {
    private API = environment.api_marvel;
    private _publicKey = environment.key_marvel_public;
    private _privateKey = environment.key_marvel_private;

    constructor(private http: HttpClient) {}

    getTimeStamp(): string {
        return new Date().valueOf().toString();
    }

    getHash() {
        return Md5.hashStr(
            this.getTimeStamp() + this._privateKey + this._publicKey
        ).toString();
    }

    getPeople() {
        const timestamp = this.getTimeStamp();
        const hash = this.getHash();

        return this.http.get(
            `${this.API}/characters?ts=${timestamp}&apikey=${
                this._publicKey
            }&hash=${hash}&limit=10`
        );
    }

    getPeopleName(name) {
        const timestamp = this.getTimeStamp();
        const hash = this.getHash();

        return this.http.get(
            `${this.API}/characters?name=${name}&ts=${timestamp}&apikey=${
                this._publicKey
            }&hash=${hash}&limit=10`
        );
    }
}

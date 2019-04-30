import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class StarWarsApiService {
    private API = environment.api_starwars;

    constructor(private http: HttpClient) {}

    getPeople() {
        return this.http.get(`${this.API}/people/`);
    }

    getPeopleName(name) {
        return this.http.get(`${this.API}/people/?search=${name}`);
    }

    getFilms() {
        return this.http.get(`${this.API}/films/`);
    }

    getFilmName(title) {
        return this.http.get(`${this.API}/films/?search=${name}`);
    }

    getStarships() {
        return this.http.get(`${this.API}/starships/`);
    }

    getStarshipName(name) {
        return this.http.get(`${this.API}/starships/?search=${name}`);
    }
}

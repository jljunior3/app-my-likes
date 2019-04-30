import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BeerApiService {
    private API = environment.api_beers;
    options: string[] = ['beer_name', 'abv_gt', 'ibu_gt', 'ebc_gt'];

    constructor(private http: HttpClient) {}

    getBeers() {
        return this.http.get(this.API);
    }

    getBeersName(option, value) {
        const param = this.options.filter(opt => opt === option);

        return this.http.get(`${this.API}?${param}=${value}`);
    }
}

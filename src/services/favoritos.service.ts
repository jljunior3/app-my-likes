import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class FavoritosService {
    private API = environment.api_favoritos;

    constructor(private http: HttpClient) {}

    getFavoritos() {
        return this.http.get(this.API);
    }

    addFavorito(favorito) {
        return this.http.post(this.API, favorito).pipe(take(1));
    }

    deleteFavorito(id) {
        return this.http.delete(`${this.API}/${id}`).pipe(take(1));
    }
}

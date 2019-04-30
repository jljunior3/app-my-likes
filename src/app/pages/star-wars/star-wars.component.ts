import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { StarWarsApiService } from '../../../services/star-wars-api.service';
import { FavoritosService } from '../../../services/favoritos.service';

import { NotificacaoService } from '../../../services/notificacao.service';
import { MenuService } from '../../../services/menu.service';

@Component({
    selector: 'app-star-wars',
    templateUrl: './star-wars.component.html',
    styleUrls: ['./star-wars.component.scss']
})
export class StarWarsComponent implements OnInit {
    people: any = [];
    starships: any = [];
    films: any = [];
    optionsSelect;
    selected: string;
    loading: boolean;

    constructor(
        private api: StarWarsApiService,
        private favoritos: FavoritosService,
        private notificacaoService: NotificacaoService,
        private menuService: MenuService
    ) {}

    ngOnInit() {
        this.getPeople();
        this.menuService.getCurrentMenu('starwars');
        this.optionsSelect = [
            { name: 'Pessoas', value: 'people' },
            { name: 'Filmes', value: 'films' },
            { name: 'Naves', value: 'starships' }
        ];

        this.selected = 'people';
    }

    getPeople() {
        this.loading = true;
        this.api.getPeople().subscribe((arg: any) => {
            this.people = arg.results;
            this.loading = false;
        });
    }

    getPeopleName(name) {
        this.loading = true;
        this.api.getPeopleName(name).subscribe((arg: any) => {
            this.people = arg.results;
            this.loading = false;
        });
    }

    getFilms() {
        this.loading = true;
        this.api.getFilms().subscribe((arg: any) => {
            this.films = arg.results;
            this.loading = false;
        });
    }

    getFilmName(title) {
        this.loading = true;
        this.api.getFilmName(title).subscribe((arg: any) => {
            this.films = arg.results;
            this.loading = false;
        });
    }

    getStarships() {
        this.loading = true;
        this.api.getStarships().subscribe((arg: any) => {
            this.starships = arg.results;
            this.loading = false;
        });
    }

    getStarshipName(name) {
        this.loading = true;
        this.api.getStarshipName(name).subscribe((arg: any) => {
            this.starships = arg.results;
            this.loading = false;
        });
    }

    clearObjects(object) {
        if (object === 'people') {
            this.films = [];
            this.starships = [];
        } else if (object === 'films') {
            this.people = [];
            this.starships = [];
        } else {
            this.people = [];
            this.films = [];
        }
    }

    search(params) {
        this.selected = params.selectValue;

        if (params.inputValue === '') {
            if (params.selectValue === 'people') {
                this.clearObjects('people');
                return this.getPeople();
            } else if (params.selectValue === 'films') {
                this.clearObjects('films');
                return this.getFilms();
            } else {
                this.clearObjects('starships');
                return this.getStarships();
            }
        }

        if (params.selectValue === 'people') {
            this.clearObjects('people');
            const a = this.people.filter(
                obj =>
                    obj.name
                        .toLowerCase()
                        .includes(params.inputValue.toLowerCase()) === true
            );

            if (a.length > 0) {
                this.people = a;
            } else {
                this.getPeopleName(params.inputValue);
            }
        } else if (params.selectValue === 'films') {
            this.clearObjects('films');
            const a = this.films.filter(
                obj =>
                    obj.title
                        .toLowerCase()
                        .includes(params.inputValue.toLowerCase()) === true
            );

            if (a.length > 0) {
                this.films = a;
            } else {
                this.getFilmName(params.inputValue);
            }
        } else {
            this.clearObjects('starships');
            const a = this.starships.filter(
                obj =>
                    obj.name
                        .toLowerCase()
                        .includes(params.inputValue.toLowerCase()) === true
            );

            if (a.length > 0) {
                this.starships = a;
            } else {
                this.getStarshipName(params.inputValue);
            }
        }
    }

    addFavorite(item) {
        const obj = {
            id: null,
            nome: item.name,
            categoria: 'Star Wars',
            detalhes: item.url
        };

        this.favoritos
            .addFavorito(obj)
            .subscribe(
                sucess =>
                    this.notificacaoService.showSuccess(
                        `O Item ${obj.nome} foi adicionado aos favoritos`,
                        'Sucesso'
                    ),
                error => console.log(error)
            );
    }
}

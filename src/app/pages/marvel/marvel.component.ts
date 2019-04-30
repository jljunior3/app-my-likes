import { Component, OnInit } from '@angular/core';

import { MarvelApiService } from '../../../services/marvel-api.service';
import { MenuService } from '../../../services/menu.service';
import { FavoritosService } from '../../../services/favoritos.service';
import { NotificacaoService } from '../../../services/notificacao.service';

@Component({
    selector: 'app-marvel',
    templateUrl: './marvel.component.html',
    styleUrls: ['./marvel.component.scss']
})
export class MarvelComponent implements OnInit {
    people: any = [];
    optionsSelect;
    loading: boolean;

    constructor(
        private api: MarvelApiService,
        private menuService: MenuService,
        private notificacaoService: NotificacaoService,
        private favoritos: FavoritosService
    ) {}

    ngOnInit() {
        this.getPeople();

        this.menuService.getCurrentMenu('marvel');
        this.optionsSelect = [{ name: 'Nome', value: 'name' }];
    }

    getPeople() {
        this.loading = true;
        this.api.getPeople().subscribe((arg: any) => {
            this.people = arg.data.results;
            this.loading = false;
        });
    }

    getPeopleName(param) {
        this.loading = true;
        this.api.getPeopleName(param).subscribe((arg: any) => {
            this.people = arg.data.results;
            this.loading = false;
        });
    }

    search(params) {
        if (params.inputValue === '') {
            return this.getPeople();
        }

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
    }

    addFavorite(item) {
        const obj = {
            id: null,
            nome: item.name,
            categoria: 'Marvel',
            detalhes: item.urls.length > 0 ? item.urls[0].url : null
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

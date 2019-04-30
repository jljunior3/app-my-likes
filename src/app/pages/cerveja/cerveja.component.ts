import { Component, OnInit } from '@angular/core';

import { BeerApiService } from '../../../services/beer-api.service';
import { FavoritosService } from '../../../services/favoritos.service';
import { NotificacaoService } from '../../../services/notificacao.service';
import { MenuService } from '../../../services/menu.service';

@Component({
    selector: 'app-cerveja',
    templateUrl: './cerveja.component.html',
    styleUrls: ['./cerveja.component.scss']
})
export class CervejaComponent implements OnInit {
    beers: any = [];
    optionsSelect;
    loading: boolean;

    constructor(
        private api: BeerApiService,
        private favoritos: FavoritosService,
        private notificacaoService: NotificacaoService,
        private menuService: MenuService
    ) {}

    ngOnInit() {
        this.getBeers();
        this.menuService.getCurrentMenu('cerveja');
        this.optionsSelect = [
            { name: 'Nome', value: 'beer_name' },
            { name: 'ABV maior que', value: 'abv_gt' },
            { name: 'IBU maior que', value: 'ibu_gt' },
            { name: 'EBC maior que', value: 'ebc_gt' }
        ];
    }

    getBeers() {
        this.loading = true;
        this.api.getBeers().subscribe(arg => {
            this.beers = arg;
            this.loading = false;
        });
    }

    getBeersParam(option, value) {
        this.loading = true;
        this.api.getBeersName(option, value).subscribe(arg => {
            this.beers = arg;
            this.loading = false;
        });
    }

    search(params) {
        if (params.inputValue === '') {
            return this.getBeers();
        }

        if (params.selectValue === 'name') {
            const a = this.beers.filter(
                obj =>
                    obj.name
                        .toLowerCase()
                        .includes(params.inputValue.toLowerCase()) === true
            );
            if (a.length > 0) {
                this.beers = a;
            } else {
                this.getBeers();
            }
        }

        this.getBeersParam(params.selectValue, params.inputValue);
    }

    addFavorite(item) {
        const obj = {
            id: null,
            nome: item.name,
            categoria: 'Cervejas',
            detalhes: null
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

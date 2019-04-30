import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FavoritosService } from '../../../services/favoritos.service';
import { MenuService } from '../../../services/menu.service';
import { NotificacaoService } from '../../../services/notificacao.service';

@Component({
    selector: 'app-favoritos',
    templateUrl: './favoritos.component.html',
    styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit, AfterViewInit {
    favoritos: any;

    constructor(
        private api: FavoritosService,
        private menuService: MenuService,
        private notificacaoService: NotificacaoService
    ) {}

    ngOnInit() {
        this.getFavoritos();
        this.menuService.getCurrentMenu('favoritos');
    }

    getFavoritos() {
        this.api.getFavoritos().subscribe(arg => {
            this.favoritos = arg;
        });
    }

    orderBy(order) {
        if (order === 'categoria') {
            this.favoritos.sort((a, b) =>
                a.categoria > b.categoria
                    ? 1
                    : b.categoria > a.categoria
                    ? -1
                    : 0
            );
        } else {
            this.favoritos.sort((a, b) =>
                a.nome > b.nome ? 1 : b.nome > a.nome ? -1 : 0
            );
        }
    }

    deleteFavorito(item) {
        return this.api.deleteFavorito(item.id).subscribe(
            sucess => {
                this.notificacaoService.showSuccess(
                    `O Item ${item.nome} foi removido dos favoritos`,
                    'Sucesso'
                );
                this.getFavoritos();
            },
            error => console.log(error)
        );
    }
}

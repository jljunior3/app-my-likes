import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../../services/menu.service';

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    menu = '';

    constructor(private menuService: MenuService) {}

    ngOnInit() {
        this.menuService.menuCurrent.subscribe(menu => (this.menu = menu));
    }
}

import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MenuService {
    menuCurrent = new EventEmitter<string>(true);

    constructor() {}

    getCurrentMenu(menu) {
        this.menuCurrent.emit(menu);
    }
}

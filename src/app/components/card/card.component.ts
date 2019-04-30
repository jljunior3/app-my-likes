import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
    @Input() item;
    @Input() title;
    @Input() show;
    @Output() favoriteItem = new EventEmitter();

    constructor() {}

    ngOnInit() {}

    addFavorite(item) {
        this.favoriteItem.emit(item);
    }
}

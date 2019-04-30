import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    @Input() options: any[];
    @Output() params = new EventEmitter();

    constructor() {}

    ngOnInit() {}

    search(inputValue, selectValue) {
        this.params.emit({ inputValue, selectValue });
    }
}

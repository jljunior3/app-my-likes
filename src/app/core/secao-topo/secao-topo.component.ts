import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'secao-topo',
    templateUrl: './secao-topo.component.html',
    styleUrls: ['./secao-topo.component.css']
})
export class SecaoTopoComponent implements OnInit {
    constructor(private route: Router) {}

    texto: string;
    urlHome: boolean;

    ngOnInit() {
        this.urlHome = location.pathname === '/' ? true : false;
    }
}

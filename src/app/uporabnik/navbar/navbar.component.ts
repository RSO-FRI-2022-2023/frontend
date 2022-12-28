import {Component, OnInit} from '@angular/core';
import {Service} from "../services/service";
import {ActivatedRoute} from "@angular/router";
import {Valuta} from "../models/valuta";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    valute: Valuta[]

    constructor(private service: Service,
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.getValute();
    }

    getValute() {
        this.service.getValute()
            .subscribe(valute => {
                this.valute = valute;
                console.log(this.valute);
            });
    }

}

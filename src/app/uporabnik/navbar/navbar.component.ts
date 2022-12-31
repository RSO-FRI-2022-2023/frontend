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
    selectedValuta: Valuta = null

    constructor(private service: Service,
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.getValute();
    }

    getValute() {
        let savedValuta = this.service.getFromCookies("valuta")

        if (savedValuta == null || savedValuta.length == 0) {
            savedValuta = "EUR";
        }

        console.log(savedValuta);

        this.service.getValute()
            .subscribe(valute => {
                this.valute = valute.result;

                this.valute.forEach(valuta => {
                    if (valuta.shortName == savedValuta && this.selectedValuta == null) {
                        this.selectedValuta = valuta;
                        this.service.saveValutaName(savedValuta);

                        console.log(this.selectedValuta)
                    }
                });
            });
    }

    changeValute(event) {
        this.service.getChangeRate(event)
            .subscribe(change => {
                console.log(change);

                this.service.saveValutaName(event);
                this.service.saveValutaRate(change.result.rate);
            });
    }
}

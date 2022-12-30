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
        this.service.getValute()
            .subscribe(valute => {
                this.valute = valute.result;
                console.log(this.valute);

                this.valute.forEach(valuta => {
                   if(valuta.shortName == "EUR" && this.selectedValuta == null) {
                       this.selectedValuta = valuta;
                   }
                });
            });
    }

    changeValute(event) {
        console.log(event.value)
    }
}

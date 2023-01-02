import {Component, OnInit} from '@angular/core';
import {Service} from "../services/service";
import {Router} from "@angular/router";
import {Kosarica} from "../models/kosarica";
import {Izdelek} from "../models/izdelek";

@Component({
    selector: 'app-kosarica',
    templateUrl: './kosarica.component.html',
    styleUrls: ['./kosarica.component.css']
})
export class KosaricaComponent implements OnInit {

    kosarica: Kosarica;
    valuta: string = "EUR";
    rate: number = 1.0;
    cene = 0.0;

    constructor(private service: Service,
                private router: Router) {
    }

    ngOnInit(): void {
        this.getKosarica();

        this.service.rate.subscribe(rate => this.rate = rate);
        this.service.valuta.subscribe(valuta => this.valuta = valuta);
    }

    getKosarica(): void {
        this.service
            .getKosaricoByUser()
            .subscribe(kosarica => {
                this.kosarica = kosarica;

                this.getCeneByTrgovina();
            });
    }

    naPodrobnosti(izdelek: Izdelek): void {
        this.router.navigate(['/izdelki', izdelek.id]);
    }

    odstraniIzKosarice(izdelek: Izdelek): void {
        this.service
            .zbrisiIzdelekIzKosarice(this.kosarica, izdelek)
            .subscribe(success => {
                console.log(success);
                this.getKosarica();
            });
    }

    convertCena(cena) {
        return Math.round((cena * this.rate) * 1e2) / 1e2;
    }

    getCeneByTrgovina() {
        this.cene = 0.0;

        this.kosarica.izdelki.forEach(izdelek => {
            this.service
                .getCeneIzdelka(izdelek.id)
                .subscribe(ceneIzdelka => {
                    let lowest = 10000000.0
                    ceneIzdelka.forEach(cena => {
                        if (cena.cena <= lowest) {
                            lowest = cena.cena;
                        }
                    });

                    this.cene += lowest;
                });
        });

        console.log(this.cene);
    }
}

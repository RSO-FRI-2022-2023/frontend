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

    constructor(private service: Service,
                private router: Router) {
    }

    ngOnInit(): void {
        this.getKosarica();
    }

    getKosarica(): void {
        this.service
            .getKosaricoByUser()
            .subscribe(kosarica => {
                console.log(kosarica);
                this.kosarica = kosarica;
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
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Izdelek } from '../models/izdelek';
import { Service } from '../services/service';

@Component({
  selector: 'app-izdelki',
  templateUrl: './izdelki.component.html',
  styleUrls: ['./izdelki.component.css']
})
export class IzdelkiComponent implements OnInit {
  izdelki: Izdelek[];
  izdelek: Izdelek;

  constructor(private service: Service,
    private router: Router) {
}

    ngOnInit(): void {
        this.getIzdelki();
    }
  
    getIzdelki(): void {
      this.service
          .getIzdelki()
          .subscribe(izdelki => this.izdelki = izdelki);
    }

    naPodrobnosti(izdelek: Izdelek): void {
      this.izdelek=izdelek
      this.router.navigate(['/izdelki', this.izdelek.id]);
    }

    dodajMedPriljubljene(izdelek: Izdelek): void {
      this.service
          .dodajMedPriljubljene(izdelek)
          .subscribe();
    }
    dodajVKosarico(izdelek: Izdelek): void {
      //TODO
    }
}

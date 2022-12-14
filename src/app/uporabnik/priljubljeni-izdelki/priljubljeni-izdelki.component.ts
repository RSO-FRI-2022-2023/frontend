import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../services/service';

@Component({
  selector: 'app-priljubljeni-izdelki',
  templateUrl: './priljubljeni-izdelki.component.html',
  styleUrls: ['./priljubljeni-izdelki.component.css']
})
export class PriljubljeniIzdelkiComponent implements OnInit {

  izdelki: any[];

  constructor(private service: Service,
    private router: Router) {
}
  ngOnInit(): void {
    this.getIzdelki();
}

  getIzdelki(): void {
    this.service
        .getNajboljPriljubljene()
        .subscribe(izdelki => this.izdelki = izdelki);
  }

}

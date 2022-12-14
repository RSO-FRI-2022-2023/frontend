// import {Component, OnInit} from '@angular/core';
// import {Router} from '@angular/router';

// import {Uporabnik} from './models/uporabnik';
// import {Service} from './services/service';

// @Component({
//     moduleId: module.id,
//     selector: 'vsi-uporabniki',
//     templateUrl: 'uporabniki.component.html'
// })
// export class UporabnikiComponent implements OnInit {
//     uporabniki: Uporabnik[];
//     uporabnik: Uporabnik;

//     constructor(private uporabnikService: Service,
//                 private router: Router) {
//     }

//     ngOnInit(): void {
//         this.getUporabniki();
//     }

//     getUporabniki(): void {
//         this.uporabnikService
//             .getUporabniki()
//             .subscribe(uporabniki => this.uporabniki = uporabniki);
//     }

//     naPodrobnosti(uporabnik: Uporabnik): void {
//         this.uporabnik = uporabnik;
//         this.router.navigate(['/uporabniki', this.uporabnik.id]);
//     }

//     delete(uporabnik: Uporabnik): void {
//         this.uporabnikService
//             .delete(uporabnik.id)
//             .subscribe(uporabnikId => this.uporabniki = this.uporabniki.filter(u => u.id !== uporabnikId));
//     }

//     dodajUporabnika(): void {
//         this.router.navigate(['/dodajuporabnika']);
//     }

// }

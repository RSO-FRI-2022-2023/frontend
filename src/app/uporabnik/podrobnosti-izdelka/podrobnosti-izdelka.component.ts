import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Cena } from '../models/cena';
import { Izdelek } from '../models/izdelek';
import { Service } from '../services/service';

@Component({
  selector: 'app-podrobnosti-izdelka',
  templateUrl: './podrobnosti-izdelka.component.html',
  styleUrls: ['./podrobnosti-izdelka.component.css']
})
export class PodrobnostiIzdelkaComponent implements OnInit {
  izdelek:Izdelek;
  cene:Cena[];
  najblizjaTrgovina:any;
  lat:number = 46.0501557;
  lng:number = 14.4689205;
  
  

  constructor(private service: Service,
              private route: ActivatedRoute) {
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: any) => {
        if (position) {
          console.log("Latitude: " + position.coords.latitude +
            "Longitude: " + position.coords.longitude);
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
        }
      });
    }
  }

  ngOnInit(): void {
    this.getLocation();
    this.route.params.pipe(
        switchMap((params: Params) => this.service.getIzdelek(+params['id'])))
        .subscribe(izdelek => this.izdelek = izdelek);
    this.route.params.pipe(
      switchMap((params: Params) => this.service.getCeneIzdelka(+params['id'])))
      .subscribe(cene => this.cene = cene.sort((c1,c2) => {
        if (c1.cena > c2.cena) {
            return 1;
        }
    
        if (c1.cena < c2.cena) {
            return -1;
        }
    
        return 0;
    }));

    this.service
    .getNajblizjeTrgovine(this.lat, this.lng)
    .subscribe(najblizjaTrgovina => this.najblizjaTrgovina = najblizjaTrgovina);
  }
}



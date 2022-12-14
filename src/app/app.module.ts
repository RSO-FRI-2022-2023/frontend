import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {Service} from './uporabnik/services/service';
import { NavbarComponent } from './uporabnik/navbar/navbar.component';
import { IzdelkiComponent } from './uporabnik/izdelki/izdelki.component';
import { PriljubljeniIzdelkiComponent } from './uporabnik/priljubljeni-izdelki/priljubljeni-izdelki.component';
import { KosaricaComponent } from './uporabnik/kosarica/kosarica.component';
import { OgrodjeComponent } from './uporabnik/ogrodje/ogrodje.component';
import { PodrobnostiIzdelkaComponent } from './uporabnik/podrobnosti-izdelka/podrobnosti-izdelka.component';


@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        NavbarComponent,
        IzdelkiComponent,
        PriljubljeniIzdelkiComponent,
        KosaricaComponent,
        OgrodjeComponent,
        PodrobnostiIzdelkaComponent
    ],
    providers: [Service],
    bootstrap: [OgrodjeComponent]
})
export class AppModule {
}


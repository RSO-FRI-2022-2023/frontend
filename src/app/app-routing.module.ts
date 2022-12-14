import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { IzdelkiComponent } from './uporabnik/izdelki/izdelki.component';
import { PriljubljeniIzdelkiComponent } from './uporabnik/priljubljeni-izdelki/priljubljeni-izdelki.component';
import { KosaricaComponent } from './uporabnik/kosarica/kosarica.component';
import { PodrobnostiIzdelkaComponent } from './uporabnik/podrobnosti-izdelka/podrobnosti-izdelka.component';

const routes: Routes = [
    {path: '', redirectTo: '/izdelki', pathMatch: 'full'},
    {path: 'izdelki', component: IzdelkiComponent},
    {path: 'izdelki/:id', component: PodrobnostiIzdelkaComponent},
    {path: 'priljubljeni', component: PriljubljeniIzdelkiComponent},
    {path: 'kosarica', component: KosaricaComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

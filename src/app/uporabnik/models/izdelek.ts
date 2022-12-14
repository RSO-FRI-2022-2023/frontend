import { Cena } from "./cena";
import { PriljubljenIzdelek } from "./priljubljenIzdelek";

export class Izdelek {
    id: number;
    naziv: string;
    kategorija: string;
    cene: Cena[]
    priljubljeniIzdelki:PriljubljenIzdelek[]
}

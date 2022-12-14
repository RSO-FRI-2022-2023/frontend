import { Izdelek } from "./izdelek";
import { Trgovina } from "./trgovina";

export class Cena {
    id: number;
    izdelek: Izdelek;
    trgovina: Trgovina;
    cena: number;
    discount: number;
}

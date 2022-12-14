import { Izdelek } from "./izdelek";
import { Uporabnik } from "./uporabnik";

export class Kosarica {
    id: number;
    izdelki: Izdelek[];
    uporabnik: Uporabnik;
}

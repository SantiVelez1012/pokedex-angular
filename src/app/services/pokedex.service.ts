import { Injectable } from "@angular/core";
import { GeneralPokeModel } from "../models/general-poke";



@Injectable({
    providedIn:'root'
});

export class PokedexService{
    allPokes!:GeneralPokeModel[];
    
}



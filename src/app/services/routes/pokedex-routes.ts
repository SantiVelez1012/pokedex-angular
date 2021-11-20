import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GeneralPokeModel } from "src/app/models/general-poke";

@Injectable({
    providedIn:'root'
})

export class PokedexRoutes{

    constructor(private http:HttpClient){}

    urlAllPokes: string ="https://pokeapi.co/api/v2/pokemon?limit=151" ;

    getfirst151Pokemon(){
        return this.http.get<any>(this.urlAllPokes);
    }

    getPokemonByUrl(url:string){
        return this.http.get<any>(url);
    }



}
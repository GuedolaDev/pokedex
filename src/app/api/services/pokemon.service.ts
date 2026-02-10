import { HttpClient } from "@angular/common/http";
import { PokemonListResponse, PokemonModel } from "../models/pokemon.model";
import { map, Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class PokemonService {

    constructor(private http: HttpClient) { }

    getPokemonList(): Observable<PokemonModel[]> {
        return this.http
            .get<PokemonListResponse>('https://pokeapi.co/api/v2/pokemon/')
            .pipe(
                map(response => response.results)
            );
    }

}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './models/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {

  private listaPokemons: Pokemon[];
  private url = 'http://pokemonsgo.herokuapp.com'

  constructor(private httpClient: HttpClient) {
    this.listaPokemons = []; //inicializa o array de pokemons
  }

  listar() {
    return this.httpClient.get<any[]>(this.url);
  }

}


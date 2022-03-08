import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './models/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {

  private url = 'http://pokemonsgo.herokuapp.com'

  constructor(private httpClient: HttpClient) {

  }

  listar() {
    return this.httpClient.get<Pokemon[]>(this.url);
  }

  getPokemon(id:string){
    return this.httpClient.get(`${this.url}/?id=${id}`)
  }

}


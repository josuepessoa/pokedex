
import { Component, OnInit ,Input, ViewChild} from '@angular/core';
import { PokedexService } from '../pokedex.service';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  @Input()
  pokemons: Pokemon[] = [];

  constructor(private service: PokedexService ) { }

  ngOnInit(): void {
    this.service.listar().subscribe((pokemons: any) => {
      this.pokemons=pokemons.pokemon
    });
  }

}


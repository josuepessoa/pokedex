
import { Component, OnInit ,Input, ViewChild} from '@angular/core';
import { PokedexService } from '../pokedex.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  @Input()
  pokemons: any = [];

  constructor(private service: PokedexService ) { }

  ngOnInit(): void {
    this.service.listar().subscribe((pokemons: any) => {
      let poke = (pokemons.pokemon);
      this.pokemons=pokemons.pokemon
    });
  }

  onClick(){
    alert("clicou")
  }

}


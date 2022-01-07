import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { PokedexService } from '../pokedex.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  @Input()
  pokemons: any = [];

  constructor(private service: PokedexService , private router: Router) {}

  ngOnInit(): void {
    this.service.listar().subscribe((pokemons: any) => {
      this.pokemons = pokemons.pokemon;
    });
  }

  onClick(id:string) {
    this.router.navigateByUrl(`/details/${id}`);
  }

}



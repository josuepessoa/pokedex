import { Component, OnInit, Input } from '@angular/core';
import { PokedexService } from '../pokedex.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { PoDynamicViewField } from '@po-ui/ng-components';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  @Input()
  pokemon: any = [];
  pokemons: any = [];
  constructor(
    private httpClient: HttpClient,
    private service: PokedexService,
    private route: ActivatedRoute,
  ) {}

  private url = 'http://pokemonsgo.herokuapp.com';

  ngOnInit(): void {
    this.pokemon = this.route.params.subscribe((params) =>
      this.loadData(params['id'])
    );
  }

  private loadData(id: string) {

    this.pokemon = this.httpClient
      .get(`${this.url}/?id=${id}`)
      .subscribe((response) => (this.pokemon = response));
  }

  fields: Array<PoDynamicViewField> = [
    { property: 'num', label: 'Número', divider: 'Dados Gerais', gridColumns: 4 },
    { property: 'name', label: 'Nome', gridColumns: 4 },
    { property: 'height', label: 'Altura', divider: 'Detalhes', gridColumns: 4 },
    { property: 'weight', label: 'Peso',  gridColumns: 4 },
    { property: 'egg', label: 'KMs ovo',  gridColumns: 4 }
  ];
}

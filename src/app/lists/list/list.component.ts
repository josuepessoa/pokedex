import { Component, OnInit ,Input, ViewChild} from '@angular/core';
import { PokedexService } from '../../pokedex.service';
import { PoTableAction  } from '@po-ui/ng-components';
import { Pokemon } from '../../models/pokemon.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input()
  pokemons: Pokemon[] = [];
  detailedUser: any = [];;

  constructor(
    public service: PokedexService, private router: Router
     ) { }

  ngOnInit(): void {
    this.service.listar().subscribe((pokemons: any) => {
      this.pokemons=pokemons.pokemon
    });
  }

  onClick(ret : any) {
    this.router.navigateByUrl(`/details/${ret.id}`);
  }

  readonly actions: Array<PoTableAction> = [
    {
      label: 'Detalhar',
      action: this.onClick.bind(this),
      icon: 'po-icon-eye'
    },
    {
      label: 'Cancelar',
      icon: 'po-icon-close'
    }
  ];

}

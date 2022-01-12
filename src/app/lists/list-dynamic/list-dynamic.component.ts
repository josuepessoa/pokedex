import { Component, OnInit ,Input, ViewChild} from '@angular/core';
import { PokedexService } from '../../pokedex.service';
import { PoPageDynamicTableCustomTableAction } from '@po-ui/ng-templates';
import { Pokemon } from '../../models/pokemon.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-dynamic',
  templateUrl: './list-dynamic.component.html',
  styleUrls: ['./list-dynamic.component.scss']
})
export class ListDynamicComponent implements OnInit {

  @Input()
  pokemons: Pokemon[] = [];
  detailedUser: any = [];;

  constructor(
    public service: PokedexService,
    private router: Router
     ) { }

  ngOnInit(): void {
    this.service.listar().subscribe((pokemons: any) => {
      this.pokemons=pokemons.pokemon
    });
  }

  onClick(ret : any) {
    this.router.navigateByUrl(`/details/${ret.id}`);
  }

  tableCustomActions: Array<PoPageDynamicTableCustomTableAction> = [
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

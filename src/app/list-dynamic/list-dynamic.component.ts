import { Component, OnInit ,Input, ViewChild} from '@angular/core';
import { PokedexService } from '../pokedex.service';
import { PoPageDynamicTableCustomTableAction } from '@po-ui/ng-templates';
import { Pokemon } from '../models/pokemon.model';

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
    private service: PokedexService,
     ) { }

  ngOnInit(): void {
    this.service.listar().subscribe((pokemons: any) => {
      let poke = (pokemons.pokemon);
      this.pokemons=pokemons.pokemon

    });
  }

  onClick(ret:any){
    alert("clicou em detalhar" + ret.id)
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

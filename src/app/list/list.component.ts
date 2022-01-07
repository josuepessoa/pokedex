import { Component, OnInit ,Input, ViewChild} from '@angular/core';
import { PokedexService } from '../pokedex.service';
import { PoTableAction  } from '@po-ui/ng-components';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input()
  pokemons: any = [];
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

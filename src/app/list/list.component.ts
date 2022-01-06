import { Component, OnInit ,Input, ViewChild} from '@angular/core';
import { PokedexService } from '../pokedex.service';
import { PoPageDynamicTableCustomTableAction  } from '@po-ui/ng-templates';

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

  tableCustomActions: Array<PoPageDynamicTableCustomTableAction> = [
    {
      label: 'Details',
      action: this.onClick.bind(this),

    }
  ];

}

import { Component, OnInit } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  readonly menus: Array<PoMenuItem> = [
    {
      label: 'Home',
      action: this.onClick.bind(this),
      link: '/home',
      icon: 'po-icon-home',
      shortLabel: 'Home',
    },
    {
      label: 'Cards',
      action: this.onClick.bind(this),
      link: '/card',
      icon: 'po-icon-grid',
      shortLabel: 'Cards',
    },
    {
      label: 'Listas',
      action: this.onClick.bind(this),
      link: '/list',
      icon: 'po-icon-list',
      shortLabel: 'Listas',
      subItems: [
        { label: 'Table', action: this.onClick.bind(this), link: '/list' },
        {
          label: 'Dynamic Table',
          action: this.onClick.bind(this),
          link: '/list-dynamic',
        },
      ],
    },
  ];

  private onClick() {
    console.log(this);
    //this.router.navigate(['/home']);
  }

}

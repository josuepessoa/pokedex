import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PoNavbarIconAction } from '@po-ui/ng-components';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router) {}

  readonly actions: Array<PoNavbarIconAction> = [
    {
      link: 'https://wa.me/5511993816793',
      icon: 'po-icon-social-whatsapp',
      label: 'WhatsApp',
    },
    {
      link: 'https://www.instagram.com/josupessoa/',
      icon: 'po-icon-social-instagram',
      label: 'Instagram',
    },
    {
      link: 'https://github.com/josuepessoa',
      icon: 'po-icon-social-github',
      label: 'GitHub',
    },
  ];

  readonly menus: Array<PoMenuItem> = [
    {
      label: 'Home',
      link: '/home',
      icon: 'po-icon-home',
      shortLabel: 'Home',
    },
    {
      label: 'Cards',
      link: '/card',
      icon: 'po-icon-grid',
      shortLabel: 'Cards',
    },
    {
      label: 'Listas',
      link: '/list',
      icon: 'po-icon-list',
      shortLabel: 'Listas',
      subItems: [
        { label: 'Table', link: '/list' },
        {
          label: 'Dynamic Table',
          link: '/list-dynamic',
        },
      ],
    },
  ];
}

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

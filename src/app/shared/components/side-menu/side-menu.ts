import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { reactiveRoutes } from '../../../reactive/reactive.routes';

interface MenuItem {
  title: string,
  route: string
}

const reactiveMenuItems = reactiveRoutes[0].children ?? [];

@Component({
  selector: 'app-side-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu.html'
})
export class SideMenu {

  reactiveMenu: MenuItem[] = reactiveMenuItems
    .filter(item => item.path !== '**')
    .map(item => ({
      title: `${item.title}`,
      route: `reactive/${item.path}`
    }));

  authMenu: MenuItem[] = [
    {
      title: 'Registro',
      route: './auth'
    }
  ];

  countryMenu: MenuItem[] = [
    {
      title: 'Países',
      route: './country'
    }
  ];

}

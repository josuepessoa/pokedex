import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PoModule  } from '@po-ui/ng-components';
import { PoModalModule } from '@po-ui/ng-components';
import { PoToolbarModule } from '@po-ui/ng-components';

const routes: Routes = [

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'cards',
    loadChildren: () =>
      import('./cards/cards.module').then((m) => m.CardsModule),
  },
  {
    path: 'lists',
    loadChildren: () =>
      import('./lists/lists.module').then((m) => m.ListsModule),
  },
  {
    path: 'details',
    loadChildren: () =>
      import('./details/details.module').then((m) => m.DetailsModule),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes),BrowserAnimationsModule,PoModule,PoModalModule,PoToolbarModule ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { ListDynamicComponent } from './list-dynamic/list-dynamic.component';
import { ListComponent } from './list/list.component';
import { CardsComponent } from './cards/cards.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PoModule  } from '@po-ui/ng-components';
import { PoModalModule } from '@po-ui/ng-components';
import { PoToolbarModule } from '@po-ui/ng-components';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'details',
    component: DetailsComponent,
  },
  {
    path: 'card',
    component: CardsComponent,
  },
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'list-dynamic',
    component: ListDynamicComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),BrowserAnimationsModule,PoModule,PoModalModule,PoToolbarModule ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

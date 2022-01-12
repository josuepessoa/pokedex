import { ListComponent } from './list/list.component';
import { ListDynamicComponent } from './list-dynamic/list-dynamic.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'list-dynamic',
    component: ListDynamicComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListsRoutingModule {}

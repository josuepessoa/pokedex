import { PokedexService } from './pokedex.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { CardsComponent } from './cards/cards.component';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { ListDynamicComponent } from './list-dynamic/list-dynamic.component';
import { MenuComponent } from './menu/menu.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    CardsComponent,
    ListComponent,
    ListDynamicComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    RouterModule.forRoot([]),
    PoTemplatesModule
  ],
  providers: [PokedexService],
  bootstrap: [AppComponent]
})
export class AppModule { }

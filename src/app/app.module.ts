import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { HeaderComponent } from './core/header/header.component';
import { MainComponent } from './core/main/main.component';
import { SecaoTopoComponent } from './core/secao-topo/secao-topo.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './core/home/home.component';
import { CervejaComponent } from './pages/cerveja/cerveja.component';
import { StarWarsComponent } from './pages/star-wars/star-wars.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { MarvelComponent } from './pages/marvel/marvel.component';

import { ToastrModule } from 'ngx-toastr';
import { CardComponent } from './components/card/card.component';
import { SearchComponent } from './components/search/search.component';
import { LoaderComponent } from './shared/loader/loader.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MainComponent,
        SecaoTopoComponent,
        FooterComponent,
        HomeComponent,
        MarvelComponent,
        CervejaComponent,
        StarWarsComponent,
        FavoritosComponent,
        CardComponent,
        SearchComponent,
        LoaderComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}

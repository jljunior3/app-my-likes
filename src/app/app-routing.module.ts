import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { StarWarsComponent } from './pages/star-wars/star-wars.component';
import { CervejaComponent } from './pages/cerveja/cerveja.component';
import { MarvelComponent } from './pages/marvel/marvel.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'starwars', component: StarWarsComponent },
    { path: 'cervejas', component: CervejaComponent },
    { path: 'marvel', component: MarvelComponent },
    { path: 'favoritos', component: FavoritosComponent },
    { path: '**', redirectTo: '/' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

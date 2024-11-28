import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { AboutComponent } from './about/about.component';
import { CategoriesAddComponent } from './categories-add/categories-add.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeAddComponent } from './recipe-add/recipe-add.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'recipe', component: RecipeComponent  },
  { path: 'favourites', component: FavouritesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'categories-add', component: CategoriesAddComponent },
  { path: '', redirectTo: '/categories', pathMatch: 'full' },
  { path: 'recipe-add', component: RecipeAddComponent },
  { path: '', redirectTo: '/recipe', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' } 
];

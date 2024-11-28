// import { Component } from '@angular/core';
// import { HeaderComponent } from '../header/header.component';
// @Component({
//   selector: 'app-recipe',
//   imports: [HeaderComponent],
//   templateUrl: './recipe.component.html',
//   styleUrl: './recipe.component.css'
// })
// export class RecipeComponent {

// }

// import { Component, OnInit } from '@angular/core';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { Router } from '@angular/router';
// import { HeaderComponent } from '../header/header.component';
// import { FormsModule } from '@angular/forms';
// @Component({
//   selector: 'app-recipe',
//   standalone: true,
//   imports: [HeaderComponent,FormsModule,HttpClientModule],
//   templateUrl: './recipe.component.html',
//   styleUrls: ['./recipe.component.css'],
// })
// export class RecipeComponent implements OnInit {
//   readonly apiUrl = 'http://localhost:8080/api/recipes';
//   recipes: any[] = [];

//   constructor(private http: HttpClient, private router: Router) {}

//   ngOnInit(): void {
//     this.fetchAllRecipes();
//   }

//   fetchAllRecipes() {
//     this.http.get<any[]>(this.apiUrl).subscribe((data) => {
//       this.recipes = data;
//     });
//   }

//   viewRecipe(id: number) {
//     this.router.navigate([`/recipe-detail/${id}`]);
//   }

//   navigateToAddRecipe() {
//     this.router.navigate(['/recipe-add']);
//   }
// }
//works
import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';
import { Recipe } from '../models/recipe';  // Define a Recipe interface (optional)

// @Component({
//   selector: 'app-recipe',
//   standalone: true,
//   imports: [HeaderComponent, CommonModule, FormsModule, HttpClientModule],
//   templateUrl: './recipe.component.html',
//   styleUrls: ['./recipe.component.css'],
// })
// export class RecipeComponent implements OnInit {
//   readonly apiUrl = 'http://localhost:8080/api/recipes'; // API endpoint for recipes
//   recipes: any[] = []; // Array to store fetched recipes
//   fetchedRecipe: any = null;

//   constructor(private http: HttpClient, private router: Router) {}

//   ngOnInit(): void {
//     this.fetchAllRecipes(); // Fetch recipes when the component is initialized
//   }

//   fetchAllRecipes() {
//     this.http.get<any[]>(this.apiUrl).subscribe((data) => {
//       this.recipes = data; // Store fetched recipes in the recipes array
//     });
//   }

//   fetchRecipeById(id: number) {
//     this.http.get<Recipe>(`${this.apiUrl}/${id}`).subscribe(
//       (data: Recipe) => {
//         this.fetchedRecipe = data;
//         alert(
//           `Recipe Details:\nID: ${data.id}\nName: ${data.name}\nDescription: ${data.description}`
//         );
//       },
//       (error) => {
//         alert('Recipe not found.');
//       }
//     );
//   }

//   navigateToAddRecipe() {
//     this.router.navigate(['/recipe-add']); // Navigate to the "Add Recipe" page
//   }
// }

@Component({
  selector: 'app-recipe',  // Updated selector here
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule,HeaderComponent],
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  readonly apiUrl = 'http://localhost:8080/api/recipes';
  recipes: any[] = [];
  fetchedRecipe: any = null;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.fetchAllRecipes();
  }

  fetchAllRecipes() {
    this.http.get<any[]>(this.apiUrl).subscribe((data) => {
      this.recipes = data;
    });
  }

  fetchRecipeById(id: number) {
    this.http.get<Recipe>(`${this.apiUrl}/${id}`).subscribe(
      (data: Recipe) => {
        this.fetchedRecipe = data;
        alert(
          `Recipe Details:\nID: ${data.id}\nName: ${data.name}\nDescription: ${data.description}`
        );
      },
      (error) => {
        alert('Recipe not found.');
      }
    );
  }

  navigateToAddRecipe() {
    this.router.navigate(['/recipe-add']);  // Update route path if necessary
  }
}

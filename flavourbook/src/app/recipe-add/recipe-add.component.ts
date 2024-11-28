
import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recipe-add',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css'],
})
export class RecipeAddComponent {
  readonly apiUrl = 'http://localhost:8080/api/recipes';
  newRecipe = {
    name: '',
    description: '',
    ingredients: '',
    instructions: '',
    categoryId: 0,
  };
  selectedFile: File | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  saveRecipe() {
    const formData = new FormData();
    formData.append('name', this.newRecipe.name);
    formData.append('description', this.newRecipe.description);
    formData.append('ingredients', this.newRecipe.ingredients);
    formData.append('instructions', this.newRecipe.instructions);
    formData.append('categoryId', this.newRecipe.categoryId.toString());
    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }

    this.http.post(this.apiUrl, formData).subscribe(
      () => {
        alert('Recipe added successfully.');
        this.router.navigate(['/recipes']); // Navigate back to the recipe list
      },
      (error) => {
        alert('Error adding recipe.');
      }
    );
  }
}

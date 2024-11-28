// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-categories-add',
//   imports: [],
//   templateUrl: './categories-add.component.html',
//   styleUrl: './categories-add.component.css'
// })
// export class CategoriesAddComponent {

// }

import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-categories-add',
  standalone: true,
  imports: [FormsModule, HttpClientModule], // Add FormsModule here
  templateUrl: './categories-add.component.html',
  styleUrls: ['./categories-add.component.css'],
})
export class CategoriesAddComponent {
  readonly apiUrl = 'http://localhost:8080/api/categories';
  newCategoryName = '';
  newCategoryDescription = '';
  selectedFile: File | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  saveCategory() {
    if (this.newCategoryName && this.newCategoryDescription && this.selectedFile) {
      const formData = new FormData();
      formData.append('name', this.newCategoryName);
      formData.append('description', this.newCategoryDescription);
      formData.append('image', this.selectedFile);

      this.http.post(this.apiUrl, formData).subscribe(
        () => {
          alert('Category added successfully.');
          this.router.navigate(['/categories']);
        },
        (error) => {
          alert('Error adding category.');
        }
      );
    } else {
      alert('Please fill in all fields.');
    }
  }
}


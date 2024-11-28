// import { Component, OnInit } from '@angular/core';
// import { HttpClientModule, HttpClient } from '@angular/common/http';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { HeaderComponent } from '../header/header.component';

// @Component({
//   selector: 'app-categories',
//   standalone: true,
//   imports: [HeaderComponent, CommonModule, FormsModule, HttpClientModule], // Add HttpClientModule here
//   templateUrl: './categories.component.html',
//   styleUrls: ['./categories.component.css'],
// })
// export class CategoriesComponent implements OnInit {
//   readonly apiUrl = 'http://localhost:8080/api/categories';
//   categories: any[] = [];
//   searchId: number | null = null;
//   fetchedCategory: any = null;
//   newCategoryName = '';
//   newCategoryDescription = '';
//   selectedFile: File | null = null;

//   constructor(private http: HttpClient) {}

//   ngOnInit(): void {
//     this.fetchAllCategories();
//   }

//   fetchAllCategories() {
//     this.http.get<any[]>(this.apiUrl).subscribe((data) => {
//       this.categories = data;
//     });
//   }

//   fetchCategoryById() {
//     if (this.searchId !== null) {
//       this.http.get(`${this.apiUrl}/${this.searchId}`).subscribe(
//         (data) => {
//           this.fetchedCategory = data;
//         },
//         (error) => {
//           alert('Category not found.');
//         }
//       );
//     } else {
//       alert('Please enter a valid ID.');
//     }
//   }

//   onFileSelected(event: any) {
//     this.selectedFile = event.target.files[0];
//   }

//   addCategory() {
//     if (this.newCategoryName && this.newCategoryDescription && this.selectedFile) {
//       const formData = new FormData();
//       formData.append('name', this.newCategoryName);
//       formData.append('description', this.newCategoryDescription);
//       formData.append('image', this.selectedFile);

//       this.http.post(this.apiUrl, formData).subscribe(
//         () => {
//           alert('Category added successfully.');
//           this.fetchAllCategories();
//           this.newCategoryName = '';
//           this.newCategoryDescription = '';
//         },
//         (error) => {
//           alert('Error adding category.');
//         }
//       );
//     } else {
//       alert('Please fill in all fields.');
//     }
//   }
// }

import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';
import { Category } from '../models/category';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [HeaderComponent, CommonModule, FormsModule, HttpClientModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  readonly apiUrl = 'http://localhost:8080/api/categories';
  categories: any[] = [];
  fetchedCategory: any = null;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.fetchAllCategories();
  }

  fetchAllCategories() {
    this.http.get<any[]>(this.apiUrl).subscribe((data) => {
      this.categories = data;
    });
  }

  fetchCategoryById(id: number) {
    this.http.get<Category>(`${this.apiUrl}/${id}`).subscribe(
      (data: Category) => {
        this.fetchedCategory = data;
        alert(
          `Category Details:\nID: ${data.id}\nName: ${data.name}\nDescription: ${data.description}`
        );
      },
      (error) => {
        alert('Category not found.');
      }
    );
  }

  

  navigateToAddCategory() {
    this.router.navigate(['/categories-add']);
  }
}


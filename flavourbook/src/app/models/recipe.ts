export interface Recipe {
    id: number;
    name: string;
    description: string;
    ingredients: string[];
    instructions: string;
    categoryId: number;
    imagePath: string; // API path for the recipe image
  }
  
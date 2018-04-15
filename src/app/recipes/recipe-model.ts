export class RecipeModel {
    constructor(
        public recipe_id: number,
        public name: string,
        public cusine: string,
        public prep_time: number,
        public cook_time: number,
        public calories: number,
        public prep_instructions: string,
        public instructions: string,
        public author: string,
        public created_date: string,
        public tags: string,
        public ingredients: [string]
    ) {}
}

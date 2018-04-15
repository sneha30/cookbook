import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe-model';


@Component({
  selector: 'app-createrecipes',
  templateUrl: './createrecipes.component.html',
  styleUrls: ['./createrecipes.component.css']
})
export class CreaterecipesComponent implements OnInit {
  //recipe_model = new RecipeModel(1, 'pulihora', 'south indian', 30, 30, 0, '','','sneha','','',['']);
  submitted = false;
  onSubmit() { this.submitted = true; }
  myDate = new Date ()

  // TODO: Remove this when we're done
  //get diagnostic() { return JSON.stringify(this.recipe_model); }

  ngOnInit() {
  }

}

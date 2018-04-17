import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe-model';
import {DatepickerModule} from 'angular-mat-datepicker';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-createrecipes',
  templateUrl: './createrecipes.component.html',
  styleUrls: ['./createrecipes.component.css']
})
export class CreaterecipesComponent implements OnInit {
  //recipe_model = new RecipeModel(1, 'pulihora', 'south indian', 30, 30, 0, '','','sneha','','',['']);
 // recipe_model = new RecipeModel();
  submitted = false;
  onSubmit() { this.submitted = true;
  alert(RecipeModel)
  }
  myDate = new Date ()

  // TODO: Remove this when we're done
  //get diagnostic() { return JSON.stringify(this.recipe_model); }

  ngOnInit() {
  }

}

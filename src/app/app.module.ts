import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { MatInputModule, MatButtonModule, MatFormFieldModule } from '@angular/material';


import { AppComponent } from './app.component';

import { CreaterecipesComponent } from './recipes/createrecipes/createrecipes.component';
import { RecipesComponent } from './recipes/recipes.component';


@NgModule({
  declarations: [
    AppComponent,
    CreaterecipesComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatDatepickerModule, MatNativeDateModule,
    MatInputModule, MatButtonModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

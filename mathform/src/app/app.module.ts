import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EquationComponent } from './equation/equation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AnswerHightlightDirective } from './answer-hightlight.directive'

@NgModule({
  declarations: [
    AppComponent,
    EquationComponent,
    AnswerHightlightDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

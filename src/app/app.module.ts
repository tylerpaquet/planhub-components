import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlanhubButtonComponent } from './planhub-button/planhub-button.component';
import { PlanhubSelectComponent } from './planhub-select/planhub-select.component';
import { PlanhubInputComponent } from './planhub-input/planhub-input.component';
import { PlanhubCheckboxComponent } from './planhub-checkbox/planhub-checkbox.component';
import { PlanhubRadioButtonComponent } from './planhub-radio-button/planhub-radio-button.component';
import { PlanhubSlideToggleComponent } from './planhub-slide-toggle/planhub-slide-toggle.component';
import { PlanhubSearchComponent } from './planhub-search/planhub-search.component';
import { PlanhubChipListComponent } from './planhub-chip-list/planhub-chip-list.component';
import { PlanhubCardComponent } from './planhub-card/planhub-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanhubButtonComponent,
    PlanhubSelectComponent,
    PlanhubInputComponent,
    PlanhubCheckboxComponent,
    PlanhubRadioButtonComponent,
    PlanhubSlideToggleComponent,
    PlanhubSearchComponent,
    PlanhubChipListComponent,
    PlanhubCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

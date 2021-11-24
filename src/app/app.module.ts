import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './Table/Table.component';
import { FormComponent } from './Form/Form.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchFilterPipe } from './Services/search-filter.pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
      TableComponent,
      FormComponent,
      SearchFilterPipe
   ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

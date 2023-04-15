import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummeryPipe } from './shared/pipes/summery.pipe';
import { FileSizePipe } from './shared/pipes/file-size.pipe';
import { FilterPipePipe } from './shared/pipes/filter-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { LengthPipe } from './shared/pipes/length.pipe';
import { EmployeePipe } from './employee.pipe';
import { GenderPipe } from './shared/pipes/gender.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SummeryPipe,
    FileSizePipe,
    FilterPipePipe,
    LengthPipe,
    EmployeePipe,
    GenderPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

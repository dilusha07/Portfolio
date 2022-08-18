import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AppModule],
  bootstrap: [AppComponent],
})
export class AppServerModule {}

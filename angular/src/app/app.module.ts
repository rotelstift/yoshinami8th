import { provideHttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  providers: [
    provideHttpClient(),
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule
  ]
})

export class AppModule {}

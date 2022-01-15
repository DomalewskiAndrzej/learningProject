import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { AngularMaterialsModule } from './angular-materials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    CommonModule,
    AngularMaterialsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [DecimalPipe],
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { AngularMaterialsModule } from './angular-materials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SortingPipe } from './pipes/sorting-pipe/sorting.pipe';

@NgModule({
  declarations: [SortingPipe],
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
    SortingPipe,
    FormsModule,
  ],
  providers: [DecimalPipe],
})
export class SharedModule {}

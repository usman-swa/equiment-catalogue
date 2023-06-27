import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentRoutingModule } from './equipment.routing';
import { MatTableModule } from '@angular/material/table';
import { EquipmentDetailsComponent } from './components/equipment-details';
import { AddNewEquipmentComponent } from './components/add-new-equipment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { CoreModule } from '../core/core.module';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [EquipmentDetailsComponent],
  imports: [
    CommonModule,
    MatTableModule,
    EquipmentRoutingModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [EquipmentDetailsComponent],
})
export class EquipmentModule {}


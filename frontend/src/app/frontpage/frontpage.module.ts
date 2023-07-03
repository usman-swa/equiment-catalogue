import { NgModule } from '@angular/core';

import { FrontpageRouting } from './frontpage.routing';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { CoreModule } from '../core/core.module';
import { MatButtonModule } from '@angular/material/button';
import { AddNewEquipmentComponent, ListEquipmentsComponent } from '../equipment';
import { FrontpageComponent } from './components';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports: [FrontpageRouting,
      CoreModule,
      CommonModule,
      MatButtonModule,
      MatTableModule,
      CoreModule,
      FormsModule,
      ReactiveFormsModule,
      MatTableModule,
      MatSortModule,
      MatProgressSpinnerModule,
      MatInputModule,
      MatPaginatorModule,
      MatFormFieldModule,
      MatSelectModule,
      MatIconModule
    ],
    declarations: [FrontpageComponent, ListEquipmentsComponent, AddNewEquipmentComponent],
    exports: [FrontpageComponent, ListEquipmentsComponent, AddNewEquipmentComponent],
})
export class FrontPageModule {}

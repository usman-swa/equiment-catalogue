import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Equipment } from 'src/app/core/models';

@Component({
  selector: 'app-list-equipments',
  templateUrl: './list-equipments.component.html',
  styleUrls: ['./list-equipments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListEquipmentsComponent {
  displayedColumns = [
    'number',
    'status',
    'address',
    'contractStartDate',
    'contractEndDate',
  ];

  @Input()
  dataSource: MatTableDataSource<Equipment> = new MatTableDataSource<Equipment>();
}

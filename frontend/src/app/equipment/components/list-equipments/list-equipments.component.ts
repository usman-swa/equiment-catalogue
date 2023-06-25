import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Equipment } from 'src/app/core/models/equipment';

@Component({
  selector: 'app-list-equipments',
  templateUrl: './list-equipments.component.html',
  styleUrls: ['./list-equipments.component.scss']
})
export class ListEquipmentsComponent {
  @Input() dataSource: MatTableDataSource<Equipment> = new MatTableDataSource<Equipment>();
  displayedColumns: string[] = ['number', 'status', 'address'];
}

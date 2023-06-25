import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Equipment } from 'src/app/core/models/equipment';
import { catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { SearchService } from 'src/app/core/services';

@Component({
  selector: 'app-equipment-details',
  templateUrl: './equipment-details.component.html',
  styleUrls: ['./equipment-details.component.scss']
})
export class EquipmentDetailsComponent implements OnInit {
  displayedColumns: Array<string> = ['number', 'status', 'address'];
  dataSource: MatTableDataSource<Equipment> = new MatTableDataSource<Equipment>();
  equipmentId!: number;

  constructor(private searchService: SearchService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(({ equipmentId }) => {
        this.equipmentId = equipmentId;
        return this.searchService.getByNumber(equipmentId).pipe(
          catchError(error => {
            console.error('Error:', error);
            return of(null as unknown as Equipment);
          })
        );
      })
    ).subscribe(equipment => {
      if (equipment) {
        this.dataSource.data = [equipment];
        console.log(this.dataSource.data);
      } else {
        console.warn('No equipment found!');
      }
    });
  }
}

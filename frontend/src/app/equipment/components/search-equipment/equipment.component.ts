import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Data } from '@angular/router';
import { SearchService } from 'src/app/core/services';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {
  searchNumber: number = 123;
  searchResult: Data | null = null;
  dataSource: MatTableDataSource<Data> = new MatTableDataSource<Data>([]);
  displayedColumns: string[] = ['number', 'status', 'address'];

  constructor(private searchService: SearchService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const equipmentIdParam = this.activatedRoute.snapshot.paramMap.get('equipmentId');
const equipmentId = equipmentIdParam ? parseInt(equipmentIdParam) : 0;

    this.searchService.getByNumber(equipmentId).subscribe(
      (result: Data) => {
        this.searchResult = result;
        this.dataSource.data = [...this.dataSource.data, result];
      },
      (error: any) => console.log('Error:', error)
    );
}
}

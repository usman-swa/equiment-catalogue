import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Data } from '@angular/router';
import { SearchService } from 'src/app/core/services';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent {
  searchNumber: number = 123;
  searchResult: Data | null = null;
  dataSource: MatTableDataSource<Data> = new MatTableDataSource<Data>([]);
  displayedColumns: string[] = ['number', 'status', 'address'];

  constructor(private searchService: SearchService) {}

  onSubmit(): void {
    if (!this.searchNumber) {
      return;
    }
    this.searchService.searchByNumber(this.searchNumber).subscribe(
      (result: Data) => {
        this.searchResult = result;
        this.dataSource.data = [...this.dataSource.data, result];
      },
      (error: any) => console.log('Error:', error)
    );
  }
}


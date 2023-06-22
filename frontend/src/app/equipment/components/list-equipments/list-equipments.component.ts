import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Data } from '@angular/router';
import { SearchService } from 'src/app/core/services';

@Component({
  selector: 'app-list-equipments',
  templateUrl: './list-equipments.component.html',
  styleUrls: ['./list-equipments.component.scss']
})
export class ListEquipmentsComponent {
  searchNumber: number = 5;
  searchResult: Data[] | null = null;
  dataSource: MatTableDataSource<Data> = new MatTableDataSource<Data>();
  displayedColumns: string[] = ['number', 'status', 'address'];

  constructor(private searchService: SearchService) {}

  onSubmit(): void {
    if (!this.searchNumber) {
      return;
    }
    this.searchService.searchByNumber(this.searchNumber).subscribe(
      (result: Data[]) => {
        this.searchResult = result;
        this.dataSource.data = result;
        console.log(this.dataSource.data )
      },
      (error: any) => console.log('Error:', error)
    );
  }
}

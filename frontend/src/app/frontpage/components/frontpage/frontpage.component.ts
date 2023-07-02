import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from 'src/app/core/services';
import { Equipment } from 'src/app/core/models';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss']
})
export class FrontpageComponent {
  searchNumber: number = 5;
  dataSource: MatTableDataSource<Equipment> = new MatTableDataSource<Equipment>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private searchService: SearchService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.searchService.searchByLimit(this.searchNumber).subscribe(
      (result: Equipment[]) => {
        this.dataSource.data = result;
        this.dataSource.paginator = this.paginator;
      },
      (error: any) => console.log('Error:', error)
    );
  }

  onPageChange(event: PageEvent) {
    console.log(event.pageSize)
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;

    this.searchService.searchByLimit(event.pageSize).subscribe(
      (result: Equipment[]) => {
        this.dataSource.data = result.slice(startIndex, endIndex);
      },
      (error: any) => console.log('Error:', error)
    );
  }
}

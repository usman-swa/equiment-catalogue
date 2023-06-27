import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { Equipment } from 'src/app/core/models/equipment';
import { SearchService } from 'src/app/core/services';

@Component({
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss']
})
export class FrontpageComponent {
  searchNumber: number = 5;
  dataSource: MatTableDataSource<Equipment> = new MatTableDataSource<Equipment>();
  constructor(private searchService: SearchService, private router: Router, private activatedRoute: ActivatedRoute) {}

  onSubmit(): void {
    if (!this.searchNumber) {
      return;
    }
    this.searchService.searchByLimit(this.searchNumber).subscribe(
      (result: Equipment[]) => {
        this.dataSource.data = result;
      },
      (error: any) => console.log('Error:', error)
    );
  }

}

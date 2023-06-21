import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SearchService } from '../core/services';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EquipmentComponent {

  searchNumber = 1;
  searchResult: any;

  constructor(private searchService: SearchService) { }

  onSubmit(): void {
    if (!this.searchNumber) {
      return;
    }

    this.searchService.searchByNumber(this.searchNumber).subscribe({
      next: result => {
        this.searchResult = result;
      },
      error: error => {
        console.log('Error:', error);
      }
    });
  }
}

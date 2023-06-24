import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Equipment } from 'src/app/core/models/equipment';
import { SearchService } from 'src/app/core/services';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {
  readonly displayedColumns = ['number', 'status', 'address'];
  dataSource = new MatTableDataSource<Equipment>([]);
  private equipmentId!: number;

  constructor(private equipmentService: SearchService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.equipmentId = parseInt(params['equipmentId'], 10);
      this.loadEquipment(this.equipmentId);
    });
  }

  private loadEquipment(equipmentId: number): void {
    this.equipmentService.getByNumber(equipmentId).subscribe(
      (equipment) => {
        this.dataSource.data = [...equipment];
        console.log(this.dataSource.data);
      },
      (error: any) => console.log('Error:', error)
    );
  }
}

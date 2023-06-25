import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

import { Equipment, Status } from 'src/app/core/models';
import { SearchService } from 'src/app/core/services';

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
  StatusEnumValues = Object.values(Status);
  equipmentForm!: FormGroup;
  isLoading = false;

  @Input()
  dataSource: MatTableDataSource<Equipment> = new MatTableDataSource<Equipment>();

  constructor(
    private formBuilder: FormBuilder,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.createEquipmentForm();
  }

  createEquipmentForm(): void {
    this.equipmentForm = this.formBuilder.group({
      number: [null, Validators.required],
      address: [''],
      contractStartDate: [''],
      contractEndDate: [''],
      status: [Status],
    });
  }

  onSubmit(): void {
    if (this.equipmentForm.invalid) { return; }

    this.isLoading = true;

    const equipmentData: Equipment = this.equipmentForm.value;

    this.searchService
      .addEquipment({
        number: equipmentData.number,
        address: equipmentData.address,
        contractStartDate: equipmentData.contractStartDate,
        contractEndDate: equipmentData.contractEndDate,
        status: equipmentData.status}
      )
      .subscribe(() => {
        this.isLoading = false;
      });
  }

  goBack(): void {
    // TODO: Add code to navigate back to equipment search page
  }
}

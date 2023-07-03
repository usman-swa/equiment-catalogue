import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Equipment, Status } from 'src/app/core/models';
import { SearchService } from 'src/app/core/services';

@Component({
  selector: 'app-add-new-equipment',
  templateUrl: './add-new-equipment.component.html',
  styleUrls: ['./add-new-equipment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddNewEquipmentComponent implements OnInit {
  StatusEnumValues = Object.values(Status);
  equipmentForm!: FormGroup;
  isLoading = false;

  constructor(private formBuilder: FormBuilder, private searchService: SearchService, private router: Router) { }

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
        this.router.navigate(['/'])
      });
  }

  ngOnInit(): void {
    this.createEquipmentForm();
  }

  createEquipmentForm(): void {
    this.equipmentForm = this.formBuilder.group({
      number: [null, Validators.required],
      address: ['', Validators.required],
      contractStartDate: ['', Validators.required],
      contractEndDate: ['', Validators.required],
      status: [Status.Running, Validators.required],
    });
  }
}

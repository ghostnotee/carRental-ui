import { Component, OnInit } from '@angular/core';
import { RentalDetail } from 'src/app/models/rentaldetail';
import { RentalDetailService } from 'src/app/services/rental-detail.service';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.css'],
})
export class RentalDetailComponent implements OnInit {
  rentalDetails: RentalDetail[] = [];

  constructor(private rentalDetailService: RentalDetailService) {}

  ngOnInit(): void {
    this.getRentalDetails();
  }

  getRentalDetails() {
    this.rentalDetailService.getRentalDetails().subscribe((response) => {
      this.rentalDetails = response.data;
    });
  }
}

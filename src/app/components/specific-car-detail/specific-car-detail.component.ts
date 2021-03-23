import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/cardetail';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarDetailService } from 'src/app/services/cardetail.service';

@Component({
  selector: 'app-specific-car-detail',
  templateUrl: './specific-car-detail.component.html',
  styleUrls: ['./specific-car-detail.component.css'],
})
export class SpecificCarDetailComponent implements OnInit {
  specificCarDetail: CarDetail[] = [];
  carImages: CarImage[] = [];

  constructor(
    private carDetailService: CarDetailService,
    private carImageServis: CarImageService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getSpecificCarDetail(params['carId']);
      this.activatedRoute.params.subscribe((params) => {
        this.getCarImagesByCarId(params['carId']);
      });
    });
  }

  getSpecificCarDetail(carId: number) {
    this.carDetailService.getCarDetailById(carId).subscribe((response) => {
      this.specificCarDetail = response.data;
    });
  }

  getCarImagesByCarId(carId: number) {
    this.carImageServis.getCarImagesByCarId(carId).subscribe((response) => {
      this.carImages = response.data;
    });
  }
}

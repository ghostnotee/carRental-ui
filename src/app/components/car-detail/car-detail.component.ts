import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { CarDetail } from 'src/app/models/cardetail';
import { CarImage } from 'src/app/models/carImage';
import { Colour } from 'src/app/models/colour';
import { BrandService } from 'src/app/services/brand.service';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarDetailService } from 'src/app/services/cardetail.service';
import { ColourService } from 'src/app/services/colour.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  carDetails: CarDetail[] = [];
  carImages: CarImage[] = [];
  brands: Brand[] = [];
  currentBrand: Brand;
  currentColour: Colour;
  colours: Colour[] = [];
  brandId: number;
  colourId: number;
  dataLoaded = false;
  filterText = '';

  constructor(
    private carDetailService: CarDetailService,
    private carImageService: CarImageService,
    private brandService: BrandService,
    private colourService: ColourService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarDetailsByBrand(params['brandId']);
      } else if (params['colourId']) {
        this.getCarDetailsByColour(params['colourId']);
      } else {
        this.getCarDetails();
      }
    });
    this.getBrands();
    this.getColours();
  }

  getCarDetails() {
    this.carDetailService.getCarDetails().subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }

  getCarImagesByCarId(carId: number) {
    this.carImageService.getCarImagesByCarId(carId).subscribe((response) => {
      this.carImages = response.data;
    });
  }

  getCarDetailsByBrand(brandId: number) {
    this.carDetailService
      .getCarDetailsByBrand(brandId)
      .subscribe((response) => {
        this.carDetails = response.data;
        this.dataLoaded = true;
      });
  }

  getCarDetailsByColour(colourId: number) {
    this.carDetailService
      .getCarDetailsByColour(colourId)
      .subscribe((response) => {
        this.carDetails = response.data;
        this.dataLoaded = true;
      });
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  getColours() {
    this.colourService.getColours().subscribe((response) => {
      this.colours = response.data;
    });
  }

  customFiltering(brandId: number, colourId: number) {
    this.carDetailService
      .getCarDetailsByBrandAndColourId(brandId, colourId)
      .subscribe((response) => {
        this.carDetails = response.data;
      });
  }
}

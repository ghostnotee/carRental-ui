import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColourResponseModel } from '../models/colourResponseModel';

@Injectable({
  providedIn: 'root',
})
export class ColourService {
  apiUrl = 'https://localhost:5001/api/colours/getall';

  constructor(private httpClient: HttpClient) {}

  getColours(): Observable<ColourResponseModel> {
    return this.httpClient.get<ColourResponseModel>(this.apiUrl);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IntroDataService {
  private introData: any; 

  constructor(private http: HttpClient) {}

  getIntroData(): Observable<any> {
    if (!this.introData) {
      this.introData = this.http.get('assets/data/introData.json');
    }
    return this.introData;
  }
}

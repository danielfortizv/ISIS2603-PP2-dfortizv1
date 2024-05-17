import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Nave } from './nave';

@Injectable({
  providedIn: 'root'
})
export class NaveService {
  private apiUrl = 'https://raw.githubusercontent.com/2603-Uniandes/jsons/main/2024-10%20Star%20Wars/spaceships.json';

  constructor(private http: HttpClient) {}

  getNaves(): Observable<Nave[]> {
    return this.http.get<Nave[]>(this.apiUrl);
  }

}

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Airport } from './airport';

@Injectable({
  providedIn: 'root'
})
export class AirportService {
  private apiUrl:string = environment.baseUrl + 'airports';

  constructor(private http: HttpClient) {}

  // airport-listar
  getAirports(): Observable<Airport[]> {
    return this.http.get<Airport[]>(this.apiUrl);
  }

  // airport-detail
  getAirport(code: number): Observable<Airport> {
    return this.http.get<Airport>(`${this.apiUrl}/${code}`);
  }

  // airport-create
  createAirport(airport: Airport): Observable<Airport> {
    return this.http.post<Airport>(this.apiUrl, airport);
  }

  // airport-update
  updateAirport(airport: Airport): Observable<Airport> {
    return this.http.put<Airport>(`${this.apiUrl}/${airport.code}`, airport);
  }

  // airport-remove
  deleteAirport(code: string): Observable<Airport> {
    return this.http.delete<Airport>(`${this.apiUrl}/${code}`);
  }


}

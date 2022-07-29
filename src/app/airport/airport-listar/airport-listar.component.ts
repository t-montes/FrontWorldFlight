import { Component, OnInit } from '@angular/core';
import { Airport } from '../airport';
import { AirportService } from '../airport.service';

@Component({
  selector: 'app-airport-listar',
  templateUrl: './airport-listar.component.html',
  styleUrls: ['./airport-listar.component.css']
})
export class AirportListarComponent implements OnInit {

  airports: Array<Airport>;

  constructor(private airportService: AirportService) { }

  getAirports(): void {
    this.airportService.getAirports().subscribe(airports => {
      this.airports = airports
    });
  }

  ngOnInit() {
    this.getAirports();
  }

}

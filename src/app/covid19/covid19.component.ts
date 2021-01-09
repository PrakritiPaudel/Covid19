import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { CountryReports } from 'src/countryReports';
import { JavatechieCovid19Service } from '../javatechie-covid19.service';

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.scss'],
})
export class Covid19Component implements OnInit {
  ELEMENT_DATA: CountryReports[];
  displayedColumns: string[] = [
    'country',
    'cases',
    'todayCases',
    'deaths',
    'todayDeaths',
    'recovered',
    'active',
    'critical',
    'casesPerOneMillion',
    'deathsPerOneMillion',
    'tests',
    'testsPerOneMillion',
  ];
  dataSource = new MatTableDataSource<CountryReports>(this.ELEMENT_DATA);

  constructor(private service: JavatechieCovid19Service) {}

  ngOnInit() {
    this.getAllReports();
  }

  public getAllReports() {
    let resp = this.service.covid19Reports();
    resp.subscribe(
      (report) => (this.dataSource.data = report as CountryReports[])
    );
  }
}

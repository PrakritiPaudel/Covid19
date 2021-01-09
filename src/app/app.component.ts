import { Component, OnInit } from '@angular/core';
import { report } from 'process';
import { CountryReports } from 'src/countryReports';
import { MatTableDataSource } from '@angular/material';


import { JavatechieCovid19Service } from './javatechie-covid19.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class Covid19Component implements OnInit{
  
  ELEMENT_DATA : CountryReports[];
  displayedColumns: string[] = ['country',
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
    'testsPerOneMillion']
     dataSource = new MatTableDataSource<CountryReports>(this.ELEMENT_DATA)

  constructor(private service: JavatechieCovid19Service){

  }

  ngOnInit(){
    this.getAllReports();
  }
  
  
  public getAllReports(){
    let resp=this.service.covid19Reports();
    resp.subscribe(report=>this.dataSource.data=report as CountryReports)
  }
}

import { Component, OnInit } from '@angular/core';
import { JavatechieCovid19Service } from '../javatechie-covid19.service';

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.scss']
})
export class Covid19Component implements OnInit {

  constructor(private service: JavatechieCovid19Service) {
    ELEMENT_DATA : .CountryReports[];
    
   }

  ngOnInit(): void {
  }

}

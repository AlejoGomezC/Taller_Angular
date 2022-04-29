import { Component, OnInit } from '@angular/core';
import { dataSeries } from './dataSeries';
import { Serie } from './serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
})
export class SeriesComponent implements OnInit {
  constructor(private serieService: SerieService) {}

  series: Array<Serie> = [];
  averageSeasons: number = 0;

  getSeries() {
    let totalSeasons: number = 0;
    this.serieService.getSeries().subscribe((series) => {
      series.forEach((s) => {
        totalSeasons += s.seasons;
      });

      this.series = series;
      this.averageSeasons = totalSeasons / series.length;
    });
  }

  ngOnInit() {
    this.getSeries();
  }
}

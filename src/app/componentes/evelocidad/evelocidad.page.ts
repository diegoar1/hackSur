import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evelocidad',
  templateUrl: './evelocidad.page.html',
  styleUrls: ['./evelocidad.page.scss'],
})
export class EvelocidadPage implements OnInit {

  constructor() { }

  googleChartLibrary: any;
  
  ngOnInit() {
    this.useVanillaJSLibrary();
  }

  useVanillaJSLibrary() {
    this.googleChartLibrary = (<any>window).google;
    // Load the Visualization API and the corechart package.
    this.googleChartLibrary.charts.load('current', { 'packages': ['corechart'] });

    // Set a callback to run when the Google Visualization API is loaded.
    this.googleChartLibrary.charts.setOnLoadCallback(this.drawChart.bind(this));
  }

  drawChart () {
  var data = new this.googleChartLibrary.visualization.DataTable();
  data.addColumn('string', 'Activity Name');
  data.addColumn('number', 'Hours');
  data.addRows([
    ['hora', 8],
    ['dias', 2],
    ['semanas', 6],
  ]);

  // Instantiate and draw our chart, passing in some options.
  var chart = new this.googleChartLibrary.visualization
    .PieChart(document.getElementById('pie-chart-div'));

  chart.draw(data, {
    'title': 'Velocidad por...',
    'width': 400,
    'height': 300
  });
}

}

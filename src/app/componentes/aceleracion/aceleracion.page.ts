import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aceleracion',
  templateUrl: './aceleracion.page.html',
  styleUrls: ['./aceleracion.page.scss'],
})
export class AceleracionPage implements OnInit {

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
    ['dias', 8],
    ['semanas', 2],
  ]);

  // Instantiate and draw our chart, passing in some options.
  var chart = new this.googleChartLibrary.visualization
    .PieChart(document.getElementById('pie-chart-div'));

  chart.draw(data, {
    'title': 'Aceleracion por...',
    'width': 400,
    'height': 300
  });
}

}

import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ChartService } from '../chart.service';




@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  sonuc: any;
  doluluk: any;
  kafeİsim: any;
  chart: any = []
  constructor(private service: ChartService){
    Chart.register(...registerables)
  }
  ngOnInit(){
    this.service.dolulukcafe().then((son) => {

      this.sonuc = son;
      this.doluluk = this.sonuc.data.coins.map((oran: any) => oran.dolulukKafe);
      this.kafeİsim = this.sonuc.data.coins.map((oran: any) => oran.isim);
      console.log(this.doluluk);
      console.log(this.kafeİsim);

      this.chart = new Chart('canvas', {
        type: 'bar',
        data: {
          labels: this.kafeİsim,
          datasets: [
            {
              data: this.doluluk,
              borderColor: '#3e95cd',
              label: 'Doluluk Oran',
              backgroundColor: 'rgba(93, 175, 89, 0.1)',
              borderWidth: 3,
            },
          ],
        },
      });
    });
  }








}

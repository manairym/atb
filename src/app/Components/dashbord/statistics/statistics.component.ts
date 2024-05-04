import { Component } from '@angular/core';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { EChartsOption } from 'echarts';
import {AtbService} from "../../../Services/atb.service";

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [NgxEchartsDirective],
  providers: [provideEcharts()],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css',
})
export class StatisticsComponent {
  // Data for charts
  dataCircle : any[] =[];
  dataCandlesHorizontale = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  dataCandles = [120, 200, 150, 80, 70, 110, 130];

  // Charts Configurations

  option2: EChartsOption = {
    xAxis: {
      type: 'category',
      data: this.dataCandlesHorizontale,
    },
    yAxis: {
      type: 'value',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#283b56',
        },
      },
    },
    toolbox: {
      show: true,
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {},
      },
    },
    series: [
      {
        data: this.dataCandles,
        type: 'bar',
      },
    ],
  };

  constructor(private atbService : AtbService) {
    this.atbService.getAll().subscribe((res) => {
      console.log(this.formatData(res));
      this.dataCircle = this.formatData(res);
      this.option ={

        tooltip: {
          trigger: 'item',
        },
        legend: {
          top: '5%',
            left: 'center',
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            padAngle: 5,
            itemStyle: {
              borderRadius: 10,
            },
            label: {
              show: false,
              position: 'center',
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 40,
                fontWeight: 'bold',
              },
            },
            labelLine: {
              show: false,
            },
            data: this.dataCircle,
          },
        ],
      };

    });
  }

  formatData(data: any): any[] {
    return Object.entries(data).map(([value, name]) => ({
      value: parseInt(value),
      name: name
    }));
  }


  option: EChartsOption = {};

}

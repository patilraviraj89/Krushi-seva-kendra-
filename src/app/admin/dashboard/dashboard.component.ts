import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public chartOptions: any;
  public chartSeries: any;
  public totalAdmins:any;
  public totalCrops:any;
  public totalFarmers:any;
  public totalTowns:any;
  totalrecommendations:any;
  recommendations:any

  r:any;
  rCount: any;

  constructor(private api:ApiService) {
  }
  ngOnInit(): void {
    this.api.get("api/recommendations").subscribe((result:any)=>{
      console.log(result);      
         let dates = new Array();
         let counts = new Array();
        for(let i = 0; i < result.length; i++){
          dates.push(result[i].rdate);
          counts.push(result[i].count);
        }
        // this.chartOptions.series[0].data = counts;
        // this.chartOptions.xaxis.categories = dates;
        this.chartOptions = {
          series: [
            {
              name: "Likes",
              data: counts
            }
          ],
          chart: {
            height: 350,
            type: "line"
          },
          stroke: {
            width: 7,
            curve: "smooth"
          },
          xaxis: {
            type: "datetime",
            categories: dates
          },
          title: {
            text: "Social Media",
            align: "left",
            style: {
              fontSize: "16px",
              color: "#666"
            }
          },
          fill: {
            type: "gradient",
            gradient: {
              shade: "dark",
              gradientToColors: ["#FDD835"],
              shadeIntensity: 1,
              type: "horizontal",
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100, 100, 100]
            }
          },
          markers: {
            size: 4,
            colors: ["#FFA41B"],
            strokeColors: "#fff",
            strokeWidth: 2,
            hover: {
              size: 7
            }
          },
          yaxis: {
            min: -10,
            max: 40,
            title: {
              text: "Engagement"
            }
          }
        };
     })
  }
}

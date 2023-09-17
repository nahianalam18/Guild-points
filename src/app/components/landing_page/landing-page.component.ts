import { LandingePageService } from './landinge-page.services';
import { Component, OnInit } from '@angular/core';
import { GPPointsTableData } from 'src/app/model/gp_points_table_data';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  tableData : GPPointsTableData[] = [];
  displayedColumns: string[] = ['name', 'actualGps', 'mazeAps', 'oldGps'];

  constructor(private service: LandingePageService) {}

  async ngOnInit() {
    this.tableData = await this.service.getTableData();
  }
}
